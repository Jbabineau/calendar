import { createClient } from '@supabase/supabase-js';

export const supabase = createClient('https://hnukrbmgxkeptnkotxah.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhudWtyYm1neGtlcHRua290eGFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg1MDYzNjMsImV4cCI6MTk5NDA4MjM2M30.4tuisq0UYh3Xh9OWiF3Aqxgih9aD94YpU00WvUHMoNE')