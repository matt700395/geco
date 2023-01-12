import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function MatchingSelect(props) {
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
          onChange={handleChange}
        >
          <MenuItem value={'handle'}>수동</MenuItem>
          <MenuItem value={'random'}>랜덤</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
