import React from 'react'
import TeamBox from './TeamBox'


function TeamBoxGroup2(props) {



  return (

    <>
    <div>
    <div style= {{padding:'0.8rem'}} ></div>
    < TeamBox teamname="그룹1 우승" groupNum={props.groupNum} BoxNum={0} />
    <div style= {{padding:'2.3rem'}} ></div>
    < TeamBox teamname="그룹2 우승"  groupNum={props.groupNum} BoxNum={1} />
    <div style= {{padding:'2.3rem'}} ></div>
    < TeamBox teamname="그룹3 우승"  groupNum={props.groupNum} BoxNum={2} />
    <div style= {{padding:'2.2rem'}} ></div>
    < TeamBox teamname="그룹4 우승"  groupNum={props.groupNum} BoxNum={3} />
    </div>
    </>

  )
}

export default TeamBoxGroup2