import React from 'react'
import axios from 'axios'
import FormSubmit from './subComp/FormSubmit';
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
    
    async function login(user)
    {
        const res = await axios.post('api/signup',{
            username: user.username,
            password: user.password
        })
        return res
    }

    const [done,setDone] = React.useState(false)
    const [status,setStatus] = React.useState(false)
    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
        if(formData.password !== formData.confirmPassword)
        {
            setStatus(true)
            return
        }
        console.log(formData)
        const user = {
            username: formData.username,
            password: formData.password
        }
        
        login(user).then((res) => {
            console.log(res)
            if(res.data.res === 'OK')
            {
                setDone(true)
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
    }

    return(
        <div>
            <FormSubmit handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} done={done} status={status} />
        </div>
    )
}