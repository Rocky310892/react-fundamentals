import React, { useState } from 'react';
import { Container, Paper, Box, Stepper, Step, StepLabel, Button, Typography, TextField } from '@mui/material';



function getSteps() {
    return [
        "Basic Information",
        "Contact Information",
        "Personal Information",
        "Payment"
    ]
}

function getStepContent(step) {
    switch(step) {
        case 0:
            return(
                <>
                    <TextField
                        id="first-name"
                        label="First Name"
                        variant="outlined"
                        placeholder="Enter Your First Name"
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        id="last-name"
                        label="Last Name"
                        variant="outlined"
                        placeholder="Enter Your Last Name"
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        id="nick-name"
                        label="Nick Name"
                        variant="outlined"
                        placeholder="Enter Your Nick Name"
                        fullWidth
                        margin="normal"
                    />
                </>
            );
        case 1: 
            return(
                <>
                    <TextField
                        id="email"
                        label="E-mail"
                        variant="outlined"
                        placeholder="Enter Your E-mail Address"
                        fullWidth
                        margin="normal"
                    />
                     <TextField
                        id="phone-number"
                        label="Phone Number"
                        variant="outlined"
                        placeholder="Enter Your Phone Number"
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        id="alternate-phone"
                        label="Alternate Phone"
                        variant="outlined"
                        placeholder="Enter Your Alternate Phone"
                        fullWidth
                        margin="normal"
                    />
                </>
            );
        case 2: 
            return(
                <>
                    <TextField
                        id="address1"
                        label="Address 1"
                        variant="outlined"
                        placeholder="Enter Your Address 1"
                        fullWidth
                        margin="normal"
                    />
                     <TextField
                        id="address2"
                        label="Address 2"
                        variant="outlined"
                        placeholder="Enter Your Address 2"
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        id="country"
                        label="Country"
                        variant="outlined"
                        placeholder="Enter Your Country Name"
                        fullWidth
                        margin="normal"
                    />
                </>
            );
        case 3: 
            return(
                <>
                    <TextField
                        id="cardNumber"
                        label="Card Number"
                        variant="outlined"
                        placeholder="Enter Your Card Number"
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        id="cardMonth"
                        label="Card Month"
                        variant="outlined"
                        placeholder="Enter Your Card Month"
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        id="cardYear"
                        label="Card Year"
                        variant="outlined"
                        placeholder="Enter Your Card Year"
                        fullWidth
                        margin="normal"
                    />
                </>
            );
        default: return "unknown step";
    }
}

const MultiStepFormMui = () => {

    const steps = getSteps();

    const [activeStep, setActiveStep] = useState(0);
    const [skippedSteps, setSkippedSteps] = useState([]);

    const isStepOptional = (step) => {
        return step === 1 || step === 2;
    };

    const isStepSkipped = (step) => {
        return skippedSteps.includes(step);
    };

    const handleNext = () => {
        setActiveStep(activeStep + 1);
        setSkippedSteps(skippedSteps.filter((skipitem) => skipitem === activeStep))
    }

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    }

    const handleSkip = () => {
        if(!isStepSkipped(activeStep)){
            setSkippedSteps([...skippedSteps, activeStep])
        }
        setActiveStep(activeStep + 1)
    }

  return (
    <Container component={Box} mt={4}>
        <Paper component={Box} p={3}>
            <Stepper alternativeLabel activeStep={activeStep}>

                {
                    steps.map((step, index) => {
                        const labelProps = {};
                        const stepProps = {};
                        if(isStepOptional(index)){
                            labelProps.optional = (<Typography variant='caption' align="center" sx={{display:"block"}}>optional</Typography>);
                        }
                        if(isStepSkipped(index)){
                            stepProps.completed = false
                        }
                        return(
                            <Step {...stepProps} key={index}>
                                <StepLabel {...labelProps}>{step}</StepLabel>
                            </Step>
                        )
                    })
                }
            </Stepper>
           
            {
                activeStep === steps.length ? (
                    <Typography variant='h4' textAlign="center" py={3}>Thank you</Typography>
                ) : (
                <>
                     <form>
                        {getStepContent(activeStep)}
                    </form>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2}}>
                        <Button
                        variant='contained'
                        color='secondary'
                        onClick={handleBack}
                        disabled={ activeStep === 0}
                        >Back</Button>

                        {isStepOptional(activeStep) && (
                        <Button color="inherit" onClick={handleSkip}>
                             Skip
                        </Button>
                        )}

                        <Button
                        variant="outlined"
                        color='secondary'
                        onClick={handleNext}
                        >
                            { activeStep === steps.length - 1 ? "Finish" : "Next"}
                        </Button>
                    </Box>
                </>
                )
            }
        </Paper>    
    </Container>
  )
}

export default MultiStepFormMui