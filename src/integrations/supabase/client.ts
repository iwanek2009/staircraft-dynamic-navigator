// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://clvmsiewyzcdegauqotk.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsdm1zaWV3eXpjZGVnYXVxb3RrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUxNTQ2MTUsImV4cCI6MjA1MDczMDYxNX0.ZacC8DTJZqIBoC46Bex5BSNqnL08EfM7NBcgks03LPM";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);