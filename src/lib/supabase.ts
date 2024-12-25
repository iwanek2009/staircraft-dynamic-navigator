import { createClient } from '@supabase/supabase-js';

// These values are automatically injected by Lovable when connected to Supabase
const supabaseUrl = 'https://clvmsiewyzcdegauqotk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsdm1zaWV3eXpjZGVnYXVxb3RrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA4NTI4MDAsImV4cCI6MjAyNjQyODgwMH0.vHxjqtTOXt8TXNnEDjhkpOdUHZQl9GaQhm37f4dD_ZY';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);