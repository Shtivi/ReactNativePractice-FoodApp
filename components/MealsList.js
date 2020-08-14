import React from 'react'
import { StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import MealItem from './MealItem'

export default props => {
  return (
    <FlatList
      data={props.data}
      renderItem={itemData => (
        <MealItem
          title={itemData.item.title}
          duration={itemData.item.duration}
          complexity={itemData.item.complexity}
          affordability={itemData.item.affordability}
          imageUrl={itemData.item.imageUrl}
          onSelect={() => props.onSelect(itemData.item)}
        />
      )} />
  )
}

const styles = StyleSheet.create({

})