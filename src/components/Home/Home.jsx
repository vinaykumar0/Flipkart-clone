// import React, { Fragment } from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import { Box, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
// import { getProducts } from '../../service/productApi'
import Slide from './Slide'
import TopSlide from './TopSlide'
import MidSection from './MidSection'

const Component = styled(Box)`
padding:10px;
background:#F2F2F2;
`
const Home = () => {
    // const getProducts = useSelector(state => state.getProducts)
    // const { products, error } = getProducts;
    // console.log(products)
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(listProducts())
    // }, [])

    return (
        <>
            <Navbar />
            <Component>
                <Banner />
                <TopSlide />
                <MidSection />
                <Slide title="Discount for you" timer={false} />
                <Slide title="Suggestion Items" timer={false} />
                <Slide title="Top Selction" timer={false} />
                <Slide title="Recommendation Items" timer={false} />
                <Slide title="Trending Offer" timer={false} />
                <Slide title="Seasons Top Picks" timer={false} />
                <Slide title="Top Deals on accesories" timer={false} />
            </Component>
        </>
    )
}

export default Home