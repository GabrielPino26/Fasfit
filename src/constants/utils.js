import { Dimensions } from 'react-native';

module.exports = {
    deviceHeight: Dimensions.get('window').height,
    deviceWidth: Dimensions.get('window').width,
    heightRatio: Dimensions.get('window').height/896,
    widthRatio: Dimensions.get('window').width/414,
}