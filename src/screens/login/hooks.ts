import { CommonActions,  useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import {firebase} from "../../../config"
import { setUser } from "../../common/utils";
import { useEffect, useState } from "react";
import {useDispatch} from "react-redux";
import {addUser} from "../../redux/userSlice"

export const useLogin = () => {
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
      })
    const [showWarning, setShowWarning] = useState(false)
    const [disableButton, setDisableButton] = useState(false)
    const navigation = useNavigation<StackNavigationProp<any>>();
    const dispatch = useDispatch()

    useEffect(() => {
        if(loginData.username === "" && loginData.password === "")
            setShowWarning(false)
    },[loginData])

    const handleLogin = async () => {
        setDisableButton(true)
        const usersCollectionRef = firebase.firestore().collection("users");
        const querySnapshot = await usersCollectionRef.where("username", "==", loginData.username).get();
    
        if(!querySnapshot.empty){
          const user = querySnapshot?.docs[0]?.data()
          const userId = querySnapshot?.docs[0]?.id
          if(user?.password !== loginData?.password){
            setShowWarning(true)
            setDisableButton(false)
            return;
          }
    
          //store in async storage and navigate if correct credentials
          await setUser({
            id: userId,
            username: user?.username
          })

          dispatch(addUser({
            id: userId,
            username: user?.username,
            stores: user?.stores
          }))

          // navigation.navigate('storeListing')
          navigation.dispatch(CommonActions.reset({
            index: 0,
            routes: [{ name: 'storeListing' }],
          }));
    
          
        }else{
          // no user exists with given username
          setShowWarning(true)
        }

        setDisableButton(false)
    }

    return {handleLogin,disableButton,loginData,setLoginData,showWarning}
}