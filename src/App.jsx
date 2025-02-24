import './App.css';

import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import About from './containers/about/About';
import Resume from './containers/resume/Resume';
import Skills from './containers/skills/Skills';
import Home from './containers/home/Home';
import Contact from './containers/contact/Contact';
import Navbar from './components/navbar/Navbar';
import Service from './containers/service/Service';
import Project from './containers/project/Project';
import Background from './components/backgroundVdo/Background';
import { useEffect } from 'react';



function App() {
  useEffect(()=>{
    document.title = "My Portfolio"
},[]);
  return (
   
    <div className='App'>
      {/* Particals JS */}
      
      {/* navbar */}
      <Navbar />
     
        <Background/>
      <Routes>
      
        <Route path='' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>


      {/* footer */}

      <Footer/>
    </div>
  )
}

export default App