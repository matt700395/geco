import React from 'react'
import DashBox from './DashBox'
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

function DashBoxGroup3(props) {

  const postValue = (value)=>{

    props.base('galaxy').update([
      {
        "id": props.airtableId,
        "fields": {
          'group1' : DBJson_2.toString()
      }
    }
    ], function(err, records) {
      if (err) {
        console.error('에러 : ',err);
        return;
      }
      records.forEach(function(record) {
        console.log("group1 : ",record.get('group1'));
      });
    });
  }

  const handleClick = (e) => {
    
    if(e.target.id == 0 || e.target.id == 1){
      console.log('동작함');
      console.log('DBJson_0 1st', DBJson_2);
      props.setWG2_0(e.target.value);
      DBJson_2[0] = e.target.value;
      console.log('DBJson_0 2nd', DBJson_2);
      //변경된 내용을 보내서 db에 적용
      postValue(e.target.value);

      console.log('DBJson_0 3rd', DBJson_2);
    }

  }

  return (
    <>
    <ThemeProvider theme ={theme}>
    <div>
    <div style= {{paddingBottom:'5.5rem'}} ></div>

    <div style={{display : 'flex'}}>
      <Button
          variant="outlined"
          style={{display : 'flex'} }
          onClick={handleClick}
          id={0}
          value = {props.winnerG1_0}
          color ='galaxy'
          sx={{
            height:'40px'
          }}
        >
        {props.winnerG1_0}
      </Button>
      <hr className="hr-solid" style= {{position : 'relative', left:'3px', bottom:'0.4rem'}} ></hr>
    </div>
 

    <div style= {{paddingBottom:'11.5rem'}} ></div>

    <div style={{display : 'flex'}}>
    <Button
            variant="outlined"
            style={{display : 'flex'} }
            onClick={handleClick}
            id={0}
            value = {props.winnerG1_1}
            color ='galaxy'
            sx={{
              height:'40px'
            }}
          >
            {props.winnerG1_1}
          
          </Button>
          <hr className="hr-solid" style= {{position : 'relative', left:'3px', bottom:'0.4rem'}} ></hr>
    </div>
 


    </div>
    </ThemeProvider>
    </>
  )
}

export default DashBoxGroup3