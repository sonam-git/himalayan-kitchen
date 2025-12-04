# Quick Testing Guide - DNS MX Validation

## Test the Implementation

### 1. Start Development Server
```bash
npm run dev
```

### 2. Test Valid Emails

#### Gmail (Trusted Domain - Fast)
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@gmail.com",
    "message": "This is a test message"
  }'
```
**Expected:** ✅ Success (200) - Instant response (~3-8ms)

#### Yahoo (Trusted Domain)
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Smith",
    "email": "jane@yahoo.com",
    "message": "Testing yahoo email"
  }'
```
**Expected:** ✅ Success (200) - Instant response

### 3. Test Invalid Emails

#### Non-Existent Domain
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@fakdomain12345xyz.com",
    "message": "This should fail"
  }'
```
**Expected:** ❌ Error (400) - "Email domain does not exist or has no mail servers."

#### Common Typo
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@gmial.com",
    "message": "Typo in gmail"
  }'
```
**Expected:** ❌ Error (400) - Domain doesn't exist

#### Disposable Email (Caught Before DNS Check)
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Spammer",
    "email": "spam@tempmail.com",
    "message": "Spam attempt"
  }'
```
**Expected:** ❌ Error (400) - "Disposable email addresses are not allowed."

### 4. Test Honeypot

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Bot",
    "email": "bot@example.com",
    "message": "Bot message",
    "website": "http://spam.com"
  }'
```
**Expected:** ❌ Error (400) - "Spam detected."

### 5. Test Rate Limiting

Run this command 4 times quickly:
```bash
for i in {1..4}; do
  curl -X POST http://localhost:3000/api/contact \
    -H "Content-Type: application/json" \
    -d "{\"name\":\"Test $i\",\"email\":\"test$i@gmail.com\",\"message\":\"Message $i\"}"
  echo "\nRequest $i"
done
```
**Expected:** 
- First 3 requests: ✅ Success (200)
- 4th request: ❌ Error (429) - "Too many requests. Please try again later."

### 6. Test Catering Form (Custom Domain)

```bash
curl -X POST http://localhost:3000/api/catering \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "John Caterer",
    "email": "john@mycustomdomain.com",
    "phone": "415-555-1234",
    "datetime": "2024-12-20T18:00",
    "numPeople": "50",
    "deliveryType": "Delivery",
    "address": "123 Main St",
    "order": "Momos and Dal Bhat for 50 people"
  }'
```
**Expected:** 
- If domain exists with MX records: ✅ Success (200) - Slower (~25-55ms)
- If domain doesn't exist: ❌ Error (400)

## Browser Testing

### 1. Open Contact Form
```
http://localhost:3000/#contact
```

### 2. Try These Test Cases:

**Valid Email:**
- Name: John Doe
- Email: john@gmail.com
- Message: Testing valid email
- **Expected:** ✅ Success message

**Invalid Domain:**
- Name: Test User
- Email: test@fakdomain123.com
- Message: Testing invalid domain
- **Expected:** ❌ Error: "Email domain does not exist or has no mail servers."

**Disposable Email:**
- Name: Spammer
- Email: spam@tempmail.com
- Message: Testing disposable email
- **Expected:** ❌ Error: "Disposable email addresses are not allowed."

**Typo in Domain:**
- Name: Typo Test
- Email: test@gmial.com
- Message: Testing typo
- **Expected:** ❌ Error: Domain doesn't exist

## Monitoring Performance

### Check Response Times

Add timing to your tests:
```bash
time curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@gmail.com","message":"Timing test"}'
```

### Expected Times:
- **Trusted domains (gmail, yahoo, etc.):** < 100ms total
- **Custom domains:** 100-300ms total (includes DNS lookup)
- **Server processing:** 3-55ms (depending on domain type)

## Check Server Logs

Watch for DNS warnings:
```bash
npm run dev
```

Look for:
```
DNS MX check warning: [error details]
```
These are normal for transient DNS issues - the email is allowed through gracefully.

## Success Criteria

✅ **All security checks working:**
- Honeypot catches bots
- Disposable emails blocked
- Invalid domains rejected
- Typo domains rejected
- Valid emails accepted

✅ **Performance acceptable:**
- Trusted domains: < 10ms processing
- Custom domains: < 60ms processing
- Total user experience: < 1 second

✅ **No false positives:**
- All valid emails accepted
- DNS errors handled gracefully

## Troubleshooting

### DNS Lookup Slow?
- Check your internet connection
- Check DNS server response time
- Consider adding MX cache if processing many custom domains

### False Positives?
- Check server logs for DNS warnings
- Verify domain actually has MX records: `dig MX example.com`
- Code gracefully allows through on most DNS errors

### Rate Limit Too Strict?
- Adjust `MAX_REQUESTS` in route files
- Current: 3/min (contact), 2/min (catering)

## Production Testing

Before deploying:
1. ✅ Test all scenarios above
2. ✅ Verify no console errors
3. ✅ Check performance with DevTools Network tab
4. ✅ Test from different browsers
5. ✅ Test on mobile devices
6. ✅ Verify email delivery via SendGrid

## Next Steps

After successful testing:
1. Deploy to production
2. Monitor server logs for DNS warnings
3. Track form submission success rates
4. Consider adding MX cache if high traffic
5. Update disposable domain list periodically
