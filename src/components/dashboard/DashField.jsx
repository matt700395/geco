import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields( props ) {

  const getValue = (e) => {
    props.setValue(e.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '30%' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" 
        onChange={getValue} 
        label= {props.label}
        variant="outlined" 
        placeholder={props.placeholder}/>
        
    </Box>
  );
}