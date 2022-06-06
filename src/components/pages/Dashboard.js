import { Button, CssBaseline, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ChangePassword from './auth/ChangePassword';

export const Dashboard = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        console.log("Logout Clicked");
        navigate('/login')
    }

  return (
    <>
        <CssBaseline/>
        <Grid container>
            <Grid item sm={4} sx={{ backgroundColor: 'gray', p: 5, color: 'white' }}>
                <Typography variant='h2'>Dashboard</Typography>
                <Typography variant='h5'>Email: abc@gmail.com</Typography>
                <Typography variant='h5'>Name: abc</Typography>
                <Button variant='contained' color='secondary' size='large' onClick={handleLogout} sx={{ mt: 8 }}>Logout</Button>
            </Grid>
            <Grid item sm={8}>
                <ChangePassword/>
            </Grid>
        </Grid>
    </>
  )
}
