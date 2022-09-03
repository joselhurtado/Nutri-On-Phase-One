
const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
				recipeData: [],
				recipeVegan: [],
				favorites: [],
		},
		actions: {

			getVeganRecipes: async () => { 			//New Function to Call Vegan Recipes
				const response = await fetch(
					`https://api.spoonacular.com/recipes/complexSearch?query=vegan&apiKey=${process.env.APIfood}&number=6`
				);
				const payload = await response.json();
				setStore({recipeVegan:payload.results})
				console.log(payload, "Payload Vegan Recipes")
			},

			getPopularRecipes: async () => { 			//New Function to Call Popular Recipes
				const response = await fetch(
					`https://api.spoonacular.com/recipes/random?apiKey=${process.env.APIfood}&number=6`
				);
				const payload = await response.json();
				setStore({recipeData:payload.recipes})
				console.log(payload, "Payload Popular Recipes")
			},

			addFavorites: (item) => {   			//Favorites Function
				const store = getStore();			//Access to the Store
				store.favorites.push(item)			//Push Item
				setStore(store)						//Save the Changes under Store (Update the State)
			},

			removeFavorites: index => {   			//Remove Favorites Function
				const store = getStore();
				let updatedList = store.favorites.filter(
					(item, i) => index != i
				);
				setStore({favorites:updatedList})	
			},					
			
		}	
	};
};

//* ABOVE THIS LINE LIVES THE NEW API ACTIONS CALLING OBJECTS *//

export default getState;