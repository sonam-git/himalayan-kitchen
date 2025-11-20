import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

function sanitize(input: string) {
  return input.replace(/</g, "&lt;").replace(/>/g, "&gt;").trim();
}

export async function POST(req: Request) {
  try {
    const { fullName, email, phone, datetime, time, numPeople, deliveryType, address, order, dietary, details, honey } = await req.json();
    // Honeypot field for spam bots
    if (honey) {
      return NextResponse.json({ error: 'Spam detected.' }, { status: 400 });
    }
    // Basic validation
    if (!fullName || !email || !phone || !datetime || !time || !numPeople || !order) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email.' }, { status: 400 });
    }
    // Sanitize input
    const safe = (val: string) => sanitize(val || "");
    const msg = {
      to: process.env.RESTAURANT_EMAIL!,
      from: process.env.RESTAURANT_EMAIL!,
      subject: `Catering Request from ${safe(fullName)}`,
      replyTo: safe(email),
      text:
        `Name: ${safe(fullName)}\nEmail: ${safe(email)}\nPhone: ${safe(phone)}\nDate: ${safe(datetime)}\nTime: ${safe(time)}\nPeople: ${safe(numPeople)}\nDelivery: ${safe(deliveryType)}\nAddress: ${safe(address)}\nOrder: ${safe(order)}\nDietary: ${safe(dietary)}\nDetails: ${safe(details)}`,
      html:
        `<p><strong>Name:</strong> ${safe(fullName)}</p><p><strong>Email:</strong> ${safe(email)}</p><p><strong>Phone:</strong> ${safe(phone)}</p><p><strong>Date:</strong> ${safe(datetime)}</p><p><strong>Time:</strong> ${safe(time)}</p><p><strong>People:</strong> ${safe(numPeople)}</p><p><strong>Delivery:</strong> ${safe(deliveryType)}</p><p><strong>Address:</strong> ${safe(address)}</p><p><strong>Order:</strong> ${safe(order)}</p><p><strong>Dietary:</strong> ${safe(dietary)}</p><p><strong>Details:</strong> ${safe(details)}</p>`
    };

    await sgMail.send(msg);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Unable to process request.' }, { status: 500 });
  }
}
