import React from 'react'

const StudentChapter = () => {
  return (
    <>
      <section id="portfolio" className="section-bg">
      <div className="container text-center">
        <header className="section-header">
          <h3>Student Chapters</h3>
        </header>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className=" col-lg-12">
            <ul id="portfolio-flters"></ul>
          </div>
        </div>
        <div className="row portfolio-container " data-aos="fade-up" data-aos-delay="200">

          <div className="col-lg-3 col-md-6 portfolio-item filter-web my-2">
            <div className="portfolio-wrap card" data-aos="fade-up" data-aos-delay="100">
              <img src="assets/img/acm.webp" className="card-img-top" alt="..."/>
              <div className="portfolio-info pb-3 card-body">
                <h5 className="card-title"><b>Total Events </b><span data-toggle="counter-up">42</span></h5>
                <h5 className="card-title"><b>Total Members </b><span data-toggle="counter-up">42</span></h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 portfolio-item filter-web my-2">
            <div className="portfolio-wrap card" data-aos="fade-up" data-aos-delay="100">
              <img src="assets/img/nptel.webp" className="card-img-top" alt="..."/>
              <div className="portfolio-info pb-3 card-body">
                <h5 className="card-title"><b>Total Members</b><br /><span data-toggle="counter-up">1000</span>+</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default StudentChapter
