
export const paymentPaytm = createAsyncThunk('product/paymentPaytm', async (data) => {
    let result = []
    try {
        const response = await axios.post(`${URL}/payment`, data);
        console.log("response", response)
        result = response?.data
        console.log("result", result)
    } catch (error) {
        console.log("Error while fetching the product", error.message)
    }
    return result
})