import React from 'react'
import { Button, Grid ,Fab} from '@mui/material'
import StarsIcon from '@mui/icons-material/Stars';
import AddIcon from '@mui/icons-material/Add';

export const NothingSelected = () => {
    return (
        <Grid container
            alignItems="center"
            justifyContent="center"
            sx={{ backgroundColor: 'primary.main', borderRadius: 2, minHeight: '82vh' }}>
            <Grid item>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: 'white',
                        color: 'black',
                        fontSize: 25

                    }} startIcon={<StarsIcon />}
                >
                    Select one or create a new entry
                </Button>
            </Grid>
            <Fab color="error" className="fab-container" aria-label="add" onClick={() => console.log('I was accionated')}>
                <AddIcon />
            </Fab>
        </Grid>
    )
}
