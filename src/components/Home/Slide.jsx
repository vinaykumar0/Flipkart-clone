import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel'
import { useDispatch, useSelector } from 'react-redux'
// import { getProducts} from '../../service/productApi'
import "react-multi-carousel/lib/styles.css";
import { Box, Button, Divider, Typography, styled } from '@mui/material';
import Countdown from 'react-countdown';
import { Link, useParams } from 'react-router-dom';
import { getProducts } from './../../slices/productSlice';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
}
const Component = styled(Box)`
margin-top:10px;

background-color:#FFFFFF;
`
const Deal = styled(Box)`
padding:15px 20px;
display:flex;
`
const Timer = styled(Box)`
display:flex;
margin-left:10px;
align-items=center;
color:#7f7f7f
`
const TimerHead = styled(Typography)`
font-size:22px;
font-weight:600;
margin-right:25px

`
const ViewButton = styled(Button)`
margin-left:auto;
background-color:#2874f0;
border-radius:2px;
font-size:13px;
`
const Text = styled(Typography)`
margin-top:5px;
font-size:14px;
`
const Slide = ({ title, timer }) => {
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    const dispatch = useDispatch()
    const { product } = useSelector(state => state.product)

    const[loading,setLoading]=useState(false)

    console.log("Product in slid id", product)

    //     console.log("The product using use selector is ",product)
    // const [prod,setProd]=useState([])
    useEffect(() => {
        dispatch(getProducts())
    },[])

    const renderer = ({ hours, minutes, seconds }) => {
        return (
            <Box varient="span">
                {hours}:{minutes}:{seconds} left
            </Box>
        )
    }
    const Image = styled('img')({
        width: 'auto',
        height: 150
    })
    return (
        <Component>
            <Deal>
                <TimerHead>{title}</TimerHead>
                {
                    timer && <Timer>
                        <img src={timerURL} alt="" style={{ width: 24 }} />
                        <Countdown date={Date.now() + 504e+7} renderer={renderer} />
                    </Timer>
                }
                <ViewButton variant='contained'>VIEW ALL</ViewButton>
            </Deal>
            <Divider />
           
            {
                loading ? (
                    <div class="custom-loader" style={{margin:'auto'}}></div>
                ) : (
                        <Carousel responsive={responsive}
                            swipeable={false}
                            draggable={false}
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={3000}
                            keyBoardControl={true}
                            centerMode={true}
                            itemClass="carousel-item-padding-40-px"
                            dotListClass="custom-dot-list-style"
                            containerClass="carousel-container"
                        >
                            {
                                product && product.map(products =>
                                    <Link to={`/product/${products.id}`} key={products.id}>
                                        <Box textAlign={"center"} style={{ padding: "25px 15px", cursor: 'pointer', textDecoration: 'none' }}>
                                            <Image src={products.url} alt="" />
                                            <Text style={{ fontWeight: 600, color: "#212121" }}>{products.title.shortTitle}</Text>
                                            <Text style={{ color: 'green' }}>{products.discount}</Text>
                                            <Text style={{ color: "#212121", opacity: '.6' }}>{products.tagline}</Text>
                                        </Box>
                                    </Link>
                                )
                            }
                        </Carousel>
                )
            }
        </Component>
    )
}

export default Slide