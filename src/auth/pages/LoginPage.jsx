import { Box, Button, Grid, TextField, Typography } from "@mui/material"
import { minHeight } from "@mui/system"
import GoogleIcon from '@mui/icons-material/Google';
import '../../styles.css';
import { NavLink } from "react-router-dom";
import 'animate.css';
import { useForm } from "../../hooks/useForm";


export const LoginPage = () => {
  const [loginValues, handleInputChange, resetValues] = useForm({
    email: '',
    password: ''
  });
  const {email, password} = loginValues;

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    console.log('Accione');
    console.log(email,password);
  }

  return (
    <div className="animate__animated animate__fadeInLeft">
    <Grid
      container
      direction='column'
      sx={{
        justifyContent: 'center', alignContent: "center", alignItems: 'center',
        backgroundColor: 'primary.main', minHeight: '100vh', padding: 4
      }}>

      <Grid container
        sx={{
          justifyContent: 'center', alignItems: 'center',
          backgroundColor: 'white',
          width: 450,
          borderRadius: 2,
          maxWidth: '100%',
        }}
        
      >

        <form onSubmit={handleSubmitLogin}>
          <Grid item sx={{ textAlign: 'initial' }} xs={12}>
            <h1>Login</h1>
          </Grid>
          <Grid item sx={{ marginBottom: 2 }} xs={12}>
            <TextField autoComplete="off" required fullWidth label="Email" name="email" value={email} onChange={handleInputChange}/>
          </Grid>
          <Grid item sx={{ marginBottom: 2 }}>
            <TextField autoComplete="off" required fullWidth label="Password" name="password" value={password} onChange={handleInputChange}/>
          </Grid>
          <Grid
            container
            direction="row"
            spacing={1}
            sx={{ marginBottom: 2 }}
          >
            <Grid item xs={6}>
              <Button variant="contained" fullWidth color="primary" type="submit">LOGIN</Button>

            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" fullWidth color="primary" startIcon={<GoogleIcon />}>GOOGLE</Button>

            </Grid>
            <Grid container
            justifyContent="flex-end"
            >
            <NavLink className="ancla" to="/auth/register">Crea una cuenta</NavLink>

            </Grid>
          </Grid>
        </form>

      </Grid>
    </Grid>
    </div>
  )
}
