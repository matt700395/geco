import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
//import { CompetitionContext } from "../Component/CompetitionContext";
import BasicTextFields from "../../components/challenge/TextField";
import TeamMatchSelect from "../../components/challenge/TeamMatchSelect";
import MatchingSelect from "../../components/challenge/MatchingSelect";
import GameSelect from "../../components/challenge/GameSelect";
import { useEffect } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";

function CompetitionArea (props) {
    const [isGameselect, setGameselect] = useState('test');
    const [isTitle, setTitle ] = useState();
    const [ isTeamCount, setTeamCount ] = useState();
    const [ isPeopleNum, setPeopleNum ] = useState();
    const [ isMatch, setMatch ] = useState();
    //const [ isGetId, setGetId ] = useState();
    const nevigate = useNavigate();

    useEffect(()=>{
        console.log('base', props.base);
    },[])

    const handleChange = (event) => {
      
      }
    
      const handleClick = () => {
        // 아래쪽에 추가로 코드 넣어두었음
        console.log('action handleSubmit');
        //console.log('formValue : ',formValue);
        console.log('base : ', props.base)
        //에어테이블 api 테이블 추가 요청
        props.base('galaxy').create([
          {
            "fields": {
              "gameSelect": isGameselect,
              "title": isTitle,
              "teamCount": isTeamCount,
              "peopleNum": isPeopleNum,
              "match": isMatch
            }
          }
        ], {typecast: true},
        function(err, records) {
          if (err) {
            console.error(err);
            return;
          }
          records.forEach(function (record) {
            console.log('airtable id : ',record.getId());
            //setGetId(record.getId()); //에어테이블 id수집
            var airtableId = record.getId();
            console.log("airtableId : ", airtableId);
            console.log('record : ', record);

            //버튼 클릭 -> api 요청 -> 페이지 이동
            nevigate('/date',
            { state: {
              airtableId : airtableId,
            }})

          });
        });
      }

      const styleButton = {
        marginLeft:'45%',
        marginTop:'5vh'
      }

    return (
    <>
      <section className="shop-area pt-120 pb-90">
        <div className="container">
          <GameSelect name = 'gameSelect' Inputlabel = '게임종류를 선택해주세요' setValue = {setGameselect} onChange={handleChange}/>
          <div style= {{paddingBottom:'1rem'}} ></div>
          <BasicTextFields name = 'title' placeholder="대회제목을 입력해주세요" setValue = {setTitle} onChange={handleChange}/>
          <div style= {{paddingBottom:'1rem'}} ></div>
          <BasicTextFields name = 'teamCount' placeholder="총 참가팀 수를 입력해 주세요" setValue = {setTeamCount} onChange={handleChange} />
          <div style= {{paddingBottom:'1rem'}} ></div>
          <TeamMatchSelect name = 'peopleNum' Inputlabel = '팀별 인원수를 선택해주세요' setValue = {setPeopleNum} onChange={handleChange} />
          <div style= {{paddingBottom:'1rem'}} ></div>
          <MatchingSelect name = 'match' Inputlabel = '매칭방법을 선택해주세요'setValue = {setMatch} onChange={handleChange} />

          <div className="newsletter-form" style={styleButton}>
              <button onClick={handleClick}>
              Next
              </button>
          </div>
        </div>
        
        {/* <div className="container">
          <div style = {{display:'flex', marginLeft:'12vw'}}>
            <LocalizationProvider der dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                      label="모집 시작날짜"
                      inputFormat="YYYY/MM/DD"
                      value={isStartDate}
                      onChange={handleChangeDate}
                      renderInput={(params) => <TextField {...params} />} 
                    />
              <div style= {{width:'10vw'}} ></div>

                    <DesktopDatePicker
                      label="모집 마감날짜"
                      inputFormat="YYYY/MM/DD"
                      value={isEndDate}
                      onChange={handleChangeDate2}
                      renderInput={(params) => <TextField {...params} />} 
                    />
            </LocalizationProvider>
            </div>


            <div className="newsletter-form" style={styleButton}>
              <button onClick={dateSave}>
              Next
              </button>
            </div>
          </div> */}
      </section>
    </>

    )
}

export default CompetitionArea;
//