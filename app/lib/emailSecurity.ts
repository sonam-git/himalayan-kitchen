/**
 * Email Security & Anti-Spam/Phishing Utilities
 * These checks are applied BEFORE any email is sent via SMTP or SendGrid
 */

import { promises as dns } from 'dns';

// ==========================================
// DISPOSABLE EMAIL DETECTION
// ==========================================

// Extensive list of disposable/temporary email domains to block
export const disposableEmailDomains = [
  // Common disposable email services
  'tempmail.com', 'throwaway.email', '10minutemail.com', 'guerrillamail.com',
  'mailinator.com', 'maildrop.cc', 'temp-mail.org', 'fakeinbox.com',
  'yopmail.com', 'trashmail.com', 'getnada.com', 'emailondeck.com',
  'sharklasers.com', 'spam4.me', 'dispostable.com', 'mintemail.com',
  'mytemp.email', 'mohmal.com', 'tempinbox.com', 'throwawaymail.com',
  // Additional disposable domains
  'guerrillamailblock.com', 'pokemail.net', 'tempail.com', 'tempr.email',
  'discard.email', 'discardmail.com', 'spamgourmet.com', 'mailnesia.com',
  'bugmenot.com', 'notmailinator.com', 'mailcatch.com', 'incognitomail.org',
  'anonymbox.com', 'spamobox.com', 'kurzepost.de', 'objectmail.com',
  'proxymail.eu', 'rcpt.at', 'trash-mail.at', 'trashmail.net',
  'wegwerfmail.de', 'wegwerfmail.net', 'wegwerfmail.org', '0-mail.com',
  'disposemail.com', 'sogetthis.com', 'mailexpire.com', 'tempinbox.co.uk',
  'fakemailgenerator.com', 'emailtemporario.com.br', 'crazymailing.com',
  'tempmailaddress.com', 'burnermail.io', 'guerrillamail.info', 'spam.la',
  'spamfree24.org', 'spamfree24.de', 'spamfree24.eu', 'spamfree.eu',
  'spamherelots.com', 'superrito.com', 'spamavert.com', 'spamcero.com'
];

// Check if email domain is disposable
export function isDisposableEmail(email: string): boolean {
  const domain = email.toLowerCase().split('@')[1];
  if (!domain) return true; // Invalid email
  return disposableEmailDomains.some(disposableDomain => 
    domain === disposableDomain || domain.endsWith('.' + disposableDomain)
  );
}

// ==========================================
// SPAM/PHISHING CONTENT DETECTION
// ==========================================

// Suspicious keywords commonly found in spam/phishing
const spamKeywords = [
  // Financial scams
  'bitcoin', 'cryptocurrency', 'crypto wallet', 'wire transfer', 'western union',
  'money gram', 'bank transfer', 'investment opportunity', 'guaranteed returns',
  'double your money', 'get rich quick', 'millionaire', 'lottery winner',
  'inheritance', 'beneficiary', 'unclaimed funds', 'nigerian prince',
  
  // Phishing attempts
  'click here immediately', 'urgent action required', 'account suspended',
  'verify your account', 'confirm your identity', 'password reset',
  'social security', 'credit card number', 'bank account details',
  
  // Common spam phrases
  'act now', 'limited time offer', 'free money', 'no obligation',
  'risk free', 'winner selected', 'you have been selected', 'congratulations you won',
  
  // Suspicious URLs/links patterns
  'bit.ly/', 'tinyurl.com/', 'goo.gl/', 't.co/',
  
  // Adult/inappropriate content
  'viagra', 'cialis', 'pharmacy', 'pills online',
  
  // Malware/hacking
  'download now', 'install software', 'remote access', 'hack'
];

