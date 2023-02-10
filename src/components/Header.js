import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/'}>
              Home
            </Link>
            <div className="collapse navbar-collapse ml-5" id="navbarTogglerDemo02" style={{ alignSelf: 'right' }} >
              <ul className="navbar-nav ml-auto" style={{gap :'2rem',alignSelf:'right'}}>
                
                
                <li className="nav-item">
                  <Link className="btn btn-outline-dark ml-3 mr-3" style={{margin:'ml-3'}} to={'/sign-in'}>
                  
                    <b>Login</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-outline-dark ml-3 mr-3" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
  )
}
