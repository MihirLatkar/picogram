import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
export default function SignUp()
{
    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        confirmPassword: ""
    })

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
    }

    return (
        <div className='home'>
            <div className='w-25 p-3 container d-flex justify-content-center login mh-100 min-vh-100'>
                <form className='border align-self-center col'>
                    <h3 id="log">SignUp</h3> 
                    <div className="mb-3">
                        <label htmlFor="InputEmail1" className="form-label">Email address</label>
                        <input 
                            type="email" 
                            name='email'
                            className="form-control" 
                            id="InputEmail1" 
                            aria-describedby="emailHelp" 
                            onChange={handleChange}
                            value={formData.email}
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
                            onChange={handleChange}
                            value={formData.password}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputPassword1" className="form-label">Confirm Password</label>
                        <input 
                            type="password" 
                            name='confirmPassword'
                            className="form-control" 
                            id="confirmPassword1"
                            onChange={handleChange}
                            value={formData.confirmPassword}
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="btn btn-primary"
                        onClick={handleSubmit} 
                    >
                    Sign Up</button>
                    <Link to="/" >
                        <p> 
                        Already Have an account? Login
                        </p>
                    </Link>
                    
                </form>
            </div>
        </div>
    )
}