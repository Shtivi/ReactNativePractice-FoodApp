import React from 'react';
import { StyleSheet } from 'react-native';
import MealsList from '../components/MealsList';
import { useSelector } from 'react-redux';

const CategoryMealsScreen = props => {
  const category = props.navigation.getParam('category')
  const meals = useSelector(state => state.meals.filteredMeals)

  const displayedMeals = meals.filter(meal => meal.categoryIds.indexOf(category.id) != -1)

  const mealSelectionHandler = meal => {
    props.navigation.navigate({
      routeName: 'MealDetails',
      params: {
        meal
      }
    })
  }

  return (
    <MealsList 
      data={displayedMeals}
      onSelect={mealSelectionHandler} 
    />
  )
}

CategoryMealsScreen.navigationOptions = ({ navigation }) => {
  const category = navigation.getParam('category');
  return {
    headerTitle: category.title
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
})

export default CategoryMealsScreen;