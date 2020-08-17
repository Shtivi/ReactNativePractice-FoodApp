const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE'

const toggleFavorite = mealId => ({
  type: TOGGLE_FAVORITE,
  mealId
})

export default {
  TOGGLE_FAVORITE,
  toggleFavorite
}