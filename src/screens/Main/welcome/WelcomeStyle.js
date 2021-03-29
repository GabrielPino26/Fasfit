import { StyleSheet } from 'react-native';
import * as utils from '../../../constants/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  up_content: {
    width: '100%',
    height: 0.35 * utils.deviceHeight,
    backgroundColor: 'white'
  },

  welcomeTitleLabel: {
    color: 'black', 
    marginTop: 0.08 * utils.deviceHeight,
    fontSize: 32 * utils.widthRatio, 
    fontWeight: 'bold',
    alignSelf: 'center'
  },

  welcomeContentLabel: {
    color: 'black', 
    marginTop: 0.06 * utils.deviceHeight,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 20 * utils.widthRatio, 
    fontWeight: '400',
    textAlign: 'center',
    alignSelf: 'center'
  },

  welcomeSubTitleLabel: {
    color: 'black', 
    marginTop: 0.03 * utils.deviceHeight,
    fontSize: 20 * utils.widthRatio, 
    fontWeight: 'bold',
    alignSelf: 'center'
  },

  down_content: {
    position: 'absolute',
    width: utils.deviceWidth,
    height: 0.65 * utils.deviceHeight,
    backgroundColor: 'white',
    top: 0.35 * utils.deviceHeight,
    left: 0
  },

  content_bg: {
    height: '100%',
    width: '100%',
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  login_button: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    alignSelf: 'center',
    width: 188 * utils.widthRatio,
    height: 49 * utils.widthRatio,
    top: 30 * utils.heightRatio,
    borderRadius:5 * utils.widthRatio
  },

  login_button_title: {
    width: '100%',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 16 * utils.widthRatio,
    fontWeight: '300'
  },

  signup_button: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    alignSelf: 'center',
    width: 188 * utils.widthRatio,
    height: 49 * utils.widthRatio,
    top: 100 * utils.heightRatio,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius:5 * utils.widthRatio
  },

  signup_button_title: {
    width: '100%',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 16 * utils.widthRatio,
    fontWeight: '300'
  },

  fasfittitleImage: {
    marginTop: 0.08 * utils.deviceHeight,
    height: 56 * utils.widthRatio,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },

});
