import React from 'react'
import DashVictoryBox from './DashVictoryBox'


function DashBoxGroup4(props) {

  
  return (
    <>
    <div>
    <div style= {{padding:'5.3rem'}} ></div>
    < DashVictoryBox teamname={props.data[0]} />
    </div>
    </>
  )
}

export default DashBoxGroup4