import React from 'react'

export default function Login()
{
    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        showPassword: false
    })

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
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
                    <div className="mb-3 form-check">
                        <input 
                            type="checkbox" 
                            className="form-check-input" 
                            id="Check1" 
                            name='showPassword'
                            onChange={handleChange}
                            checked={formData.showPassword}
                        />
                        <label className="form-check-label" htmlFor="Check1">Show password</label>
                    </div>
                    <button 
                        type="submit" 
                        className="btn btn-primary"
                        onClick={handleSubmit} 
                    >
                    Submit</button>
                </form>
            </div>
        </div>
    )
}