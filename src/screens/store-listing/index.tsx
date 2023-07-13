import { FlatList, Text } from 'react-native'
import React, { useEffect } from 'react'
import PaddingView from '../../common/components/padding-view'
import useStore from './hooks'
import StoreCard from './components/store-card'
import ScreenHeader from '../../common/components/screen-header'

const StoreListing = () => {
  const {fetchStores,isLoading, page, stores,loadMore} = useStore()

  useEffect(() => {
    fetchStores()
  },[])

  return (
    <>
      <ScreenHeader title="Stores" />
      <PaddingView>
        <FlatList
          removeClippedSubviews
          data={stores}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item?.id || item?.name + item?.address}
          renderItem={({item}) => (
            <StoreCard storeData={item} />
          )}
          onEndReached={loadMore}
          onEndReachedThreshold={0.1}
          ListFooterComponent={isLoading ? <Text>Loading...</Text> : <></>}
        />
      </PaddingView>
    </>
    
  )
}

export default StoreListing