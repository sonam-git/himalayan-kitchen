import { NextResponse } from 'next/server';
import { sendEmail, isEmailServiceConfigured } from '@/app/lib/emailService';
import { 
  validateContactForm, 
  checkRateLimit, 
  sanitize 
} from '@/app/lib/emailSecurity';

export async function POST(req: Request) {
  try {
    // Check if any email service is configured
    const emailServiceStatus = isEmailServiceConfigured();
    if (!emailServiceStatus.configured) {
      console.error('No email service is configured (SMTP or SendGrid)');
      return NextResponse.json({ error: 'Email service is not configured. Please contact the administrator.' }, { status: 500 });
    }
    
    if (!process.env.RESTAURANT_EMAIL) {
      console.error('RESTAURANT_EMAIL is not configured');
      return NextResponse.json({ error: 'Email service is not configured. Please contact the administrator.' }, { status: 500 });
    }
    
    // Get IP for rate limiting (3 requests per minute)
    const forwarded = req.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : 'unknown';
    
    if (!checkRateLimit(ip, 3, 60000)) {
      return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
    }
    
    const { name, email, message, website } = await req.json();
    
    // Comprehensive validation (spam, phishing, disposable email, etc.)
    const validation = await validateContactForm({ name, email, message, website });
    if (!validation.valid) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }
    
    // Sanitize input
    const safeName = sanitize(name);
    const safeEmail = sanitize(email);
    const safeMessage = sanitize(message);

    const emailConfig = {
      to: process.env.RESTAURANT_EMAIL!,
      from: process.env.RESTAURANT_EMAIL!,
      fromName: `${safeName} via Himalayan Kitchen`,
      subject: `Contact Form from ${safeName}`,
      replyTo: safeEmail,
      replyToName: safeName,
      text: `Name: ${safeName}\nEmail: ${safeEmail}\nMessage: ${safeMessage}`,
      html: `<p><strong>Name:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p><p><strong>Message:</strong><br/>${safeMessage}</p>`
    };

    // Send email using the email service (SMTP primary, SendGrid fallback)
    const result = await sendEmail(emailConfig);
    
    if (result.success) {
      console.log(`Contact form email sent successfully via ${result.method}`);
      return NextResponse.json({ success: true });
    } else {
      console.error('Failed to send contact email:', result.error);
      return NextResponse.json({ 
        error: 'Due to some technical issue your message couldn\'t be delivered through this interface. Please send us an email to himalayankitchenmarin@gmail.com or give us a call during opening hours. Thank you!' 
      }, { status: 500 });
    }
  } catch (error) {
    console.error('Contact form error:', error);
    
    return NextResponse.json({ 
      error: 'Due to some technical issue your message couldn\'t be delivered through this interface. Please send us an email to himalayankitchenmarin@gmail.com or give us a call during opening hours. Thank you!' 
    }, { status: 500 });
  }
}
