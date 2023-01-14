import React from "react";
import DatePickerBox from "../../components/challenge/DatePickerBox";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { LocalizationProvider } from "@mui/x-date-pickers";
import Stack from '@mui/material/Stack';
import { DesktopDatePicker } from "@mui/x-date-pickers";
import TextField  from '@mui/material/TextField';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function CompetitionDateArea (props) {
    const [isStartDate, setStartDate ] = useState();
    const [isEndDate, setEndDate ] = useState();
    const location = useLocation();
    const navigate = useNavigate();
    const [value, setValue] = React.useState(dayjs('2023/01/01'));
    const [value2, setValue2] = React.useState(dayjs('2023/01/01'));

    const [formValue, setformValue] = useState({
        isStartDate: isStartDate,
        isEndDate: isEndDate,
      });

    // const handleChange = (event) => {
    //   console.log('event : ', event);

    //     setformValue({
    //       ...formValue,
    //       [event.target.name]: event.target.setValue,
    //     });
    //     console.log(formValue);
    //     console.log("event.target.setValue", event.target.setValue);
    //     console.log("event.target.name", event.target.name);
    //   }

    const handleChangeDate = (newValue) => {
        console.log('newValue : ', JSON.stringify(newValue));

        let setdate = JSON.stringify(newValue);
        setdate = setdate.split('T', 1);
        setdate = setdate[0].replace(`"`, '');
        
        console.log('consoel : ', setdate);
        
        setValue(newValue);

      };
      const handleChangeDate2 = (newValue) => {
        console.log('newValue : ', JSON.stringify(newValue));

        let setdate = JSON.stringify(newValue);
        setdate = setdate.split('T', 1);
        setdate = setdate[0].replace(`"`, '');

        console.log('consoel2 : ', setdate);
        setValue(newValue);

      };


    const dateSave = () => {
        console.log("isStartDate",isStartDate );
        console.log("isEndDate", isEndDate);

        props.base('galaxy').update([
            {
              "id": location.state.airtableId,
              "fields": {
                "startDate": isStartDate,
                "endDate": isEndDate,
              }
            }
          ], function(err, records) {
            if (err) {
              console.error('에러 : ',err);
              return;
            }
            records.forEach(function(record) {
              console.log("startDate : ",record.get('startDate'));
              console.log("endDate : ", record.get('endDate'));
              navigate('/detail',
              { state: {
                airtableId : record.getId(), //상세페이지로 넘어가면서 

              }})
            });
          });
    }


    const styleButton = {
      marginLeft:'42%',
      marginTop:'5vh'
    }

    return(
        <>
        <section className="shop-area pt-120 pb-90">
          <div className="container">

            {/* <div style={{ display:'flex'}}>
              <DatePickerBox name='startDate' setValue = {setStartDate} onChange = {handleChange}></DatePickerBox>

              <DatePickerBox name = 'endDate' setValue = {setEndDate} onChange = {handleChange}></DatePickerBox>
            </div> */}

          <div >

          <div style = {{display:'flex', marginLeft:'12vw'}}>
            <LocalizationProvider der dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                      label="모집 시작날짜"
                      inputFormat="YYYY/MM/DD"
                      value={value}
                      onChange={handleChangeDate}
                      renderInput={(params) => <TextField {...params} />} 
                    />
              <div style= {{width:'10vw'}} ></div>

                    <DesktopDatePicker
                      label="모집 마감날짜"
                      inputFormat="YYYY/MM/DD"
                      value={value2}
                      onChange={handleChangeDate2}
                      renderInput={(params) => <TextField {...params} />} 
                    />
            </LocalizationProvider>
            </div>
          </div>

            <div className="newsletter-form" style={styleButton}>
              <button onClick={dateSave}>
              Next
              </button>
            </div>

          </div>
        </section>

      </>
    );
}

export default CompetitionDateArea;



