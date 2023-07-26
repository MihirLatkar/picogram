import React from "react";
import notFilled from '../images/not-filled-heart.png'
import Filled from '../images/filled-heart.png'
import img from '../images/blank1.png'

export default function Post(props) {
  const [like, setLike] = React.useState(false);
  const [nLikes, setNLikes] = React.useState(0);
  const imageData = props.image;
  console.log(imageData);
  function changeLike() {
    setLike((x) => !x);
    if (like) setNLikes((x) => x - 1);
    else setNLikes((x) => x + 1);
  }

  return (
    <div>
      <div className="post">
        <div className="post-title">
          <img src={img} className="post-profile-pic" alt="profile pic" />
          <h5 style={{ padding: 20 }}>{props.username}</h5>
        </div>
        <div className="post-content">
          {/* Display the image if imageData is available */}
          {<img src={`data:image/jpeg;base64,${imageData}`} alt="Post" className="post-content-pic" onDoubleClick={changeLike} />}
        </div>
        <div className="post-description">
          <p>{props.postdes}</p>
        </div>
        <div className="post-likebar">
          <img src={like ? Filled : notFilled} className="post-like-pic" alt="like-pic" onClick={changeLike} />
          <p style={{ padding: 5 }}>liked by {nLikes} people</p>
        </div>
      </div>
    </div>
  );
}
