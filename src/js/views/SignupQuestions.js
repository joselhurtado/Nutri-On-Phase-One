import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import HeroWelcome from "/src/img/Food Recipe Hero.png";
import { FormUser } from "/src/js/component/Signupform";
import { FormUserQuestions} from "/src/js/component/SignupformQuestions";

export const SignUpQuestions = () => {
	return (
		<div id="welcomePage" className="heroWelcome">
		<div className='row mainHero'>
			<div className="col-sm heroHeadline2">
					<h1 className='text-light text-center m-2'> Tell us about yourself!</h1>
					<div className="SignupForm2">
						<FormUserQuestions/>
					</div>
					<Link to ="/SignupQuestionsGoals">
					<div className="SignupFormbtn" id="Signupformbtn2"><button className="btn btn-primary" id="Signupbtn2">Continue</button>
					</div>
					</Link>
			</div>
		</div>
	</div>
);
};

export default SignUpQuestions;