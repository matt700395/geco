import React from 'react'
import HeaderTwo from '../../components/header/HeaderTwo'
import Footer from '../../components/footer/Footer'
import BreadCrumb from './BreadCrumb';
import CompetitionDetailArea from './CompetitionDetailArea';

function CompetitionDetail(props) {
  return (
	<>
	 <HeaderTwo/>
     <main>
        <BreadCrumb/>
        <CompetitionDetailArea base = {props.base}/>
	 </main>
	 <Footer/>
   
	</>
  )
}
export default CompetitionDetail;