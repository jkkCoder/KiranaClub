import {useState} from "react"
import ImagePicker from 'react-native-image-crop-picker';
import {getDownloadURL, getStorage, ref, uploadBytes, uploadBytesResumable, uploadString} from "firebase/storage"


const useStoreDetail = () => {
    const [imageUri, setImageUri] = useState("")

    const storage = getStorage()

    const openCamera = () => {
        console.log("camera opened")
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            }).then(async (image) => {
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
                    console.log('Upload is ' + progress + '% done');
                    }, 
                    (error) => {
                    // Handle unsuccessful uploads
                    console.log('error uploading', error)
                    }, 
                    () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        console.log('File available at', downloadURL);
                    });
                }
            );
            
            
            }).catch(err=> {
            console.log("error is ", err)
        })
    }

    return {
        openCamera,
        imageUri
    }
}

export default useStoreDetail;