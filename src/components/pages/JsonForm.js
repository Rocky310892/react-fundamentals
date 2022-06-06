import React from 'react';
import {Container, Grid, Typography, Card, TextField, Button} from "@mui/material";

const data = {
    "form": {
        "section": [
            {
                "order": 1,
                "section_title": "Basic Information",
                "fields": [
                    {
                        "name": "name",
                        "label": "Name",
                        "required": true,
                        "data_type": "Integer",
                        "html_element": "textbox"
                    },
                    {
                        "name": "email",
                        "label": "Email",
                        "hidden": false,
                        "required": true,
                        "data_type": "String",
                        "html_element": "email"
                    },
                    {
                        "name": "phone",
                        "label": "Phone",
                        "required": true,
                        "data_type": "number",
                        "html_element": "textbox"
                    },
                    {
                        "name": "age",
                        "label": "Age",
                        "hidden": false,
                        "options": [],
                        "required": true,
                        "data_type": "number",
                        "html_element": "textbox"  
                    },
                    {
                        "name": "photo",
                        "label": "Photo",
                        "hidden": false,
                        "options": [],
                        "required": true,
                        "data_type": "Image",
                        "html_element": "file"  
                    }
                ]
            }
        ]
    }
}

const onSubmit = (e) =>{
    e.preventDefault();
}

export default function JsonForm() {
  return (
    <>
    <Container>
        <Grid margin={3} textAlign="center">
            <form onSubmit={onSubmit}>
            {
                data.form.section.map(dataForm => {
                    console.log("Data Form", dataForm)
                return(
                        <>
                            <Typography variant='h4' fontWeight="bold">{dataForm.section_title}</Typography>
                            <Card  sx={{'& .MuiTextField-root': { m: 1 }, p:2, mt:4 }}>
                                {dataForm.fields.map(inputData => {
                                    console.log("Input Data", inputData)
                                    return(
                                        
                                            <TextField 
                                            type={inputData.html_element} 
                                            label={inputData.label} 
                                            name={inputData.name} 
                                            required={inputData.required} 
                                            datatype={inputData.data_type}
                                            variant="standard" 
                                            fullWidth 
                                            />
                                        
                                    )
                                })}
                            </Card>
                        </>
                )
                })
            }
            <Button variant="contained">Submit</Button>
            </form>
        </Grid>
    </Container>
    </>
  )
}
