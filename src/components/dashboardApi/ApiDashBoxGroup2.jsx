import { Button, createTheme, ThemeProvider } from '@mui/material'
import React from 'react';



let DBJson_1 = [null,null] ;

const theme = createTheme({

  palette: {
    galaxy: {
      main: '#ff8c00',
    }
  },
  
});


function ApiDashBoxGroup2(props) {

  const postValue = (value)=>{

    props.base('galaxy').update([
      {
        "id": props.airtableId,
        "fields": {
          'group2' : DBJson_1.toString()
      }
    }
    ], function(err, records) {
      if (err) {
        console.error('에러 : ',err);
        return;
      }
      records.forEach(function(record) {
        console.log("group2 : ",record.get('group2'));
      });
    });
  }


  return (
    <>
    <ThemeProvider theme ={theme}>
      <div >
        <div style= {{paddingBottom:'1.5rem'}} ></div>
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
        <div style= {{paddingBottom:'4.5rem'}} ></div>


        <div style={{display : 'flex'}}>
        <Button
            variant="outlined"
            style={{display : 'flex'} }
            id={1}
            color ='galaxy'
            sx={{
              height:'40px'
            }}
          >
            {props.data[1]}
            
          
          </Button>
          <hr className="hr-solid" style= {{position : 'relative', left:'3px', bottom:'0.4rem'}} ></hr>
        </div>
        <div style= {{paddingBottom:'4.5rem'}} ></div>


        <div style={{display : 'flex'}}>
        <Button
            variant="outlined"
            style={{display : 'flex'} }
            id={2}
            color ='galaxy'
            sx={{
              height:'40px'
            }}
          >
            {props.data[2]}
          
          </Button>
          <hr className="hr-solid" style= {{position : 'relative', left:'3px', bottom:'0.4rem'}} ></hr>
        </div>
        <div style= {{paddingBottom:'4.5rem'}} ></div>


        <div style={{display : 'flex'}}>
        <Button
            variant="outlined"
            style={{display : 'flex'} }
            id={3}
            color ='galaxy'
            sx={{
              height:'40px'
            }}
          >
            {props.data[3]}
          
          </Button>
          <hr className="hr-solid" style= {{position : 'relative', left:'3px', bottom:'0.4rem'}} ></hr>
        </div>
      </div>
    </ThemeProvider>
    </>
    
  )
}

export default ApiDashBoxGroup2