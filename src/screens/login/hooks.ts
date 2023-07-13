import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import {firebase} from "../../../config"
import { setUser } from "../../common/utils";
import { useEffect, useState } from "react";

export const useLogin = () => {
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
      })
    const [showWarning, setShowWarning] = useState(false)
    const [disableButton, setDisableButton] = useState(false)
    const navigation = useNavigation<StackNavigationProp<any>>();

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
          console.log("user id ", userId)
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
          navigation.navigate('storeListing')
    
          
        }else{
          // no user exists with given username
          setShowWarning(true)
        }

        setDisableButton(false)
    }

    return {handleLogin,disableButton,loginData,setLoginData,showWarning}
}