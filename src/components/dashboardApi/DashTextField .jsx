import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';


export default function DashTextField( props ) {
  const [ isdefault, setDefault] = useState('');

  useEffect(()=>{
    setDefault(props.teamname);
  })

  return (
    <>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '10ch' },
        }}
        noValidate
        autoComplete="off"
      >

      <TextField 
        required
        id="outlined-basic"
          label= {props.label}
          variant="outlined"
          size = 'small'
          value={isdefault}
        />

      </Box>
    </>



  );
}
// 