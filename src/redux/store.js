import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cart/CartSlice"; // Импортируем редуктор для корзины
import wishReducer from "./Wish/WishSlice"; // Импортируем редуктор для списка желаемого

export const myStore = configureStore({
    reducer: {
        carts: cartReducer, // Добавляем редуктор корзины в store
        wishlist: wishReducer, // Добавляем редуктор списка желаемого в store
    }
});
