import React from "react";
import "../../styles/home.css";
import RecipeCard from "/src/js/component/RecipeCard";
import { Hero } from "/src/js/component/hero";

export const Home = () => {
	return (
		<div className="container">
			<div>
				<Hero />
			</div>
			<div>
				<h1 className="text-center titles">Search Popular Recipes</h1>
				<div>
				<RecipeCard />
				</div>
			</div>
		</div>
)
}
