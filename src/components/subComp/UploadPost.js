import React from "react";
import axios from "axios";
export default function UploadPost(props) {
  async function createPost(description) {
    const res = await axios.post("/api/login/upload_post", {
      username: props.username,
      discription: description,
    });
    console.log(res);
    return res;
  }
  const [descri, setDescri] = React.useState("");
  const [message, setMessage] = React.useState(false)
  function handleChange(event) {
    setDescri(event.target.value);
  }
  function handleClick(event) {
    event.preventDefault()
    createPost(descri).then((res) => {
      if (res.data.res == "OK") {
        console.log("uploaded");
        setMessage(true)
        setDescri("")
      }
    });
  }
  return (
    <div className="">
      <form className="border align-self-center col">
        <h3 id="log">Upload Post</h3>
        <div className="mb-3">
          <label htmlFor="InputEmail1" className="form-label">
            Description
          </label>
          <input
            type="descri"
            name="descri"
            className="form-control"
            id="descri"
            onChange={handleChange}
            value={descri}
          />
          <div id="emailHelp" className="form-text"></div>
        </div>

        <button className="btn btn-success" onClick={handleClick}>
          Submit
        </button>
        {message && <h4>Post successfully uploaded</h4> }
      </form>
      
    </div>
  );
}
