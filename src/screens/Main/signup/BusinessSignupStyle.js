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
    height: 0.61 * utils.deviceHeight,
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
  },

  signupBackButtonImage: {
    height: 34 * utils.widthRatio,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },

  signupButtonContent: {
    flexDirection: 'column',
    width: '100%',
    top: 120 * utils.heightRatio,
  },

  personal_button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    alignSelf: 'center',
    width: 220 * utils.widthRatio,
    height: 49 * utils.widthRatio,
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

  client_button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    alignSelf: 'center',
    width: 220 * utils.widthRatio,
    height: 49 * utils.widthRatio,
    marginTop: 20 * utils.widthRatio,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius:5 * utils.widthRatio
  },

  client_button_title: {
    width: '100%',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 16 * utils.widthRatio,
    fontWeight: '300'
  },

  focusLabel: {
    color: '#BBB5B5', 
    marginTop: 10 * utils.heightRatio,
    fontSize: 12 * utils.widthRatio, 
    fontWeight: '200',
    textAlign: 'center',
    alignSelf: 'center'
  },

  orLabel: {
    color: 'black', 
    marginTop: 12 * utils.heightRatio,
    fontSize: 12 * utils.widthRatio, 
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center'
  },

  customer_button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    alignSelf: 'center',
    width: 220 * utils.widthRatio,
    height: 49 * utils.widthRatio,
    marginTop: 10 * utils.widthRatio,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius:5 * utils.widthRatio
  },

  customer_button_title: {
    width: '100%',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 16 * utils.widthRatio,
    fontWeight: '300'
  },

});
