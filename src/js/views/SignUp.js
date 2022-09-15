import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import HeroWelcome from "/src/img/Food Recipe Hero.png";
import { FormUser } from "/src/js/component/Signupform";

export const SignUP = () => {
	return (
	<div id="welcomePage" className="heroWelcome">
		<div className='row mainHero'>
			<div className="col-sm heroHeadline">
					<h1 className='text-light text-center m-2'>Lets Sign Up</h1>
					<div className="SignupForm">
						<FormUser/>
					</div>
					<Link to ="/SignupQuestions">
					<div className="SignupFormbtn"><button className="btn btn-primary" id="Questionbuttons">Continue</button>
					</div>
					</Link>
			</div>
				<div className="col-sm ">
					<img className="heroImage" src={HeroWelcome} />
			</div>
		</div>
	</div>
);
};

export default SignUP;