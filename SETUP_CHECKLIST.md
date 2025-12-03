  # Email Form Setup Checklist

Use this checklist to ensure your email forms are properly configured.

## ✅ Setup Checklist

### 1. SendGrid Account Setup
- [ ] Created a SendGrid account at https://sendgrid.com/
- [ ] Verified email address through SendGrid's verification link
- [ ] Logged into 
### 2. Sender Verification
- [ ] Navigated to Settings > Sender Authentication
- [ ] Clicked "Verify a Single Sender"
- [ ] Filled out the sender details form
- [ ] Clicked verification link in email
- [ ] Confirmed sender is verified (shows "Verified" status)

### 3. API Key Creation
- [ ] Navigated to Settings > API Keys
- [ ] Created a new API key with "Mail Send" permissions
- [ ] Copied the API key (starts with "SG.")
- [ ] Stored the API key securely

### 4. Environment Configuration
- [ ] Created `.env.local` file in project root
- [ ] Added `SENDGRID_API_KEY=<your-api-key>`
- [ ] Added `RESTAURANT_EMAIL=himalayankitchenmarin@gmail.com`
- [ ] Saved the file
- [ ] Confirmed `.env.local` is in `.gitignore`

### 5. Testing
- [ ] Restarted development server (`npm run dev`)
- [ ] Filled out Contact form and submitted
- [ ] Received email at restaurant email address
- [ ] Filled out Catering form and submitted
- [ ] Received catering email at restaurant email address
- [ ] Checked spam/junk folder if emails not received

### 6. Production Deployment
- [ ] Added environment variables to hosting platform
- [ ] Deployed the application
- [ ] Tested forms in production environment
- [ ] Confirmed emails are being received

## 🔍 Quick Verification Commands

Check if `.env.local` exists:
```bash
ls -la .env.local
```

Verify environment variables are loaded (in development):
```bash
# Start dev server and check console output
npm run dev
```

## 📧 Expected Email Format

### Contact Form Email
- **To**: Your restaurant email
- **From**: Your restaurant email (verified sender)
- **Reply-To**: Customer's email
- **Subject**: "Contact Form Submission from [Name]"
- **Content**: Name, Email, Message

### Catering Form Email
- **To**: Your restaurant email
- **From**: Your restaurant email (verified sender)
- **Reply-To**: Customer's email
- **Subject**: "Catering Request from [Name]"
- **Content**: All catering details (name, email, phone, date/time, guests, delivery type, address, order, dietary restrictions, additional details)

## ⚠️ Common Issues

| Issue | Solution |
|-------|----------|
| "Unable to process request" | Restart dev server, verify `.env.local` exists and has correct values |
| Not receiving emails | Check spam folder, verify sender email in SendGrid |
| "Invalid email" error | Check email format, ensure no extra spaces |
| API key not working | Verify the key has "Mail Send" permissions in SendGrid |
| 401 Unauthorized error | API key is incorrect or expired, create a new one |

## 🎯 Success Criteria

You'll know everything is working when:
1. ✅ Contact form shows "Thank you for contacting us!" message
2. ✅ Catering form shows "Thank you! Your catering request has been sent." message
3. ✅ You receive formatted emails at your restaurant email address
4. ✅ Reply-to is set to the customer's email (you can reply directly)
5. ✅ No errors in browser console or server logs

## 📞 Need Help?

1. Review [EMAIL_SETUP.md](./EMAIL_SETUP.md) for detailed instructions
2. Check SendGrid Activity Feed for email delivery logs
3. Review browser console for client-side errors
4. Check server terminal for API errors
5. Verify all environment variables are set correctly

---

**Last Updated**: December 3, 2025
