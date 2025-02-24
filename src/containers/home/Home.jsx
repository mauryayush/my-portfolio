
import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import './home.css';
import { SiLinkedin } from 'react-icons/si';

const About = () => {
  return (
    <>
      <div className='d-flex justify-content-center' style={{ marginTop: '70px' }}>
        <div className='text'>
          <h1 style={{ marginTop: '50px' }}>Hi... there I'm Ayush Maurya</h1>
          <h3>A front End Developer</h3>
          <br />
          <h4 style={{ color: 'hwb(120 22% 23%' }}>LET ME INTRODUCE MYSELF</h4>
          <br />
          <h5>
            I fell in love with programming and I have at least learnt something, I think…
          </h5>
          <h5>I am fluent in classics like HTML, CSS, JavaScript, and React.</h5>
          <h5>My field of interest is building new Web Technologies</h5>
          <br />
          <h2 style={{ color: 'hwb(120 22% 23%' }}>FIND ME ON</h2>
          <p>Feel free to connect with me</p>
          <div className='social-links' style={{ display: 'flex', gap: '20px', marginLeft:'33%' }}>
            <a href='https://www.instagram.com/ayushmaurya689/'><FaInstagram className='instagram' /></a>
            <a href='https://www.linkedin.com/in/ayush-maurya-a90b60255/'><SiLinkedin className='linkedin' /></a>
            <a href='https://github.com/mauryayush'><FaGithub className='github' /></a>
            <a href='https://www.facebook.com/profile.php?id=100057186981722'><FaFacebook className='facebook' /></a>
            <a href='https://x.com/ayushma70140265'><FaTwitter className='twitter' /></a>
          </div>
        </div>
        <div id='image'>
          <img style={{ width: '400px' }} src='./image/3d-img.png' alt='3D' />
        </div>
      </div>
    </>
  );
}

export default About;













