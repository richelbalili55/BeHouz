import bcrypt from 'bcrypt';
import { supabase } from '../../config/supabase';
import { log } from 'node:console';


export const loginUser = async (email: string, password: string) => {
  const { data: user, error } = await supabase
    .from('users')
    .select('*')
    .eq('email', email)
    .single();
  if (!user) {
    throw new Error('User not found');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Invalid password');
  }

  return user;
};


export const registerUser = async (data: any) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);

  const { data: user, error } = await supabase
    .from('users')
    .insert([
      {
        name: data.name,
        email: data.email,
        password: hashedPassword,
        role: data.role || 'tenant',
      },
    ])
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return user;
};