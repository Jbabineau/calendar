import { createClient } from '@supabase/supabase-js';

export const supabase = createClient('https://ulnxfscflgflfuorundn.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVsbnhmc2NmbGdmbGZ1b3J1bmRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgyNDc3ODMsImV4cCI6MTk5MzgyMzc4M30.LvpJgY6Z9_o7XIssat8xCOGnXy9hfQaZ1etXIwqv5kw')