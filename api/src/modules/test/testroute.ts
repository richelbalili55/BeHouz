import { testSupabaseConnection } from '../../config/supabase';

import { Router } from 'express';

const testroutes = Router();

testroutes.get('/supabase', async (req, res) => {
  try {
    const isConnected = await testSupabaseConnection();

    if (isConnected) {
      return res.status(200).json({
        status: 'ok',
        message: 'Supabase connection successful',
      });
    }

    return res.status(500).json({
      status: 'error',
      message: 'Supabase connection failed',
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'Unexpected error',
      error,
    });
  }
});


export default testroutes;