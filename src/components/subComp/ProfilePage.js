import React from "react";
import User from "../User";
import ListItem from "./ListItem";
import Post from "../Post";
import axios from "axios";
import img from "../../images/blank1.png";
export default function ProfilePage(props) {
  console.log("in Profile page");
  const [goBack, setGoBack] = React.useState(false);
  function back() {
    setGoBack(true);
  }
  async function userInfo(name) {
    const res = await axios.post("/api/login/user_info", {
      username: name,
    });
    console.log(res);
    return res;
  }

  const [followers, setFollowers] = React.useState([]);
  const [following, setFollowing] = React.useState([]);
  // const [photo, setPhoto] = React.useState("");
  // const [posts, setPosts] = React.useState({});

  const [numFollowers, setNumFollowers] = React.useState(100);
  const [numFollowing, setNumFollowing] = React.useState(100);
  const [numPosts, setNumPosts] = React.useState(0);
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    userInfo(props.username).then((res) => {
      console.log(res);
      if (res.data.res === "OK") {
        // setPhoto(res.data.profile_photo);
        setFollowers(res.data.follower_list);
        setFollowing(res.data.following_list);
        setPosts(res.data.post_list);
        setNumFollowers(res.data.follower_list.length);
        setNumFollowing(res.data.following_list.length);
        setNumPosts(Object.keys(res.data.post_list).length);
      } else {
        return;
      }
    });

    console.log(numFollowers);
    console.log(numFollowing);
    // console.log(photo);
  }, []);

  const [displayFollowers, setDisplayFollowers] = React.useState(false);
  const [displayFollowing, setDisplayFollowing] = React.useState(false);
  function handleFollowers() {
    setDisplayFollowers((x) => !x);
  }
  function handleFollowing() {
    setDisplayFollowing((x) => !x);
  }
  function uploadPhoto(event) {
    console.log(event.target.files[0]);
  }
  const listFollowers = followers.map((x) => <ListItem item={x} />);
  const listFollowing = following.map((x) => <ListItem item={x} />);
  if (goBack) return <User username={props.username} />;
  return (
    <div className="user-main">
      <div class="container mh-100 min-vh-100">
        <div class="row">
          <div class="col" id="sidebar">
          <div className="align-items-center p-2 bd-highlight">
        <div>
          <div className="container height-100 d-flex justify-content-center align-items-center">
            <div className="card text-center">
              <div className="py-4 p-2">
                <div>
                  <img
                    onClick={props.changeProfile}
                    src={img}
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
                      onClick={back}
                    >
                      Go Back
                    </button>
                  </li>
                  {/* <li>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          Upload Profile Photo
                        </span>
                      </div>
                      <div className="custom-file">
                        <input
                          type="file"
                          className="custom-file-input"
                          onChange={uploadPhoto}
                          id="inputGroupFile01"
                        />
                        <label
                          className="custom-file-label"
                          for="inputGroupFile01"
                        >
                          Choose file
                        </label>
                      </div>
                    </div>
                     <button type="file" onChange={uploadPhoto}>
                      Upload Profile Photo
                    </button> 
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          {displayFollowers && (
            <div>
              <div className="list-group">
                <a href="" className="list-group-item list-group-item-action">
                  Followers
                </a>
                {listFollowers}
              </div>
            </div>
          )}
          {displayFollowing && (
            <div>
              <div className="list-group">
                <a href="" className="list-group-item list-group-item-action">
                  Following
                </a>
                {listFollowing}
              </div>
            </div>
          )}
        </div>
      </div>
          </div>
          <div class="col-6 posts">
          {posts.map((x) => (
            <Post username={x.username} postdes={x.discription} />
          ))}
          </div>
        </div>
      </div>
    </div>
    
  );
}
