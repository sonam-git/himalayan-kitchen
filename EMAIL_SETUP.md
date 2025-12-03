# Email Form Setup Guide

This guide will help you set up email delivery for the Contact and Catering forms using SendGrid.

## Prerequisites

- A SendGrid account (free tier available)
- Access to your restaurant email address

## Step-by-Step Setup

### 1. Create a SendGrid Account

1. Go to [SendGrid](https://sendgrid.com/) and sign up for a free account
2. Complete the email verification process
3. Log in to your SendGrid dashboard

### 2. Verify Your Sender Email

SendGrid requires you to verify the email address you'll be sending from:

1. In SendGrid dashboard, go to **Settings** > **Sender Authentication**
2. Click **Verify a Single Sender**
3. Fill in the form with your restaurant details:
   - **From Name**: Himalayan Kitchen
   - **From Email Address**: himalayankitchenmarin@gmail.com (or your preferred email)
   - Fill in other required fields
4. Click **Create**
5. Check your email inbox and click the verification link
6. Wait for verification to complete (may take a few minutes)

### 3. Create an API Key

1. In SendGrid dashboard, go to **Settings** > **API Keys**
2. Click **Create API Key**
3. Give it a name (e.g., "Himalayan Kitchen Website")
4. Select **Full Access** or at minimum **Mail Send** permissions
5. Click **Create & View**
6. **IMPORTANT**: Copy the API key immediately (you won't be able to see it again!)
7. Keep this key secure and private

### 4. Configure Environment Variables

1. In your project root, create a file named `.env.local` (if it doesn't exist)
2. Add the following variables:

```env
SENDGRID_API_KEY=your_actual_api_key_here
RESTAURANT_EMAIL=himalayankitchenmarin@gmail.com
```

3. Replace `your_actual_api_key_here` with the API key you copied from SendGrid
4. Replace the email address if you're using a different one
5. Save the file

**IMPORTANT**: Never commit `.env.local` to version control! It's already in `.gitignore`.

### 5. Test the Forms

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to your website's Contact section
3. Fill out the form and submit
4. You should receive an email at your configured RESTAURANT_EMAIL address
5. Repeat for the Catering form

### 6. Troubleshooting

#### "Unable to process request" Error

- Check that your `.env.local` file exists and has the correct values
- Restart your development server after creating/updating `.env.local`
- Verify your SendGrid API key is correct
- Check SendGrid dashboard for any error logs

#### Not Receiving Emails

- Verify that your sender email is verified in SendGrid
- Check your spam/junk folder
- Make sure `RESTAURANT_EMAIL` matches your verified sender email
- Check SendGrid's Activity Feed for delivery status

#### "Invalid email" Error

- Ensure the email format is correct
- Check that there are no extra spaces

#### SendGrid Free Tier Limits

- 100 emails per day
- Should be sufficient for most small businesses
- Upgrade if you need more

### 7. Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add the same environment variables in your hosting platform's settings:
   - `SENDGRID_API_KEY`
   - `RESTAURANT_EMAIL`

2. For Vercel:
   - Go to your project settings
   - Navigate to **Environment Variables**
   - Add both variables
   - Redeploy your site

3. For Netlify:
   - Go to **Site settings** > **Environment variables**
   - Add both variables
   - Trigger a new deploy

## Security Notes

- Never expose your SendGrid API key in client-side code
- Keep `.env.local` in `.gitignore`
- Use environment variables for all sensitive data
- The forms include basic spam protection (honeypot fields)
- Input is sanitized before sending to prevent XSS attacks

## Form Features

### Contact Form
- Name, Email, and Message fields
- Sends to your restaurant email
- User's email is set as reply-to for easy responses

### Catering Form
- Comprehensive catering request details
- Date/time picker
- Delivery type selection (Pickup/Delivery)
- Conditional address field for deliveries
- Order details, dietary restrictions, and additional notes

## Additional Resources

- [SendGrid Documentation](https://docs.sendgrid.com/)
- [SendGrid API Keys](https://app.sendgrid.com/settings/api_keys)
- [Sender Authentication](https://docs.sendgrid.com/ui/account-and-settings/how-to-set-up-domain-authentication)

## Support

If you encounter issues:
1. Check the browser console for errors
2. Check your server logs (terminal where `npm run dev` is running)
3. Review SendGrid's Activity Feed for email delivery status
4. Ensure all environment variables are set correctly
