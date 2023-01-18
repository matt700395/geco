import React from 'react'
import DashVictoryBox from './DashVictoryBox'
import { Button, createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({

  palette: {
    galaxy: {
      main: '#ff8c00',
    }
  },
  
});


function ApiDashBoxGroup4(props) {

  return (
    <>
    <ThemeProvider theme ={theme}>
    <div>
    <div style= {{paddingBottom:'12rem'}} ></div>

    <Button
            variant="outlined"
            style={{display : 'flex'} }
            id={0}
            color ='galaxy'
            sx={{
              height:'40px'
            }}
            disableElevation
            disableRipple 
          >
            {props.data[0]}
          
          </Button>
    </div>
    </ThemeProvider>
    </>
  )
}

export default ApiDashBoxGroup4