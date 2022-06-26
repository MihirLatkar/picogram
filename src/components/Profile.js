import React from "react";
import axios from "axios";
import ListItem from "./subComp/ListItem";
export default function Profile(props) {
  async function userInfo(name) {
    const res = await axios.post("/api/login/user_info", {
      username: name,
    });
    console.log(res);
    return res;
  }
  const [followers, setFollowers] = React.useState([]);
  const [following, setFollowing] = React.useState([]);
  const [photo, setPhoto] = React.useState("");
  const [posts, setPosts] = React.useState({});

  const [numFollowers, setNumFollowers] = React.useState(100);
  const [numFollowing, setNumFollowing] = React.useState(100);
  const [numPosts, setNumPosts] = React.useState(0);
  let trigger = {
    profile_photo: "",
    follower_list: [],
    post_list: {},
    following_list: [],
  };
  let k = 0;
  React.useEffect(() => {
    userInfo(props.username).then((res) => {
      console.log(res);
      if (res.data.res === "OK") {
        trigger = res.data;
        setPhoto(res.data.profile_photo);
        setFollowers(res.data.follower_list);
        setFollowing(res.data.following_list);
        setPosts(res.data.post_list);
        setNumFollowers(res.data.follower_list.length);
        setNumFollowing(res.data.following_list.length);
        setNumPosts(Object.keys(res.data.post_list).length);
        if (k < 3) k++;
      } else {
        return;
      }
    });

    console.log(numFollowers);
    console.log(numFollowing);
    console.log(photo);
  }, []);

  const [displayFollowers, setDisplayFollowers] = React.useState(false);
  const [displayFollowing, setDisplayFollowing] = React.useState(false);
  function handleFollowers() {
    setDisplayFollowers((x) => !x);
  }
  function handleFollowing() {
    setDisplayFollowing((x) => !x);
  }
  //   userInfo(props.username).then((res) => {
  //     console.log(res);
  //     if (res.data.res === "OK") {
  //       trigger = res.data;
  //       if (k < 3) k++;
  //     } else {
  //       console.log("Got something..........");
  //     }
  //   });
  const listFollowers = followers.map((x) => <ListItem item={x} />);
  const listFollowing = following.map((x) => <ListItem item={x} />);
  return (
    <div>
      <div className="container height-100 d-flex justify-content-center align-items-center">
        <div className="card text-center">
          <div className="py-4 p-2">
            <div>
              <img
                onClick={props.changeProfile}
                src={photo}
                alt=""
                className="rounded"
                width="100"
              />
            </div>
            <div
              className="mt-3 d-flex flex-row justify-content-center"
              onClick={props.changeProfile}
            >
              <h5>{props.username}</h5>
              <span className="dots">
                <i className="fa fa-check"></i>
              </span>
            </div>

            <div className="mt">
              <button
                type="button"
                className="btn btn-success"
                onClick={handleFollowers}
              >
                Followers
              </button>
              <button className="btn btn-outline-secondary">
                <i className="fa fa-users"></i> {numFollowers}
              </button>
            </div>
            <div className="mt">
              <button
                type="button"
                className="btn btn-warning"
                onClick={handleFollowing}
              >
                Following
              </button>
              <button className="btn btn-outline-secondary">
                <i className="fa fa-users"></i> {numFollowing}
              </button>
            </div>
          </div>

          <div>
            <ul className="list-unstyled list">
              <li>
                <span className="font-weight-bold">Post {numPosts} </span>
                <div>
                  <span className="mr-1"></span>
                  <i className="fa fa-angle-right"></i>
                </div>
              </li>
              <li>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={props.logOut}
                >
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {displayFollowers && (
        <div>
          <div class="list-group">
            <a href="" class="list-group-item list-group-item-action">
              Followers
            </a>
            {listFollowers}
          </div>
        </div>
      )}
      {displayFollowing && (
        <div>
          <div class="list-group">
            <a href="" class="list-group-item list-group-item-action">
              Following
            </a>
            {listFollowing}
          </div>
        </div>
      )}
    </div>
  );
}
