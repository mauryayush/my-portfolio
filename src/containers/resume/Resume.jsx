import React from 'react';

import './resume.css';

const Resume =() => (
  <>
     <div className="container-fluid d-flex justify-content-center" style={{marginTop:'70px'}}>
                <div className="text-white text-center ">
                <h1>My resume</h1>
                 <img className='resImg' style={{ width: '100%', height:'100vh'}} src="./image/Ayush new resume.jpg" alt="Resume" />
                 </div>
     </div> 
  </>
  
);

const App = () => {
  const pdfUrl = './resume/Ayush resume.pdf'; 

  return (
    <div>
  
      <Resume pdfUrl={pdfUrl} />
      <a className='d-flex justify-content-center' href={pdfUrl} download="Ayush resume.pdf">
        <button className='bg-primary text-white'>Download PDF</button>
      </a>
    </div>
  );
};

export default App;
