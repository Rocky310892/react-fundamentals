import React, { useState } from 'react';
import {TextField, Container, Grid} from '@mui/material/';
import { Users } from './User'
import TableData from './TableData';

const Search = () => {

    const [query, setQuery] = useState("");

    //console.log(Users.filter(user=>user.first_name.toLowerCase().includes("fe")));

    const keys = ["first_name", "last_name", "email"];

    //console.log(Users[0]["email"])

    const search = (data) => {
      return data.filter(
        (item)=>

        keys.some((key) => item[key].toLowerCase().includes(query))

        // item.first_name.toLowerCase().includes(query) ||
        // item.last_name.toLowerCase().includes(query) ||
        // item.email.toLowerCase().includes(query)
      );
    }

  return (
    <Container>
       <Grid justifyContent="center" my={5}>
        <TextField fullWidth type="text" label="Search..." variant="outlined" onChange={e => setQuery(e.target.value)}/>
            {/* {Users.filter(user=>user.first_name.toLowerCase().includes(query)).map((user) => (
                <li className="listItem" key={user.id}>
                    {user.first_name}
                </li>
            ))} */}
       </Grid>
       <Grid>
         <TableData data={search(Users)}/>
       </Grid>
    </Container>
  )
}

export default Search