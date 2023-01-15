import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: '순서', width: 70 },
  { field: 'name', headerName: '개설자', width: 100},
  { field: 'code', headerName: '대회코드', width: 300 },
  { field: 'title', headerName: '대회명', width: 600 },
];

const rows = [
  { id: 1, name : "개설자1", code: 1234, title: '대회명1' },
  { id: 2, name : "개설자2", code: 1234, title: '대회명2' },
  { id: 3, name : "개설자3", code: 1234, title: '대회명3' },
  { id: 4, name : "개설자4", code: 1234, title: '대회명4' },
  { id: 5, name : "개설자5", code: 1234, title: '대회명5' },
  { id: 6, name : "개설자6", code: 1234, title: '대회명6' },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}


