import React from 'react'
import { StyleSheet, View, ImageBackground, Text } from 'react-native'
import TouchableFeedback from './TouchableFeedback'
import DefaultText from '../components/DefaultText'

export default props => {
  const { title, duration, complexity, affordability, imageUrl, onSelect } = props;
  return (
    <View style={styles.mealItem}>
      <View style={{ height: '100%' }}>
        <View style={ styles.mealHeader }>
          <TouchableFeedback onPress={onSelect}>
            <View>
              <ImageBackground
                source={{ uri: imageUrl }}
                style={styles.bgImg}>
                <Text
                  style={styles.title}
                  numberOfLines={1}>
                  {title}
                </Text>
              </ImageBackground>
            </View>
          </TouchableFeedback>
        </View>
        <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
          <DefaultText>{duration}m</DefaultText>
          <DefaultText>{complexity.toUpperCase()}</DefaultText>
          <DefaultText>{affordability.toUpperCase()}</DefaultText>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    backgroundColor: 'transparent',
    margin: 15,
    flex: 1,
    overflow: 'hidden'
  },
  mealRow: {
    flexDirection: 'row'
  },
  mealHeader: {
    height: '85%',
    overflow: 'hidden',
    borderRadius: 15
  },
  bgImg: {
    borderRadius: 15,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end'
  },
  title: {
    fontFamily: 'open-sans',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    fontSize: 24,
    paddingHorizontal: 12,
    paddingVertical: 10
  },
  mealDetail: {
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1
  }
})