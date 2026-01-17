# Quick Start Guide

Get your Career Portal website running in 5 minutes!

## Prerequisites

- Node.js 16+ installed
- A Supabase account (free tier is fine)

## Installation Steps

### 1. Install Dependencies (1 minute)

```bash
npm install
```

### 2. Set Up Supabase (3 minutes)

Follow these steps:

1. **Create Supabase Project**
   - Go to [supabase.com](https://supabase.com) and create a new project
   - Wait for it to initialize (~2 minutes)

2. **Get Your Credentials**
   - Go to Project Settings > API
   - Copy your Project URL and anon key

3. **Update Environment Variables**
   - Edit `.env.local` in your project root
   - Paste your credentials:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
   ```

4. **Create Storage Bucket**
   - In Supabase, go to Storage
   - Create a new bucket named `cvs` (keep it private)

### 3. Run the Website (1 minute)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) - Your website is live!

## What You Get

A beautiful, production-ready job portal with:

- **Bilingual Support**: Switch between English and Georgian
- **CV Upload**: Drag-and-drop or click to upload
- **Modern Design**: Based on your brand colors (coral/terracotta #CD7F6C)
- **Responsive**: Works perfectly on mobile, tablet, and desktop
- **Secure**: Supabase handles all data storage and security

## Test the Upload

1. Click the language switcher (top right) to test Georgian/English
2. Click "Upload your CV" button
3. Select a PDF, DOC, or DOCX file (max 5MB)
4. Check Supabase dashboard to see the uploaded file

## Need Help?

See detailed documentation in:
- `SETUP_SUPABASE.md` - Complete Supabase setup guide
- `README.md` - Full project documentation

## Customize Your Website

### Change Colors
Edit the color values in components:
- `#E8E6E3` - Background (light gray)
- `#CD7F6C` - Primary brand color (coral)
- `#4A4A4A` - Text color (dark gray)

### Update Translations
Edit `lib/language-context.tsx` to modify text in both languages

### Change Contact Info
Edit `components/footer.tsx` to update email, phone, address

## Deploy to Production

```bash
npm run build
npm start
```

Or deploy to:
- **Vercel**: `vercel deploy` (recommended for Next.js)
- **Netlify**: Already configured with `netlify.toml`
- **Any Node.js hosting**: Use the `.next` folder

## Features Overview

### Navigation Bar
- Logo (your puzzle-piece "H" logo)
- Language switcher (GEO/EN)
- Fixed header that stays visible on scroll

### Hero Section
- Large heading: "Are you looking for a job?"
- Prominent "Upload your CV" button
- Smooth animations and hover effects
- Puzzle-piece design element
- "Find out about us first" section that scrolls to footer

### Footer
- Company information
- Contact details
- Social media links
- Copyright notice

## What's Next?

1. **Add Admin Panel**: Create an authenticated page to view uploaded CVs
2. **Email Notifications**: Get notified when someone uploads a CV
3. **Advanced Filtering**: Add fields for job preferences, experience, etc.
4. **Job Listings**: Add a page showing available positions
5. **Application Tracking**: Track the status of each application

## Support

If you encounter any issues:
1. Check that Supabase credentials are correct in `.env.local`
2. Verify the `cvs` storage bucket exists
3. Ensure the `cv_submissions` table was created
4. Check browser console for error messages

Happy recruiting!
