import React from 'react'
import { StyleSheet, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'

const MealDetailsScreen = props => {
  return (
    <View></View>
  )
}

MealDetailsScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: navigation.getParam('meal').title,
  headerRight: () =>  (
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
  
})

export default MealDetailsScreen;