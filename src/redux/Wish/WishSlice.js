import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const wishSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addWish: (state, action) => {
      const exist = state.items.find(item => item.id === action.payload.id);
      if (!exist) {
        state.items.push(action.payload);
      }
    },
    deleteWish: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearWishlist: (state) => {
      state.items = [];
    },
  },
})

export const { addWish, deleteWish, clearWishlist } = wishSlice.actions;

export default wishSlice.reducer;
