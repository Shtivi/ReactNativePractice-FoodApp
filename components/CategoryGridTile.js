import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TouchableFeedback from './TouchableFeedback'

export default props => {
  const { title, color, onSelect } = props;

  return (
    <TouchableFeedback
      style={{ backgroundColor: color, ...styles.container }}
      onPress={onSelect}
    >
      <View style={styles.tile}>
        <Text style={styles.title}>
          {title}
        </Text>
      </View>
    </TouchableFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 6,
    padding: 10,
    borderRadius: 10,
    height: 150,
    flex: 1,
    margin: 10,
  },
  tile: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  title: {
    fontFamily: 'open-sans',
    fontSize: 22,
    textAlign: 'right'
  }
})