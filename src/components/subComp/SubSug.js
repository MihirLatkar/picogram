import React from "react";

export default function SubSug(props) {
    return (
        <div>
            <div className="container height-100 d-flex justify-content-center align-items-center">

                <div className="card text-center">

                    <div className="py-4 p-2">

                        <div>
                            <img src="https://i.imgur.com/EnANUqj.jpg" className="rounded" width="100" />
                        </div>
                        <div className="mt-3 d-flex flex-row justify-content-center">
                            <h5>{props.name}</h5>
                            <span className="dots"><i className="fa fa-check"></i></span>
                        </div>

                        <div className="mt-3">
                            <button className="btn btn-danger">Follow</button>
                            <button className="btn btn-outline-secondary"><i className="fa fa-users"></i> 451</button>
                        </div>

                    </div>

                    <div>
                        <ul className="list-unstyled list">
                            <li>
                                <span className="font-weight-bold">Post</span>
                                <div>
                                    <span className="mr-1">5</span>
                                    <i className="fa fa-angle-right"></i>
                                </div>
                            </li>
                        </ul>
                    </div>


                </div>


            </div>
        </div>
    )
}