import { createSlice } from "@reduxjs/toolkit";



const CartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        subTotal: 0,
        totalAmount: 0
    },
    reducers: {
        addToCart: (state, action) => {
            console.log(action.payload.price)
            const existing = state.cart.find(ele => ele.id == action.payload.id)
            // console.log(existing)
            if (!existing) {
                state.cart.push(action.payload)
            }
            else {
                existing.quantity = existing.quantity + 1
            }
            state.subTotal = state.subTotal + 1
            state.totalAmount = state.totalAmount + action.payload.price
        },
        removeFromCart: (state, action) => {
            console.log(action.payload.price)
            const existing = state.cart.find(ele => ele.id == action.payload.id)
            console.log(existing.id)
            if (existing.quantity > 1) {
                existing.quantity = existing.quantity - 1
            }
            else {
                state.cart.splice(state.cart.findIndex(ele => ele.id === existing.id), 1)
            }
            state.subTotal = state.subTotal - 1
            state.totalAmount = state.totalAmount - action.payload.price
        }
    }
})

export default CartSlice.reducer

export const { addToCart, removeFromCart } = CartSlice.actions