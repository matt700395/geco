import React from "react";
import DashTextField from "./DashTextField ";
import '../../assets/css/TeamBox.css'

export default function DashBox (props) {

    return(
        <>
            <div style={{display : 'flex'} }>
                <div>
                <DashTextField teamname = {props.teamname}/>
                </div>
                <hr className="hr-solid"></hr>
            </div>
        </>

    );
}






