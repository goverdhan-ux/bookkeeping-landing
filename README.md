# Rishabh Bookkeeping Landing Page

A professional, minimalistic landing page for bookkeeping services.

## Getting Started

```bash
npm install
npm run dev
```

## Making the Contact Form Work

### Option 1: Formspree (Easiest)
1. Go to [formspree.io](https://formspree.io) and sign up
2. Create a new form
3. Copy your form ID (e.g., `f/xxxxxx`)
4. Open `src/app/page.tsx` and replace `YOUR_FORM_ID` with your form ID:
   ```javascript
   const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
   ```

### Option 2: Google Sheets
You can also connect to Google Sheets using a service like SheetDB or by creating a simple Google Apps Script.

### Option 3: Email Notifications
Set up email notifications in Formspree to receive submissions directly to your email.

## Customization

Edit `src/app/page.tsx` to:
- Update company name
- Modify services
- Change contact details
- Update pricing

## Tech Stack

- Next.js 14
- Tailwind CSS
- TypeScript
- Formspree (for form handling)
