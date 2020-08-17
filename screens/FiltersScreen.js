import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, View, Switch, Text } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import DefaultText from '../components/DefaultText'
import HeaderButton from '../components/HeaderButton'
import Colors from '../constants/colors'
import colors from '../constants/colors'

const FiltersScreen = props => {
  const [vegan, setVegan] = useState(false)

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      vegan
    }

    console.log(appliedFilters)
    console.log("filters are not really implemented...")
  }, [vegan])

  useEffect(() => {
    props.navigation.setParams({
      save: saveFilters
    })
  }, [saveFilters])

  return (
    <View style={styles.screen}>
      <DefaultText style={styles.title}>Filters</DefaultText>
      <View style={styles.filterContainer}>
        <Text>Vegan</Text>
        <Switch
          trackColor={{ true: 'colors.primaryColor' }}
          thumbColor={colors.primaryColor}
          value={vegan}
          onValueChange={newValue => setVegan(newValue)}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    margin: 20,
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%'
  }
})

FiltersScreen.navigationOptions = navData => ({
  headerTitle: 'Filter',
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title="Menu" iconName="ios-menu" onPress={() => navData.navigation.toggleDrawer()} />
    </HeaderButtons>
  ),
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title="Save" onPress={() => navData.navigation.getParam('save')()} />
    </HeaderButtons>

  )
})

export default FiltersScreen;