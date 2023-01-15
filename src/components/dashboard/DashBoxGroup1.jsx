import React from 'react'
import { useEffect } from 'react';
import DashBox from './DashBox';


function DashBoxGroup1(props) {

  useEffect(()=>{

  })

  return (
    <>
      <div>
        < DashBox teamname={props.data[0]}  />
        < DashBox teamname={props.data[1]}  />
        < DashBox teamname={props.data[2]}  />
        < DashBox teamname={props.data[3]}  />
        < DashBox teamname={props.data[4]}  />
        < DashBox teamname={props.data[5]}  />
        < DashBox teamname={props.data[6]}  />
        < DashBox teamname={props.data[7]}  />
      </div>
    </>
  )
}

export default DashBoxGroup1