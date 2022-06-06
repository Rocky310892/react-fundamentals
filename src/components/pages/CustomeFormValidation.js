import React, { Component } from 'react'
import { Grid, Box, TextField, Button, Typography, Card  } from '@mui/material';
import axios from 'axios';

export default class CustomeFormValidation extends Component {
    state = {
        names:'',
        email:'',
        password:'',
        phone:'',
        error:'',
        emailError:'',
        phoneError:'',
        confPassword:'',
        mismatchError:''
    }

    // componentDidMount(){
    //     console.log("Props", this.props)
    // }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleChangeEmail = (e) => {
        // this.setState({
        //     email:e.target.value
        // })
        var re = /\S+@\S+\.\S+/;
        if(re.test(e.target.value)){
            this.setState({
                emailError: "",
                email: e.target.value
            })
        } else {
            this.setState({
                emailError: "Please enter valid email address."
            })
        }
    }

    handleChangePhone = (e) => {
        if(e.target.value.length > 9){
            this.setState({
                phoneError:"",
                phone: e.target.value
            })
        } else {
            this.setState({
                phoneError:"Please enter minimum 10 Number"
            })
        }
    }

    handleChangePwd = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handleConfirmPwd = (e) => {
        if(this.state.password === e.target.value ){
            this.setState({
                confPassword:e.target.value,
                mismatchError:""
            })
        } else {
            this.setState({
                mismatchError: "Password and Confirm Password does not match"
            })
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.names == "" || this.state.email == "" || this.state.password == "" || this.state.phone == ""){
            this.setState({
                error:'This field required'
            })
        } else {
            let abc = this;
            this.setState({
                error:''
            })
            
            const data = {
                name:this.state.name,
                email:this.state.email,
                phone:this.state.phone,
                password:this.state.password
            }

            console.log(this.state)
            axios.get('https://jsonplaceholder.typicode.com/posts', data)
            .then(function(response){
                // console.log(response);
                if(response.status == 200){
                    // console.log("props", thiss.props)
                    abc.props.history.push('/');
                    
                } else {
                    alert("Response Failed")
                }
            })
        }
    }

    render() {
        return (
        <>
            <Grid container felx justifyContent='center' sx={{ mt:4 }}>
                <Grid onClick={this.onSubmit} component="form" sx={{ width: '100%', maxWidth:'500px','& .MuiTextField-root': { m: 1, width: '100%' }, }}>
                    <Card sx={{padding:'20px'}}>
                        <Typography variant='h4' fontWeight='bold' my={2}>Sign up Form</Typography>
                        <Box>
                            <TextField label="Name" variant="outlined" fullWidth  name="names" onChange={this.handleChange}/>
                            <Typography variant="body1" color='red' ml={1} mb={1}>{this.state.error}</Typography>
                        </Box>
                        <Box>
                            <TextField label="Email" variant="outlined" fullWidth name="email" onChange={this.handleChangeEmail}/>
                            <Typography variant="body1" color='red' ml={1} mb={1}>{this.state.error}</Typography>
                            <Typography variant="body1" color='red' ml={1} mb={1}>{this.state.emailError}</Typography>
                        </Box>
                        <Box>
                            <TextField type="password" label="Password" variant="outlined" fullWidth name="password" onChange={this.handleChangePwd}/>
                            <Typography variant="body1" color='red' ml={1} mb={1}>{this.state.error}</Typography>
                        </Box>
                        <Box>
                            <TextField type="password" label="Confirm Password" variant="outlined" fullWidth name="confirmPassword" onChange={this.handleConfirmPwd}/>
                            <Typography variant="body1" color='red' ml={1} mb={1}>{this.state.error}</Typography>
                            <Typography variant="body1" color='red' ml={1} mb={1}>{this.state.mismatchError}</Typography>
                        </Box>
                        <Box>
                            <TextField type="number" label="Phone" variant="outlined" fullWidth name="phone" onChange={this.handleChangePhone}/>
                            <Typography variant="body1" color='red' ml={1} mb={1}>{this.state.error}</Typography>
                            <Typography variant="body1" color='red' ml={1} mb={1}>{this.state.phoneError}</Typography>
                        </Box>
                        <Box sx={{ m: 1 }}>
                            <Button type='submit' variant="contained" color="secondary" size="large">Submit</Button>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </>
        )
    }
}
