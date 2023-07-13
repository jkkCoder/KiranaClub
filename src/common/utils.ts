import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const MAX_WIDTH = 320

export const scale = (size:number) => {
    return size * (width / MAX_WIDTH)
}

