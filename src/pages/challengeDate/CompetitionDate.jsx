import React from 'react'
import HeaderTwo from '../../components/header/HeaderTwo'
import Footer from '../../components/footer/Footer'
import BreadCrumb from './BreadCrumb';
import CompetitionDateArea from './CompetitionDateArea';
import { useEffect } from 'react';

function CompetitionDate(props) {
  useEffect(()=> {

    console.log();
    
  })


  return (
	<>
	 <HeaderTwo/>
     <main>
        <BreadCrumb/>
        <CompetitionDateArea base = {props.base}/>
	 </main>
	 <Footer/>
   
	</>
  )
}
export default CompetitionDate;