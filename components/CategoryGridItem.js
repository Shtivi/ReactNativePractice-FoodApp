import React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import TouchableFeedback from './TouchableFeedback'

export default props => {
  return (
    <TouchableFeedback
      style={{...styles.container, ...props.style}}
      onPress={() => props.onPress(props.data)}
    >
      <View>
        <Text>{props.data.title}</Text>
      </View>
    </TouchableFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    borderWidth: 1,
    borderColor: 'black'
  }
})