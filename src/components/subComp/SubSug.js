import React from "react";
import axios from "axios";
export default function SubSug(props) {
  async function userInfo(name) {
    const res = await axios.post("/api/login/user_info", {
      username: name,
    });
    console.log(res);
    return res;
  }
  async function follow(name) {
    const res = await axios.post("/api/login/new_following", {
      username: props.username,
      following_username: name,
    });
    console.log(res);
    return res;
  }
  // const [photo, setPhoto] = React.useState("");
  // const [posts, setPosts] = React.useState({});

  const [numFollowers, setNumFollowers] = React.useState(100);
  const [numPosts, setNumPosts] = React.useState(0);

  React.useEffect(() => {
    userInfo(props.name).then((res) => {
      console.log(res);
      if (res.data.res === "OK") {
        // setPhoto(res.data.profile_photo);

        // setPosts(res.data.post_list);
        setNumFollowers(res.data.follower_list.length);

        setNumPosts(Object.keys(res.data.post_list).length);
      } else {
        return;
      }
    });

    console.log(numFollowers);
  }, []);
  const [available, setAvailable] = React.useState(true);
  function handleClick() {
    if (available === true) {
      follow(props.name).then((res) => {
        console.log(res);
        if (res.data.res == "OK") {
          setAvailable(false)
        }
      });
    }
  }
  return (
    <div>
      <div className="container height-100 d-flex justify-content-center align-items-center">
        <div className="card text-center">
          <div className="py-4 p-2">
            <div>
              <img
                src="https://i.imgur.com/EnANUqj.jpg"
                className="rounded"
                alt=""
                width="100"
              />
            </div>
            <div className="mt-3 d-flex flex-row justify-content-center">
              <h5>{props.name}</h5>
              <span className="dots">
                <i className="fa fa-check"></i>
              </span>
            </div>

            <div className="mt-3">
              <button className="btn btn-danger" onClick={handleClick}>
                {available? "Follow" : "Following"}
              </button>
              <button className="btn btn-outline-secondary">
                <i className="fa fa-users"></i> {available? numFollowers : numFollowers+1}
              </button>
            </div>
          </div>

          <div>
            <ul className="list-unstyled list">
              <li>
                <span className="font-weight-bold">Post</span>
                <div>
                  <span className="mr-1">{numPosts}</span>
                  <i className="fa fa-angle-right"></i>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
