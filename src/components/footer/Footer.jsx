import React from "react";
import './footer.css';

import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
   <>
    <div className="container-fluid d-flex text-center card-footer text-white" style={{backgroundColor:'#0e800e'}}>
      <div className="col-5"><h3>Designed and Developed by Ayush maurya</h3></div>
      <div className="col-4"><h3>Copyright © {year} AM</h3></div>
      <div className="col-3 ">   
        <ul className="footer-icons d-flex justify-content-center" style={{listStyle:'none', gap:'10%'}}>
          <li className="social-icons">
            <a
              href="https://github.com/mauryayush"
              style={{ color: "white" }}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://x.com/ayushma70140265"
              style={{ color: "white" }}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.linkedin.com/in/ayush-maurya-a90b60255/"
              style={{ color: "white" }}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.instagram.com/ayushmaurya689/"
              style={{ color: "white" }}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>   
      </div> 
    </div>
   </>
  );
}

export default Footer;
