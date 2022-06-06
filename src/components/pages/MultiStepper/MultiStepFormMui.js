import React, { useState } from 'react';
import { Container, Paper, Box, Stepper, Step, StepLabel, Button, Typography, TextField } from '@mui/material';
import { useForm, FormProvider, useFormContext, Controller } from "react-hook-form";

function getSteps() {
    return [
        "Basic Information",
        "Contact Information",
        "Personal Information",
        "Payment"
    ]
}

const BasicForm = () => {
    const { control } = useFormContext();
    return(
        <>
            <Controller
                control={control}
                name="firstName"
                render={({ field })=>(
                    <TextField
                        id="first-name"
                        label="First Name"
                        variant="outlined"
                        placeholder="Enter Your First Name"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />
            <Controller
                control={control}
                name="lastName"
                render={({ field })=>(
                    <TextField
                        id="last-name"
                        label="Last Name"
                        variant="outlined"
                        placeholder="Enter Your Last Name"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />
             <Controller
                control={control}
                name="nickName"
                render={({ field })=>(
                    <TextField
                        id="nick-name"
                        label="Nick Name"
                        variant="outlined"
                        placeholder="Enter Your Nick Name"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />
        </>
    )
}
const ContactForm = () => {
    const { control } = useFormContext();
    return(
        <>
            <Controller
                control={control}
                name="emailAddress"
                render={({ field }) => (
                    <TextField
                        id="email"
                        label="E-mail"
                        variant="outlined"
                        placeholder="Enter Your E-mail Address"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />
            <Controller
                control={control}
                name="phoneNumber"
                render={({ field }) => (
                    <TextField
                        id="phone-number"
                        label="Phone Number"
                        variant="outlined"
                        placeholder="Enter Your Phone Number"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />
            <Controller
                control={control}
                name="alternatePhone"
                render={({ field }) => (
                    <TextField
                        id="alternate-phone"
                        label="Alternate Phone"
                        variant="outlined"
                        placeholder="Enter Your Alternate Phone"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />
        </>
    )
}
const PersonalForm = () => { 
    const { control } = useFormContext();
    return(
        <>
            <Controller
                control={control}
                name="address1"
                render={({ field }) => (
                <TextField
                    id="address1"
                    label="Address 1"
                    variant="outlined"
                    placeholder="Enter Your Address 1"
                    fullWidth
                    margin="normal"
                    {...field}
                />
                )}
            />
            <Controller
                control={control}
                name="address2"
                render={({ field }) => (
                <TextField
                    id="address2"
                    label="Address 2"
                    variant="outlined"
                    placeholder="Enter Your Address 2"
                    fullWidth
                    margin="normal"
                    {...field}
                />
                )}
            />
            <Controller
                control={control}
                name="country"
                render={({ field }) => (
                <TextField
                    id="country"
                    label="Country"
                    variant="outlined"
                    placeholder="Enter Your Country Name"
                    fullWidth
                    margin="normal"
                    {...field}
                />
                )}
            />
        </>
    )
}
const PaymentForm = () => {
    const { control } = useFormContext();
    return(
        <>
            <Controller
                control={control}
                name="cardNumber"
                render={({ field }) => (
                    <TextField
                    id="cardNumber"
                    label="Card Number"
                    variant="outlined"
                    placeholder="Enter Your Card Number"
                    fullWidth
                    margin="normal"
                    {...field}
                    />
                )}
            />
            <Controller
                control={control}
                name="cardMonth"
                render={({ field }) => (
                    <TextField
                    id="cardMonth"
                    label="Card Month"
                    variant="outlined"
                    placeholder="Enter Your Card Month"
                    fullWidth
                    margin="normal"
                    {...field}
                    />
                )}
            />
            <Controller
                control={control}
                name="cardYear"
                render={({ field }) => (
                    <TextField
                    id="cardYear"
                    label="Card Year"
                    variant="outlined"
                    placeholder="Enter Your Card Year"
                    fullWidth
                    margin="normal"
                    {...field}
                    />
                )}
            />
        </>
    )
}

function getStepContent(step) {
    switch(step) {
        case 0:
            return <BasicForm/>;
        case 1: 
            return <ContactForm/>;
        case 2: 
            return <PersonalForm/>;
        case 3: 
            return <PaymentForm/>;
        default: return "unknown step";
    }
}

const MultiStepFormMui = () => {

    const [activeStep, setActiveStep] = useState(0);
    const [skippedSteps, setSkippedSteps] = useState([]);
    const steps = getSteps();
    const methods = useForm({
        defaultValues: {
          firstName: "",
          lastName: "",
          nickName: "",
          emailAddress: "",
          phoneNumber: "",
          alternatePhone: "",
          address1: "",
          address2: "",
          country: "",
          cardNumber: "",
          cardMonth: "",
          cardYear: "",
        },
      });

    const isStepOptional = (step) => {
        return step === 1 || step === 2;
    };

    const isStepSkipped = (step) => {
        return skippedSteps.includes(step);
    };

    const handleNext = (data) => {
        console.log(data);
        if (activeStep == steps.length - 1) {
          fetch("https://jsonplaceholder.typicode.com/comments")
            .then((data) => data.json())
            .then((res) => {
              console.log(res);
              setActiveStep(activeStep + 1);
            });
        } else {
          setActiveStep(activeStep + 1);
          setSkippedSteps(
            skippedSteps.filter((skipItem) => skipItem !== activeStep)
          );
        }
      };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    }

    const handleSkip = () => {
        if(!isStepSkipped(activeStep)){
            setSkippedSteps([...skippedSteps, activeStep])
        }
        setActiveStep(activeStep + 1)
    }

    // const onSubmit = (data) => {
    //     console.log(data)
    // }

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
                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(handleNext)}>
                            {getStepContent(activeStep)}
                            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', pt: 2}}>
                                <Button
                                variant='contained'
                                color='secondary'
                                onClick={handleBack}
                                disabled={ activeStep === 0}
                                >Back</Button>

                                {isStepOptional(activeStep) && (
                                <Button  variant='contained' onClick={handleSkip} color="primary">
                                    Skip
                                </Button>
                                )}

                                <Button
                                variant="outlined"
                                color='secondary'
                                // onClick={handleNext}
                                type="submit"
                                >
                                    { activeStep === steps.length - 1 ? "Finish" : "Next"}
                                </Button>
                            </Box>
                        </form>
                    </FormProvider>
                </>
                )
            }
        </Paper>    
    </Container>
  )
}

export default MultiStepFormMui