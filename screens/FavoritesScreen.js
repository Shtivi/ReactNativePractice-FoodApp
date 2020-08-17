import React from 'react'
import { StyleSheet, View } from 'react-native'
import MealsList from '../components/MealsList'
import { useSelector } from 'react-redux'

export default props => {
  const meals = useSelector(state => state.meals.favoriteMeals)

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
      data={meals}
      onSelect={mealSelectionHandler}
    />
  )
}

const styles = StyleSheet.create({
  
})