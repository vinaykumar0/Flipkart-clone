import { Grid, styled } from '@mui/material';
import React from 'react'
import { imageURL } from '../../constants/data';

const Wrapper =styled(Grid)`
margin-top:10px;
`
const Image = styled('img')({
    display: "flex",
    justifyContent: 'space-between',
    marginTop: '10px',
    width:'100%'
    
})

const MidSection = () => {
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
  return (
      
      <>
          <Wrapper lg={12} md={12} sm={12} xs={12} container>
              {
                  imageURL.map((image) => (
                      <Grid key={image.id} lg={4} md={4} sm={12} xs={12}>
                          <img src={image.url} alt="" style={{ width: '100%' }} />
                      </Grid>
                  ))
              }
          </Wrapper>
          <Image src={url} alt="" />
      </>
  )
}

export default MidSection