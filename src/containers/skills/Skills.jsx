

import React from 'react';
import './skills.css';

function Skills() {
  return (
    <div className="container" style={{backgroundColor:'transparent'}}>
      <div className="text-center">
        <h1>Skills</h1>
        <p>
          "Hi, I'm Ayush Maurya, and I'm your go-to web developer for creating dynamic and visually stunning websites. With a background in front-end development, I bring a versatile skill set to every project. I excel in crafting pixel-perfect, responsive designs using HTML, CSS, JavaScript, and React. Whether it's building an intuitive user interface, optimizing website performance, or ensuring cross-browser compatibility, I thrive on turning creative visions into functional websites."
        </p>
      </div>
      <div className="d-flex justify-content-evenly">
        <div className="w-50 p-3">
          <h2 style={{color:'#0e800e'}}>Front-End</h2>
          <h5>HTML</h5>
          <div className="progress w-100" role="progressbar" aria-label="Animated striped example" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '85%',backgroundColor:'#0e800e' }}>85%</div>
          </div>
          <h5>CSS</h5>
          <div className="progress w-100" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '75%',backgroundColor:'#0e800e' }}>75%</div>
          </div>
          <h5>Bootstrap</h5>
          <div className="progress w-100" role="progressbar" aria-label="Animated striped example" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '60%',backgroundColor:'#0e800e' }}>60%</div>
          </div>
          <h5>JavaScript</h5>
          <div className="progress w-100" role="progressbar" aria-label="Animated striped example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '70%',backgroundColor:'#0e800e' }}>70%</div>
          </div>
          <h5>React</h5>
          <div className="progress w-100" role="progressbar" aria-label="Animated striped example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '70%' ,backgroundColor:'#0e800e'}}>70%</div>
          </div>
        </div>
        <div className="w-50 p-3 m-3">
          <h2 style={{color:'#0e800e'}}>Back-End</h2>
          <h5>Java</h5>
          <div className="progress w-100" role="progressbar" aria-label="Animated striped example" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '20%',backgroundColor:'#0e800e' }}>In progress</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
