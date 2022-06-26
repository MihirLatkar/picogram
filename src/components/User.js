import React from 'react'
import UserTemplate from './UserTemplate'
import ProfilePage from './subComp/ProfilePage';
export default function User(props) {
    console.log("in user")
    const [profile,setProfile] = React.useState(false);
    function changeProfile()
    {
        setProfile(x => !x)
    }
    if(profile) return (<ProfilePage username={props.username} changeProfile={changeProfile} />)
    return (
        <UserTemplate username={props.username} changeProfile={changeProfile} />
    )

}