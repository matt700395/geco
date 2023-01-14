import React from "react";
import '../../assets/css/TeamBox.css'
import { useState, useEffect } from "react";
import TeamTextField from './TeamTextField';

export default function TeamBox (props) {

    const [valueTeambox, setValueTeambox ] = useState();


    const getValue = (e) => {// 값이 변해도 TeamTextField에서 onChange가 동작을 안함

        props.setValueGroup(e.target.value); 
      };

    return(
        <>
            <div style={{display : 'flex'} }>
                <div>
                <TeamTextField groupNum={props.groupNum} BoxNum={props.BoxNum} teamname = {props.teamname}
                setValueTeambox = {setValueTeambox} onChange={getValue}/>
                </div>
                <hr className="hr-solid"></hr>
            </div>
        </>

    );
}






