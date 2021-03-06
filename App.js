import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { enableScreens } from 'react-native-screens'
import { combineReducers, createStore } from 'redux'
import MealsNavigator from './navigation/MealsNavigator'
import mealsReducer from './store/reducers/meals'
import { Provider } from 'react-redux'

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

enableScreens();

const rootReducer = combineReducers({
  meals: mealsReducer
})
const store = createStore(rootReducer)

export default props => {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }

  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  )
}

const styles = StyleSheet.create({

})