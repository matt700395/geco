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


function DashBoxGroup2(props) {

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

  const handleClick = (e) => {

    if(e.target.id == 0 || e.target.id == 1){
      console.log('동작함')
      props.setWG1_0(e.target.value);
      DBJson_1[0] = e.target.value;
      
      //변경된 내용을 보내서 db에 적용
      postValue(e.target.value);
    }

    if(e.target.id == 2 || e.target.id == 3){
      props.setWG1_1(e.target.value);
      DBJson_1[1] = e.target.value;
      
      //변경된 내용을 보내서 db에 적용
      postValue(e.target.value);
    }

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
            onClick={handleClick}
            id={0}
            value = {props.winnerG0_0}
            color ='galaxy'
            sx={{
              height:'40px'
            }}
          >
            {props.winnerG0_0}
          
          </Button>
          <hr className="hr-solid" style= {{position : 'relative', left:'3px', bottom:'0.4rem'}} ></hr>
        </div>
        <div style= {{paddingBottom:'4.5rem'}} ></div>


        <div style={{display : 'flex'}}>
        <Button
            variant="outlined"
            style={{display : 'flex'} }
            onClick={handleClick}
            id={1}
            value = {props.winnerG0_1}
            color ='galaxy'
            sx={{
              height:'40px'
            }}
          >
            {props.winnerG0_1}
            
          
          </Button>
          <hr className="hr-solid" style= {{position : 'relative', left:'3px', bottom:'0.4rem'}} ></hr>
        </div>
        <div style= {{paddingBottom:'4.5rem'}} ></div>


        <div style={{display : 'flex'}}>
        <Button
            variant="outlined"
            style={{display : 'flex'} }
            onClick={handleClick}
            id={2}
            value = {props.winnerG0_2}
            color ='galaxy'
            sx={{
              height:'40px'
            }}
          >
            {props.winnerG0_2}
          
          </Button>
          <hr className="hr-solid" style= {{position : 'relative', left:'3px', bottom:'0.4rem'}} ></hr>
        </div>
        <div style= {{paddingBottom:'4.5rem'}} ></div>


        <div style={{display : 'flex'}}>
        <Button
            variant="outlined"
            style={{display : 'flex'} }
            onClick={handleClick}
            id={3}
            value = {props.winnerG0_3}
            color ='galaxy'
            sx={{
              height:'40px'
            }}
          >
            {props.winnerG0_3}
          
          </Button>
          <hr className="hr-solid" style= {{position : 'relative', left:'3px', bottom:'0.4rem'}} ></hr>
        </div>
      </div>
    </ThemeProvider>
    </>
    
  )
}

export default DashBoxGroup2