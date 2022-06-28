import { Box, Button, Grid, TextField, Typography } from "@mui/material"
import { minHeight } from "@mui/system"
import GoogleIcon from '@mui/icons-material/Google';
import '../../styles.css';
import { NavLink } from "react-router-dom";
import CreateIcon from '@mui/icons-material/Create';
import 'animate.css';
import { useForm } from "../../hooks/useForm";
export const RegisterPage = () => {

  const [registerValues, handleInputChange, resetValues] = useForm({
      name: '',
      email: '',
      password: '',
  });
  const {name, email, password} = registerValues;
  const handleSubmitRegister = (e) => {
    e.preventDefault();
    console.log(name,email,password);
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
            width: 465,
            borderRadius: 2,
            maxWidth: '100%',
          }}
        >

          <form onSubmit={handleSubmitRegister}>
            <Grid item sx={{ textAlign: 'initial' }} xs={12}>
              <h1>Register</h1>
            </Grid>
            <Grid item sx={{ marginBottom: 2 }} xs={12}>
              <TextField required autoComplete="off" type="text" value={name} onChange={handleInputChange} name="name" fullWidth label="Complete Name" id="fullWidth" />
            </Grid>
            <Grid item sx={{ marginBottom: 2 }}>
              <TextField required autoComplete="off" type="email" value={email} onChange={handleInputChange} name="email" fullWidth label="Email" />
            </Grid>
            <Grid item sx={{ marginBottom: 2 }}>
              <TextField required autoComplete="off" type="password" value={password} onChange={handleInputChange} name="password" fullWidth label="Password" />
            </Grid>
            <Grid
              container
              direction="row"
              spacing={1}
              sx={{ marginBottom: 2 }}
            >
              <Grid item xs={12}>
                <Button variant="contained"
                type="submit"
                  startIcon={<CreateIcon />}
                  fullWidth color="primary">CREATE ACCOUNT</Button>

              </Grid>
              {/* <Grid item xs={6}>
              <Button variant="contained" fullWidth color="primary" startIcon={<GoogleIcon />}>GOOGLE</Button>

            </Grid> */}
              <Grid container
                justifyContent="flex-end"
              >
                <NavLink className="ancla" to="/auth/login">Do you have an account? Log in</NavLink>

              </Grid>
            </Grid>
          </form>

        </Grid>
      </Grid>
    </div>
  )
}
