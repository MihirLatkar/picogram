import React from 'react'
import axios from 'axios'
import FormSubmit from './subComp/FormSubmit';
export default function SignUp()
{
    const [formData, setFormData] = React.useState({
        username: "",
        password: "",
        confirmPassword: ""
    })

    const [image, setImage] = React.useState(null)

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }
    function handleImage(event) {
        setImage(event.target.files[0])
        console.log(event.target.files[0])
    }
    async function signup(user)
    {
        const res = await axios.post('/api/signup',{
            username: user.username,
            password: user.password,
            default_photo: image
        })
        console.log(res)
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
        else setStatus(false)
        console.log(formData)
        const user = {
            username: formData.username,
            password: formData.password,
        }
        console.log(user.username)
        signup(user).then((res) => {
            console.log(res)
            if(res.data.res === 'OK')
            {
                setDone(true)
            }
        })
    }

    return(
        <div>
            <FormSubmit handleChange={handleChange} image={image} handleImage={handleImage} handleSubmit={handleSubmit} formData={formData} done={done} status={status} />
        </div>
    )
}