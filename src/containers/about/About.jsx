import React from 'react'
import './about.css';

function About() {
  return (
    <>
    
      <div className='container ' style={{backgroundColor:'transparent'}} >
             <h1 className='text-center'>About</h1>
             <p>Hello, I'm Ayush. I am a passionate web developer. Currently completed B. Tech in CS(DS). I have hands on experience to built the cutting-edge websites as per your requirements.</p>
    
      <div className='d-flex'>

      <div className='w-25'>
        <img style={{ width: '400px', rotate:'5deg'}} src='./image/file.png' alt='3D' />
        </div>
      <div className='w-75 text-justify '>
        <h1 className='txt'>UI/UX Designer & Web Developer.</h1>
        <p className='txt'>Let me introduce myself in 7 words. Responsible, creative, open-minded, friendly and ambitious web developer. This is how I see myself, and hope you will give me a chance to prove my words in the job, or at least in this interview.</p>
    


     <div className="">
     <ul className="detail  ">
             <li >Name &nbsp;&nbsp;&nbsp;→&nbsp; <b>Ayush maurya</b></li>
             <li >Degree &nbsp; → &nbsp; B-tech</li>
             <li >College &nbsp; → &nbsp; Hi-Tech (Ghaziabad)</li>
             <li >Phone &nbsp;  → &nbsp;+91-9984702049</li>
             <li >Current Address &nbsp;→ &nbsp;Noida sector 15</li>
             <li >D-O-B  &nbsp; &nbsp;  → &nbsp; 20-05-2002</li>
             <li>Branch  &nbsp; &nbsp; → &nbsp; CS-DS</li>
             <li>Univercity&nbsp;&nbsp;→ &nbsp;AKTU(Lucknow)</li>
             <li>Email &nbsp;&nbsp; → &nbsp; ayushmaura2098@gmail.com</li>
             <li>Permanent address &nbsp;&nbsp; → &nbsp; Pratapgarh UP</li>
      </ul>
   
      </div>
      </div>
       
      
      </div>
      </div>
    </>
  )
}

export default About