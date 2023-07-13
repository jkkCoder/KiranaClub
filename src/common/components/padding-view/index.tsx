import { View, Text } from 'react-native'
import React, { ReactNode } from 'react'
import styles from './styles'

interface Props {
  children: ReactNode
  customeStyles?: any
}

const PaddingView = ({children,customeStyles} : Props) => {
  return (
    <View style={[styles.container, customeStyles]}>
      {children}
    </View>
  )
}

export default PaddingView