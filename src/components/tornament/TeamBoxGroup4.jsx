import React from 'react'
import TeamBox from './TeamBox'


function TeamBoxGroup4(props) {


  return (
    <>
    <div>
      <div style= {{padding:'2.7rem'}} ></div>
      < TeamBox teamname="준우승 1팀" groupNum={props.groupNum} BoxNum={0} />
      <div style= {{padding:'6.2rem'}} ></div>
      < TeamBox teamname="준우승 2팀"  groupNum={props.groupNum} BoxNum={1} />
    </div>

    </>
  )
}

export default TeamBoxGroup4