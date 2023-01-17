import React from 'react'
import HeaderTwo from '../../components/header/HeaderTwo'
import Footer from '../../components/footer/Footer'
import BreadCrumb from './BreadCrumb';
import TournamentArea from './TournamentArea';



function Tournament(props) {


  return (
	<>

    <HeaderTwo/>
    <main >
        <BreadCrumb/>
        <div>
          <TournamentArea base = {props.base}/>
        </div>

    </main>
    <Footer/>

	</>
  )
}
export default Tournament;