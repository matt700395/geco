import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeTwo from './pages/homes/HomeTwo';
import HomeOne from './pages/homes/HomeOne';
import HomeThree from './pages/homes/HomeThree';
import Shop from './pages/store/Shop';
import Contact from './pages/contact/Contact';
import Community from './pages/community/Community';
import Overview from './pages/overview/Overview';
import AboutUs from './pages/aboutpage/aboutuspage/AboutUs';
import Upcoming from './pages/aboutpage/upcoming/Upcoming';
import GameSingle from './pages/aboutpage/singlegame/GameSingle';
import Blogs from './pages/blogs/Blogs';
import BlogDetails from './pages/blogdetails/BlogDetails';
import HomeFour from './pages/homes/HomeFour';
import HomeFive from './pages/homes/HomeFive';
import HomeSix from './pages/homes/HomeSix';
import HomeSeven from './pages/homes/HomeSeven';
import Challenge from './pages/challenge/Challenge';
import CompetitionStart from './pages/challenge/CompetitionArea';
import CompetitionDate from './pages/challengeDate/CompetitionDate';
import CompetitionDetail from './pages/challengeDetail/CompetitionDetail';
import Tournament from './pages/tornament/Tornament';
import Dashboard from './pages/dashboard/Dashboard';
import DashboardAPI from './pages/dashboardAPI/DashboardAPI';
import { useEffect } from 'react';
import Test from './pages/Test';

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyouedxPNGaCEXQw'}).base('app0QOzYj61gyWZnu');

function App() {
  useEffect(()=>{
    console.log('base', base);
  })

  return (
    
    <div className="App">
      
     <Router>
       <Routes>

        <Route path="" element={<HomeTwo/>} />
        <Route path="index-2" element={<HomeOne/>} />
        <Route path="index-3" element={<HomeThree/>} />
        <Route path="shop" element={<Shop/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="community" element={<Community/>} />
        <Route path="overview" element={<Overview/>} />
        <Route path="about-us" element={<AboutUs/>} />
        <Route path="upcoming-games" element={<Upcoming/>} />
        <Route path="game-single" element={<GameSingle/>} />
        <Route path="blogs" element={<Blogs/>} />
        <Route path="blog-details" element={<BlogDetails/>} />
        <Route path="index-4" element={<HomeFour/>} />
        <Route path="index-5" element={<HomeFive/>} />
        <Route path="index-6" element={<HomeSix/>} />
        <Route path="index-7" element={<HomeSeven/>} />
        <Route path="challenge" element={<Challenge  base = {base}/>} />
        
        <Route path="challenge/start" element={<CompetitionStart base = {base}/>} />
        <Route path="date" element={<CompetitionDate base = {base} />} />
        <Route path="tournament" element={<Tournament base = {base}/>} />

        <Route path="detail" element={<CompetitionDetail  base = {base} />} />
        <Route path="dash" element={<Dashboard  base = {base} />} />
        <Route path=":id" element={<DashboardAPI  base = {base} />} />
        <Route path="test" element={<Test/>} />

      </Routes>

     </Router>



     
    </div>
  );
}

export default App;
