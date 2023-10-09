import { Box, styled } from '@mui/material'
import React from 'react'
import Slide from './Slide'

const Component = styled(Box)`
display:flex;
`

const LeftComp = styled(Box)`
width:83%;
`
const RightComp = styled(Box)`
width:17%;
margin-left:10px;
margin-top:10px;
padding:5px;
text-align:center;
`
const TopSlide = ({ timer, title }) => {
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
  return (
      <Component>
          <LeftComp>
              <Slide title="Deal Of the Day" timer={true} />
          </LeftComp>
          <RightComp>
          <img src={adURL} alt="" style={{width:217}}/>
          </RightComp>
      </Component>
  )
}

export default TopSlide