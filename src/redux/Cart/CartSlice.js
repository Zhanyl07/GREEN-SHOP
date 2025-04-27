import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("cartItems");
    if (data) {
      const parsedData = JSON.parse(data);
      return Array.isArray(parsedData) ? parsedData : [];
    }
    return [];
  } catch (error) {
    console.error("Error loading cart items from localStorage", error);
    return [];
  }
};

const saveToLocalStorage = (data) => {
  try {
    if (Array.isArray(data)) {
      localStorage.setItem("cartItems", JSON.stringify(data));
    } else {
      console.error("Data is not an array");
    }
  } catch (error) {
    console.error("Error saving cart items to localStorage", error);
  }
};

const cartSlice = createSlice({
  name: "carts",
  initialState: {
    ali: loadFromLocalStorage(),
  },
  reducers: {
    addCart: (state, action) => {
      const existingProductIndex = state.ali.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingProductIndex !== -1) {
        state.ali[existingProductIndex].quantity += 1;
      } else {
        state.ali.push({ ...action.payload, isLiked: false, quantity: 1 });
      }
      saveToLocalStorage(state.ali);
    },

    removeCart: (state, action) => {
      state.ali = state.ali.filter((item) => item.id !== action.payload);
      saveToLocalStorage(state.ali);
    },

    toggleLike: (state, action) => {
      state.ali = state.ali.map((item) =>
        item.id === action.payload ? { ...item, isLiked: !item.isLiked } : item
      );
      saveToLocalStorage(state.ali);
    },

    updateCart: (state, action) => {
      if (Array.isArray(action.payload)) {
        state.ali = action.payload;
      }
      saveToLocalStorage(state.ali);
    },
  },
});

export const { addCart, removeCart, toggleLike, updateCart } =
  cartSlice.actions;
export default cartSlice.reducer;
