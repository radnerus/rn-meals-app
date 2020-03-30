import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/meals';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const toggledMeal = state.meals.find(meal => meal.id === action.mealId);
      const mealIndex = state.favoriteMeals.findIndex(
        meal => meal.id === action.mealId
      );
      const favorites =
        mealIndex !== -1
          ? state.favoriteMeals.filter(meal => meal.id !== action.mealId)
          : [...state.favoriteMeals, toggledMeal];
      return {
        ...state,
        favoriteMeals: favorites
      };
    case SET_FILTERS:
      const appliedFilters = action.filters;
      const filteredMeals = state.meals.filter(meal => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilters.vegetarian && !meal.isVegetarian) {
          return false;
        }
        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }
        return true;
      });
      return {
        ...state,
        filteredMeals: filteredMeals
      };
    default:
      return state;
  }
};

export default mealsReducer;
