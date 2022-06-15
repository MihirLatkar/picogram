import React from 'react'

export default function Login()
{
    // col-lg-6 offset-lg-3
    return (
        <div className='w-25 p-3 container d-flex justify-content-center login mh-100 min-vh-100'>
            <form className='align-self-center col'>
                <div className="mb-3">
                    <label for="InputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="InputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="InputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="Check1" />
                    <label className="form-check-label" for="Check1">Show password</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}