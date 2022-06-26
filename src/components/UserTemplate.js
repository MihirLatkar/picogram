import React from 'react'
import Post from './Post'
import Suggestions from './Suggestions'
import Profile from './Profile'
import profile from './tmp-img/profile-pic1.jpg'

export default function UserTemplate(props) {
    function logOut() {
        props.setLOggedIn(false)
    }
    console.log("in user template")
    return (
        <div className='user-main'>
            <div class="container mh-100 min-vh-100">
                <div class="row">
                    <div class="col" id='sidebar' >
                        <Profile changeProfile={props.changeProfile} username={props.username} logOut={logOut} />
                        
                    </div>
                    <div class="col-6 posts" >
                        <Post username="sad" userpic={profile} postpic={profile} postdes="look at my camera XD" />
                    </div>
                    <div class="col" id='sidebar' >
                        <Suggestions />
                    </div>
                </div>
            </div>
        </div>
    )

}