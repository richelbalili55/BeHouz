import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import api from '../../api/api';

interface CounterState {
  value: number;
  loading: boolean;
  error: string | null;
  apiData?: any; // Replace with your real type later
}

const initialState: CounterState = {
  value: 0,
  loading: false,
  error: null,
};

// Example API call using Axios inside Redux (best practice)
export const fetchExampleData = createAsyncThunk(
  'counter/fetchExampleData',
  async () => {
    const response = await api.get('/example-endpoint'); // change to your real endpoint
    return response.data;
  }
);

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
    reset: (state) => { state.value = 0; },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExampleData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchExampleData.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.apiData = action.payload;
      })
      .addCase(fetchExampleData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;