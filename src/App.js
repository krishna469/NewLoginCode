import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Login from './components/login.component'
import SignUp from './components/signup.component'
import Header from './components/Header'
import Home from './components/Home'


function App() {
  return (
    <div className="App">
      <Router>


        <div className="auth-wrapper">
          <div className="auth-inner">
            <Header />
            <Home exact path="/" element={<Home />} />
            <Routes>
              {/* <Route exact path="/" element={<Login />} /> */}
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App
