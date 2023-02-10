import axios from 'axios';
import React, { Component,useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
export default function SignUp(){

  
  let navigate=useNavigate();
    const [user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        about:""
    });

    const{name,email,password,about}=user;

    const onInputChange=(e)=>{

        setUser({...user, [e.target.name]:e.target.value});
    }
    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/api/users",user)

        navigate("/");
    }



 
    return (
      <form onSubmit={(e)=> onSubmit(e)}>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e)=>onInputChange(e)}
          />
        </div>

        

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"

            name="email"
            value={email}
            onChange={(e)=>onInputChange(e)}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"

            name="password"
            value={password}
            onChange={(e)=>onInputChange(e)}
          />
          <p align='right' color='red'>At least 6 charactor</p>
        </div>
        <div className="mb-3">
          <label>About</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter About"

            name="about"
            value={about}
            onChange={(e)=>onInputChange(e)}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/signin">sign in?</a>
        </p>
      </form>
    )
  }

