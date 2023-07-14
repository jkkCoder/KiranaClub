import { View, Image, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import { scale } from '../../../../common/utils';

interface Props {
    imageUri: string;
    progress: number;
}

const UploadCard = ({imageUri, progress}:Props) => {
  return (
    <View style={styles.container}>
        <Image
            height={scale(70)}
            width={scale(60)}
            source={{
                uri: imageUri
            }}
            style={styles.image}
        />
        <View style={styles.progressContainer}>
            <Text style={styles.uploadTxt}>{progress!== 100 ? 'Uploading' : 'Successfully uploaded'}</Text>
            <Text style={styles.progress}>{progress}% done</Text>
        </View>
    </View>
  )
}

export default UploadCard