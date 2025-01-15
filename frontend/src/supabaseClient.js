import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vsyhbattuvdhhuqueaji.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzeWhiYXR0dXZkaGh1cXVlYWppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY4ODYwMDUsImV4cCI6MjA1MjQ2MjAwNX0.-w6ximsms2qNrX5HbZwnCtrUbT3EU_5L-Abie6Xb5ZU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);