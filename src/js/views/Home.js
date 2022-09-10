import React from "react";
import "../../styles/home.css";
import RecipeCollection from "/src/js/component/RecipeCollection";
import { Hero } from "/src/js/component/Hero";
import { StatsSection } from "/src/js/component/StatsSection";
import { BMISection } from "/src/js/component/BMISection";

export const Home = () => {
	return (
		<div>
			<section>
				<Hero />
			</section>
			<section>
				<StatsSection />
			</section>
			<section>
				<BMISection />
			</section>
			<section>
				<RecipeCollection />
			</section>
		</div>
)
}
