import React, { useState,useRef ,useEffect} from 'react'

const Video = () => {



  return (
    <>
       <div className="main_img" >
    <img src="assets/img/1.webp" alt="" />
    <div className="portfolio-wrap aos-init aos-animate" >
            <figure className='img_kd' data-aos="zoom-in" >
              <img  className="link-preview venobox vbox-item" width="50" height="50"
                src="assets/img/kundanben.webp"/>
                <div className="vl"></div>
                <h3>Smt. Kundanben Dinsha Patel<br/>
              Department of <span className='high'>Information Technology</span><br/></h3>
            </figure>
          </div>
    </div>
    </>
  )
}

export default Video
