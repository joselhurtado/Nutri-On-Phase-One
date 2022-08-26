import React from "react";

function Profile() {
  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <div class="container justify-content-center">
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Browse Meals
            </button>
          </form>
        </div>
      </nav>

      <div class="row">
        <div class="col-4">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src="https://images.theconversation.com/files/478225/original/file-20220809-24-orxjcu.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
              class="card-img-top"
              style={{ width: "18rem", borderRadius: "10rem" }}
              alt="..."
            />
            <div class="card-body">
              <h2 class="card-text">BEYONCE</h2>
              <h4>Nutrition Goals</h4>
            </div>
          </div>
        </div>
        <div class="col-8">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Example textarea
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
