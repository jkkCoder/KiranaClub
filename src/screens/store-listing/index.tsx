import { FlatList, Text } from 'react-native'
import React, { useEffect } from 'react'
import PaddingView from '../../common/components/padding-view'
import useStore from './hooks'
import StoreCard from './components/store-card'
import ScreenHeader from '../../common/components/screen-header'
import styles from './styles'
import { TextInput } from 'react-native-gesture-handler'

const StoreListing = () => {
  const {fetchStores,isLoading, stores,loadMore, search, setSearch,filteredStore} = useStore()
  console.log('filtered store is ', filteredStore)

  useEffect(() => {
    fetchStores()
  },[])

  return (
    <>
      <ScreenHeader title="Stores" />
      <PaddingView>
        <TextInput 
          placeholder='Search stores'
          style={styles.search}
          value={search}
          onChangeText={text => setSearch(text)}
        />
        <FlatList
          removeClippedSubviews
          data={filteredStore?.length > 0 ? filteredStore : stores}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item?.id || item?.name + item?.address}
          renderItem={({item}) => (
            <StoreCard storeData={item} />
          )}
          onEndReached={loadMore}
          onEndReachedThreshold={0.1}
          ListFooterComponent={isLoading ? <Text style={styles.loadingTxt}>Loading...</Text> : <></>}
        />
      </PaddingView>
    </>
    
  )
}

export default StoreListing