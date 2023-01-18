import React from 'react'
import { useState, useLayoutEffect  } from 'react';
import { useLocation } from 'react-router';
import axios from "axios";
import { useParams } from 'react-router';
import ApiDashBoxGroup1 from '../../components/dashboardApi/ApiDashBoxGroup1';
import ApiDashBoxGroup2 from '../../components/dashboardApi/ApiDashBoxGroup2';
import ApiDashBoxGroup3 from '../../components/dashboardApi/ApiDashBoxGroup3';
import ApiDashBoxGroup4 from '../../components/dashboardApi/ApiDashBoxGroup4';




function DashboardAPIArea(props) {
  const [ isTitle, setTitle ] = useState('');
  const [ isGroup0, setGroup0 ] = useState([]);
  const [ isGroup1, setGroup1 ] = useState([]);
  const [ isGroup2, setGroup2 ] = useState([]);
  const [ isGroup3, setGroup3 ] = useState([]);
  const location = useLocation();
  const params = useParams();

  useLayoutEffect(() => {
    // console.log('props.base.airtableId', props.base.airtableId)
    console.log('base', props.base)
  //axios 사용
  axios
      .get(
        `https://api.airtable.com/v0/app0QOzYj61gyWZnu/galaxy?filterByFormula=({Name} = ${params.id})`,
        { headers: { Authorization: "Bearer " + "keyouedxPNGaCEXQw" } },
      )
      .then(resp => {
        groupMap(resp.data.records);
      
      })
      .catch(error => console.log(error))

  }, [])


  function groupMap(records){
    // console.log('gruopmap work')
    records.map((row) => {
      //필요한거 1. 제목(title), 코드(name), 대진표상황
      if(row.fields.Name.toString() === params.id){

          // console.log('제목추출완료',row.fields.title);
          // console.log('그룹0',row.fields.group0.split(','));
          setGroup0(row.fields.group0.split(','));
  
          // console.log('그룹1',row.fields.group1.split(','));
          setGroup1(row.fields.group1.split(','));
  
          // console.log('그룹2',row.fields.group2.split(','));
          setGroup2(row.fields.group2.split(','));
  
          // console.log('그룹3',row.fields.group3.split(','));
          setGroup3(row.fields.group3.split(','));

          // console.log('제목', row.fields.title);
          setTitle(row.fields.title);
      }
  }
    )}


  return (
    <>
      <div style= {{paddingTop:'4.5rem'}} ></div>
            <div style={{width:'100%', height:'auto', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <div style={{display : 'flex'}}>

            <ApiDashBoxGroup1 groupNum = {0} data = {isGroup0} base = {props.base} airtableId = {props.base.airtableId}
              />
            <div style= {{padding:'1rem'}} ></div>

            <ApiDashBoxGroup2 groupNum = {1} data = {isGroup1} base = {props.base} airtableId = {props.base.airtableId}
              />
            <div style= {{padding:'1rem'}} ></div>

            <ApiDashBoxGroup3 groupNum = {2} data = {isGroup2} base = {props.base} airtableId = {props.base.airtableId}
            />
            <ApiDashBoxGroup4 groupNum = {3} data = {isGroup3} base = {props.base} airtableId = {props.base.airtableId}
            />
        </div>
      </div>
      <div style= {{paddingBottom:'8rem'}} ></div>

    </>
  )
}

export default DashboardAPIArea;