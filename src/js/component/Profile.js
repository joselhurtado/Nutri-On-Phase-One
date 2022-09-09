import React from "react";

export default function Profile() {
  return (
    <div class>
      <nav class="navbar navbar-light"></nav>
      <div class="container dashboard">
        <div class="row">
          <div class="col-4 pt-4" style={{ paddingLeft: "50px" }}>
            <div class="card" style={{ width: "18rem", height:"90%" }}>
              <img
                src="https://images.theconversation.com/files/478225/original/file-20220809-24-orxjcu.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
                class="card-img-top mx-auto d-block"
                style={{
                  width: "10rem",
                  borderRadius: "10rem",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                }}
                alt="..."
              />
              <div class="card-body">
                <h2 class="card-text" style={{ textAlign: "center" }}>
                  BEYONCE
                </h2>
                <h4 style={{ textAlign: "center", paddingBottom: "10px" }}>
                  Nutrition Goals
                </h4>
              </div>
            </div>
          </div>
          <div class="col-8 pt-4" style={{ paddingRight: "60px" }}>
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
          </div>
        </div>
        <div class="row" style={{paddingTop:"25px"}}>
          <div class="col-6">
            <div class="card p personalDietCircle">
              <div class="card-body">
                <h5 class="card-title text-center dietCircleTitle">Vegetarian Diet</h5>
                <p class="card-text text-center">My Weight Gain Journey</p>
                <div class="card-text-diet">
                <ul class="list-group list-group-flush text-center">
                  <li class="list-group-item">Age</li>
                  <li class="list-group-item">Weight</li>
                  <li class="list-group-item">Height</li>
                  <li class="list-group-item">Goal Weight</li>
                </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="card">
              <h5 class="card-title text-center mt-5">Calorie Calculator</h5>
              <div class="col-sm">
                <label
                  for="exampleFormControlInput3"
                  class="form-label"
                ></label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput"
                  placeholder="Age"
                />
                <fieldset class="row mb-3">
                  <legend class="col-form-label col-sm-2 pt-0">Gender</legend>
                  <div class="col-sm-10">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="gridRadios"
                        id="gridRadios1"
                        value="option1"
                        checked
                      ></input>
                      <label class="form-check-label" for="gridRadios1">
                        Female
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="gridRadios"
                        id="gridRadios2"
                        value="option2"
                      ></input>
                      <label class="form-check-label" for="gridRadios2">
                        Male
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="gridRadios"
                        id="gridRadios3"
                        value="option3"
                      ></input>
                      <label class="form-check-label" for="gridRadios3">
                        Other
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
              <div class="input-group">
                <span class="input-group-text">Height</span>
                <input
                  type="text"
                  aria-label="First name"
                  class="form-control"
                  placeholder="feet"
                />
                <input
                  type="text"
                  aria-label="Last name"
                  class="form-control"
                  placeholder="inches"
                />
              </div>
              <div class="col-sm">
                <label
                  for="exampleFormControlInput3"
                  class="form-label"
                ></label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput"
                  placeholder="Weight (lbs)"
                />
              </div>
              <select class="form-select" aria-label="Default select example">
                <option selected>Activity Level</option>
                <option value="1">Sedentary</option>
                <option value="2">Light</option>
                <option value="3">Moderate</option>
                <option value="4">Active</option>
              </select>
              <div class="d-grid gap-2 d-md-block">
                <button class="btn" type="button" style={{backgroundColor:"#05727A", color:"white"}}>
                  Calculate
                </button>
                <button class="btn btn-secondary" type="button">
                  Clear
                </button>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="card">
              <div class="card-body d-flex justify-content-center align-items-center flex-column favoriteMeal">
                <h5 class="card-title text-center">My Favorite Meals</h5>
                <div
                  id="carouselExampleSlidesOnly"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner ">
                    <div class="carousel-item active  " data-bs-interval="2000">
                      <img
                        src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=1200,1200"
                        class="d-block "
                        style={{ width: "480px", height: "360px" }}
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                      <img
                        src="https://images.theconversation.com/files/368263/original/file-20201109-22-lqiq5c.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
                        class="d-block"
                        style={{ width: "480px", height: "360px" }}
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                      <img
                        src="https://colonydiner.com/wp-content/uploads/2021/03/French.jpg"
                        class="d-block"
                        style={{ width: "480px", height: "360px" }}
                        alt="..."
                      />
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
