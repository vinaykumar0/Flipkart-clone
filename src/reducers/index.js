import { combineReducers } from "redux";
import productReducer from '../slices/productSlice'
import cartReducer from '../slices/cartSlice'

const rootReducer = combineReducers({
    product: productReducer,
    cart:cartReducer
})
export default rootReducer