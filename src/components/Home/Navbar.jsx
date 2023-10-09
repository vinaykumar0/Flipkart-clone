import { Box, Typography, styled } from '@mui/material'
import { navData } from '../../constants/data'
import React from 'react'

const NavBox = styled(Box)`
display:flex;
margin:55px 130px 0px 130px;
justify-content:space-between;
`
const Container = styled(Box)`
padding:12px 8px;
text-align:center;
`

const Navbar = () => {
   return (
       <NavBox>
           {
               navData.map((data, index) => (
                   <Container key={index}>
                       <img src={data.url} alt="" style={{width:64}}/>
                       <Typography style={{fontSize:14,fontWeight:600,fontFamily:'inherit'}}>{data.text}</Typography>
                   </Container>
               ))
           }
       </NavBox>
  )
 }

export default Navbar