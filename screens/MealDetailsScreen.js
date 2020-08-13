import React from 'react'
import { StyleSheet, View } from 'react-native'

const MealDetailsScreen = props => {
  return (
    <View></View>
  )
}

MealDetailsScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: navigation.getParam('meal').title
})

const styles = StyleSheet.create({
  
})

export default MealDetailsScreen;