# Himalayan Kitchen Website

A modern, responsive website for Himalayan Kitchen restaurant in San Rafael, CA. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, accessible UI/UX design
- 🌓 Dark mode support
- 📱 Fully responsive (mobile, tablet, desktop)
- 📧 Contact and Catering forms with email integration
- 🖼️ Interactive image gallery
- 🍽️ Menu display with categories
- ⭐ Customer reviews section
- 🏆 Awards and media section
- ♿ WCAG accessibility compliance

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn
- A SendGrid account (for email forms)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd himalayan-kitchen
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` with your actual values.

4. **Configure Email Forms** (Important!):
   - Follow the complete guide in [EMAIL_SETUP.md](./EMAIL_SETUP.md)
   - You'll need to set up SendGrid and configure your API key
   - This is required for the Contact and Catering forms to work

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Email Form Setup

The Contact and Catering forms use SendGrid to send emails. **You must configure SendGrid for these forms to work.**

📖 **See [EMAIL_SETUP.md](./EMAIL_SETUP.md) for detailed setup instructions.**

Quick setup:
1. Create a free SendGrid account
2. Verify your sender email
3. Create an API key
4. Add credentials to `.env.local`

## Project Structure

```
himalayan-kitchen/
├── app/
│   ├── api/              # API routes for form submissions
│   │   ├── contact/
│   │   └── catering/
│   ├── components/       # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── MenuSection.tsx
│   │   ├── Gallery.tsx
│   │   ├── Contact.tsx
│   │   ├── Caterings.tsx
│   │   ├── Reviews.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   ├── lib/             # Utility functions
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── public/
│   └── images/          # Static images
├── .env.example         # Environment variables template
└── EMAIL_SETUP.md       # Email configuration guide
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Environment Variables

Required environment variables (see `.env.example`):

- `SENDGRID_API_KEY` - Your SendGrid API key
- `RESTAURANT_EMAIL` - Email address to receive form submissions

## Technologies Used

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Email**: SendGrid
- **Icons**: React Icons
- **Deployment**: Vercel-ready

## Key Components

### Contact Form
Located in `app/components/Contact.tsx`. Allows customers to send messages directly to the restaurant email.

### Catering Form
Located in `app/components/Caterings.tsx`. Comprehensive form for catering requests with date/time selection, guest count, delivery options, and more.

### Gallery
Interactive image gallery with modal zoom functionality and keyboard navigation.

### Menu Section
Dynamic menu display with categories, search, and item details.

## Accessibility

This website follows WCAG 2.1 Level AA guidelines:
- Semantic HTML
- ARIA labels and roles
- Keyboard navigation
- Focus indicators
- Screen reader support
- Sufficient color contrast

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

Works with any Node.js hosting platform. Make sure to:
- Set environment variables
- Run `npm run build`
- Start with `npm run start`

## Support

For issues or questions:
- Check [EMAIL_SETUP.md](./EMAIL_SETUP.md) for email configuration
- Review console and server logs for errors
- Ensure all environment variables are set

## License

All rights reserved © Himalayan Kitchen, San Rafael, CA

---

Built with ❤️ for authentic Himalayan cuisine
