import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CategoryMealsScreen = props => { 
  const category = props.navigation.getParam('category');
  return (
    <View style={styles.screen}>
      <Text>{JSON.stringify(category)}</Text>
    </View>
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