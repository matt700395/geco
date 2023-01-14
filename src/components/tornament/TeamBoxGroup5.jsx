import React from 'react'
import VictoryBox from './VictoryBox'


function TeamBoxGroup5(props) {

  
  return (
    <>
    <div>
    <div style= {{padding:'5.3rem'}} ></div>
    < VictoryBox teamname="우승" groupNum={props.groupNum} BoxNum={0} />
    </div>
    </>
  )
}

export default TeamBoxGroup5