// Suspicious patterns (regex)
const suspiciousPatterns = [
  /\b\d{16}\b/,                          // Credit card numbers
  /\b\d{3}-\d{2}-\d{4}\b/,               // SSN format
  /https?:\/\/[^\s]+\.(ru|cn|tk|ml|ga|cf)\b/i,  // Suspicious TLDs
  /\b(password|passwd|pwd)\s*[:=]/i,     // Password sharing attempts
  /\bACCOUNT\s*(NUMBER|#|NO)/i,          // Account number requests
  /<script\b/i,                          // Script injection attempts
  /javascript:/i,                         // JavaScript injection
  /on\w+\s*=/i,                          // Event handler injection (onclick=, etc.)
  /data:text\/html/i,                    // Data URI injection
];

// Check content for spam/phishing indicators
export function detectSpamContent(content: string): { isSpam: boolean; reason?: string } {
  const lowerContent = content.toLowerCase();
  
  // Check for spam keywords
  for (const keyword of spamKeywords) {
    if (lowerContent.includes(keyword.toLowerCase())) {
      return { isSpam: true, reason: `Suspicious content detected` };
    }
  }
  
  // Check for suspicious patterns
  for (const pattern of suspiciousPatterns) {
    if (pattern.test(content)) {
      return { isSpam: true, reason: `Suspicious pattern detected` };
    }
  }
  
  // Check for excessive URLs (more than 3 URLs is suspicious)
  const urlCount = (content.match(/https?:\/\//gi) || []).length;
  if (urlCount > 3) {
    return { isSpam: true, reason: `Too many URLs in message` };
  }
  
  // Check for excessive capital letters (shouting = spam indicator)
  const upperCount = (content.match(/[A-Z]/g) || []).length;
  const letterCount = (content.match(/[a-zA-Z]/g) || []).length;
  if (letterCount > 20 && upperCount / letterCount > 0.7) {
    return { isSpam: true, reason: `Excessive use of capital letters` };
  }
  
  return { isSpam: false };
}

// ==========================================
// EMAIL VALIDATION
// ==========================================

// Check if email domain has valid MX records
export async function hasValidMXRecords(email: string): Promise<{ valid: boolean; error?: string }> {
  try {
    const domain = email.toLowerCase().split('@')[1];
    if (!domain) return { valid: false, error: 'Invalid email format.' };
    
    // Skip MX check for common trusted providers
    const trustedDomains = [
      'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 
      'icloud.com', 'aol.com', 'protonmail.com', 'live.com',
      'msn.com', 'me.com', 'mac.com', 'comcast.net', 'att.net',
      'verizon.net', 'sbcglobal.net', 'bellsouth.net'
    ];
    
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
    if (error && typeof error === 'object' && 'code' in error) {
      const dnsError = error as { code: string };
      if (dnsError.code === 'ENOTFOUND' || dnsError.code === 'ENODATA') {
        return { valid: false, error: 'Email domain does not exist or has no mail servers.' };
      }
    }
    console.warn('DNS MX check warning:', error);
    return { valid: true }; // Allow through to avoid false positives
  }
}

// Comprehensive email validation
export async function validateEmail(email: string): Promise<{ valid: boolean; error?: string }> {
  // Basic format check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { valid: false, error: 'Invalid email format.' };
  }
  
  // Check for disposable email
  if (isDisposableEmail(email)) {
    return { valid: false, error: 'Disposable email addresses are not allowed. Please use a permanent email.' };
  }
  
  const [localPart, domain] = email.split('@');
  
  // Check local part length
  if (localPart.length < 1 || localPart.length > 64) {
    return { valid: false, error: 'Invalid email format.' };
  }
  
  // Check for suspicious local part patterns
  if (/^(test|spam|fake|temp|trash|junk|null|void|asdf|qwerty)\d*$/i.test(localPart)) {
    return { valid: false, error: 'Please use a valid email address.' };
  }
  
  // Check domain validity
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

// ==========================================
// INPUT SANITIZATION
// ==========================================

// Sanitize input to prevent XSS and injection attacks
export function sanitizeInput(input: string): string {
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;")
    .trim();
}

// Basic sanitization (less aggressive, for display)
export function sanitize(input: string): string {
  return input.replace(/</g, "&lt;").replace(/>/g, "&gt;").trim();
}

// ==========================================
// NAME VALIDATION
// ==========================================

// Validate name for suspicious patterns
export function validateName(name: string): { valid: boolean; error?: string } {
  const trimmedName = name.trim();
  
  // Check length
  if (trimmedName.length < 2 || trimmedName.length > 100) {
    return { valid: false, error: 'Name must be between 2 and 100 characters.' };
  }
  
  // Check for URLs in name (spam indicator)
  if (/https?:\/\//i.test(trimmedName)) {
    return { valid: false, error: 'Invalid name format.' };
  }
  
  // Check for email in name (spam indicator)
  if (/@/.test(trimmedName)) {
    return { valid: false, error: 'Please enter your name, not email.' };
  }
  
  // Check for excessive numbers (fake names often have many numbers)
  const numberCount = (trimmedName.match(/\d/g) || []).length;
  if (numberCount > 3) {
    return { valid: false, error: 'Invalid name format.' };
  }
  
  // Check for suspicious characters
  if (/[<>{}[\]\\|]/.test(trimmedName)) {
    return { valid: false, error: 'Name contains invalid characters.' };
  }
  
  return { valid: true };
}

// ==========================================
// RATE LIMITING
// ==========================================

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export function checkRateLimit(
  identifier: string, 
  maxRequests: number = 3, 
  windowMs: number = 60000
): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(identifier, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  if (record.count >= maxRequests) {
    return false;
  }
  
  record.count++;
  return true;
}

// ==========================================
// COMPREHENSIVE FORM VALIDATION
// ==========================================

export interface FormValidationResult {
  valid: boolean;
  error?: string;
}

export async function validateContactForm(data: {
  name: string;
  email: string;
  message: string;
  website?: string; // Honeypot
}): Promise<FormValidationResult> {
  // Honeypot check
  if (data.website && data.website.trim() !== '') {
    return { valid: false, error: 'Spam detected.' };
  }
  
  // Validate name
  const nameValidation = validateName(data.name);
  if (!nameValidation.valid) {
    return nameValidation;
  }
  
  // Validate email
  const emailValidation = await validateEmail(data.email);
  if (!emailValidation.valid) {
    return emailValidation;
  }
  
  // Validate message
  if (!data.message || data.message.trim().length < 5) {
    return { valid: false, error: 'Message must be at least 5 characters.' };
  }
  
  if (data.message.trim().length > 2000) {
    return { valid: false, error: 'Message is too long (max 2000 characters).' };
  }
  
  // Check message for spam content
  const spamCheck = detectSpamContent(data.message);
  if (spamCheck.isSpam) {
    return { valid: false, error: spamCheck.reason || 'Message flagged as potential spam.' };
  }
  
  // Also check name for spam
  const nameSpamCheck = detectSpamContent(data.name);
  if (nameSpamCheck.isSpam) {
    return { valid: false, error: 'Invalid name.' };
  }
  
  return { valid: true };
}

export async function validateCateringForm(data: {
  fullName: string;
  email: string;
  phone: string;
  datetime: string;
  numPeople: string;
  order: string;
  dietary?: string;
  details?: string;
  website?: string; // Honeypot
}): Promise<FormValidationResult> {
  // Honeypot check
  if (data.website && data.website.trim() !== '') {
    return { valid: false, error: 'Spam detected.' };
  }
  
  // Validate name
  const nameValidation = validateName(data.fullName);
  if (!nameValidation.valid) {
    return nameValidation;
  }
  
  // Validate email
  const emailValidation = await validateEmail(data.email);
  if (!emailValidation.valid) {
    return emailValidation;
  }
  
  // Validate phone (basic check)
  const phoneDigits = data.phone.replace(/\D/g, '');
  if (phoneDigits.length < 10 || phoneDigits.length > 15) {
    return { valid: false, error: 'Please enter a valid phone number.' };
  }
  
  // Validate order details
  if (!data.order || data.order.trim().length < 5) {
    return { valid: false, error: 'Order details must be at least 5 characters.' };
  }
  
  if (data.order.trim().length > 1000) {
    return { valid: false, error: 'Order details is too long (max 1000 characters).' };
  }
  
  // Check order for spam content
  const orderSpamCheck = detectSpamContent(data.order);
  if (orderSpamCheck.isSpam) {
    return { valid: false, error: 'Order details flagged as potential spam.' };
  }
  
  // Check optional fields for spam
  if (data.details) {
    const detailsSpamCheck = detectSpamContent(data.details);
    if (detailsSpamCheck.isSpam) {
      return { valid: false, error: 'Additional details flagged as potential spam.' };
    }
  }
  
  return { valid: true };
}
