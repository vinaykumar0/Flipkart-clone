import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import toast from "react-hot-toast"

const URL = 'http://localhost:4000/api/v1'
export const addToCart = createAsyncThunk('product/addToCart', async (id,quantity) => {
    let result = []
    try {
        const response = await axios.get(`${URL}/product/${id}`, quantity, { id });
        if (!response) {
            throw new Error("Could not fetch all courses")
        }
        console.log("response", response)
        result = response?.data?.product
        console.log("result in cart item", result)
    } catch (error) {
        console.log("Error while fetching the product", error.message)
    }
    return result
})
export const removeItemFromCart = createAsyncThunk('product/removeItemFromCart', async (id) => {
    return {payload: id
}
})

const initialState = {
    cartItems: [],
    quantity: 1
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(addToCart.fulfilled, (state, action) => {
            let item = state.cartItems.findIndex((product) => product.id === action.payload.id)
            if (item >= 0) {
                state.cartItems[item].quantity +=1
            } else {
                state.cartItems.push(action.payload)
            }
            // // if (existItem) {
            // //     return {
            // //         ...state, cartItems: state.cartItems.map(x => x.product === existItem.product ? item : x)
            // //     }
            // // } else {
            // //     return { ...state, cartItem: [...state.cartItems, item] }
            // // }
            // if (existItem >= 0) {
            //     toast.success("item is already in cart")
            // }
        })
        builder.addCase(removeItemFromCart.fulfilled, (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
        })
    }
})
// export const { removeItemFromCart }=cartSlice.actions
export default cartSlice.reducer