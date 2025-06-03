import React from 'react';
import 'App.css';
import HeaderLogo from 'components/HeaderLogo';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {muiTheme} from 'styles/theme';
import Navigator from './Navigator'; 

function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <div className="App">
        <HeaderLogo />
        <Navigator />
      </div>
    </ThemeProvider>
  );
}

export default App;
