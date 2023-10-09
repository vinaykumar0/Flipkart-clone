// import axios from "axios"
// import { toast } from "react-hot-toast"
// const URL = 'http://localhost:4000/api/v1'


// export const getProducts = async () => {
//     const toastId = toast.loading("loading...")
//     let result=[]
//     try {
//         const response = await axios.get(`${URL}/products`);
//         // console.log(data)
//         if (!response) {
//             throw new Error("Could not fetch all courses")
//         }
//         result = response?.data?.product
//         console.log(result)
//     } catch (error) {
//       console.log("Error while fetching the data",error.message)
//     }
//     toast.dismiss(toastId)
//     return result
// };


// export const getProductDetails = async(id) => {
//     const toastId = toast.loading("loading...")
//     let result =[]
//     try { 
//         const response = await axios.get(`${URL}/product/${id}`, {id});
//         if (!response) {
//             throw new Error("Could not fetch all courses")
//         }
//         console.log("response",response)
//         result = response?.data?.products
//         console.log("result",result)
//     } catch (error) {
//         console.log("Error while fetching the product",error.message)
//     }
//     toast.dismiss(toastId)
//     return result
// }