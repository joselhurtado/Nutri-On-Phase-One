import React from "react";
import { Link } from "react-router-dom";
import Hero1 from "/src/img/vr-hero-desktop_1.webp";
import Hero4 from "/src/img/vr-hero-desktop_2.webp";
import Hero5 from "/src/img/vr-hero-desktop_3.webp";


export const Hero = () => {
	return (
        <div id="carouselExampleCaptions" className="carousel slide container" data-bs-ride="carousel">
            
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={Hero1} className="d-block heroImage" alt="Dark Vader Image" />
            <div className="carousel-caption d-none d-md-block m-4">
                <h5>Your Goals, Your Way</h5>
                <p>dvanced tools and in-depth analysis to help you build lifelong healthy habits.</p>
                <Link to="/character/4">
				<span className="btn btn-orange" href="#" role="button">
					Discover
				</span>
			</Link>
            </div>
            </div>

            <div className="carousel-item">
            <img src={Hero4} className="d-block heroImage" alt="Millennial Flacon Image" />
            <div className="carousel-caption d-none d-md-block m-4">
                <h5>Get Results</h5>
                <p>Log your food from our extensive database.</p>
                <Link to="/vehicle/0">
				<span className="btn btn-orange" href="#" role="button">
					Read More
				</span>
			</Link>
            </div>
            </div>

            <div className="carousel-item">
            <img src={Hero5} className="d-block heroImage" alt="Coruscant Planet Image" />
            <div className="carousel-caption d-none d-md-block m-4">
                <h5>Understand Your Body</h5>
                <p>ody mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women.</p>
                <Link to="/planet/9">
				<span className="btn btn-orange" href="#" role="button">
					Check your BMI
				</span>
			</Link>
            </div>
            </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
	);
};

export default Hero;