import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function UseEffectWithApi() {

    const [apidata, setApiData] = useState([]);


    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(response=>{
            console.log("response", response);
            if(response.status === 200){
                setApiData(response.data)
            }else{
                alert("API not response")
            }
        }).catch(error=>{
            console.log("error", error)
        })
    }, [])
    


  return (
    <>
        <h2>Get Api Data Using UseEffect Hooks</h2>   
        <TableContainer component={Paper}>
        <Table sx={{ maxWidth: 1000 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell align="left">User ID</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Body</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {apidata.map((row) => (
                <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell align="left">{row.userId}</TableCell>
                <TableCell align="left">{row.title}</TableCell>
                <TableCell align="left">{row.body}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer> 
    </>
  )
}
