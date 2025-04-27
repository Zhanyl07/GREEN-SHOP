import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// URL для получения данных с API
const API_URL = 'https://67eb766aaa794fb3222a5495.mockapi.io/greenshop';

// Асинхронный запрос к API для получения списка товаров
export const fetchPlants = createAsyncThunk('plants/fetchPlants', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

const plantsSlice = createSlice({
  name: 'plants',
  initialState: {
    plants: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlants.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPlants.fulfilled, (state, action) => {
        state.loading = false;
        state.plants = action.payload;
      })
      .addCase(fetchPlants.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default plantsSlice.reducer;
