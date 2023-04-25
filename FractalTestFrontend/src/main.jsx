import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import {BrowserRouter} from 'react-router-dom'
import {createTheme,ThemeProvider} from '@mui/material/styles';
import {CssBaseline} from "@mui/material";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
            <ThemeProvider theme={createTheme()}>
                <CssBaseline/>
                <App/>
            </ThemeProvider>
      </BrowserRouter>
  </React.StrictMode>
)
