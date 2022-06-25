import React from "react";

export default function Profile(props) {
    return (
        <div class="container height-100 d-flex justify-content-center align-items-center">

            <div class="card text-center">

                <div class="py-4 p-2">

                    <div>
                        <img onClick={props.changeProfile} src="https://i.imgur.com/EnANUqj.jpg" alt="" class="rounded" width="100" />

                    </div>
                    <div class="mt-3 d-flex flex-row justify-content-center">
                        <h5>Matt Damon</h5>
                        <span class="dots"><i class="fa fa-check"></i></span>
                    </div>

                    <div class="mt">
                        <button type="button" class="btn btn-success">Followers</button>
                        <button class="btn btn-outline-secondary"><i class="fa fa-users"></i> 451</button>
                    </div>
                    <div class="mt">
                        <button type="button" class="btn btn-warning">Following</button>
                        <button class="btn btn-outline-secondary"><i class="fa fa-users"></i> 451</button>
                    </div>

                </div>

                <div>
                    <ul class="list-unstyled list">
                        <li>
                            <span class="font-weight-bold">Post</span>
                            <div>
                                <span class="mr-1">5</span>
                                <i class="fa fa-angle-right"></i>
                            </div>
                        </li>
                        <li>
                            <button type="button" class="btn btn-outline-danger" onClick={props.logOut}>Log Out</button>
                        </li>
                    </ul>
                </div>



            </div>


        </div>
    )
}