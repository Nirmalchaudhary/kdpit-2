import React from 'react'
import { NavLink } from "react-router-dom";
import AOS from 'aos'
import 'aos/dist/aos.css'

const Header = () => {
  return (
    <>
      <header id="header" className=" header-transparent">
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-xl-11 d-flex align-items-center head_part">
          
          <h1 className="logo mr-auto" data-aos="fade-down">
          <img src="KDPIT_OFF_LOGO.webp" alt="" />
          </h1>

          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li className="drop-down d1"><a href="">Academics</a>
                <ul>
                  <li className="drop-down d1"><a href="">Course Module</a>
                    <ul>
                      {/* <!-- <li className="drop-down d1"><a href="">Semester 1</a></li> --> */}
                      <li className="drop-down d1"><a href="">Semester 2</a>
                        <ul>
                          <li><a href="forms/Course Module/Sem-2/IT143 FUNDAMENTALS OF COMPUTER PROGRAMMING.html">IT143
                              FUNDAMENTALS OF COMPUTER PROGRAMMING</a></li>
                          <li><a href="forms/Course Module/Sem-2/CE144 OBJECT ORIENTED PROGRAMMING WITH C++.html">CE144
                              OBJECT ORIENTED PROGRAMMING WITH C++</a></li>
                        </ul>
                      </li>
                      {/* <!-- <li className="drop-down d1"><a href="">Semester 3</a></li> --> */}
                      <li className="drop-down d1"><a href="">Semester 4</a>
                        <ul>
                          <li><a href="forms/Course Module/Sem-4/COMI.html">IT254 COMPUTER ARCHITECTURE &
                              MICROPROCESSOR INTERFACING</a></li>
                          <li><a href="forms/Course Module/Sem-4/IT256 DATA STRUCTURES AND ALGORITHMS.html">IT256 DATA
                              STRUCTURES AND ALGORITHMS</a></li>
                          <li><a href="forms/Course Module/Sem-4/IT257 DATABASE MANAGEMENT SYSTEM.html">IT257 DATABASE
                              MANAGEMENT SYSTEM</a></li>
                          <li><a href="forms/Course Module/Sem-4/IT255 WebTechnologies.html">IT255 Web Technologies</a>
                          </li>
                        </ul>
                      </li>
                      {/* <!-- <li className="drop-down d1"><a href="">Semester 5</a></li> --> */}
                      <li className="drop-down d1"><a href="">Semester 6</a>
                        <ul>
                          <li><a href="forms/Course Module/Sem-6/IT348 CRYPTOGRAPHY & NETWORK SECURITY.html">IT348
                              CRYPTOGRAPHY & NETWORK SECURITY</a></li>
                          <li><a href="forms/Course Module/Sem-6/IT354 MACHINE LEARNING.html">IT354 MACHINE LEARNIN</a>
                          </li>
                          <li><a href="forms/Course Module/Sem-6/IT355 SOFTWARE ENGINEERING.html">IT355 SOFTWARE
                              ENGINEERING</a></li>
                          <li><a href="forms/Course Module/Sem-6/IT380 CYBER SECURITY.html">IT380 CYBER SECURITY</a>
                          </li>
                          <li><a href="forms/Course Module/Sem-6/IT379 COMPUTER VISION.html">IT379 COMPUTER VISION</a>
                          </li>
                          <li><a
                              href="forms/Course Module/Sem-6/IT349 WIRELESS COMMUNICATION & MOBILE COMPUTING.html">IT349
                              WIRELESS COMMUNICATION & MOBILE COMPUTING.html</a></li>
                        </ul>
                      </li>
                      {/* <!-- <li className="drop-down d1"><a href="">Semester 7</a></li> --> */}
                      {/* <!-- <li className="drop-down d1"><a href="">Semester 8</a></li> --> */}
                    </ul>
                  </li>
                  <li className="drop-down d1"><a href="">Practical List</a>
                    <ul>
                      {/* <!-- <li className="drop-down d1"><a href="">Semester 1</a></li> --> */}
                      <li className="drop-down d1"><a href="">Semester 2</a>
                        <ul>
                          <li><a href="forms/Practical List/Sem-2/CE144 Object Oriented Programming with C++.html">CE144
                              Object Oriented Programming with C++</a></li>
                          <li><a href="forms/Practical List/Sem-2/CE143 Computer Concepts and Programming.html">CE:143
                              Computer Concepts and Programming</a></li>
                        </ul>
                      </li>
                      {/* <!-- <li className="drop-down d1"><a href="">Semester 3</a></li> --> */}
                      <li className="drop-down d1"><a href="">Semester 4</a>
                        <ul>
                          <li><a href="forms/Practical List/Sem-4/IT257 Database Management System.html">IT257 Database
                              Management System</a></li>
                          <li><a
                              href="forms/Practical List/Sem-4/IT254 COMPUTER ARCHITECTURE AND MICROPROCESSOR INTERFACING.html">IT254
                              COMPUTER ARCHITECTURE AND MICROPROCESSOR INTERFACING</a></li>
                          <li><a href="forms/Practical List/Sem-4/IT256 Data Structures And Algorithms.html">IT256 Data
                              Structures And Algorithms</a></li>
                          <li><a href="forms/Practical List/Sem-4/IT255 Web Technologies.html">IT255 Web
                              Technologies</a></li>
                        </ul>
                      </li>
                      {/* <!-- <li className="drop-down d1"><a href="">Semester 5</a></li> --> */}
                      <li className="drop-down d1"><a href="">Semester 6</a>
                        <ul>
                          <li><a href="forms/Practical List/Sem-6/IT377 MLA Practical List.html">IT377 MLA Practical
                              List</a></li>
                          <li><a
                              href="forms/Practical List/Sem-6/IT348 Cryptography and Network Security Practical List 2022.html">IT348
                              Cryptography and Network Security </a></li>
                          <li><a href="forms/Practical List/Sem-6/IT355 Software Engineering.html">IT355 Software
                              Engineering </a></li>
                          <li><a href="forms/Practical List/Sem-6/IT380 Cyber Security Practical List 2022.html">IT380
                              Cyber Security</a></li>
                          <li><a
                              href="forms/Practical List/Sem-6/IT378 WIRELESS COMMUNICATION & MOBILE COMPUTING.html">IT378
                              WIRELESS COMMUNICATION & MOBILE -<br/>COMPUTING</a></li>
                          <li><a href="forms/Practical List/Sem-6/IT379 COMPUTER VISION.html">IT379 COMPUTER VISION</a>
                          </li>
                        </ul>
                      </li>
                      {/* <!-- <li className="drop-down d1"><a href="">Semester 7</a></li> --> */}
                      {/* <!-- <li className="drop-down d1"><a href="">Semester 8</a></li> --> */}
                    </ul>
                  </li>
                  <li><a href="https://www.charusat.ac.in/Downloads/Syllabus/FTE%20CSPIT/IT/f">Syllabus</a></li>
                </ul>
              </li>
              <li className="drop-down d1"><a href="">Student Corner</a>
                <ul>
                  <li><a href="lab.html">Research Labs</a></li>
                  <li><a href="forms/BTech Booklet/BTech Booklet.pdf">BTech Booklet</a></li>
                  <li><a href="https://charusat.ac.in/Downloads/Academic%20Calenders/CSPIT/"> Academic Calendar </a>
                  </li>
                  <li><a href="https://charusat.edu.in:912/eGovernance/">E-Governance</a></li>
                  <li><a href="https://charusat.edu.in:912/UniExamResult/">Exam Result</a></li>

                </ul>
              </li>
              <li className="drop-down d1"><a href="">Student Announcement</a>
                <ul>
                  <li><a href="forms/Unit Test/UNIT_TEST_1 Schedule.pdf">Unit Test Time-table</a></li>
                </ul>
              </li>

              <li><a href="https://admission.charusat.ac.in/">Admission</a></li>
              {/* <!-- <li><a href="#facts">About Us</a></li> --> */}
              {/* <!-- <li><a href="#mgallery">Gallery</a></li> --> */}
              <li><a href="#faculty">Faculties</a></li>
              <li><a href="forms/Brochure.pdf"> Brochure</a></li>


            </ul>
          </nav>
          {/* <!-- .nav-menu --> */}
        </div>
        <div className="extra_link" data-aos="fade-left">
        <ul>
              
              

              {/* <!-- <li><a href="#facts">About Us</a></li> --> */}
              {/* <!-- <li><a href="#mgallery">Gallery</a></li> --> */}
              <li><a href="#faculty">Faculties</a></li>
              <li><a href="forms/Brochure.pdf">Brochure</a></li>
              <li ><a href="">Clubs</a></li>
              <li ><a href="">Gallery</a></li>
              <li><a href="#contact">Contact Us</a></li>

            </ul>
        </div>
      </div>
    </div>
  </header>
  {/* <!-- End Header --> */}

    </>
  )
}
AOS.init({
  duration:700
});
export default Header
