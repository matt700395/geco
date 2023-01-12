import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { FormControl } from '@mui/material';

export default function GameSelect(props) {
  const [team, setTeam] = React.useState('');

  const handleChange = (e) => {
    setTeam(e.target.value);
    props.setValue(e.target.value);
  };

  return (
    <>
    <Box sx={{ minWidth: '100%' }}>
       <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{props.Inputlabel}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={team}
            label="팀선택"
            onChange={handleChange}
          >
            <MenuItem value={'fifa'}>피파 온라인 4</MenuItem>
            <MenuItem value={'battle'}>베틀그라운드</MenuItem>
            <MenuItem value={'lol'}>롤</MenuItem>
            <MenuItem value={'valo'}>발로란트</MenuItem>
          </Select>
        </FormControl>


    </Box>
    </>
  );
}
