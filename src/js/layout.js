import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/Home";
import { LandingPage }  from "./views/LandingPage";
import { Login }  from "./views/LoginPage";
import { SearchPage } from "./views/SearchPage";
import { WelcomePage } from "./views/WelcomePage";
import injectContext from "./store/appContext";

import { NavBar } from "./component/NavBar";
import { Footer } from "./component/footer";
import RecipeDetails from "/src/js/component/RecipeDetails";
import Profile from "/src/js/component/Profile";



const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
			<ScrollToTop>
					<NavBar/>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/dashboard">
							<Profile />
						</Route>
						<Route exact path="/LoginPage">
							<Login />
						</Route>
						<Route exact path="/landingPage">
							<LandingPage />
						</Route>
						<Route exact path="/searchPage">
							<SearchPage />
						</Route>
						<Route exact path="/WelcomePage">
							<WelcomePage />
						</Route>
						<Route exact path="/recipe/:theid">
							<RecipeDetails />
						</Route>
						<Route>
							<h1 className="align-center" >Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
