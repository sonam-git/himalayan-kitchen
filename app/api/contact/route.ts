import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

function sanitize(input: string) {
  return input.replace(/</g, "&lt;").replace(/>/g, "&gt;").trim();
}

export async function POST(req: Request) {
  try {
    const { name, email, message, honey } = await req.json();
    // Honeypot field for spam bots
    if (honey) {
      return NextResponse.json({ error: 'Spam detected.' }, { status: 400 });
    }
    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email.' }, { status: 400 });
    }
    // Sanitize input
    const safeName = sanitize(name);
    const safeEmail = sanitize(email);
    const safeMessage = sanitize(message);

    const msg = {
      to: process.env.RESTAURANT_EMAIL!,
      from: process.env.RESTAURANT_EMAIL!,
      subject: `Contact Form Submission from ${safeName}`,
      replyTo: safeEmail,
      text: `Name: ${safeName}\nEmail: ${safeEmail}\nMessage: ${safeMessage}`,
      html: `<p><strong>Name:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p><p><strong>Message:</strong><br/>${safeMessage}</p>`
    };

    await sgMail.send(msg);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Unable to process request.' }, { status: 500 });
  }
}
