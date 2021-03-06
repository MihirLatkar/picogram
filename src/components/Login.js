import axios from 'axios'
import React from 'react'
import FormLogin from './subComp/FormLogin';
import User from './User';

export default function Login()
{
    const [formData, setFormData] = React.useState({
        username: "",
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
    
    async function login(user)
    {
        const res = await axios.post('/api/login',{
            username: user.username,
            password: user.password
        })
        return res
    }

    // const handleLogin = () => {
        
    // }
    const [loggedIn,setLOggedIn] = React.useState(false)
    const [user1,setUsername] = React.useState("")
    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
        const user = {
            username: formData.username,
            password: formData.password
        }
        
        login(user).then((res) => {
            console.log(res)
            if(res.data.res === 'OK')
            {
                setLOggedIn(true)
                setUsername(res.data.username)
            }
            else{
                console.log("Got something..........")
            }
        })
    }

    if(!loggedIn) return (
            <FormLogin 
            handleSubmit={handleSubmit} 
            formData={formData} 
            handleChange={handleChange}
            show={formData.showPassword} />
        )
    else return (<User setLOggedIn={setLOggedIn} username={user1} />)
}
