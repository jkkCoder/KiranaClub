import {useState} from "react"
import ImagePicker from 'react-native-image-crop-picker';
import {getDownloadURL, getStorage, ref, uploadBytesResumable, uploadString} from "firebase/storage"
import { makePostRequest } from "../../common/utils";
import Toast from 'react-native-toast-message'

const useStoreDetail = (id:string | undefined) => {
    const [imageUri, setImageUri] = useState("")
    const [progress, setProgress] = useState(0)
    const [isUploading, setIsUploading] = useState(false)

    const storage = getStorage()

    const showErrorToast = () => {
        Toast.show({
            type:"error",
            text1:"upload failed, try again",
            position: "bottom",
        })
    }

    const openCamera = () => {
        console.log("camera opened")
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            }).then(async (image) => {
            setIsUploading(true)
            setImageUri(image.path)

            const storageRef = ref(storage, `images/${image.path}`)
            
            const metadata = {
                contentType: 'image/jpeg',
            };

            //convert imageuri to blog
            const response = await fetch(image.path)
            const blob = await response.blob()

            //upload in cloud
            const uploadTask = uploadBytesResumable(storageRef, blob, metadata);

            uploadTask.on('state_changed', 
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setProgress(progress)
                    }, 
                    (error) => {
                    // Handle unsuccessful uploads
                    console.log('error uploading', error)
                    showErrorToast()
                    }, 
                    () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        console.log('File available at', downloadURL);

                        // store the url in our backend
                        const {success} = await makePostRequest(downloadURL, id)
                        if(!success){
                            showErrorToast()
                        }

                        setTimeout(() => {
                            setIsUploading(false)
                            Toast.show({
                                type:"success",
                                text1:"Image uploaded successfully",
                                position: "bottom",
                            })
                        },500)
                    });
                }
            );
            }).catch(err=> {
                console.log("error is ", err)
                setIsUploading(false)                
            })
    }

    return {
        openCamera,
        imageUri,
        progress,
        isUploading
    }
}

export default useStoreDetail;