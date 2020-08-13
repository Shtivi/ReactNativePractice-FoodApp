import React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import MealItem from '../components/MealItem';
import { MEALS } from '../data/dummy-data';


const CategoryMealsScreen = props => {
  const category = props.navigation.getParam('category');
  const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(category.id) != -1)

  const mealSelectionHandler = meal => {
    props.navigation.navigate({
      routeName: 'MealDetails',
      params: {
        meal
      }
    })
  }

  return (
    <FlatList
      data={displayedMeals}
      renderItem={itemData => (
        <MealItem
          title={itemData.item.title}
          duration={itemData.item.duration}
          complexity={itemData.item.complexity}
          affordability={itemData.item.affordability}
          imageUrl={itemData.item.imageUrl}
          onSelect={() => mealSelectionHandler(itemData.item)}
        />
      )}>

    </FlatList>
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