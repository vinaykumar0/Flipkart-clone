import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";
const URL = 'http://localhost:4000/api/v1'

export const getProducts = createAsyncThunk('product/getProducts', async() => {
    let result = []
    try {
        const response = await axios.get(`${URL}/products`);
        //         // console.log(data)
                if (!response) {
                    throw new Error("Could not fetch all courses")
                }
                result = response?.data?.products
                console.log("Ths result in getproducts",result)
        // console.log("result,result")
    } catch (error) {
        console.log("Error while fetching the data", error.message)
    }
    return result
       
})

export const getProductDetails = createAsyncThunk('product/getProductDetails', async(id) => {
    let result = []
    try {
        const response = await axios.get(`${URL}/product/${id}`, { id });
                console.log("response",response)
                result = response?.data?.product
                console.log("result",result)
    } catch (error) {
        console.log("Error while fetching the product", error.message)
    }
    return result
})

const initialState = {
    product: [],
    products: [],
}

const productSlice = createSlice({
    name: "product",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.product = action.payload
        })
        builder.addCase(getProductDetails.fulfilled, (state, action) => {
            state.products =action.payload
        })

    }
})

export const { setProduct } = productSlice.actions

export default productSlice.reducer