import React from 'react'

import {
    Link
  } from "react-router-dom";

export default function FormSubmit(props)
{
    return (
        <div className='home'>
            <div className='w-25 p-3 container d-flex justify-content-center login mh-100 min-vh-100'>
                <form className='border align-self-center col'>
                    <h3 id="log">SignUp</h3> 
                    <div className="mb-3">
                        <label htmlFor="InputEmail1" className="form-label">User Name</label>
                        <input 
                            type="username" 
                            name='username'
                            className="form-control" 
                            id="InputEmail1" 
                            aria-describedby="emailHelp" 
                            onChange={props.handleChange}
                            value={props.formData.email}
                        />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
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
                    <div className="mb-3">
                        <label htmlFor="InputPassword1" className="form-label">Confirm Password</label>
                        <input 
                            type="password" 
                            name='confirmPassword'
                            className="form-control" 
                            id="confirmPassword1"
                            onChange={props.handleChange}
                            value={props.formData.confirmPassword}
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="btn btn-primary"
                        onClick={props.handleSubmit} 
                    >
                    Sign Up</button>
                    <Link to="/" >
                        <p> 
                        Already Have an account? Login
                        </p>
                    </Link>
                    {props.done &&
                        <Link to="/" >
                        <p> 
                        Successfully Signed Up. Click here to go to login page!
                        </p>
                        </Link>}
                    {props.status &&
                        <p> 
                        password ans confirm password dont match
                        </p>}
                </form>
            </div>
        </div>
    )
}