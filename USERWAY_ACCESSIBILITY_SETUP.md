# UserWay Web Accessibility Setup Guide

## Overview
UserWay is now integrated into your Himalayan Kitchen website to improve accessibility for all users, including those with disabilities.

## Setup Steps

### 1. Get Your UserWay Account ID

**Option A: Free Plan**
1. Visit [https://userway.org/](https://userway.org/)
2. Click "Get Started Free" or "Sign Up"
3. Create a free account
4. After signing up, you'll receive your Account ID

**Option B: Paid Plans** (for advanced features)
1. Visit [https://userway.org/pricing](https://userway.org/pricing)
2. Choose a plan that fits your needs
3. Complete the signup process
4. Get your Account ID from the dashboard

### 2. Update Your Account ID

1. Open `/app/layout.tsx`
2. Find the line: `s.setAttribute("data-account", "YOUR_ACCOUNT_ID");`
3. Replace `YOUR_ACCOUNT_ID` with your actual UserWay Account ID
4. Save the file

Example:
```javascript
s.setAttribute("data-account", "AbCd1234EfGh");
```

### 3. Verify Installation

After updating your Account ID:

1. Run your development server: `npm run dev`
2. Open your website in a browser
3. Look for the UserWay accessibility icon (usually appears in the bottom-right corner)
4. Click the icon to test the accessibility features

## Features Included

UserWay provides various accessibility features:

- **Screen Reader Support** - Enhanced compatibility with screen readers
- **Keyboard Navigation** - Improved keyboard-only navigation
- **Text Size Adjustment** - Users can increase/decrease text size
- **Color Contrast** - Multiple color contrast options
- **Cursor & Focus** - Enhanced cursor visibility
- **Dyslexia Support** - Dyslexia-friendly fonts
- **Content Highlighting** - Highlight links, headings, etc.
- **Tooltips** - Readable tooltips for buttons and links
- **Image Descriptions** - Auto-generated alt text (premium feature)
- **Translation** - Multi-language support (premium feature)

## Customization Options

### Widget Position
You can customize the widget position by adding configuration:

```javascript
<script>
  window.interdeal = {
    "sitekey": "YOUR_ACCOUNT_ID",
    "Position": "Right", // Options: "Right", "Left"
    "Menulang": "EN", // Default language
    "domains": {
      "js": "https://cdn.userway.org/",
      "acc": "https://acc.userway.org/"
    }
  };
</script>
```

### Widget Color
Match your brand colors:
```javascript
window.interdeal = {
  "sitekey": "YOUR_ACCOUNT_ID",
  "color": "#f59e0b", // Your brand color (yellow/orange)
};
```

## Testing Checklist

After installation, test these accessibility features:

- [ ] Widget icon appears on all pages
- [ ] Screen reader mode works correctly
- [ ] Keyboard navigation is functional
- [ ] Text size adjustment works
- [ ] Color contrast options work
- [ ] All interactive elements are accessible
- [ ] Forms are properly labeled
- [ ] Images have alt text

## WCAG Compliance

UserWay helps achieve:
- WCAG 2.1 Level AA compliance
- ADA compliance
- Section 508 compliance

## Support & Resources

- **UserWay Documentation**: [https://userway.org/docs](https://userway.org/docs)
- **Support**: support@userway.org
- **Dashboard**: [https://manage.userway.org/](https://manage.userway.org/)

## Additional Accessibility Best Practices

While UserWay provides excellent tools, also ensure:

1. **Semantic HTML** - Use proper heading hierarchy (h1, h2, h3)
2. **Alt Text** - All images should have descriptive alt attributes
3. **Form Labels** - All form inputs should have associated labels
4. **Color Contrast** - Maintain sufficient color contrast ratios
5. **Focus Indicators** - Ensure visible focus states for interactive elements
6. **Keyboard Navigation** - All functionality accessible via keyboard
7. **ARIA Labels** - Use ARIA attributes where appropriate

## Cost

- **Free Plan**: Basic features, suitable for small websites
- **Pro Plan**: ~$49/month - Advanced features and priority support
- **Enterprise**: Custom pricing for large organizations

## Next Steps

1. Sign up for UserWay account
2. Get your Account ID
3. Update `layout.tsx` with your Account ID
4. Test all accessibility features
5. Monitor the UserWay dashboard for accessibility insights
6. Continuously improve based on feedback

## Notes

- The widget is now loaded asynchronously to avoid blocking page load
- It's positioned in the `<head>` for optimal loading
- Compatible with your existing dark mode implementation
- Works seamlessly with Next.js 14+ and React

---

**Important**: Remember to replace `YOUR_ACCOUNT_ID` in the code with your actual UserWay Account ID to activate the widget.
