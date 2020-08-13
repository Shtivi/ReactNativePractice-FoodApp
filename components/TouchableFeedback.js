import React from 'react';
import { Platform } from 'react-native';
import { TouchableOpacity, TouchableNativeFeedback } from 'react-native-gesture-handler';

export default props => {
  let FeedbackComponent = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    FeedbackComponent = TouchableNativeFeedback;
  }

  return (
    <FeedbackComponent {...props}>
      {props.children}
    </FeedbackComponent>
  )
}