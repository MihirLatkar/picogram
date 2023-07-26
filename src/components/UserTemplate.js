import React from "react";
import axios from "axios";
import UploadPost from "./subComp/UploadPost";
import Post from "./Post";
import Suggestions from "./Suggestions";
import Profile from "./Profile";
import profile from "./tmp-img/profile-pic1.jpg";

export default function UserTemplate(props) {
  console.log("in user template");
  const [posts, setPosts] = React.useState([]);
  async function fetchPost() {
    const res = await axios.post("/api/login/fetch_post", {
      username: props.username,
    });
    console.log(res);
    return res;
  }
  React.useEffect(() => {
    fetchPost().then((res) => {
      console.log("working");
      console.log(res);
      setPosts(res.data.following_post);
    });
  }, []);

  return (
    <div className="user-main">
      <div class="container mh-100 min-vh-100">
        <div class="row">
          <div class="col" id="sidebar">
            <Profile
              changeProfile={props.changeProfile}
              username={props.username}
              logOut={props.logOut}
            />
          </div>
          <div class="col-6 posts">
            <UploadPost username={props.username} />
            {posts.map((x) => (
             // <Post username={x.username} postdes={x.description}/>
              <Post username={x.username} image={x.image} postdes={x.description} />
            ))}
          </div>
          <div class="col" id="sidebar">
            <Suggestions username={props.username} />
          </div>
        </div>
      </div>
    </div>
  );
}
