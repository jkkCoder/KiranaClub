import { useEffect, useState } from "react"
import { fetchStoresByIds } from "../../common/utils"
import { StoreInterface, UserInterface } from "../../common/interface"
import {useSelector} from "react-redux"

interface userReduxInterface {
    "user" : {
        "stores" : string[];
        "username" : string;
        "id" : string;
    }
}

const useStore = () => {
    const user = useSelector((state:userReduxInterface) => state.user)
    const [stores, setStores] = useState([] as StoreInterface[])
    const [page, setPage] = useState(0)
    const [search, setSearch] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const [filteredStore, setFilteredStore] = useState([] as StoreInterface[])
    console.log('page is ', page)

    const storePagination = 20
    useEffect(() => {
        // debouncing
        if(search.length === 0){
            setFilteredStore([])
            return;
        }
        const unsubscribe = setTimeout(() => {
            // filter the data here
            const filteredData = stores?.filter( st => (st?.name?.toLowerCase().includes(search?.toLowerCase())
                || st?.area?.toLowerCase().includes(search?.toLowerCase())
                || st?.type?.toLowerCase().includes(search?.toLowerCase())
                || st?.route?.toLowerCase().includes(search?.toLowerCase())
            ))
            setFilteredStore(filteredData)
            // console.log("filter", filteredData)
        },100)

        return () => {clearTimeout(unsubscribe)}
    }, [search])
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
        if(!isLoading  && hasMore() && search.length === 0){
            await fetchStores()
        }
    }

    return {
        fetchStores,
        isLoading,
        page,
        stores,
        loadMore,
        search,
        setSearch,
        filteredStore
    }
}

export default useStore