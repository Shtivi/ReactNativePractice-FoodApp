import React from 'react'
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import DefaultText from '../components/DefaultText'
import { useSelector } from 'react-redux'

const MealDetailsScreen = props => {
  const selectedMeal = props.navigation.getParam('meal')
  const meals = useSelector(state => state.meals.meals)

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      </View>
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      <View style={styles.content}>
        {selectedMeal.ingredients.map(ingredient => (
          <DefaultText key={ingredient} style={styles.recipeLine}>{ingredient}</DefaultText>
          ))}
      </View>
      <Text style={styles.title}>Steps</Text>
      <View style={styles.content}>
        {selectedMeal.steps.map(step => (
          <DefaultText key={step} style={styles.recipeLine}>{step}</DefaultText>
          ))}
      </View>
    </ScrollView>
  )
}

MealDetailsScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: navigation.getParam('meal').title,
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title='Favorite'
        iconName='ios-heart-empty'
        onPress={() => console.log("mark as favorite")}
      />
    </HeaderButtons>
  )
})

const styles = StyleSheet.create({
  imageContainer: {
    height: 200,
    width: '100%',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  title: {
    fontSize: 22,
    marginVertical: 8,
    marginHorizontal: 16
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  },
  content: {
    marginHorizontal: 24,
    marginVertical: 8,
  },
  recipeLine: {
    marginVertical: 5,
    fontSize: 18
  }
})

export default MealDetailsScreen;