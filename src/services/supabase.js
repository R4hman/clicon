import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://sifhpqcktkkbhizmlqgf.supabase.co";
export const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpZmhwcWNrdGtrYmhpem1scWdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMzNDc3NTQsImV4cCI6MjAxODkyMzc1NH0.8sEDI8SHGmuPppdqY5ej7Rt4U6kE6bR1DtYNZtpLyiM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
