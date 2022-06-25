import React from "react";
import User from "../User";

export default function ProfilePage(props) {
  console.log("in Profile page");
  const [goBack, setGoBack] = React.useState(false);
  function back() {
    setGoBack(true);
  }
  if (goBack) return <User username={props.username} />;
  return (
    <div>
      <div class="p-2 bd-highlight">
        <div class="container height-100 d-flex align-items-center">
          <div class="card text-center">
            <div class="py-4 p-2">
              <div>
                <img
                  onClick={props.changeProfile}
                  src="https://i.imgur.com/EnANUqj.jpg"
                  alt=""
                  class="rounded"
                  width="100"
                />
              </div>
              <div class="mt-3 d-flex flex-row justify-content-center">
                <h5>Matt Damon</h5>
                <span class="dots">
                  <i class="fa fa-check"></i>
                </span>
              </div>

              <div class="mt">
                <button type="button" class="btn btn-success">
                  Followers
                </button>
                <button class="btn btn-outline-secondary">
                  <i class="fa fa-users"></i> 451
                </button>
              </div>
              <div class="mt">
                <button type="button" class="btn btn-warning">
                  Following
                </button>
                <button class="btn btn-outline-secondary">
                  <i class="fa fa-users"></i> 451
                </button>
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
                  <button
                    type="button"
                    class="btn btn-outline-danger"
                    onClick={back}
                  >
                    Go Back
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="p-2 flex-grow-1 bd-highlight">Flex item</div>
    </div>
  );
}
