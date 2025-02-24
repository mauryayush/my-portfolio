import React from 'react'
// import './style.css';
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg text-white fixed-top" style={{backgroundColor:'#0e800e'}} >
                <div className="container-fluid " >
                
                <div >
                        <NavLink  to ='' className="navbar-brand active text-white" >Ayush</NavLink>
                </div>
                  
                   <button className="navbar-toggler " style={{backgroundColor:"white"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span  className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                       
                       <ul className="navbar-nav  ms-auto mb-2 mb-lg-0 nav-underline ">
                            
                            <li className="nav-item"><NavLink  style={{color:'white'}} className="nav-link"  to ='./about'>About</NavLink></li>
                            <li className="nav-item"><NavLink  style={{color:'white'}} className="nav-link"  to ='./skills'>Skills</NavLink></li>
                            <li className="nav-item"><NavLink  style={{color:'white'}} className="nav-link"  to ='./service'>Service</NavLink></li>
                            <li className="nav-item"><NavLink  style={{color:'white'}} className="nav-link"  to ='./project'>Project</NavLink></li>
                            <li className="nav-item"><NavLink  style={{color:'white'}} className="nav-link"  to ='./resume'>Resume</NavLink></li>
                            <li className="nav-item"><NavLink  style={{color:'white'}} className="nav-link"  to ='./contact'>Contact</NavLink></li>
                     
                        </ul>
                        
                      
                    </div>
                </div>
            </nav>
    </>

  )
}

export default Navbar
