import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles';
import { StoreInterface } from '../../../../common/interface';


const CardContainer = ({address, area, name, route, type }:StoreInterface) => {
  return (
    <View style={styles.card}>
      <Text style={styles.productType}>{type}</Text>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.info}>area: {area}</Text>
      <Text style={styles.info}>route: {route}</Text>
      <Text numberOfLines={4} style={styles.info}>address: {address}</Text>
    </View>
  );
};

export default CardContainer;