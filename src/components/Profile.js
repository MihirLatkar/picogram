import React from "react";
import axios from 'axios'
export default function Profile(props) {

    async function userInfo(name)
    {
        const res = await axios.post('/api/login/user_info',{
            username: name
        })
        console.log(res)
        return res
    }
    let followers
    let following
    let photo
    let posts
    userInfo(props.username).then((res) => {
        console.log(res)
        if(res.data.res === 'OK')
        {
            photo = res.data.profile_photo
            followers = res.data.self_followers
            following = res.data.self_following
            posts = res.data.self_post
        }
        else{
            console.log("Got something..........")
        }
    })
    return (
        <div className="container height-100 d-flex justify-content-center align-items-center">

            <div className="card text-center">

                <div className="py-4 p-2">

                    <div>
                        <img onClick={props.changeProfile} src={photo} alt="" className="rounded" width="100" />

                    </div>
                    <div className="mt-3 d-flex flex-row justify-content-center">
                        <h5>{props.username}</h5>
                        <span className="dots"><i className="fa fa-check"></i></span>
                    </div>

                    <div className="mt">
                        <button type="button" className="btn btn-success">Followers</button>
                        <button className="btn btn-outline-secondary"><i className="fa fa-users"></i> {followers.length}</button>
                    </div>
                    <div className="mt">
                        <button type="button" className="btn btn-warning">Following</button>
                        <button className="btn btn-outline-secondary"><i className="fa fa-users"></i> {following.length}</button>
                    </div>

                </div>

                <div>
                    <ul className="list-unstyled list">
                        <li>
                            <span className="font-weight-bold">Post</span>
                            <div>
                                <span className="mr-1">{posts.length}</span>
                                <i className="fa fa-angle-right"></i>
                            </div>
                        </li>
                        <li>
                            <button type="button" className="btn btn-outline-danger" onClick={props.logOut}>Log Out</button>
                        </li>
                    </ul>
                </div>



            </div>


        </div>
    )
}