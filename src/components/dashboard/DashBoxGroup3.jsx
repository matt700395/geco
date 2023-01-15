import React from 'react'
import DashBox from './DashBox'


function DashBoxGroup3(props) {


  return (
    <>
    <div>
    <div style= {{padding:'2.5rem'}} ></div>
    < DashBox teamname={props.data[0]}  />
    <div style= {{padding:'4.5rem'}} ></div>
    < DashBox teamname={props.data[1]}  />
    </div>
    </>
  )
}

export default DashBoxGroup3