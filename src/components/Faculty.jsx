import React from 'react'
import Faculties from '../api/Faculties'

const Faculty = () => {
  return (
    <>
      <section id="faculty" className='container'>
          <header className="section-header">
            <h3>FACULTY TEAM</h3>
          </header>
          <div className="cardmain">
          {Faculties.map((Member) => {
                 
            return (
                <div className="card0" key={Member.Mail}>
      <div className="card-header"
    style={{backgroundImage: `url(${Member.Photo})`,backgroundSize:"contain",backgroundRepeat: "no-repeat"  }}
      >
            <div className="card-header-slanted-edge">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 200"><path className="polygon" d="M-20,200,1000,0V200Z" /></svg>
                <a className="btn-follow" id='btn-follow'><span className="sr-only">Follow</span></a>
            </div>
      </div>
      <div className="card-body">
          <h2 className="name">{Member.Name}</h2>
          <h4 className="job-title">{Member.Title}</h4>
          <div className="bio">{Member.Description}</div>
          <div className="social-accounts">
            <a href={Member.Mail}><img src="https://res.cloudinary.com/dj14cmwoz/image/upload/v1491077480/profile-card/images/dribbble.svg" alt=""/><span className="sr-only">Dribbble</span></a>
            <a href={Member.social}><img src="https://res.cloudinary.com/dj14cmwoz/image/upload/v1491077480/profile-card/images/twitter.svg" alt=""/><span className="sr-only">Twitter</span></a>
            <a href={Member.Linkedin}><img src="https://res.cloudinary.com/dj14cmwoz/image/upload/v1491077480/profile-card/images/instagram.svg" alt=""/><span className="sr-only">Instagram</span></a>
          </div>
      </div>
  </div>
            );
          
        })}
        </div> 
      </section>
    </>
  )
}

export default Faculty
