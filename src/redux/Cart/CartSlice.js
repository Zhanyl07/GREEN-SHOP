import { createSlice } from '@reduxjs/toolkit';

// Функция для загрузки товаров из LocalStorage
const loadFromLocalStorage = () => {
    const data = localStorage.getItem('cartItems');
    return data ? JSON.parse(data) : []; // Если данные есть, возвращаем их, если нет — пустой массив
};

// Функция для сохранения товаров в LocalStorage
const saveToLocalStorage = (data) => {
    localStorage.setItem('cartItems', JSON.stringify(data)); // Сохраняем данные в LocalStorage
};

const cartSlice = createSlice({
    name: 'carts',
    initialState: {
        ali: loadFromLocalStorage() // Инициализируем состояние данными из LocalStorage, если они есть
    },
    reducers: {
        // Добавление товара в корзину
        addCart: (state, action) => {
            state.ali.push({ ...action.payload, isLiked: false }); // Добавляем товар с флагом "не понравился"
            saveToLocalStorage(state.ali); // Сохраняем обновлённое состояние в LocalStorage
        },
        // Удаление товара из корзины
        removeCart: (state, action) => {
            state.ali = state.ali.filter(item => item.id !== action.payload); // Фильтруем товар по id
            saveToLocalStorage(state.ali); // Сохраняем обновлённое состояние в LocalStorage
        },
        // Изменение состояния лайка товара
        toggleLike: (state, action) => {
            state.ali = state.ali.map(item =>
                item.id === action.payload ? { ...item, isLiked: !item.isLiked } : item // Переключаем флаг лайка
            );
            saveToLocalStorage(state.ali); // Сохраняем обновлённое состояние в LocalStorage
        },
        // Обновление корзины (например, после изменения количества товаров)
        updateCart: (state, action) => {
            state.ali = action.payload; // Обновляем корзину новыми данными
            saveToLocalStorage(state.ali); // Сохраняем обновлённое состояние в LocalStorage
        }
    }
});

export const { addCart, removeCart, toggleLike, updateCart } = cartSlice.actions;
export default cartSlice.reducer; // Экспортируем редуктор для использования в store
