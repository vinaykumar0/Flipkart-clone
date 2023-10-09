// import styled from '@emotion/styled'
import { AppBar, Box, Drawer, IconButton, List, ListItem, Toolbar, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Search from './Search';
import CustomButton from './CustomButton';
import { Menu } from '@mui/icons-material';
import { Link } from 'react-router-dom';



const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
`;

const Component = styled(Link)`
margin-left:16% ;
line-height:0;
    color: #FFFFFF;
    text-decoration: none;
`;

const SubHeading = styled(Box)`
font-size:13px;
font-style:italic;
margin-top:4px ;
`

const PlusImage = styled('img')`
width:10px;
height:10px;
`
const CustomButtonWrapper = styled(Box)(({ theme }) => ({
    margin: '0 5% 0 auto',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}))
const MenuIcon = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}))


const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

const Header = () => {

    
    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }
    const handleOpen = () => {
        setOpen(true)
    }
    const list = () => {
        <Box style={{width:200}} onClice={handleClose}>
            <List>
                <ListItem button>
                    <CustomButton />
                </ListItem>
            </List>
        </Box>
    }
    return (

        <StyledHeader>
            <Toolbar style={{ minHeight: 55 }}>
                <MenuIcon color='inherit' onClick={handleOpen}>
                    <Menu />
                </MenuIcon>
                <Drawer open={open} onClick={handleClose}>
                    {list()}
                </Drawer>
                <Component to='/'>
                    <img src={logoURL} alt="" style={{ width: 78 }} />
                    <Box style={{ display: "flex", gap: 2 }}>
                        <SubHeading>
                            Explore
                            <Box component="span" style={{ color: '#FFE500' }}>
                                Plus
                            </Box>
                        </SubHeading>
                        <PlusImage src={subURL} alt="" />
                    </Box>
                </Component>
                <Search />
                <CustomButtonWrapper>
                    <CustomButton />
                </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>
    )
}

export default Header