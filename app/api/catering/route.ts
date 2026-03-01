import { NextResponse } from 'next/server';
import { sendEmail, isEmailServiceConfigured } from '@/app/lib/emailService';
import { 
  validateCateringForm, 
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
    
    // Get IP for rate limiting (2 requests per minute - more restrictive for catering)
    const forwarded = req.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : 'unknown';
    
    if (!checkRateLimit(`catering-${ip}`, 2, 60000)) {
      return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
    }
    
    const { fullName, email, phone, datetime, numPeople, deliveryType, address, order, dietary, details, website } = await req.json();
    
    // Comprehensive validation (spam, phishing, disposable email, etc.)
    const validation = await validateCateringForm({ 
      fullName, email, phone, datetime, numPeople, order, dietary, details, website 
    });
    if (!validation.valid) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }
    
    // Sanitize input
    const safe = (val: string) => sanitize(val || "");
    const safeFullName = safe(fullName);
    
    const emailConfig = {
      to: process.env.RESTAURANT_EMAIL!,
      from: process.env.RESTAURANT_EMAIL!,
      fromName: `${safeFullName} via Himalayan Kitchen`,
      subject: `Catering Request from ${safeFullName}`,
      replyTo: safe(email),
      replyToName: safeFullName,
      text:
        `Name: ${safeFullName}\nEmail: ${safe(email)}\nPhone: ${safe(phone)}\nDate & Time: ${safe(datetime)}\nNumber of Guests: ${safe(numPeople)}\nDelivery Type: ${safe(deliveryType)}\nAddress: ${safe(address)}\nOrder: ${safe(order)}\nDietary Restrictions: ${safe(dietary)}\nDetails: ${safe(details)}`,
      html:
        `<h2>New Catering Request</h2>
        <p><strong>Name:</strong> ${safeFullName}</p>
        <p><strong>Email:</strong> ${safe(email)}</p>
        <p><strong>Phone:</strong> ${safe(phone)}</p>
        <p><strong>Date & Time:</strong> ${safe(datetime)}</p>
        <p><strong>Number of Guests:</strong> ${safe(numPeople)}</p>
        <p><strong>Delivery Type:</strong> ${safe(deliveryType)}</p>
        ${safe(address) ? `<p><strong>Delivery Address:</strong> ${safe(address)}</p>` : ''}
        <p><strong>Order:</strong><br/>${safe(order)}</p>
        ${safe(dietary) ? `<p><strong>Dietary Restrictions:</strong><br/>${safe(dietary)}</p>` : ''}
        ${safe(details) ? `<p><strong>Additional Details:</strong><br/>${safe(details)}</p>` : ''}`
    };

    // Send email using the email service (SMTP primary, SendGrid fallback)
    const result = await sendEmail(emailConfig);
    
    if (result.success) {
      console.log(`Catering form email sent successfully via ${result.method}`);
      return NextResponse.json({ success: true });
    } else {
      console.error('Failed to send catering email:', result.error);
      return NextResponse.json({ 
        error: 'Due to some technical issue your message couldn\'t be delivered through this interface. Please send us an email to himalayankitchenmarin@gmail.com or give us a call during opening hours. Thank you!' 
      }, { status: 500 });
    }
  } catch (error) {
    console.error('Catering form error:', error);
    
    return NextResponse.json({ 
      error: 'Due to some technical issue your message couldn\'t be delivered through this interface. Please send us an email to himalayankitchenmarin@gmail.com or give us a call during opening hours. Thank you!' 
    }, { status: 500 });
  }
}
