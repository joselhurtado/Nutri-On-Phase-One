import React from "react";
import "../../styles/home.css";
import RecipeCardPopular from "/src/js/component/RecipeCardPopular";
import RecipeCardVegan from "/src/js/component/RecipeCardVegan";
import RecipeCardKeto from "/src/js/component/RecipeCardKeto";
import RecipeCardPaleo from "/src/js/component/RecipeCardPaleo";
import RecipeCardVegetarian from "/src/js/component/RecipeCardVegetarian";
import { ButtonDiets } from "/src/js/component/ButtonDiets"

export const searchPage = () => {
	return (
		<div className="container">
			<div>
				<ButtonDiets />
			</div>
			<div>
				<h1 className="text-left">Popular Recipes</h1>
				<p className="text-left titleP">Tasty recipes the whole family will love.</p>
				<div>
				<RecipeCardPopular />
				</div>
			</div>

			<div>
				<h1 className="text-left">Vegan Recipes</h1>
				<p className="text-left titleP">Tasty recipes the whole family will love.</p>
				<div>
				<RecipeCardVegan />
				</div>
			</div>

			<div>
				<h1 className="text-left">Keto Recipes</h1>
				<p className="text-left titleP">Tasty recipes the whole family will love.</p>
				<div>
				<RecipeCardKeto />
				</div>
			</div>

			<div>
				<h1 className="text-left">Paleo Recipes</h1>
				<p className="text-left titleP">Tasty recipes the whole family will love.</p>
				<div>
				<RecipeCardPaleo />
				</div>
			</div>

			<div>
				<h1 className="text-left">Vegetarian Recipes</h1>
				<p className="text-left titleP">Tasty recipes the whole family will love.</p>
				<div>
				<RecipeCardVegetarian />
				</div>
			</div>
		</div>
)
}
