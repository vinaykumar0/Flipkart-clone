import React from 'react'
import { Box, Typography, Table, TableBody, TableRow, TableCell, styled } from '@mui/material';
import {LocalOffer as Badge} from '@mui/icons-material';

const SmallText = styled(Box)`
font-size:14px;
vertical-align:baseline;
& > p {
    font-size:14x;
    margin-top:10px;
}
`
const StyBadge=styled(Badge)`
margin-right:10px;
color:#00CC00;
font-size: 15px;
`

const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
    & > td {
        font-size: 14px;
        margin-top: 10px;
    }
`


const ProductDetails = ({ product }) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));
  return (
      <>
         
              <Typography>
                  Avalaible Offers
              </Typography>
              <SmallText>
                  <Typography><StyBadge />Get extra 20% off upto 50 on items T&C</Typography>
               
                  <Typography><StyBadge />Get extra 30% off (price inclusive of discount) T&C</Typography>
                  <Typography><StyBadge />Sign up for flipkart Pay Later and get Flipkart Gift Card with 100* Know More</Typography>
                  <Typography><StyBadge />But 2 items save 5% Buy 3 or more save 10% T&C</Typography>
                  <Typography><StyBadge />
                      5% Cashback on FLipkart Axis Bank Card
                  </Typography>
              </SmallText>
          <Table>
              <TableBody>
                  <ColumnText>
                      <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                      <TableCell style={{ fontWeight: 600 }}>Delivery by {date.toDateString()} | ₹40</TableCell>
                  </ColumnText>
                  <ColumnText>
                      <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                      <TableCell>No Warranty</TableCell>
                  </ColumnText>
                  <ColumnText>
                      <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                      <TableCell>
                          <span style={{ color: '#2874f0' }}>SuperComNet</span>
                          <Typography>GST invoice available</Typography>
                          <Typography>View more sellers starting from ₹329</Typography>
                      </TableCell>
                  </ColumnText>
                  <TableRow>
                      <TableCell colSpan={2}>
                          <img src={adURL} style={{ width: 390 }} />
                      </TableCell>
                  </TableRow>
                  <ColumnText>
                      <TableCell style={{ color: '#878787' }}>Description</TableCell>
                      <TableCell>{product.description}</TableCell>
                  </ColumnText>
              </TableBody>
          </Table>
      </>
  )
}

export default ProductDetails