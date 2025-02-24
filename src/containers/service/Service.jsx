


import React from 'react';
import './service.css';

function Service() {
  return (
    <>
      <div className="container" style={{ backgroundColor: 'transparent' }}>
        <h1 className="text-center">Service</h1>
      </div>

      <div className="container-fluid d-flex ">
        <div className="text-white text-center image">
          <img src="./image/sfw-1.jpg" alt="Web-Designing" />
          <h1>Web-Designing</h1>
        </div>
        <div className=" text-white text-center image">
          <img  src="./image/sfw-2.jpg" alt="Web-Developer" />
          <h1>Web-Developer</h1>
        </div>
      </div>
    </>
  );
}

export default Service;
