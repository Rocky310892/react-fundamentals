import React, { useState } from 'react';
import { Button, Container, IconButton, Stack, TextField } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';

const AddFormInput = () => {

    const [inputFields, setInputFields] = useState([
        {
            firstName: '',
            lastName: ''
        },
        {
            firstName: '',
            lastName: ''
        }
    ])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("inputFields", inputFields)
    }

    const handleChangeInput = (index, event) => {
        // console.log(index, event.target.name);

        const values = [...inputFields];
        values[index][event.target.name] = event.target.value
        setInputFields(values);
    }

    const handleAddFields = () => {
        setInputFields([...inputFields, { firstName: '', lastName: '' }])
    }

    const handleRemoveFields = (index) => {
        const values = [...inputFields]
        values.splice(index,1);
        setInputFields(values);
    }

  return (
    <Container>
        <h1>Add New Member</h1>
        <form onSubmit={handleSubmit}>
            {inputFields.map((inputField, index) => (
                <div key={index}>
                    <Stack direction="row" spacing={2} alignItems="center" mb={4}>
                        <TextField 
                        name="firstName" 
                        label="First Name" 
                        variant="filled" 
                        value={inputField.firstName}
                        onChange={event => handleChangeInput(index, event)}
                        />
                        <TextField 
                        name="lastName" 
                        label="Last Name" 
                        variant="filled" 
                        value={inputField.lastName}
                        onChange={event => handleChangeInput(index, event)}
                        />
                        <IconButton onClick={() => handleRemoveFields()}>
                            <RemoveIcon/>
                        </IconButton>
                        <IconButton onClick={() => handleAddFields()}>
                            <AddIcon/>
                        </IconButton>
                    </Stack>
                </div>
            ))}
            <Button variant="contained" endIcon={<SendIcon />} onClick={handleSubmit}>Send</Button>
        </form>
    </Container>
  )
}

export default AddFormInput