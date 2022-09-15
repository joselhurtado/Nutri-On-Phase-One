import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import HeroWelcome from "/src/img/Food Recipe Hero.png";
import { FormUser } from "/src/js/component/Signupform";
import { FormUserQuestions} from "/src/js/component/SignupformQuestions";
import { SignupGoals} from "/src/js/component/SignupGoals";

export const SignUpQuestionsThird = () => {
	return (
		<div id="welcomePage" className="heroWelcome">
		<div className='row mainHero'>
			<div className="col-sm heroHeadline2">
					<div className="SignupForm2">
						<SignupGoals/>
					</div>
			</div>
		</div>
	</div>
);
};

export default SignUpQuestionsThird;