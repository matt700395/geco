import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { ContextApi } from '../contextapi/ContextApi';

export default function TeamTextField( props ) {

  const {isTBGJson, setTBGJson}= useContext(ContextApi);

  useEffect(()=>{
    //console.log('usercontext dat : ',data);
    //console.log('teamname : ',props.teamname);
  }, [])

  useEffect(()=>{
    //console.log('isTBGJson1 : ',isTBGJson1);
    console.log('필드 BoxNum : ' ,props.BoxNum);
    console.log('필드 groupNum : ',props.groupNum);
  })
  
  const getValue = (e) => {
    props.setValueTeambox(e.target.value);

    let copy = [...isTBGJson];
    copy[props.groupNum][props.BoxNum] = e.target.value;
    setTBGJson(copy);

  };


  return (
    <>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '10ch' , },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic"
          label= {props.label}
          variant="outlined"
          size = 'small'
          placeholder= {props.teamname}
          inputProps={{style: {fontSize: 10}}}
          onChange={getValue}
        />
      </Box>
    </>



  );
}
