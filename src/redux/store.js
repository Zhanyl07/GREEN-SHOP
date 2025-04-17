import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cart/CartSlice"


export const myStore = configureStore({
    reducer: {
        carts: cartReducer,
    }
})