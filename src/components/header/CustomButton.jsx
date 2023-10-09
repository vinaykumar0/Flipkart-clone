import { Box, Button, Badge, Typography, styled } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useContext } from 'react'
import Login from '../Home/Login';
import { useState } from 'react';
import { DataContext } from '../../context/DataProvider';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    marginLeft: "30px",
alignItems:"center",
'& > *':{
    marginRight: "40px !important",
    fontSize: "16px"
    }, [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}))
const Container = styled(Box)(({ theme }) => ({
    display: "flex",
    [theme.breakpoints.down('md')]: {
        display:'block'
    }
}))




const LoginButton = styled(Button)`
color:#2874F0;
background:#FFFFFF;
text-transform:none;
height:32px;
border-radius:2px;
box-shadow:none;
padding:3px 35px;
font-weight:700;    
`

const CustomButton = () => {

    const navigate=useNavigate()
    const [open, setOpen] = useState(false)
    const{cartItems}=useSelector(state=>state.cart)

    const handleLogin = () => {
        setOpen(true)
    }
    const { auth } = useContext(DataContext)
    const handleClick = () => {
    navigate("/cart")
}

    return (
        <CustomBox>

            {
                auth ? <Typography>{auth}</Typography> :
                    <LoginButton variant="contained" onClick={() => handleLogin()}>Login</LoginButton>
            }
            <Typography>Become a seller</Typography>
            <Typography>More</Typography>
            <Container>
                <Badge badgeContent={cartItems?.length} color="secondary">
                    <ShoppingCartIcon />
                </Badge>
                <Typography style={{ marginLeft: 10 }} onClick={()=>handleClick()}>Cart</Typography>
            </Container>
            <Login open={open} setOpen={setOpen} />
        </CustomBox>
    )
}

export default CustomButton