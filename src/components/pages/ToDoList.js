import React, { useState, useEffect } from 'react';
import { Grid, Box, Typography, Button  } from '@mui/material';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';


export const ToDoList = () => {


  const getLocalItems = () => {
    let list = localStorage.getItem('lists');
    console.log(list)
    if(list){
      return JSON.parse(localStorage.getItem('lists'))
    } else {
      return [];
    }
  }
 
  const [inputData, setInputData] = useState('');
  const [items, setItems] = useState(getLocalItems);

  const addItem = () => {
    if(!inputData) {
     
    } else {
      setItems([...items, inputData])
      setInputData('')
    }
  }

  const deleteItem = (id) => {
    const updatedItem = items.filter((elem, ind)=>{
      return ind !== id;
    })
    setItems(updatedItem)
  }

  const removeAll = () => {
    setItems([])
  }

  useEffect(()=>{
    localStorage.setItem('lists',JSON.stringify(items))
  },[items])



  return (
    <>
      <Grid container justifyContent='center' alignItems='center' direction='column'>
        <Grid item xs={12}>
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, mt: 4 }}
          >
            <InputBase sx={{ ml: 1, flex: 1 }} 
            onChange={(e) => setInputData(e.target.value) } 
            value={inputData}/>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions" onClick={addItem}>
              <AddBoxIcon />
            </IconButton>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ width: 400, mt: 2 }}>
            <Stack spacing={2}>
              {items?.map((elem, ind)=>{
                return(
                  <Typography key={ind}  variant='h6' style={{color: 'blue', background: '#1976d2', padding: '10px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>{elem}
                  <DeleteIcon onClick={()=>deleteItem(ind)}/></Typography>
                )
              })}
            </Stack>
          </Box>
          <Button variant="contained" color='primary' size="large" sx={{mt:2}} onClick={removeAll}>Check List</Button>
        </Grid>
      </Grid>
    </>
  )
}
