/*
  # Create CV Submissions Table

  1. New Tables
    - `cv_submissions`
      - `id` (uuid, primary key)
      - `file_name` (text) - Original filename of the CV
      - `file_path` (text) - Storage path in Supabase
      - `file_size` (bigint) - File size in bytes
      - `mime_type` (text) - MIME type of the file
      - `uploaded_at` (timestamptz) - Upload timestamp
      - `email` (text, nullable) - Applicant email if provided
      - `phone` (text, nullable) - Applicant phone if provided
      - `notes` (text, nullable) - Additional notes

  2. Security
    - Enable RLS on `cv_submissions` table
    - Add policy for inserting CVs (public access for job seekers)
    - Add policy for reading CVs (restricted to authenticated users only)
*/

CREATE TABLE IF NOT EXISTS cv_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  file_name text NOT NULL,
  file_path text NOT NULL,
  file_size bigint NOT NULL,
  mime_type text NOT NULL,
  uploaded_at timestamptz DEFAULT now(),
  email text,
  phone text,
  notes text
);

ALTER TABLE cv_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit CVs"
  ON cv_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view CVs"
  ON cv_submissions
  FOR SELECT
  TO authenticated
  USING (true);
