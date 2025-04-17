import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice ({
    name: "cart",
    initialState: {
        list:[]
    },
    reducers: {
        addCart: (state, action) => {

            const findProduct = state.list.find((x) =>x.id == action.payload.id)
    
            if (!findProduct) {
    
                state.list.push({...action.payload, quantity: 1})
            }
        }
    }
})

export const {addCart} = cartSlice.actions;

export default cartSlice.reducer