import React from 'react'
import HeaderTwo from '../../components/header/HeaderTwo'
import Footer from '../../components/footer/Footer'
import BreadCrumb from './BreadCrumb';
import TournamentArea from './TournamentArea';



function Tournament(props) {
  return (
	<>
	 <HeaderTwo/>
     <main>
        <BreadCrumb/>
        <TournamentArea base = {props.base}/>
	 </main>
	 <Footer/>
   
	</>
  )
}
export default Tournament;