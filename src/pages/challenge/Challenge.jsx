import React from 'react'
import HeaderTwo from '../../components/header/HeaderTwo'
import Footer from '../../components/footer/Footer'
import BreadCrumb from './BreadCrumb';
import CompetitionArea from './CompetitionArea';

function Challenge(props) {
  return (
	<>
	 <HeaderTwo/>
     <main>
        <BreadCrumb/>
        <CompetitionArea base={props.base} />
	 </main>
	 <Footer/>
	</>

  )
}

export default Challenge;
