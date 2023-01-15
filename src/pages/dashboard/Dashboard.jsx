import React from 'react'
import HeaderTwo from '../../components/header/HeaderTwo'
import Footer from '../../components/footer/Footer'
import BreadCrumb from './BreadCrumb';
import DashboardArea from './DashboardArea';



function Dashboard(props) {
  return (
	<>
	 <HeaderTwo/>
     <main>
        <BreadCrumb/>
        <DashboardArea base = {props.base}/>
	 </main>
	 <Footer/>
   
	</>
  )
}
export default Dashboard;