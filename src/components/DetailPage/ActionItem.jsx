import { Box, Button, styled } from '@mui/material'
// import { ShoppingCartIcon as Cart } from '@mui/icons-material';
// import { FlashOnIcon as Flash } from '@mui/icons-material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { addToCart } from '../../slices/cartSlice'
import {post} from '../../utils/paytm'

const Wrapper = styled(Box)`
min-width:40%;
padding:40px 0px 0px 40px;
`

const Image = styled('img')({
    padding: "15px",
})

const ActionBut = styled(Button)`
width:48%;
height:50px;
border-radius:2px;
`
const ActionItem = ({ product }) => {
    const navigate=useNavigate()
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams()
    const dispatch=useDispatch()

    const addItemsToCart = () => {
        dispatch(addToCart(id, quantity))
        navigate('/cart')
    }

    const buyNow = () => {
    
}

    return (
        <Wrapper>
            <Box style={{ padding: '15px 18px', border: '1px solid #f0f0f0', width: "90%" }}>
                <Image src={product.detailUrl} alt="" />
          </Box>
            <ActionBut onClick={()=>addItemsToCart()} variant='contained' style={{ background: '#ff9f00', marginRight: 10 }}>Add to cart</ActionBut>
            <ActionBut onClick={()=>buyNow()} variant='contained' style={{ background: '#fb541b' }}>Buy Now</ActionBut>
        </Wrapper>
    )
}

export default ActionItem