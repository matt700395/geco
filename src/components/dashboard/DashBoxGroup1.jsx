import { Button, createTheme, ThemeProvider } from '@mui/material';
import React from 'react'
import { useEffect } from 'react';
import DashBox from './DashBox';

let DBJson_0 = [null,null,null,null] ;

const theme = createTheme({

  palette: {
    galaxy: {
      main: '#ff8c00',
    }
  },
  
});


function DashBoxGroup1(props) {

  useEffect(()=>{

  })

  const postValue = (value)=>{

    props.base('galaxy').update([
      {
        "id": props.airtableId,
        "fields": {
          'group1' : DBJson_0.toString()
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
      console.log('DBJson_0 1st', DBJson_0);
      props.setWG0_0(e.target.value);
      DBJson_0[0] = e.target.value;
      console.log('DBJson_0 2nd', DBJson_0);
      //변경된 내용을 보내서 db에 적용
      postValue(e.target.value);

      console.log('DBJson_0 3rd', DBJson_0);
    }

    if(e.target.id == 2 || e.target.id == 3){
      console.log('DBJson_0 1st', DBJson_0)

      props.setWG0_1(e.target.value);
      DBJson_0[1] = e.target.value;
      console.log('DBJson_0 2nd', DBJson_0)

      postValue(e.target.value);
      console.log('DBJson_0 3rd', DBJson_0)
      
    }

    if(e.target.id == 4 || e.target.id == 5){
      console.log('DBJson_0 1st', DBJson_0)

      props.setWG0_2(e.target.value);
      DBJson_0[2] = e.target.value;
      console.log('DBJson_0 2nd', DBJson_0)

      postValue(e.target.value);
      console.log('DBJson_0 3rd', DBJson_0)

    }

    if(e.target.id == 6 || e.target.id == 7){
      console.log('DBJson_0 1st', DBJson_0)

      props.setWG0_3(e.target.value);
      DBJson_0[3] = e.target.value;
      console.log('DBJson_0 2nd', DBJson_0)

      postValue(e.target.value);
      console.log('DBJson_0 3rd', DBJson_0)
    }

  }

  return (
    <>
    <ThemeProvider theme ={theme} >
      <div >
        <div style={{display : 'flex'}}>
          <Button
            variant="outlined"
            style={{display : 'flex'} }
            onClick={handleClick}
            id={0}
            value = {props.data[0]}
            color ='galaxy'
            sx={{
              height:'40px'
            }}
          >
            {props.data[0]}
          
          </Button>

           <hr className="hr-solid" style= {{position : 'relative', left:'3px'}} ></hr>
        </div>
        <div style= {{paddingBottom:'0.3rem'}} ></div>

        <div style={{display : 'flex'}}>
          <Button 
            variant="outlined"
            style={{display : 'flex'} }
            id={1}
            value = {props.data[1]}
            onClick={handleClick}
            color ='galaxy'
            sx={{
              height:'40px'
            }}
          >

            {props.data[1]}

            </Button>
           <hr className="hr-solid" style= {{position : 'relative', left:'3px', bottom:'0.4rem'}} ></hr>
        </div>
        <div style= {{paddingBottom:'1.3rem'}} ></div>
        <div style={{display : 'flex'}}>
          <Button
            variant="outlined"
            style={{display : 'flex'}}
            id={2}
            value = {props.data[2]}
            onClick={handleClick}
            color ='galaxy'
            sx={{
              height:'40px'
            }}
            >
              {props.data[2]}
          </Button>
          <hr className="hr-solid" style= {{position : 'relative', left:'3px', bottom:'0.4rem'}} ></hr>
        </div>
        <div style= {{paddingBottom:'0.3rem'}} ></div>
        <div style={{display : 'flex'}}>
          <Button variant="outlined"
            style={{display : 'flex'}}
            id={3}
            value = {props.data[3]}
            onClick={handleClick}
            color ='galaxy'
            sx={{
              height:'40px'
            }}
            >
              {props.data[3]}
          </Button>
          <hr className="hr-solid" style= {{position : 'relative', left:'3px', bottom:'0.4rem'}} ></hr>
        </div>
        <div style= {{paddingBottom:'1.3rem'}} ></div>
        <div style={{display : 'flex'}}>
          <Button
            variant="outlined"
            style={{display : 'flex'}}
            id={4}
            value = {props.data[4]}
            onClick={handleClick}
            color ='galaxy'
            sx={{
              height:'40px'
            }}
            >
              {props.data[4]}
              </Button>
              <hr className="hr-solid" style= {{position : 'relative', left:'3px', bottom:'0.4rem'}} ></hr>
        </div>
        <div style= {{paddingBottom:'0.3rem'}} ></div>
        <div style={{display : 'flex'}}>
          <Button variant="outlined"
          style={{display : 'flex'}}
          id={5}
          value = {props.data[5]}
          onClick={handleClick}
          color ='galaxy'
          sx={{
            height:'40px'
          }}
          >
            {props.data[5]}
            </Button>
            <hr className="hr-solid" style= {{position : 'relative', left:'3px', bottom:'0.4rem'}} ></hr>
        </div>
        <div style= {{paddingBottom:'1.3rem'}} ></div>
        <div style={{display : 'flex'}}>
          <Button
          variant="outlined"
          style={{display : 'flex'}}
          id={6}
          value = {props.data[6]}
          onClick={handleClick}
          color ='galaxy'
          sx={{
            height:'40px'
          }}
          >
            {props.data[6]}
          </Button>
          <hr className="hr-solid" style= {{position : 'relative', left:'3px', bottom:'0.4rem'}} ></hr>
        </div>
        <div style= {{paddingBottom:'0.3rem'}} ></div>
        <div style={{display : 'flex'}}>
          <Button
            variant="outlined"
            style={{display : 'flex'}}
            id={7}
            value = {props.data[7]}
            onClick={handleClick}
            color ='galaxy'
            sx={{
              height:'40px'
            }}
          >
            {props.data[7]}
          </Button>
          <hr className="hr-solid" style= {{position : 'relative', left:'3px', bottom:'0.4rem'}} ></hr>
        </div>
      </div>
      </ThemeProvider>
    </>
  )
}

export default DashBoxGroup1