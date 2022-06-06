import { TextField, Button, Box, Alert } from '@mui/material';

import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

const UserLogin = () => {

    const [error, setError] = useState({
        status:false,
        msg:"",
        type:""
    });

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);
        const actualData = {
            email: data.get('email'),
            password: data.get('password'), 
        }

        if(actualData.email && actualData.password){
            console.log(actualData);
            document.getElementById('login-form').reset();
            setError({ status: true, msg: 'Login Success', type: 'success'})
            navigate('/dashboard')
        } else {
            // console.log("All fields are required");
            setError({ status: true, msg: 'All Fields Are required', type: 'error'})
        }
    }

  return (
    <>
        <Box component='form' noValidate sx={{ p:4 }} id='login-form' onSubmit={handleSubmit}>
            <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
            <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' />
            <Box textAlign='center'>
                <Button type='submit' variant='contained' sx={{ my: 2, py: 1, px: 4}} color='secondary'>Sign In</Button>
            </Box>
            <NavLink to='/sendpasswordresetemail'>Forgot Password?</NavLink>
            {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
        </Box>
    </>
  )
}

export default UserLogin