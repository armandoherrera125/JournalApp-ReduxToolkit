import React from 'react'
import { Button, Fab, Grid, TextField, Typography } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/Add';
import {ImageListComponent } from '../components/ImageListComponent';


export const NoteView = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
    >
      <Grid item>
        <Typography variant="h3" sx={{color: 'primary.main'}}>
          April 21 2022
        </Typography>
      </Grid>
      <Grid item>
        <Button 
        sx={{fontSize: 24}}
        startIcon={<SaveIcon />}>
          Save
        </Button>
      </Grid>
      <Grid 
      direction="column"
      container
      spacing={2}
      sx={{marginTop: 2}}
      >
        <Grid item>
          <TextField variant='outlined' label='Title' fullWidth/>
        </Grid>
        <Grid item>
          <TextField variant='outlined' 
            minRows={5}
            multiline 
          label='What happened today?' fullWidth/>
        </Grid>
        <Fab color="error" className="fab-container2" aria-label="add" onClick={() => console.log('I was accionated')}>
                <AddIcon />
            </Fab>
        <Grid item>
          <ImageListComponent />  
        </Grid>

      </Grid>
    </Grid>
  )
}
