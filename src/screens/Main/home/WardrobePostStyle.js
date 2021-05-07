import { StyleSheet } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import * as utils from '../../../constants/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    flexDirection: 'column',
  },

  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 90 * utils.widthRatio,
    backgroundColor: 'black',
    ...ifIphoneX({
	paddingTop: 16
	})
  },

  notificationBackButton: {
    position: 'absolute',
    marginTop: 24 * utils.widthRatio,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  notificationBackButtonImage: {
    height: 34 * utils.widthRatio,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },

  navTitleLabel: {
    flex: 1,
    fontSize: 24 * utils.widthRatio,
    color: 'white', 
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center'
  },

  keyboard_view: {
    height: '100%',
    flexDirection: 'column',
    backgroundColor: 'white',
    // marginLeft: 30 * utils.widthRatio,
    // marginRight: 30 * utils.widthRatio,
  },

  profile_photo_button: {
    height: 200 * utils.widthRatio,
    width: 0.85 * utils.deviceWidth,
    marginTop: 15 * utils.widthRatio,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  profile_photo_view: {
    height: 200 * utils.widthRatio,
    width: 0.85 * utils.deviceWidth,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C8C8C8',
    overflow: "hidden",
  },

  profile_photo_img: {
    height: 200 * utils.widthRatio,
    width: 0.85 * utils.deviceWidth,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cameraButtonImage: {
    position: 'absolute',
    height: 46 * utils.widthRatio,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },


  upload_title_label: {
    color: 'black', 
    marginTop: 25 * utils.widthRatio,
    fontSize: 16 * utils.widthRatio, 
    textAlign: 'center'
  },

  title_label: {
    color: '#A3A2A2', 
    marginLeft: 20 * utils.widthRatio,
    marginTop: 25 * utils.widthRatio,
    fontSize: 12 * utils.widthRatio, 
  },


  des_label: {
    color: '#A3A2A2',
    marginLeft: 20 * utils.widthRatio,
    marginTop: 20 * utils.widthRatio,
    fontSize: 12 * utils.widthRatio, 
  },

  des_text: {
    marginLeft: 20 * utils.widthRatio,
    marginRight: 20 * utils.widthRatio,
  },
  underlinestyle: {
    borderColor: '#C6C6C6',
    marginLeft: 20 * utils.widthRatio,
    marginRight: 20 * utils.widthRatio,
  },

  next_button: {
    width: 200 * utils.widthRatio,
    height: 50 * utils.widthRatio,
    marginTop: 35 * utils.widthRatio,
    marginBottom: 35 * utils.widthRatio,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    alignSelf: 'center',
  },

  next_button_label: {
    color: 'white', 
    fontSize: 14 * utils.widthRatio, 
    textAlign: 'center',
    alignSelf: 'center',
  },


});
