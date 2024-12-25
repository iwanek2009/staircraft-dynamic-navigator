import { createClient } from '@supabase/supabase-js';

// These values are automatically injected by Lovable when connected to Supabase
const supabaseUrl = 'https://clvmsiewyzcdegauqotk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsdm1zaWV3eXpjZGVnYXVxb3RrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUxNTQ2MTUsImV4cCI6MjA1MDczMDYxNX0.ZacC8DTJZqIBoC46Bex5BSNqnL08EfM7NBcgks03LPM';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false  // Disable persistent session for anonymous login
  }
});