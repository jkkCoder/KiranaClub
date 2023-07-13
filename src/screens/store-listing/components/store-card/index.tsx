import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native';
import { StoreInterface } from '../../../../common/interface';
import { StackNavigationProp } from '@react-navigation/stack';

interface Props {
    storeData: StoreInterface
}

const StoreCard = ({storeData}: Props) => {
    const navigation = useNavigation<StackNavigationProp<any>>();
  const handleNavigation = () => {
    navigation.navigate('storeDetails',storeData)
  }

  return (
    <Pressable onPress={handleNavigation} style={styles.container}>
      <Text style={styles.name}>{storeData?.name}</Text>
      <Text style={styles.type}>{storeData?.type}</Text>
    </Pressable>
  )
}

export default StoreCard