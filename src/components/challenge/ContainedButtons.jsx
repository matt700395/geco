import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

export default function ContainedButtons(props) {
  return (
    <Stack direction="row" spacing={1}>
      <Button variant="contained">
        <Link to={props.url} style={{ textDecoration: 'none' }}>
          {props.content}
          </Link>
     </Button>
    </Stack>
  );
}