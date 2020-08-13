import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Platform } from 'react-native'
import { HeaderButton } from 'react-navigation-header-buttons'
import Colors from '../constants/colors'

export default props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={28}
      color={Platform.OS === 'android' ? 'white' : Colors.primaryColor} />
  )
}