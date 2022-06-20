import React from 'react'
import Post from './Post'
import Suggestions from './Suggestions'
import Profile from './Profile'

export default function User(props) {
    function logOut() {
        props.setLOggedIn(false)
    }
    return (
        <div className='user-main'>
            <div class="container mh-100 min-vh-100">
                <div class="row">
                    <div class="col" id='sidebar' >
                        <Profile logOut={logOut} />
                        
                    </div>
                    <div class="col-6 posts" >
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                    </div>
                    <div class="col" id='sidebar' >
                        <Suggestions />
                    </div>
                </div>
            </div>
        </div>
    )

}