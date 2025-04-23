import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cart/CartSlice"
import wishReducer from "./Wish/WishSlice"


export const myStore = configureStore({
    reducer: {
        carts: cartReducer,
        wishlist: wishReducer,
    }
})