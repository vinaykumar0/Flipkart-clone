import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetails, getProducts } from './slices/productSlice'
import { useParams } from 'react-router-dom'

const Demo = () => {
    const dispatch=useDispatch()
    const {product} = useSelector(state => state.product)
    console.log("THe product is",product)
    useEffect(() => {
            dispatch(getProducts())
    }, [])
    const {productId}=useSelector(state=>state.product)
    console.log(productId)
    const{id}=useParams()
    useEffect((id) => {
        dispatch(getProductDetails(id))
    },[])
  return (
      <div>
          List of product
          {
             product && product.map(prod => (
                  <li key={prod.id}>
                      {prod.title.longTitle}
                  </li>
              ))
          }
          {/* {
              productId.map(product =>
                  <Link to={`/product/${product.id}`} key={product.id}>
                      <Box textAlign={"center"} style={{ padding: "25px 15px", cursor: 'pointer', textDecoration: 'none' }}>
                          <Image src={product.url} alt="" />
                          <Text style={{ fontWeight: 600, color: "#212121" }}>{product.title.shortTitle}</Text>
                          <Text style={{ color: 'green' }}>{product.discount}</Text>
                          <Text style={{ color: "#212121", opacity: '.6' }}>{product.tagline}</Text>
                      </Box>
                  </Link>
              )
          } */}
    </div>
  )
}

export default Demo