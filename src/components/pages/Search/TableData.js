import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TableData = ({data}) => {
  return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
                <TableCell align="left">First Name</TableCell>
                <TableCell align="left">Last Name</TableCell>
                <TableCell align="left">Email</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {data.map((item) =>(
                <TableRow
                    key={item.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell align="left">{item.first_name}</TableCell>
                    <TableCell align="left">{item.last_name}</TableCell>
                    <TableCell align="left">{item.email}</TableCell>
                </TableRow>
            ))}
        </TableBody>
        </Table>
    </TableContainer>
  )
}

export default TableData