import React, {useState} from 'react';
import { Grid, TextField, Container, Card, Button, Box} from '@mui/material';

export default function UseStateWithArray() {

    const [sate, setSate] = useState([]);
    const [array, setArray] = useState([]);

    const onChangesInput = (e) =>{
        setSate(e.target.value)
    }

    const onSubmitForm = (e) => {
        e.preventDefault()
        setArray(prev=>[...prev, sate])
        setSate('')
    } 

  return (
    <Container>
        <Grid container margin={4}>
            <Grid item xs={6}>
                <Card>
                    <form onSubmit={onSubmitForm}>
                        <Box margin={2}>
                            <TextField id="outlined-basic" label="Outlined" fullWidth variant="outlined" onChange={onChangesInput} />
                        </Box>
                        <Box margin={2}>
                            <Button type="submit" variant="contained">Add Item</Button>
                        </Box>
                    </form>
                </Card>
            </Grid>
            <Grid item xs={6}>
                <ul>

                {array.map((data, index)=>
                       <li key={index}> {data}</li>
                        )}
                </ul>
            </Grid>
        </Grid>
    </Container>
  );
}
