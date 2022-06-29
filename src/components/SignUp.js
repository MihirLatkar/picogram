import React from "react";
import ImageUploading from 'react-images-uploading';
import { Link } from "react-router-dom";
import axios from "axios";
// import FormSubmit from './subComp/FormSubmit';

export default function SignUp() {
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [images, setImages] = React.useState([]);
  const maxNumber = 10;
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleImage(imageList, addUpdateIndex) {
    // event.preventDefault();
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  }

  async function signup(user) {
    const res = await axios.post("/api/signup", {
      username: user.username,
      password: user.password,
      // default_photo: images,
    });
    console.log(res);
    return res;
  }

  const [done, setDone] = React.useState(false);
  const [status, setStatus] = React.useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    if (formData.password !== formData.confirmPassword) {
      setStatus(true);
      return;
    } else setStatus(false);
    console.log(formData);
    const user = {
      username: formData.username,
      password: formData.password,
    };
    console.log(user.username);
    signup(user).then((res) => {
      console.log(res);
      if (res.data.res === "OK") {
        setDone(true);
      }
    });
  }

  return (
    <div>
      <div className="home">
        <div className="w-25 p-3 container d-flex justify-content-center login mh-100 min-vh-100">
          <form className="border align-self-center col">
            <h3 id="log">SignUp</h3>
            <div className="mb-3">
              <label htmlFor="InputEmail1" className="form-label">
                User Name
              </label>
              <input
                type="username"
                name="username"
                className="form-control"
                id="InputEmail1"
                aria-describedby="emailHelp"
                onChange={handleChange}
                value={formData.email}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="InputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="InputPassword1"
                onChange={handleChange}
                value={formData.password}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="InputPassword1" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                className="form-control"
                id="confirmPassword1"
                onChange={handleChange}
                value={formData.confirmPassword}
              />
            </div>
            <div className="mb-3">
            <ImageUploading
        multiple
        value={images}
        onChange={handleImage}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
            <Link to="/">
              <p>Already Have an account? Login</p>
            </Link>
            {done && (
              <Link to="/">
                <p>Successfully Signed Up. Click here to go to login page!</p>
              </Link>
            )}
            {status && <p>password and confirm password dont match</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
