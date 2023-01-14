import React from "react";
import TeamTextField from "./TeamTextField";
import '../../assets/css/TeamBox.css'
import { useState } from "react";

export default function VictoryBox (props) {
  const [valueTeambox, setValueTeambox ] = useState();


  const getValue = (e) => {// 값이 변해도 TeamTextField에서 onChange가 동작을 안함

      props.setValueGroup(e.target.value); 
    };


    return(
      <TeamTextField
      groupNum={props.groupNum} BoxNum={props.BoxNum} teamname = {props.teamname}
                setValueTeambox = {setValueTeambox} onChange={getValue} />
    );
}


