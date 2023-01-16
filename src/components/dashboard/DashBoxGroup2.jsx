import React from 'react'
import DashBox from './DashBox'


function DashBoxGroup2(props) {


  return (
    <>
    <div>
    <div style= {{padding:'0.8rem'}} ></div>
    < DashBox teamname={props.data[0]}  />
    <div style= {{padding:'1.5rem'}} ></div>
    < DashBox teamname={props.data[1]}  />
    <div style= {{padding:'1.5rem'}} ></div>
    < DashBox teamname={props.data[2]}  />
    <div style= {{padding:'1.5rem'}} ></div>
    < DashBox teamname={props.data[3]}  />
    </div>
    </>
  )
}

export default DashBoxGroup2