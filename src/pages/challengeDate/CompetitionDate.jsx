import React from 'react'
import HeaderTwo from '../../components/header/HeaderTwo'
import Footer from '../../components/footer/Footer'
import BreadCrumb from './BreadCrumb';
import CompetitionDateArea from './CompetitionDateArea';

function CompetitionDate(props) {
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