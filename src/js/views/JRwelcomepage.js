import React from 'react'
import "../../styles/welcome.css"
import Nutrilogo from "/src/img/Logo_NutriON_White.png"
import { NewUser } from '../component/newUser'
import { Welcomedetails } from '../component/Welcomedetails'



function JRWelcomepage() {
  return (
    <div className="container-main">
              <div className="Form">
            <div className= "container">
              <div className="welcomeHeader">
                  <div className='welcomeTitle'>
                    <h1 className='Header-left'>Welcome to</h1>
                    </div>
                <div className='WelcomeForm'>
                  <img src = {Nutrilogo} className="Logo_NutriON_White"></img>
                </div>
              </div>
              <p className='welcomeP'>Before we start your journey, We would like to get to know you!</p>
            </div>
            <NewUser/>
            <div>
              <div className="carouselsign">
              <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                <img src="https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..."></img>
                <div class="carousel-caption d-none d-md-block">
                  <h5 className='hcarousel'>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img src="https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..."></img>
                <div class="carousel-caption d-none d-md-block">
                  <h5 className="hcarousel">Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="https://images.pexels.com/photos/3775164/pexels-photo-3775164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..."></img>
                <div class="carousel-caption d-none d-md-block">
                  <h5 className="hcarousel">Third slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div>
            <div className='belowcarousel'>
              <h1 className='belowTitle'>Healthy eating simplified</h1>
            </div>
            <Welcomedetails/>
          </div>
              </div>
            </div>
            </div>
    </div>
  
  )
}

export default JRWelcomepage