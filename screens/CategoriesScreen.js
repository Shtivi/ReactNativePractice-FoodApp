import React from 'react'
import { StyleSheet, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import CategoryGridItem from '../components/CategoryGridItem'
import { CATEGORIES } from '../data/dummy-data'

const CategoriesScreen = props => {
  const handleCategoryPress = category => {
    props.navigation.navigate({
      routeName: 'CategoryMeals',
      params: {
        category
      }
    })
  };

  return (
    <FlatList
      contentContainerStyle={styles.categoriesGridList}
      data={CATEGORIES}
      numColumns={2}
      renderItem={(itemData) => (
        <View style={styles.gridItem}>
          <CategoryGridItem
            data={itemData.item}
            onPress={handleCategoryPress} />
        </View>
      )}
    />
  )
}

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  categoriesGridList: {
    flexGrow: 1,

  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  }
})

export default CategoriesScreen;