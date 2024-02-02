import React, { useEffect, useRef, useState } from 'react';

const Career = () => {

    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [counter3, setCounter3] = useState(0);
    const counterRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const interval = setInterval(() => {
              setCounter1(prevCounter => {
                if (prevCounter < 850) {
                  return prevCounter + 1;
                } else {
                  clearInterval(interval);
                  return prevCounter;
                }
              });
            }, 1); 
          }
        });
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const interval = setInterval(() => {
              setCounter2(prevCounter => {
                if (prevCounter < 700) {
                  return prevCounter + 1;
                } else {
                  clearInterval(interval);
                  return prevCounter;
                }
              });
            }, 1); 
          }
        });
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const interval = setInterval(() => {
              setCounter3(prevCounter => {
                if (prevCounter < 100) {
                  return prevCounter + 1;
                } else {
                  clearInterval(interval);
                  return prevCounter;
                }
              });
            }, 20); 
          }
        });
      });
  
      if (counterRef.current) {
        observer.observe(counterRef.current);
      }
      return () => {
        if (counterRef.current) {
          observer.unobserve(counterRef.current);
        }
      };
    }, []);
  

  return (
    <>
      <section id="career">
      <div className="container" data-aos="fade-up">

        <header className="section-header">
          <h3 style={{color: "white"}}>CAREER DEVELOPMENT & PLACEMENT</h3>
        </header>

        <li style={{color: "white"}}>Weekly Aptitude Sessions</li>
        <li style={{color: "white"}}>Constant activities to make ready students for Industry</li>
        <li style={{color: "white"}}>Soft skills development sessions every month</li>
        <h5 style={{color: "white",marginTop:"40px"}}><strong>What do our students do after study?</strong></h5>
        <p style={{color: "white"}}>Students are upsurged with ample amount of exposure such as jobs
          with handsome packages, extravagant business and start-up ideologies as well as pursue acceleration in
          higher studies.</p>
        <div className="skills-content">

          <div className="row counters">

            <div className="col-lg-4 col-4 text-center">
              <span style={{fontSize: "200%"}} data-toggle="counter-up" ref={counterRef}>{counter1}</span><span style={{fontSize: "200%"}}>+</span>
              <p style={{color: "#ffffff", fontSize: "100%"}}><strong>Students received job offers from campus</strong>
              </p>
            </div>
            <div className="col-lg-4 col-4 text-center">
              <span style={{fontSize: "200%"}} data-toggle="counter-up" ref={counterRef}>{counter2}</span><span style={{fontSize: "200%"}}>+</span>
              <p style={{color: "#ffffff", fontSize: "100%"}}><strong>Students opted for Higher Studies</strong></p>
            </div>
            <div className="col-lg-4 col-4 text-center">
              <span style={{fontSize: "200%"}} data-toggle="counter-up" ref={counterRef}>{counter3}</span><span style={{fontSize: "200%"}}>+</span>
              <p style={{color: "#ffffff", fontSize: "100%"}}><strong>Students joined business or own Startup</strong></p>
            </div>

          </div>

        </div>
      </div>
    </section>
    </>
  )
}

export default Career
