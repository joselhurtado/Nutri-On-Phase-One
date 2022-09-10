import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import Welcomepage from "./views/welcomepage";
import injectContext from "./store/appContext";

import { NavBar } from "./component/NavBar";
import { Footer } from "./component/footer";
import RecipeDetails from "/src/js/component/RecipeDetails";
import  Profile  from "/src/js/component/Profile";


const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
			<ScrollToTop>
					<Switch>
					<Route exact path="/">
							<Welcomepage />
					</Route>
					<Route exact path="/homepage">
						<NavBar/>
							<Home />
							<Footer />
					</Route>
					<Route exact path="/dashboard">
						<NavBar/>
							<Profile />
							<Footer />
					</Route>
					<Route exact path="/recipe/:theid">
						<NavBar/>
							<RecipeDetails />
							<Footer />
							</Route>
					<Route>
							<h1 className="align-center" >Not found!</h1>
					</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
