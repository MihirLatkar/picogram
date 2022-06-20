import React from "react";
// import profile from './tmp-img/profile-pic1.jpg'
export default function Post() {
    return (
        <div>
            <div class="d-flex flex-column">
                <div class="p-2"><div class="d-flex flex-row">
                    <div class="p-2">{/*<img src={profile} alt="profile-pic" />*/}</div>
                    <div class="p-2">Flex item 2</div>
                    <div class="p-2">Flex item 3</div>
                </div>
                </div>
                <div class="p-2">Flex item 2</div>
                <div class="p-2">Flex item 3</div>
            </div>
        </div>
    )
}