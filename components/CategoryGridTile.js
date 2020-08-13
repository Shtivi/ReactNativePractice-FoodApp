import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TouchableFeedback from './TouchableFeedback'

export default props => {
  const { title, color, onSelect } = props;

  return (
    <View style={styles.container}>
      <View style={styles.feedbackContainer}>
        <TouchableFeedback
          style={{ backgroundColor: color, ...styles.tile }}
          onPress={onSelect}>
          <View style={styles.textContainer}>
            <Text style={styles.title} numberOfLines={2}>
              {title}
            </Text>
          </View>
        </TouchableFeedback>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // overflow: 'hidden',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 6,
  },
  feedbackContainer: {
    borderRadius: 10, 
    overflow: 'hidden'
  },
  tile: {
    padding: 10,
    borderRadius: 10,
    height: 150,
    flex: 1,
  },
  textContainer: {
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