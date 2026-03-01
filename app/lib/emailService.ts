import nodemailer from 'nodemailer';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid (fallback)
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

// Email configuration interface
interface EmailConfig {
  to: string;
  from: string;
  fromName?: string; // Display name for the sender
  subject: string;
  replyTo?: string;
  replyToName?: string; // Display name for reply-to
  text: string;
  html: string;
}

// Create Nodemailer transporter for SMTP
function createSMTPTransporter() {
  // Check if SMTP is configured
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return null;
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

// Send email via SMTP (Nodemailer) - Primary
async function sendViaSMTP(config: EmailConfig): Promise<{ success: boolean; error?: string }> {
  const transporter = createSMTPTransporter();
  
  if (!transporter) {
    return { success: false, error: 'SMTP not configured' };
  }

  try {
    // Format "from" with display name if provided
    const fromAddress = config.fromName 
      ? `"${config.fromName}" <${config.from}>`
      : config.from;
    
    // Format "replyTo" with display name if provided
    const replyToAddress = config.replyTo 
      ? (config.replyToName 
          ? `"${config.replyToName}" <${config.replyTo}>`
          : config.replyTo)
      : undefined;

    await transporter.sendMail({
      from: fromAddress,
      to: config.to,
      subject: config.subject,
      replyTo: replyToAddress,
      text: config.text,
      html: config.html,
    });
    
    console.log('Email sent successfully via SMTP (Nodemailer)');
    return { success: true };
  } catch (error) {
    console.error('SMTP send failed:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'SMTP send failed' 
    };
  }
}

// Send email via SendGrid - Fallback
async function sendViaSendGrid(config: EmailConfig): Promise<{ success: boolean; error?: string }> {
  if (!process.env.SENDGRID_API_KEY) {
    return { success: false, error: 'SendGrid not configured' };
  }

  try {
    // Format addresses with display names for SendGrid
    const fromAddress = config.fromName 
      ? { email: config.from, name: config.fromName }
      : config.from;
    
    const replyToAddress = config.replyTo 
      ? (config.replyToName 
          ? { email: config.replyTo, name: config.replyToName }
          : config.replyTo)
      : undefined;

    await sgMail.send({
      to: config.to,
      from: fromAddress,
      subject: config.subject,
      replyTo: replyToAddress,
      text: config.text,
      html: config.html,
    });
    
    console.log('Email sent successfully via SendGrid');
    return { success: true };
  } catch (error) {
    console.error('SendGrid send failed:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'SendGrid send failed' 
    };
  }
}

// Main email sending function with fallback
// Priority: SMTP (Nodemailer) -> SendGrid
export async function sendEmail(config: EmailConfig): Promise<{ success: boolean; method?: string; error?: string }> {
  // Try SMTP (Nodemailer) first - Primary
  console.log('Attempting to send email via SMTP (Nodemailer)...');
  const smtpResult = await sendViaSMTP(config);
  
  if (smtpResult.success) {
    return { success: true, method: 'SMTP' };
  }
  
  console.log(`SMTP failed: ${smtpResult.error}. Trying SendGrid fallback...`);
  
  // Try SendGrid as fallback
  const sendGridResult = await sendViaSendGrid(config);
  
  if (sendGridResult.success) {
    return { success: true, method: 'SendGrid' };
  }
  
  console.error('All email methods failed');
  return { 
    success: false, 
    error: `All email methods failed. SMTP: ${smtpResult.error}. SendGrid: ${sendGridResult.error}` 
  };
}

// Check if email service is configured
export function isEmailServiceConfigured(): { configured: boolean; methods: string[] } {
  const methods: string[] = [];
  
  // Check SMTP
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    methods.push('SMTP');
  }
  
  // Check SendGrid
  if (process.env.SENDGRID_API_KEY) {
    methods.push('SendGrid');
  }
  
  return {
    configured: methods.length > 0,
    methods
  };
}
