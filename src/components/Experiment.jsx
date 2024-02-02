// import React, { useState, useEffect } from 'react';
// import items from '../api/Faculties'

// const Experiment = () => {
//   const itemWidth = 438; // Width of each item in pixels
//   const intervalDuration = 2000; // Interval between scrolling (in milliseconds)

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
//     }, intervalDuration);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="main-container container">
//       <div className="scroll-container">
//         <div
//           className="scroll-content"
//           style={{ transform: `translateX(-${currentIndex * itemWidth}px)` }}
//         >
//           {items.map((item, index) => (
//                 <div className="card0" key={index}>
//       <div className="card-header"
//     style={{backgroundImage: `url(${item.Photo})`,backgroundSize:"contain",backgroundRepeat: "no-repeat"  }}
//       >
//             <div className="card-header-slanted-edge">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 200"><path className="polygon" d="M-20,200,1000,0V200Z" /></svg>
//                 <a className="btn-follow" id='btn-follow'><span className="sr-only">Follow</span></a>
//             </div>
//       </div>
//       <div className="card-body">
//           <h2 className="name">{item.Name}</h2>
//           <h4 className="job-title">{item.Title}</h4>
//           <div className="bio">{item.Description}</div>
//           <div className="social-accounts">
//             <a href={item.Mail}><img src="https://res.cloudinary.com/dj14cmwoz/image/upload/v1491077480/profile-card/images/dribbble.svg" alt=""/><span className="sr-only">Dribbble</span></a>
//             <a href={item.social}><img src="https://res.cloudinary.com/dj14cmwoz/image/upload/v1491077480/profile-card/images/twitter.svg" alt=""/><span className="sr-only">Twitter</span></a>
//             <a href={item.Linkedin}><img src="https://res.cloudinary.com/dj14cmwoz/image/upload/v1491077480/profile-card/images/instagram.svg" alt=""/><span className="sr-only">Instagram</span></a>
//           </div>
//       </div>
//   </div>
//           ))}
//         </div>
//       </div>
//     </div>
   
//   );
// };

// export default Experiment;

// import React, { Component } from 'react';
// import { Carousel } from 'react-responsive-carousel';

// const Experiment = () => {
//   return (
//     <>
//          <Carousel>
//                 <div>
//                     <img src="assets/1.jpeg" />
//                     <p className="legend">Legend 1</p>
//                 </div>
//                 <div>
//                     <img src="assets/2.jpeg" />
//                     <p className="legend">Legend 2</p>
//                 </div>
//                 <div>
//                     <img src="assets/3.jpeg" />
//                     <p className="legend">Legend 3</p>
//                 </div>
//             </Carousel>
//     </>
//   )
// }

// export default Experiment

