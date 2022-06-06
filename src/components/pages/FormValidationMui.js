import React, { Component } from 'react';
import { Button, Grid } from '@mui/material';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import axios from 'axios';

export default class FormValidationMui extends Component {

    state = {
        formData: {
            names: '',
            email:'',
            password: '',
            repeatPassword: ''
        }   
    }

    componentDidMount() {
        if(!ValidatorForm.hasValidationRule('isPasswordMatch')){
            // custom rule will have name 'isPasswordMatch'
            ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
                const {formData} = this.state;
                if (value !== formData.password) {
                    return false;
                }
                return true;
            });
        }
    }

    componentWillUnmount() {
        if(ValidatorForm.hasValidationRule('isPasswordMatch')){
            // remove rule when it is not needed
            ValidatorForm.removeValidationRule('isPasswordMatch');
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        console.log("event", event.target.value)
        const {formData} = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    handleSubmit = () => {
        console.log(this.state.formData);
        axios.get('https://jsonplaceholder.typicode.com/posts', this.setState.formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
        }).then(({data})=> console.log(data));
    }

  render() {
    const { formData } = this.state;

    return (
        <Grid container flex justifyContent='center'>
            <Grid item>
                <ValidatorForm
                    ref="form"
                    onSubmit={this.handleSubmit}
                    style={{marginTop:20}}
                >
                <TextValidator
                    label="Name"
                    onChange={this.handleChange}
                    name="names"
                    value={formData.names}
                    validators={['required']}
                    errorMessages={['this field is required', 'Name is not valid']}
                    style={{margin:10, width:'100%'}}
                />
                <TextValidator
                    label="Email"
                    onChange={this.handleChange}
                    name="email"
                    value={formData.email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                    style={{margin:10, width:'100%'}}
                />
                <TextValidator
                    label="Password"
                    onChange={this.handleChange}
                    name="password"
                    validators={['required']}
                    errorMessages={['this field is required']}
                    value={formData.password}
                    style={{margin:10, width:'100%'}}
                />
                <TextValidator
                    label="Repeat password"
                    onChange={this.handleChange}
                    name="repeatPassword"
                    type="password"
                    validators={['isPasswordMatch', 'required']}
                    errorMessages={['password mismatch', 'this field is required']}
                    value={formData.repeatPassword}
                    style={{margin:10, width:'100%'}}
                />
                <Button type="submit" variant='contained' size="large" style={{margin:10}}>Submit</Button>
                </ValidatorForm>
            </Grid>
        </Grid>
    )
  }
}
