import { StyleSheet } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import * as utils from '../../../constants/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  up_content: {
    width: '100%',
    height: 0.5 * utils.deviceHeight,
    backgroundColor: 'white'
  },

  backgroundImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },

  down_content: {
    position: 'absolute',
    width: utils.deviceWidth,
    height: 0.65 * utils.deviceHeight,
    backgroundColor: 'white',
    top: 0.35 * utils.deviceHeight,
    left: 0
  },

  signupBackButton: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 42 * utils.widthRatio,
    left: 10 * utils.widthRatio,
    ...ifIphoneX({
	paddingTop: 20
	})
  },

  signupBackButtonImage: {
    height: 34 * utils.widthRatio,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },

  signupButtonContent: {
    flexDirection: 'row',
    width: '100%',
    height: 49 * utils.widthRatio,
    marginTop: 40 * utils.heightRatio,
  },

  personal_button: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    width: 168 * utils.widthRatio,
    height: 49 * utils.widthRatio,
    left: 30 * utils.widthRatio,
    borderRadius:5 * utils.widthRatio
  },

  personal_button_title: {
    width: '100%',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 16 * utils.widthRatio,
    fontWeight: '300'
  },

  business_button: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: 168 * utils.widthRatio,
    height: 49 * utils.widthRatio,
    right: 30 * utils.widthRatio,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius:5 * utils.widthRatio
  },

  business_button_title: {
    width: '100%',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 16 * utils.widthRatio,
    fontWeight: '300'
  },

  signupContentLabel: {
    color: '#BBB5B5', 
    marginTop: 120 * utils.heightRatio,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 13 * utils.widthRatio, 
    fontWeight: '200',
    textAlign: 'center',
    alignSelf: 'center'
  },

  signupCategoryContent: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 20 * utils.heightRatio,
    marginRight: 30 * utils.widthRatio
  },

  signupPersonalCategory: {
    flex: 1,
    marginLeft: 30 * utils.widthRatio,
    color: '#BBB5B5', 
    fontSize: 13 * utils.widthRatio, 
    fontWeight: '200'
  },
  signupBusinessCategory: {
    flex: 1,
    marginLeft: 20 * utils.widthRatio,
    marginRight: 30 * utils.widthRatio,
    color: '#BBB5B5', 
    fontSize: 13 * utils.widthRatio, 
    fontWeight: '200'
  },

});
