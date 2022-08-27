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
              class="card-img-top mx-auto d-block"
              style={{ width: "10rem", borderRadius: "10rem" }}
              alt="..."
            />
            <div class="card-body">
              <h2 class="card-text" style={{textAlign: "center"}}>BEYONCE</h2>
              <h4 style={{textAlign: "center"}}>Nutrition Goals</h4>
            </div>
          </div>
        </div>
        <div class="col-8">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Full Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Full Name"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput2" class="form-label">
              Username
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput2"
              placeholder="Username"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput3" class="form-label">
              Email Address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput3"
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput4" class="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              class="form-control"
              id="exampleFormControlInput4"
              placeholder="555-555-5555"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Vegetarian Diet</h5>
              <p class="card-text">My Weight Gain Journey</p>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Age</li>
                <li class="list-group-item">Weight</li>
                <li class="list-group-item">Height</li>
                <li class="list-group-item">Goal Weight</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="card" >
            <div class="card-body" >
              <h5 class="card-title">My Favorite Meals</h5>
              <p class="card-text">
                <div
                  id="carouselExampleInterval"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                      <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574" class="d-block w-50" alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                      <img src="https://images.theconversation.com/files/368263/original/file-20201109-22-lqiq5c.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" class="d-block w-50" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <img src="https://colonydiner.com/wp-content/uploads/2021/03/French.jpg" class="d-block w-50" alt="..." />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleInterval"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleInterval"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
