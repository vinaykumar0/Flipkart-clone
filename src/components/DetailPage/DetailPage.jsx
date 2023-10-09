import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
// import { getProductDetails } from '../../service/productApi'
import { Box, Grid, Typography, styled } from '@mui/material'
import ActionItem from './ActionItem'
import ProductDetails from './ProductDetails'
import { getProductDetails } from '../../slices/productSlice'
import { getProducts } from '../../slices/productSlice'

const Container = styled(Box)`
background:#F2F2F2;
margin-top:5px
`
const Conponent = styled(Grid)`
background: #FFFFFF;
display:flex; 

`
const RightBox = styled(Grid)`
margin-top:20px;
& > p {
        margin-top: 10px;
    }
`

const DetailPage = () => {

    const dispatch = useDispatch()
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'


    // const { product } = useSelector(state => state.product)
    // const [loading, setLoading] = useState(false)
    // console.log(product)
    const{products}=useSelector(state=>state.product)
    console.log("productssssssssssss",products)
    // const { id } = useParams()
    // const getProductById = async (id) => {
    //     const products = await getProductDetails(id);
    //     console.log("The product is", products)
    //     setProd(products)
    // }
    useEffect(() => {
        dispatch(getProductDetails(id))
    }, [])


    return (
        <Container>
            {
                products && Object.keys(products).length &&
                <Conponent container>
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                            <ActionItem product={products} />
                    </Grid>
                    <RightBox item lg={8} md={8} sm={8} xs={12}>
                        <Typography>
                                {products.title.longTitle}
                            <Typography style={{ marginTop: 5, color: '#878787', fontSize: 13 }}>8 Ratings & 1 Reviews </Typography>
                            <Box component="span"><img src={fassured} alt="" style={{ width: 77, marginLeft: 20 }} /></Box>
                        </Typography>
                        <Typography style={{ display: 'flex' }}>
                                <Box component='span' style={{ fontSize: 28 }}>₹{products.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                                <Box componet='span' style={{ color: '#878787' }}><strike>₹{products.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                                <Box component='span' style={{ color: '#388E3C' }}>{products.price.discount}</Box></Typography>
                            <ProductDetails product={products} />
                    </RightBox>
                </Conponent>
            }

        </Container>
    )
}

export default DetailPage