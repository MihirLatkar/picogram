import React from 'react'

export default function User(props) {
    function help() {
        props.setLOggedIn(false)
    }
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col">
                    <button onClick={help} > Log Out</button>
                    </div>
                    <div class="col-6">
                    posts
                    </div>
                    <div class="col">
                    3 of 3
                    </div>
                    </div>
                </div>
        </div>
    )

}