import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import { promises as dns } from 'dns';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

function sanitize(input: string) {
  return input.replace(/</g, "&lt;").replace(/>/g, "&gt;").trim();
}

// Common disposable/temporary email domains to block
const disposableEmailDomains = [
  'tempmail.com', 'throwaway.email', '10minutemail.com', 'guerrillamail.com',
  'mailinator.com', 'maildrop.cc', 'temp-mail.org', 'fakeinbox.com',
  'yopmail.com', 'trashmail.com', 'getnada.com', 'emailondeck.com',
  'sharklasers.com', 'spam4.me', 'dispostable.com', 'mintemail.com',
  'mytemp.email', 'mohmal.com', 'tempinbox.com', 'throwawaymail.com'
];

// Check if email domain is disposable
function isDisposableEmail(email: string): boolean {
  const domain = email.toLowerCase().split('@')[1];
  return disposableEmailDomains.some(disposableDomain => 
    domain === disposableDomain || domain.endsWith('.' + disposableDomain)
  );
}

// Check if email domain has valid MX records (mail servers)
async function hasValidMXRecords(email: string): Promise<{ valid: boolean; error?: string }> {
  try {
    const domain = email.toLowerCase().split('@')[1];
    
    // Skip MX check for common providers (optimization for known valid domains)
    const trustedDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com', 'aol.com', 'protonmail.com'];
    if (trustedDomains.includes(domain)) {
      return { valid: true };
    }
    
    // Check for MX records
    const mxRecords = await dns.resolveMx(domain);
    
    if (!mxRecords || mxRecords.length === 0) {
      return { valid: false, error: 'Email domain has no mail servers configured.' };
    }
    
    return { valid: true };
  } catch (error: unknown) {
    // DNS lookup failed - domain doesn't exist or has DNS issues
    if (error && typeof error === 'object' && 'code' in error) {
      const dnsError = error as { code: string };
      if (dnsError.code === 'ENOTFOUND' || dnsError.code === 'ENODATA') {
        return { valid: false, error: 'Email domain does not exist or has no mail servers.' };
      }
    }
    
    // For other DNS errors, we'll allow it through to avoid false positives
    console.warn('DNS MX check warning:', error);
    return { valid: true };
  }
}

// Validate email format and legitimacy
async function isValidEmail(email: string): Promise<{ valid: boolean; error?: string }> {
  // Basic format check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { valid: false, error: 'Invalid email format.' };
  }
  
  // Check for disposable email
  if (isDisposableEmail(email)) {
    return { valid: false, error: 'Disposable email addresses are not allowed.' };
  }
  
  // Additional checks
  const [localPart, domain] = email.split('@');
  
  // Check if local part is too short or too long
  if (localPart.length < 1 || localPart.length > 64) {
    return { valid: false, error: 'Invalid email format.' };
  }
  
  // Check if domain has at least one dot and valid TLD
  const domainParts = domain.split('.');
  if (domainParts.length < 2 || domainParts[domainParts.length - 1].length < 2) {
    return { valid: false, error: 'Invalid email domain.' };
  }
  
  // Check DNS MX records
  const mxValidation = await hasValidMXRecords(email);
  if (!mxValidation.valid) {
    return mxValidation;
  }
  
  return { valid: true };
}

// Simple in-memory rate limiter (resets on server restart)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3; // 3 requests per minute per IP

function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(identifier, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }
  
  if (record.count >= MAX_REQUESTS) {
    return false;
  }
  
  record.count++;
  return true;
}

export async function POST(req: Request) {
  try {
    // Check if environment variables are set
    if (!process.env.SENDGRID_API_KEY) {
      console.error('SENDGRID_API_KEY is not configured');
      return NextResponse.json({ error: 'Email service is not configured. Please contact the administrator.' }, { status: 500 });
    }
    
    if (!process.env.RESTAURANT_EMAIL) {
      console.error('RESTAURANT_EMAIL is not configured');
      return NextResponse.json({ error: 'Email service is not configured. Please contact the administrator.' }, { status: 500 });
    }
    
    // Get IP for rate limiting
    const forwarded = req.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : 'unknown';
    
    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
    }
    
    const { name, email, message, website } = await req.json();
    
    // Honeypot check - if website field is filled, it's a bot
    if (website && website.trim() !== '') {
      return NextResponse.json({ error: 'Spam detected.' }, { status: 400 });
    }
    
    // Basic validation - check required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }
    
    // Validate field lengths and content
    if (name.trim().length === 0 || name.trim().length > 100) {
      return NextResponse.json({ error: 'Name must be between 1 and 100 characters.' }, { status: 400 });
    }
    
    if (email.trim().length === 0 || email.trim().length > 100) {
      return NextResponse.json({ error: 'Email must be between 1 and 100 characters.' }, { status: 400 });
    }
    
    if (message.trim().length < 5 || message.trim().length > 500) {
      return NextResponse.json({ error: 'Message must be between 5 and 500 characters.' }, { status: 400 });
    }
    
    // Advanced email validation (format, domain, disposable check, MX records)
    const emailValidation = await isValidEmail(email);
    if (!emailValidation.valid) {
      return NextResponse.json({ error: emailValidation.error }, { status: 400 });
    }
    
    // Sanitize input
    const safeName = sanitize(name);
    const safeEmail = sanitize(email);
    const safeMessage = sanitize(message);

    const msg = {
      to: process.env.RESTAURANT_EMAIL!,
      from: process.env.RESTAURANT_EMAIL!,
      subject: `Contact Form from ${safeName}`,
      replyTo: safeEmail,
      text: `Name: ${safeName}\nEmail: ${safeEmail}\nMessage: ${safeMessage}`,
      html: `<p><strong>Name:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p><p><strong>Message:</strong><br/>${safeMessage}</p>`
    };

    await sgMail.send(msg);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    
    // Provide more specific error messages
    if (error && typeof error === 'object' && 'code' in error) {
      const sgError = error as { code?: number; message?: string };
      if (sgError.code === 401 || sgError.code === 403) {
        return NextResponse.json({ error: 'Email service authentication failed. Please contact the administrator.' }, { status: 500 });
      }
    }
    
    return NextResponse.json({ error: 'Unable to send message. Please try again later or contact us directly.' }, { status: 500 });
  }
}
