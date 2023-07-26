import React from "react";
import axios from "axios";

export default function UploadPost(props) {
  async function createPost(description, imageFile) {
    const Formdata = new FormData()
    Formdata.append('username',props.username)
    Formdata.append('description',description)
    Formdata.append('image',imageFile)
    const res = await axios.post("/api/login/upload_post", Formdata).then((res) => {
      console.log(res);
      if(res.data.res === 'OK')
      {
        setMessage(true)
        setDescri("")
        setImageFile(null)
        console.log("Post uploaded successfully")
      }
    });
    return res;
  }

  const [descri, setDescri] = React.useState("");
  const [message, setMessage] = React.useState(false)
  const [imageFile, setImageFile] = React.useState(null);

  function handleChange(event) {
    setDescri(event.target.value);
  }

  function handleImageUpload(event) {
    setImageFile(event.target.files[0]);
  }
  
  function handleClick(event) {
    event.preventDefault()
    createPost(descri,imageFile)
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
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input
            type="file"
            name="image"
            className="form-control"
            id="image"
            onChange={handleImageUpload}
          />
        </div>
        <button className="btn btn-success" onClick={handleClick}>
          Submit
        </button>
        {message && <h4>Post successfully uploaded</h4> }
      </form>
    </div>
  );
}
