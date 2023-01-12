import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
//import { CompetitionContext } from "../Component/CompetitionContext";
import BasicTextFields from "../../components/challenge/TextField";
import TeamMatchSelect from "../../components/challenge/TeamMatchSelect";
import MatchingSelect from "../../components/challenge/MatchingSelect";
import GameSelect from "../../components/challenge/GameSelect";

function CompetitionStart (props) {
    const [isGameselect, setGameselect] = useState('test');
    const [isTitle, setTitle ] = useState();
    const [ isTeamCount, setTeamCount ] = useState();
    const [ isPeopleNum, setPeopleNum ] = useState();
    const [ isMatch, setMatch ] = useState();
    //const [ isGetId, setGetId ] = useState();
    const nevigate = useNavigate();

    // const [formValue, setformValue] = useState({
    //     gameSelect: isGameselect,
    //     title: isTitle,
    //     teamCount: isTeamCount,
    //     peopleNum: isPeopleNum,
    //     match: isMatch,
    //   });

    const handleChange = (event) => {
        // setformValue({
        //   ...formValue,
        //   [event.target.name]: event.target.setValue,
        // });
        // console.log("event.target.setValue", event.target.setValue);
        // console.log("event.target.name", event.target.name);
      }
    
      const handleClick = () => {
        // 아래쪽에 추가로 코드 넣어두었음
        console.log('action handleSubmit');
        // console.log('formValue : ',formValue);
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
            nevigate('challenge/date',
            { state: {
              airtableId : airtableId,
            }})

          });
        });
      }

    return (
        <>
            <GameSelect name = 'gameSelect' Inputlabel = '게임종류를 선택해주세요' setValue = {setGameselect} onChange={handleChange}/>
            <div style= {{padding:'0.7rem'}} ></div>
            <BasicTextFields name = 'title' placeholder="대회제목을 입력해주세요" setValue = {setTitle} onChange={handleChange}/>
            <div style= {{padding:'0.7rem'}} ></div>
            <BasicTextFields name = 'teamCount' placeholder="총 참가팀 수를 입력해 주세요" setValue = {setTeamCount} onChange={handleChange} />
            <div style= {{padding:'0.7rem'}} ></div>
            <TeamMatchSelect name = 'peopleNum' Inputlabel = '팀별 인원수를 선택해주세요' setValue = {setPeopleNum} onChange={handleChange} />
            <div style= {{padding:'0.7rem'}} ></div>
            <MatchingSelect name = 'match' Inputlabel = '매칭방법을 선택해주세요'setValue = {setMatch} onChange={handleChange} />
          {/*
          <ContainedButtons onClick={onClick} content ="다음" url='/date' />
          */}
            <button onClick={handleClick}>
                다음
            </button>
        </>
    )
}

export default CompetitionStart;
