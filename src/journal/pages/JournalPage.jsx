import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Button, Grid,Fab } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { TurnedInNot } from '@mui/icons-material';
import { NothingSelected } from '../views/NothingSelected';
import { NoteView } from '../views/NoteView';
import AddIcon from '@mui/icons-material/Add';


export const JournalPage = () => {
  const drawerWidth = 240;

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              JournalApp
            </Typography>
            <Button color="error" startIcon={<LogoutIcon />}>Login</Button>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            verticalAlign: 'text-bottom',
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',


            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Typography variant="h6"
          sx={{color: 'primary.main'}}
          > 
                  Armando Herrera
          </Typography>
          <Toolbar />
          <Divider />
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>
                  <Grid container>
                    <ListItemText primary={text} />
                    <ListItemText secondary="Deserunt aute elit commodo adipisicing ullamco enim culpa incididunt incididunt cillum ad." />
                  </Grid>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3 }}
        >
          <Toolbar> </Toolbar>
           {/* <NothingSelected />  */}
                <NoteView />
              {/* <Fab color="error" className="fab-container" aria-label="add" onClick={() => console.log('I was accionated')}>
                <AddIcon />
            </Fab> */}
        </Box>
      </Box>

    </>
  )
}
