import { Box, Button, Dialog, TextField, Typography, styled } from '@mui/material'
import React, { useContext, useState } from 'react'
import { authenticateLogin, authenticateSignup } from '../../service/apis'
import { DataContext } from '../../context/DataProvider'

const Component = styled(Box)`
height:81vh;
width:90vh  ;
`
const Image = styled(Box)`
background: #2874F0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
height:82%;
width:25%;
padding:45px 35px;
& > p, & >h5{
    font-weight:600;
    color:#FFFFFF;
}
`
const Wrapper = styled(Box)`
display:flex;
flex-direction:column;
padding:25px 35px;
flex:1;
&>div, & > button, & > p {
    margin-top:20px;
}
`
const LoginButton = styled(Button)`
text-transform:none;
background:#FB641B;
color:#fff;
height:48px;
border-radius:2px;
`
const ResetOtp = styled(Button)`
text-transform:none;
background:#fff;
color:#2874f0;
height:48px;
border-radius:2px;
box-shadow : 0 2px 4px 0 rgb(0 0 0/ 20%) ;
`
const LoginCreate = styled(Typography)`
font-size:14px;
text-align:center;
color:#2874f0;
font-weight:600;
cursor:pointer;

`

const accountInititalValue = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your order,wishlist and recommendations'
    }, signup: {
        view: 'signup',
        heading: 'Signup',
        subHeading: 'Signup with your mobile number to get started'
    }
}


const Login = ({ open, setOpen }) => {

    const [account, setAccount] = useState(accountInititalValue.login)
    const [signup, setSignup] = useState({
        firstName: '', lastName: '', userName: '', email: '', phone: '', password: ''
    })
    const [login, setLogin] = useState({
        email: '', password: ''
    })

    const { auth, setAuth } = useContext(DataContext)



    const handleClose = () => {
        // setOpen(false)
        // setAccount(accountInititalValue.login)
    }
    const toggleSignup = () => {
        // setAccount(accountInititalValue.signup)
    }
    const handleChange = (e) => {
        setSignup({
            ...signup,
            [e.target.name]: e.target.value
        })
    }
    const handleSignup = async () => {
        // let response = await authenticateSignup(signup)
        // if (!response) return;
        // handleClose()
        // setAuth(signup.firstName)
        // console.log(auth)
    }

    const handleChangeLogin = async (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value })
    }
    const handleLogin = async () => {
        // let response = await authenticateLogin(login)
        // if (!response) return;
        // handleClose()

    }
    return (
        <Dialog open={open} onClose={handleClose}>
            <Component>
                <Box style={{ display: "flex", height: "100%" }}>
                    <Image>
                        <Typography variant='h5'>{account.heading}</Typography>
                        <Typography style={{ marginTop: 20 }}>{account.subHeading}</Typography>
                    </Image>

                    {
                        account.view === "login" ? (
                            <Wrapper>
                                <TextField variant='standard' name="email" onChange={(e) => handleChangeLogin(e)} label="Enter Email/mobile number" />
                                <TextField variant='standard' name="password" onChange={(e) => handleChangeLogin(e)} label="Enter password" />
                                <Typography style={{ fontSize: 12 }}>By Continue,yor agree to flipkart's term of use and private Policy</Typography>
                                <LoginButton onClick={handleLogin}>Login</LoginButton>
                                <Typography style={{ textAlign: 'center' }}>OR</Typography>
                                <ResetOtp>Request OTP</ResetOtp>
                                <LoginCreate onClick={() => toggleSignup()}>New to flipkart? create an account</LoginCreate>
                            </Wrapper>
                        ) : (
                            <Wrapper>
                                <TextField variant='standard' onChange={(e) => handleChange(e)} name="firstName" label="Enter First name" />
                                <TextField variant='standard' onChange={(e) => handleChange(e)} name='lastName' label="Enter Last name" />
                                <TextField variant='standard' onChange={(e) => handleChange(e)} name='userName' label="Enter User nanme" />
                                <TextField variant='standard' onChange={(e) => handleChange(e)} name='email' label="Enter email" />
                                <TextField variant='standard' onChange={(e) => handleChange(e)} name='password' label="Enter password" />
                                <TextField variant='standard' onChange={(e) => handleChange(e)} name='phone' label="Enter phone number" />
                                <LoginButton onClick={() => handleSignup()}>singup</LoginButton>
                            </Wrapper>
                        )
                    }
                </Box>
            </Component>
        </Dialog>
    )
}

export default Login