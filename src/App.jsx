import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Home'
function App() {

  return (
    <>
    {/* <GoToTop /> */}
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <>
              <Header />
              <Routes>
                <Route path="/" element={< Home />} />
              </Routes> 
              <Footer />
            </>
          }
        />
        {/* <Route path="/signin" element={<Sign_In />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<Forgot_Password />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
