import React from 'react'
import './project.css';
function Project() {
  return (
    <>
    <div className="container" style={{ backgroundColor: 'transparent' }}>
           <h1 className='text-center pr' >Project</h1>
      <br/>
           <div className="container-fluid d-flex ">
                <div className="text-white text-center pro-image col-5">
                 <img style={{ width: '90%' }} src="./image/hacker.jpg" alt="my porfolio" />
                 </div>
                 <div className='col-7' >
                     <h1 className='txt'>This portfolio</h1>
                     <p className='txt'>I designed this portfolio . this is a responsive design, and for designing this I used HTML, CSS, React and Bootstrap as Front-End technology.

                            </p>
                 </div>
                   
           </div>

              <br/>

           <div className="container-fluid d-flex">
                <div className="text-white text-center pro-image col-5">
                 <img style={{ width: '90%' }} src="./image/weather.jpg" alt="Weather app" />
                 </div>
                 <div className='col-7'>
                     <h1 className='txt'>Weather App</h1>
                     <p className='txt'>i designed this weather App. this is a responsive design, and for designing this I used HTML, CSS, JavaScript, React and Bootstrap as Front-End technology.

                            </p>
                 </div>
           </div>

           <br/>

           <div className="container-fluid d-flex">
                <div className="text-white text-center pro-image col-5">
                 <img style={{ width: '90%' }} src="./image/keyboard.jpg" alt="landing page" />
                 </div>
                 <div className='col-7'>
                     <h1 className='txt'>Landing page</h1>
                     <p className='txt'>I designed this Landing Page . this is a responsive design, and for designing this I used HTML, CSS

                            </p>
                 </div>
           </div>


            <br/>

           <div className="container-fluid d-flex">
                <div className="text-white text-center pro-image col-5">
                 <img style={{ width: '90%' }} src="./image/temp.jpg" alt="temp converture" />
                 </div>
                 <div className='col-7'>
                     <h1 className='txt'>Temperature converture</h1>
                     <p className='txt'>I designed this Temperature converture website. This is a responsive design, and for designing this I used HTML, CSS, JavaScript.

                            </p>
                 </div>
                   
           </div>
    </div>
  </>
  )
}

export default Project