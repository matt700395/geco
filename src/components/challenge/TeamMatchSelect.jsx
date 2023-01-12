import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function TeamMatchSelect(props) {
  const [team, setTeam] = React.useState('');

  const handleChange = (e) => {
    setTeam(e.target.value);
    props.setValue(e.target.value);
  };

  return (
    <Box sx={{ minWidth: '100%' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.Inputlabel}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={team}
          label="팀선택"
          onChange={handleChange}>
          <MenuItem value={1}>1 vs 1</MenuItem>
          <MenuItem value={2}>2 vs 2</MenuItem>
          <MenuItem value={3}>3 vs 3</MenuItem>
          <MenuItem value={4}>4 vs 4</MenuItem>
          <MenuItem value={5}>5 vs 5</MenuItem>
          <MenuItem value={6}>6 vs 6</MenuItem>
          <MenuItem value={7}>7 vs 7</MenuItem>
          <MenuItem value={8}>8 vs 8</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

