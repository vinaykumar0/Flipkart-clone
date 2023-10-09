import React from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import { bannerData } from '../../constants/data';
import { Box, styled } from '@mui/material';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Image = styled('img')`
width:100%;
height:280px;
`

const Banner = () => {
  return (
      <Carousel responsive={responsive}
          swipeable={false}
          draggable={false}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          slidesToSlide={1}
          itemClass="carousel-item-padding-40-px"
          dotListClass="custom-dot-list-style"
          containerClass="carousel-container"
          infinite={true}
      >
          {
              bannerData.map((data) => (
                  <Box key={data.id}>
                      <Image src={data.url} alt="" />
                  </Box>
              ))
          }
      </Carousel>
  )
}

export default Banner