import React from "react";
import ContainedButtons from "../../components/challenge/ContainedButtons";
import DatePickerBox from "../../components/challenge/DatePickerBox";
import { useState } from "react";
import { useLocation } from "react-router";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function CompetitionDate (props) {
    const [isStartDate, setStartDate ] = useState();
    const [isEndDate, setEndDate ] = useState();
    const location = useLocation();
    const navigate = useNavigate();

    const [formValue, setformValue] = useState({
        isStartDate: isStartDate,
        isEndDate: isEndDate,
      });

    useEffect(() => {
        console.log('useEffect 실행');
        console.log('air id :', location.state.airtableId);
    },[])

    const handleChange = (event) => {
        setformValue({
          ...formValue,
          [event.target.name]: event.target.setValue,
        });
        console.log(formValue);
        console.log("event.target.setValue", event.target.setValue);
        console.log("event.target.name", event.target.name);
      }


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

    return(
        <body>
            <div>
                <h1>대회날짜선택페이지입니다</h1>
                    <p>대회 모집일정 선택하기</p>
                    <DatePickerBox name='startDate' setValue = {setStartDate} onChange = {handleChange}></DatePickerBox>
                    <DatePickerBox name = 'endDate' setValue = {setEndDate} onChange = {handleChange}></DatePickerBox>
                    
                    <button onClick = {dateSave}>
                            일정저장
                    </button>

                    <div style={{display : 'flex'}}>

                        <ContainedButtons content = '일정저장'/>
                        <br></br>
                        <ContainedButtons content = '지금바로 개설하기'/>
                    </div>
            </div>
        </body>
    );
}



