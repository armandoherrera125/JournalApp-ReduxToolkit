import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material';
import { darkTheme } from './theme';

export const AppTheme = ({children}) => {
  return (
      <ThemeProvider theme={darkTheme}>
          <CssBaseline/>
          {children}
      </ThemeProvider>
  )
}
