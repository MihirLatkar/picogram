import React from 'react'
import {
    Link
  } from "react-router-dom";
export default function FormLogin(props) {
    return (
        <div className='home'>
            
            <div className='w-25 p-3 container d-flex justify-content-center login mh-100 min-vh-100'>
                <form className='border align-self-center col'>
                <h3 id="log">Login</h3> 
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input 
                            type="username" 
                            name='username'
                            className="form-control" 
                            id="username" 
                            // aria-describedby="emailHelp" 
                            onChange={props.handleChange}
                            value={props.formData.username}
                        />
                        <div id="emailHelp" className="form-text">We'll never share your info with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputPassword1" className="form-label">Password</label>
                        <input 
                            type="password" 
                            name='password'
                            className="form-control" 
                            id="InputPassword1"
                            onChange={props.handleChange}
                            value={props.formData.password}
                        />
                    </div>
                    <div className="mb-3 form-check">
                        <input 
                            type="checkbox" 
                            className="form-check-input" 
                            id="Check1" 
                            name='showPassword'
                            onChange={props.handleChange}
                            checked={props.formData.showPassword}
                        />
                        <label className="form-check-label" htmlFor="Check1">Show password</label>
                    </div>
                    <button 
                        type="submit" 
                        className="btn btn-primary"
                        onClick={props.handleSubmit} 
                    >
                    Log In</button>
                    <Link to="/signup" >
                         <p>
                        Don't Have an account? Sign Up
                        </p>
                        
                    </Link>
                    
                </form>
            </div>
        </div>
    )
}