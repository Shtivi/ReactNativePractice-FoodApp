import React from 'react'
import { StyleSheet, View } from 'react-native'
import MealsList from '../components/MealsList'
import { MEALS } from '../data/dummy-data';

export default props => {
  const displayedMeals = MEALS.filter(m => m.id == 'm1' || m.id == 'm2');

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

const styles = StyleSheet.create({
  
})