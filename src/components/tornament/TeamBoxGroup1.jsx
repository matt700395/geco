import React from 'react'
import TeamBox from './TeamBox'
import { useState } from 'react';
import { useEffect } from 'react';


function TeamBoxGroup1(props) {
  const [valueGroup, setValueGroup ] = useState();

  useEffect(()=>{
    //console.log('groupName : ',props.groupName);
  })

  const getValue = (e) => {
    props.groupValue(e.target.value);
    //props.setTBGJson1(e.target.teamname);
  };

  return (
    <>
      <div>
        < TeamBox groupNum={props.groupNum} BoxNum={0} teamname="팀1"  setValueGroup = {setValueGroup} onChange={getValue} />
        < TeamBox groupNum={props.groupNum} BoxNum={1} teamname="팀2"  setValueGroup = {setValueGroup} onChange={getValue} />
        < TeamBox groupNum={props.groupNum} BoxNum={2} teamname="팀3"  setValueGroup = {setValueGroup} onChange={getValue} />
        < TeamBox groupNum={props.groupNum} BoxNum={3} teamname="팀4"  setValueGroup = {setValueGroup} onChange={getValue} />
        < TeamBox groupNum={props.groupNum} BoxNum={4} teamname="팀5"  setValueGroup = {setValueGroup} onChange={getValue} />
        < TeamBox groupNum={props.groupNum} BoxNum={5} teamname="팀6"  setValueGroup = {setValueGroup} onChange={getValue} />
        < TeamBox groupNum={props.groupNum} BoxNum={6} teamname="팀7"  setValueGroup = {setValueGroup} onChange={getValue} />
        < TeamBox groupNum={props.groupNum} BoxNum={7} teamname="팀8"  setValueGroup = {setValueGroup} onChange={getValue} />
      </div>
    </>
  )
}

export default TeamBoxGroup1