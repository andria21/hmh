# Career Portal - Job Seeker Website

A modern, bilingual (English/Georgian) job-seeking platform where candidates can upload their CVs and learn about the recruitment agency.

## Features

- Bilingual support (English & Georgian)
- CV upload functionality with drag-and-drop
- Modern, responsive design matching brand colors
- Smooth scrolling and animations
- Supabase backend for CV storage and management

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Supabase

1. Create a Supabase project at [supabase.com](https://supabase.com)

2. Create a storage bucket named `cvs`:
   - Go to Storage in your Supabase dashboard
   - Click "Create a new bucket"
   - Name it `cvs`
   - Make it private (only authenticated users can access)

3. Get your Supabase credentials:
   - Go to Project Settings > API
   - Copy the Project URL and anon/public key

4. Update `.env.local` with your credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Database Migration

The database table `cv_submissions` has already been created via migration. It includes:
- File metadata storage
- Row Level Security (RLS) policies
- Public upload access
- Restricted viewing (authenticated users only)

### 4. Run the Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the website.

### 5. Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── api/upload-cv/      # CV upload API endpoint
│   ├── layout.tsx          # Root layout with language provider
│   └── page.tsx            # Main page
├── components/
│   ├── navbar.tsx          # Navigation with language switcher
│   ├── hero-section.tsx    # Hero section with CV upload
│   └── footer.tsx          # Footer with company info
├── lib/
│   ├── language-context.tsx # Language context and translations
│   └── supabase.ts         # Supabase client configuration
└── public/
    ├── saitistvis-02.png   # Logo
    └── hero.jpg            # Hero background reference
```

## Language Support

The website supports Georgian and English. Toggle between languages using the button in the top right corner.

Translations are managed in `lib/language-context.tsx`.

## Design

The design uses colors from the provided hero image:
- Background: #E8E6E3 (light gray)
- Primary: #CD7F6C (coral/terracotta)
- Text: #4A4A4A (dark gray)
- White: #FFFFFF

## CV Upload

Accepted file formats:
- PDF (.pdf)
- Word Document (.doc, .docx)

Maximum file size: 5MB

Uploaded CVs are stored in Supabase Storage and metadata is saved to the database for tracking.

## Security

- Row Level Security (RLS) enabled on all database tables
- Public can upload CVs (anonymous access)
- Only authenticated users can view CV records
- File size and type validation
- Secure storage with Supabase

## License

© 2024 Career Portal. All rights reserved.
