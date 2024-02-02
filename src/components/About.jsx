import React, { useEffect, useRef, useState } from 'react';

const CounterDiv = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [counter4, setCounter4] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const interval = setInterval(() => {
            setCounter1(prevCounter => {
              if (prevCounter < 131) {
                return prevCounter + 1;
              } else {
                clearInterval(interval);
                return prevCounter;
              }
            });
          }, 15); 
        }
      });
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const interval = setInterval(() => {
            setCounter2(prevCounter => {
              if (prevCounter < 43) {
                return prevCounter + 1;
              } else {
                clearInterval(interval);
                return prevCounter;
              }
            });
          }, 20); 
        }
      });
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const interval = setInterval(() => {
            setCounter3(prevCounter => {
              if (prevCounter < 45) {
                return prevCounter + 1;
              } else {
                clearInterval(interval);
                return prevCounter;
              }
            });
          }, 20); 
        }
      });
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const interval = setInterval(() => {
            setCounter4(prevCounter => {
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
    <section id="facts" className='section-work-data'>
      <div className="container" >

        <header className="section-header">
          <h3 data-aos="zoom-out">ABOUT US</h3>
          <p data-aos="zoom-in">Smt. Kundanben Dinsha Patel Department of Information Technology (Estd. 2000) offers 120 seats in B. Tech.
            and 15 seats in PGDCS</p>
        </header>
        <div className="row counters">
          <div className="col-lg-3 col-3 text-center" data-aos="fade-right">
          <span ref={counterRef}>{counter1}</span><span>+</span>
            <p><strong>Publications</strong></p>
          </div>
          <div className="col-lg-3 col-3 text-center" data-aos="fade-up">
          <span ref={counterRef}>{counter2}</span><span>+</span>            <p><strong>Workshop Organized</strong></p>
          </div>
          <div className="col-lg-3 col-3 text-center" data-aos="fade-up" >
          <span ref={counterRef}>{counter3}</span><span>+</span>            <p><strong>Projects & Grant Received</strong></p>
          </div>
          <div className="col-lg-3 col-3 text-center" data-aos="fade-left">
          <span ref={counterRef}>{counter4}</span><span>+</span>            <p><strong>Placement - 2021-22</strong></p>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <>
      <CounterDiv />
    </>
  );
};

export default About;

