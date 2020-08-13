import React from 'react'
import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Colors from '../constants/colors'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import MealDetailsScreen from '../screens/MealDetailsScreen'
import { Ionicons } from '@expo/vector-icons'

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: CategoryMealsScreen,
  MealDetails: MealDetailsScreen
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'transparent',
    },
    headerTintColor: Platform.OS === 'android' ? '#fff' : 'black',
    headerBackTitleVisible: false,
    headerBackTitle: null
  },
  headerMode: 'screen',
})

const MealsFavTabNavigator = createBottomTabNavigator({
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => (
        <Ionicons name='ios-home' size={32} color={tabInfo.tintColor} />
      )
    }
  },
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: {
      tabBarIcon: tabInfo => (
        <Ionicons name='ios-heart' size={32} color={tabInfo.tintColor} />
      )
    }
  }
}, {
  tabBarOptions: {
    showLabel: false,
    activeTintColor: Colors.accentColor
  }
})

export default createAppContainer(MealsFavTabNavigator)