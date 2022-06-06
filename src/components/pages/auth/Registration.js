import { TextField, Button, Box, Alert, Checkbox, FormControlLabel } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Registration = () => {

    const [error, setError] = useState({
        status:false,
        msg:"",
        type:""
    });
    const [user, setUser] = useState({})


    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);
        const actualData = {
            email: data.get('email'),
            name: data.get('name'),
            password: data.get('password'),
            password_confirmation: data.get('password_confirmation'),
            tc: data.get('tc')
        }

        if(actualData.name && actualData.email && actualData.password && actualData.tc !== null){
           if(actualData.password === actualData.password_confirmation){

            
                const response =  axios.post("http://localhost:3000/registration", actualData)
                    .then(res => {  
                      console.log(res)  
                    })  
                    .catch(err => {  
                      console.log(err)  
                    });  
                  
                    // set the state of the user
                    setUser(response.data)
                    // store the user in localStorage
                    localStorage.setItem('user', user)
                    console.log(response.data)

                document.getElementById('registration-form').reset();
                setError({ status: true, msg: 'Registration Successful', type: 'success'})
                navigate('/dashboard')
           } else {
            setError({ status: true, msg: "Password and Confirm Password Doesn't Match", type: 'error'})
           }
        } else {
            // console.log("All fields are required");
            setError({ status: true, msg: 'All Fields Are required', type: 'error'})
        }
    }

  return (
    <>
        <Box component='form' noValidate sx={{ p:4 }} id='registration-form' onSubmit={handleSubmit}>
            <TextField margin='normal' required fullWidth id='name' name='name' label='Name' />
            <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
            <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' />
            <TextField margin='normal' required fullWidth id='password_confirmation' name='password_confirmation' label='Confirm Password' type='password' />
            <FormControlLabel control={<Checkbox value="agree" color="primary" name="tc" id="tc"/>} label="I agree to term and condition." />
            <Box textAlign='center'>
                <Button type='submit' variant='contained' sx={{ my: 2, py: 1, px: 4}} color='secondary'>Sign Up</Button>
            </Box>
            {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
        </Box>
    </>
  )
}

export default Registration