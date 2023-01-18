import React from 'react'
import { useState, useEffect, useLayoutEffect  } from 'react';
import { useLocation } from 'react-router';
import DashBoxGroup1 from '../../components/dashboard/DashBoxGroup1';
import DashBoxGroup2 from '../../components/dashboard/DashBoxGroup2';
import DashBoxGroup3 from '../../components/dashboard/DashBoxGroup3';
import DashBoxGroup4 from '../../components/dashboard/DashBoxGroup4';


function DashboardArea(props) {
  const [value, setValue ] =useState();
  const [record , setRecord ] = useState('');
  const [ isTitle, setTitle ] = useState('');
  const [ isGroup0, setGroup0 ] = useState([]);
  const [ isGroup1, setGroup1 ] = useState([]);
  const [ isGroup2, setGroup2 ] = useState([]);
  const [ isGroup3, setGroup3 ] = useState([]);
  const [ isName, setName ] = useState();
  const location = useLocation();

  //우승자 셋팅 값 Group1
  const [ winnerG0_0, setWG0_0 ] = useState('');
  const [ winnerG0_1, setWG0_1 ] = useState('');
  const [ winnerG0_2, setWG0_2 ] = useState('');
  const [ winnerG0_3, setWG0_3 ] = useState('');


  //우승자 셋팅 값 Group2
  const [ winnerG1_0, setWG1_0 ] = useState('');
  const [ winnerG1_1, setWG1_1 ] = useState('');


  //우승자 셋팅 값 Group3
  const [ winnerG2_0, setWG2_0 ] = useState('');



  useLayoutEffect(() => {
    console.log('effect 실행');
    props.base('galaxy')//여기 적는게 airtable 의 table 이름임
    .select({view: 'Grid view'})
    .eachPage((records) => {
      console.log(records);//api 요청해서 받아온 records가 어떤 형태인지 확인했음
      console.log("레코드 입력")
      groupMap(records);
      console.log('레코드 입력 완료');

    },  function done(err) {
      if (err) { console.error(err); return; }
  })
  }, [])


  function groupMap(records){

    records.map((row) => {
      //필요한거 1. 제목(title), 코드(name), 대진표상황
      if(row._rawJson.id === location.state.airtableId){
          console.log('제목추출완료',row._rawJson.fields.title);
          console.log('그룹0',row._rawJson.fields.group0.split(','));
          setGroup0(row._rawJson.fields.group0.split(','));
  
          console.log('그룹1',row._rawJson.fields.group1.split(','));
          setGroup1(row._rawJson.fields.group1.split(','));
  
          console.log('그룹2',row._rawJson.fields.group2.split(','));
          setGroup2(row._rawJson.fields.group2.split(','));
  
          console.log('그룹3',row._rawJson.fields.group3.split(','));
          setGroup3(row._rawJson.fields.group3.split(','));

          console.log('제목', row._rawJson.fields.title);
          setTitle(row._rawJson.fields.title);
      }
  }
    )}


  return (
    <>
{/* 
      <p>대회제목 : {isTitle}</p>
      <p>대회코드 : {props.base.airtableId}</p> */}
    <div style= {{paddingTop:'4.5rem'}} ></div>
      <div style={{width:'100%', height:'auto', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <div style={{display : 'flex'}}>

            <DashBoxGroup1 groupNum = {0} data = {isGroup0} base = {props.base} airtableId = {location.state.airtableId}
              setWG0_0 = {setWG0_0} setWG0_1 = {setWG0_1} setWG0_2 = {setWG0_2} setWG0_3 = {setWG0_3} />
            <div style= {{padding:'1rem'}} ></div>

            <DashBoxGroup2 groupNum = {1} data = {isGroup1} base = {props.base} airtableId = {location.state.airtableId}
              winnerG0_0 = {winnerG0_0} winnerG0_1 = {winnerG0_1} winnerG0_2 = {winnerG0_2} winnerG0_3 = {winnerG0_3}
              setWG1_0 = {setWG1_0} setWG1_1 = {setWG1_1}
              />
            <div style= {{padding:'1rem'}} ></div>
            <DashBoxGroup3 groupNum = {2} data = {isGroup2} base = {props.base} airtableId = {location.state.airtableId}
              winnerG1_0 = {winnerG1_0} winnerG1_1 = {winnerG1_1}
              setWG2_0 = {setWG2_0}
            />
            <DashBoxGroup4 groupNum = {3} data = {isGroup3} base = {props.base} airtableId = {location.state.airtableId}
              winnerG2_0={winnerG2_0}
            />
        </div>
      </div>
      <div style= {{paddingBottom:'8rem'}} ></div>
    </>
  )
}

export default DashboardArea;