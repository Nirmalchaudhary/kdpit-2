import React from 'react'

const Club = () => {
  return (
    <>
      <section id="club">
      <div className="container">
        <header className="section-header" data-aos="zoom-out">
          <h3>Programs and Clubs</h3>
        </header>
        <div className="club-cols">
          <div className="">
            <div className="club-col">
              <div className="img" data-aos="fade-up-right">
                <img src="assets/img/btech.webp" className="card-img-top"/>
              </div>
              <div className='club_details' data-aos="fade-up-left">
              <div className="connect_club">
              <div className="icon"><i className="fa fa-graduation-cap"></i></div>
              <h2 className="title"><a href="">Bachelor Of Technology</a></h2>
              </div>
              <p style={{textAlign: "justify"}}>
                Smt. Kundanben Dinsha Patel Department of Information Technology (Estd. 2000) offers 120 seats in B.
                Tech. and 15 seats in PGDCS
              </p>
              </div>
            </div>
          </div>

          <div className="" >
            <div className="club-col">
              
              <div className='club_details' data-aos="fade-up-right">
              <div className="connect_club">
              <div className="icon"><i className="fa fa-shield"></i></div>
              <h2 className="title"><a href="https://charusat.ac.in/pgdcs/">PGDCS Program</a></h2>
              </div>
              <p style={{textAlign: "justify"}}>
                Post Graduate Diploma in Cyber Security is a one year program offered by CHARUSAT in association with
                EC-Council. Online based offered program designed by CHARUSAT gives you a full package of five courses
                included that help you not only grow your career in Cybersecurity but also provide knowledge that most
                of the experts and professionals have after experiencing the field.
              </p>
              </div>
              <div className="img" data-aos="fade-up-left">
                <img src="assets/img/pgdcs.webp" className="card-img-top"/>
                
              </div>
            </div>
          </div>

          <div className="">
            <div className="club-col">
              <div className="img" data-aos="fade-up-right">
                <img src="assets/img/awsc.webp" className="card-img-top"/>
                
              </div>
              <div className='club_details' data-aos="fade-up-left">
              <div className="connect_club">
              <div className="icon"><i className="fa fa-cloud"></i></div>
              <h2 className="title"><a href="https://asc.charusat.ac.in/">AWS Student Club</a></h2>
              </div>
              <p style={{textAlign: "justify"}}>
                Together as a Club ASC aims to provide a platform for the intellectuals to learn and explore the Cloud
                fundamentals of AWS. As a part of the club we assure that every individual gets something productive out
                of this club. ACS intends to bring developers under one roof to create a community to inspire many. The
                club will be channeled into propagating learning and teaching symbiotically.
              </p>
              </div>
            </div>
          </div>

          <div className="">
            <div className="club-col ">
              
              <div className='club_details' data-aos="fade-up-right">
              <div className="connect_club">
              <div className="icon"><i className="fa fa-globe"></i></div>
             
              <h2 className="title"><a href="https://eagerbeavers.charusat.ac.in/">Eager Beavers</a></h2>
              </div>
              <p style={{textAlign: "justify"}}>
                The Eager Beavers is an initiative for the students to brush their soft skills and make them feel bold
                and confident about themselves. This club intends to engage students into Insightful talks, Fun-filled
                competitions, Hands-On workshops and varied activities to create a small community of young enthusiast
                to accomplish their goals as an all rounder personality. </p>   
                </div>
                <div className="img" data-aos="fade-up-left">
                <img src="assets/img/eb corelone.webp" className="card-img-top"/>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Club
