import React from 'react'

export default function User(props) {
    function help()
    {
        props.setLOggedIn(false)
    }
    return (
    <div>
        <h1>Hello User</h1>
        <button onClick={help} > Log Out</button>
    </div>
    )

}