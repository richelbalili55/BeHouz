import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false,
  },
});

// Connection Test
export async function testSupabaseConnection() {
  try {
    const { data, error } = await supabase
      .from('users') 
      .select('*')
      .limit(1);

    if (error) {
      console.error('Supabase connection failed:', error.message);
      return false;
    }

    console.log('Supabase connected successfully');
    return true;
  } catch (err) {
    console.error('Unexpected error:', err);
    return false;
  }
}