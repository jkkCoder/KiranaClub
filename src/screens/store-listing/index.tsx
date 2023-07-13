import { Text } from 'react-native'
import React from 'react'
import PaddingView from '../../common/components/padding-view'
import {useSelector} from "react-redux"

const StoreListing = () => {
  const user = useSelector((state:any) => state.user)
  return (
    <PaddingView>
      <Text>StoreListing</Text>
    </PaddingView>
  )
}

export default StoreListing