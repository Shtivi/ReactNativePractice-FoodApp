import React from 'react'
import { StyleSheet, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'

const FiltersScreen = props => {
  return (
    <View></View>
  )
}

const styles = StyleSheet.create({
  
})

FiltersScreen.navigationOptions = navData =>  ({
  headerTitle: 'Filter',
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title="Menu" iconName="ios-menu" onPress={() => navData.navigation.toggleDrawer()} />
    </HeaderButtons>
  )
})

export default FiltersScreen;