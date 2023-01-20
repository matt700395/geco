import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';
import { Navigate } from 'react-router-dom';

function Test() {

    // const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
    // const [isStartDate, setStartDate ] = React.useState(dayjs('2023-01-01T21:11:54'));

    // const handleChange = (newValue) => {
    //   setValue(newValue);
    //   console.log()
    // };

    // const handleChangeDate = (newValue) => {
    //     setStartDate(newValue);
    //     console.log('newValue : ', JSON.stringify(newValue));
  
    //     let setdate = JSON.stringify(newValue);
    //     setdate = setdate.split('T', 1);
    //     setdate = setdate[0].replace(`"`, '').replace(/-/g, '.');
    //     console.log('consoel : ', setdate);
    //   };

    const handleClick = () => {
      navigator.clipboard.writeText(window.location.href);
      let string = window.location.hostname;
      // console.log(string);

      console.log(window.location.hostname);
    }

  return (
    <>
    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>

        <DesktopDatePicker
            label="Date desktop"
            inputFormat="MM/DD/YYYY"
            value={isStartDate}
            onChange={handleChangeDate}
            renderInput={(params) => <TextField {...params} />}
        />

        <DesktopDatePicker
            label="Date desktop"
            inputFormat="MM/DD/YYYY"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
        />
    </LocalizationProvider> */}

    
    <button
      onClick={handleClick}
    >
      버튼
    </button>

    
    </>
  )
}

export default Test