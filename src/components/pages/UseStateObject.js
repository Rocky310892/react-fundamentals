import React, { useState } from 'react';
import { Grid, Card, TextField, Box, Button, Typography } from '@mui/material';

const UseStateObject = () => {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState({
        firstName:'', 
        lastName:''
    })

    const onChangeData1 = (e) => {
        setName({...name, firstName: e.target.value})
    }

    const onChangeData2 = (e) => {
        setName({...name, lastName: e.target.value})
    }

    const submit = (e) => {
        e.preventDefault();
        console.log("Submit", name)
    }

    const incrementCounter = () => {
        setCounter(counter+1)
    }

  return (
    <>
    <Grid container justifyContent='center' maxWidth='md' spacing={2} mt={3} >
        <Grid item xs={6}>
            <Card sx={{padding:'20px','& .MuiTextField-root': { mb: 3, width: '100%' }}}>
                <form onSubmit={submit}>
                    <Box>
                        <TextField label="First Name" variant="outlined" onChange={onChangeData1}/>
                    </Box>
                    <Box>
                        <TextField label="Last Name" variant="outlined" onChange={onChangeData2}/>
                    </Box>
                    <Box>
                        <Button type='submit' variant="contained" color="secondary" size="large">Submit</Button>
                    </Box>
                    <p>{JSON.stringify(name)}</p>
                </form>
            </Card>
        </Grid>
        <Grid item xs={6}>
            <Card sx={{padding:'20px','& .MuiTextField-root': { mb: 3, width: '100%' }}}>
                <Typography variant='h5' mb={3}>{counter}</Typography>
                <Button type='submit' variant="contained" color="secondary" size="large" onClick={incrementCounter}>Increment</Button>
            </Card>
        </Grid>
    </Grid>
    </>
  )
}

export default UseStateObject;