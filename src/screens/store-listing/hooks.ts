import { useState } from "react"
import { fetchStoresByIds } from "../../common/utils"
import { StoreInterface } from "../../common/interface"
import {useSelector} from "react-redux"
import userSlice from "../../redux/userSlice"

const useStore = () => {
    const user = useSelector((state:any) => state.user)
    const [stores, setStores] = useState([] as StoreInterface[])
    const [page, setPage] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    const storePagination = 20
    const fetchStores = async () => {
        try{
            setIsLoading(true)
            const data = await fetchStoresByIds(user.stores.slice(storePagination*page, storePagination*page + storePagination ))
            

            // update the stores
            setStores(prevStore => [...prevStore, ...data])
            
            //update page 
            setPage( page => (page + 1))
            setIsLoading(false)
        }catch(err){
            setIsLoading(false)
        }
    }

    const hasMore = () => {
        if(user.stores.length >= storePagination*page ){
            return true;
        }
        return false;
    }
    
    const loadMore = async () => {
        if(!isLoading  && hasMore()){
            await fetchStores()
        }
    }

    return {
        fetchStores,
        isLoading,
        page,
        stores,
        loadMore
    }
}

export default useStore