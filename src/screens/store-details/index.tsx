import { Text, Pressable } from 'react-native'
import React from 'react'
import PaddingView from '../../common/components/padding-view'
import ScreenHeader from '../../common/components/screen-header'
import { RouteProp, useRoute } from '@react-navigation/native'
import { StoreInterface } from '../../common/interface'
import styles from './styles'
import CardContainer from './components/card-container'
import useStoreDetail from './hooks'

type StoreDetailsRouteProp = RouteProp<Record<string, StoreInterface>, string>;

const StoreDetails = () => {
  const routes = useRoute<StoreDetailsRouteProp>()

  const { address, area, name, route, type, id } = routes?.params
  const {openCamera, imageUri} = useStoreDetail()
  return (
    <>
      <ScreenHeader title="Store Details" hasBack />
      <PaddingView>
        <CardContainer key={id} address={address} area={area} name={name} route={route} type={type} />
        <Pressable style={styles.button} onPress={openCamera}>
          <Text style={styles.buttonText}>Upload photo</Text>
        </Pressable>
      </PaddingView>
    </>
    
  )
}

export default StoreDetails