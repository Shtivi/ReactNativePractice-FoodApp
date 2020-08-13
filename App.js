import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import MealsNavigator from './navigation/MealsNavigator'
import { enableScreens } from 'react-native-screens'

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

enableScreens();

export default props => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontsLoaded(true)} 
      />
    )
  }

  return (
    <MealsNavigator />
  )
}

const styles = StyleSheet.create({
  
})