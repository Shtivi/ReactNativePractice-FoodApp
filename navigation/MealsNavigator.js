import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Colors from '../constants/colors'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import FiltersScreen from '../screens/FiltersScreen'
import MealDetailsScreen from '../screens/MealDetailsScreen'

const defaultStackNavOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'transparent',
    },
    headerTitleStyle: {
      fontFamily: 'open-sans-bold'
    },
    headerTintColor: Platform.OS === 'android' ? '#fff' : 'black',
    headerBackTitleVisible: false,
    headerBackTitle: null
  },
  headerMode: 'screen',
}

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: CategoryMealsScreen,
  MealDetails: MealDetailsScreen
}, defaultStackNavOptions)

const FavitoresNavigator = createStackNavigator({
  Favorites: FavoritesScreen,
  MealDetails: MealDetailsScreen,
}, defaultStackNavOptions)

const tabsConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => (
        <Ionicons name='ios-home' size={28} color={tabInfo.tintColor} />
      )
    }
  },
  Favorites: {
    screen: FavitoresNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => (
        <Ionicons name='ios-heart' size={28} color={tabInfo.tintColor} />
      )
    }
  }
};

const MealsFavTabNavigator = Platform.OS === 'android' ?
  createMaterialBottomTabNavigator(tabsConfig, {
    activeColor: Colors.accentColor,
    labeled: false,
    barStyle: {
      backgroundColor: 'white'
    }
  }) :
  createBottomTabNavigator(tabsConfig, {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: Colors.accentColor
    }
  })

const FiltersNavigator = createStackNavigator({
  Filters: FiltersScreen
}, defaultStackNavOptions)

const MainNavigator = createDrawerNavigator({
  Tabs: {
    screen: MealsFavTabNavigator,
    navigationOptions: {
      drawerLabel: 'Meals'
    }
  },
  Filters: FiltersNavigator
}, {
  contentOptions: {
    activeTintColor: Colors.accentColor
  }
})

export default createAppContainer(MainNavigator)