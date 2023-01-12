import React from 'react'
import HeaderTwo from '../../components/header/HeaderTwo'
import Footer from '../../components/footer/Footer'
import BreadCrumb from './BreadCrumb';
import ChallengeArea from './ChallengeArea';

function Challenge(props) {
  return (
	<>
	 <HeaderTwo/>
     <main>
        <BreadCrumb/>
        <ChallengeArea base = {props.base}/>
	 </main>
	 <Footer/>
	</>

  )
}

export default Challenge