import React from 'react'
import HeaderTwo from '../../components/header/HeaderTwo'
import Footer from '../../components/footer/Footer'
import BreadCrumb from './BreadCrumb';
import DashboardAPIArea from './DashboardAPIArea';

function DashboardAPI(props) {
  return (
	<>
	 <HeaderTwo/>
     <main>
        <BreadCrumb/>
        <DashboardAPIArea base = {props.base}/>
	 </main>
	 <Footer/>
   
	</>
  )
}
export default DashboardAPI;