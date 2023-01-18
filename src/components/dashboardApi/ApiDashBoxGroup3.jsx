import React from 'react'
import DashBox from './ApiDashBox'
import { Button, createTheme, ThemeProvider } from '@mui/material'


const theme = createTheme({

  palette: {
    galaxy: {
      main: '#ff8c00',
    }
  },
  
});
//color ='galaxy'

let DBJson_2 = [null] ;

function ApiDashBoxGroup3(props) {


  return (
    <>
    <ThemeProvider theme ={theme}>
    <div>
    <div style= {{paddingBottom:'5.5rem'}} ></div>

    <div style={{display : 'flex'}}>
      <Button
          variant="outlined"
          style={{display : 'flex'} }
          id={0}
          color ='galaxy'
          sx={{
            height:'40px'
          }}
        >
           {props.data[0]}
      </Button>
      <hr className="hr-solid" style= {{position : 'relative', left:'3px', bottom:'0.4rem'}} ></hr>
    </div>
 

    <div style= {{paddingBottom:'11.5rem'}} ></div>

    <div style={{display : 'flex'}}>
    <Button
            variant="outlined"
            style={{display : 'flex'} }
            id={0}
            color ='galaxy'
            sx={{
              height:'40px'
            }}
          >
            {props.data[1]}
          
          </Button>
          <hr className="hr-solid" style= {{position : 'relative', left:'3px', bottom:'0.4rem'}} ></hr>
    </div>

    </div>
    </ThemeProvider>
    </>
  )
}

export default ApiDashBoxGroup3