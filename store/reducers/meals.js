import { MEALS } from '../../data/dummy-data'
import Actions from '../actions'

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.TOGGLE_FAVORITE:
      const mealIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId)
      if (mealIndex >= 0) {
        const updatedFavorites = [...state.favoriteMeals]
        updatedFavorites.splice(mealIndex, 1)
        return {
          ...state,
          favoriteMeals: updatedFavorites
        }
      } else {
        const meal = state.meals.find(meal => meal.id === action.mealId)
        return {
          ...state,
          favoriteMeals: state.favoriteMeals.concat(meal)
        }
      }
    default:
      return state;
  }
}
