
const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
				recipeData: [],
				favorites: [],
		},
		actions: {
			getAllRecipes: async () => { 				//New Function to Call Recipes
				const response = await fetch(
					`https://api.spoonacular.com/recipes/715538/similar?apiKey=${process.env.APIfood}`
				);
				const payload = await response.json();
				setStore({recipeData:payload})
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