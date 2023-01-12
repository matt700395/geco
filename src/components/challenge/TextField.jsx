import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { InputLabel } from '@mui/material';
import FormControl from '@mui/material';

export default function BasicTextFields( props ) {

  const getValue = (e) => {
    props.setValue(e.target.value);
  };

  return (
    <Box
      sx={{ minWidth: '100%' }}
    >
      <TextField id="outlined-basic" 
        onChange={getValue} 
        label= {props.label}
        variant="outlined" 
        placeholder={props.placeholder}
        fullWidth/>
    </Box>
  );
}