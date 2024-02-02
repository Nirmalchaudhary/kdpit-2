import React from 'react'

const Contact = () => {
  return (
    <>
      <section id="contact" class="section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-header">
          <h3>Contact Us</h3>

        </div>

        <div class="row contact-info">

          <div class="col-md-4">
            <div class="contact-address">
              <i class="ion-ios-location-outline"></i>
              <h3>Address</h3>
              <address>Smt. Kundanben Dinsha Patel Department of Information Technology<br/>
                Charotar University of Science and Technology,<br/>
                CHARUSAT Campus, Changa<br/>
                Taluka: Petlad, Dist: Anand<br/>
                Gujarat (India) 388 421</address>
            </div>
          </div>

          <div class="col-md-4">
            <div class="contact-phone">
              <i class="ion-ios-telephone-outline"></i>
              <h3>Phone Number</h3>
              <p><a href="tel:+91-2697-265131">+91-2697-265131</a></p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="contact-email">
              <i class="ion-ios-email-outline"></i>
              <h3>Email</h3>
              <p><a href="mailto:hod.it@charusat.ac.in">hod.it@charusat.ac.in</a></p>
            </div>
          </div>

        </div>

      </div>
    </section>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.4232556612214!2d72.81657521121485!3d22.600664479386136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e5747687c7ef7%3A0xaa1f792809a63732!2sSmt.%20Kundanben%20Dinsha%20Patel%20Department%20of%20Information%20Technology!5e0!3m2!1sen!2sin!4v1692126326044!5m2!1sen!2sin" width="100%" height="400" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </>
  )
}

export default Contact
