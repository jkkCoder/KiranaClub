import { useEffect } from "react"
import { fetchUserById, getUser, setUser } from "./src/common/utils"
import {useDispatch} from "react-redux"
import { addUser } from "./src/redux/userSlice"

const useApp = (setInitialRoute: React.Dispatch<React.SetStateAction<string>>
                , setIsLoading:  React.Dispatch<React.SetStateAction<boolean>>) => {
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchUser = async () => {
          const user = await getUser()
          if(!user?.user){
            setInitialRoute('login')
          }else{
            //dispatch the user payload
            const res = await fetchUserById(user?.user?.id)
            if(res?.isUser){
              dispatch(addUser(res.payload))
            }
          }
          setIsLoading(false)
        }
        fetchUser()
      },[])
}

export default useApp