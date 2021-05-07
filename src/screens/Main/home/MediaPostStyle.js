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
	paddingTop: 20
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

  item_button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    alignSelf: 'center',
    width: 280 * utils.widthRatio,
    height: 49 * utils.widthRatio,
    marginTop: 20 * utils.widthRatio,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius:5 * utils.widthRatio
  },

  item_button_title: {
    width: '100%',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 16 * utils.widthRatio,
    fontWeight: '300'
  },

  or_title: {
    marginTop: 15 * utils.widthRatio,
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 16 * utils.widthRatio,
  },

  bottom_view: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 20 * utils.widthRatio,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  addGalleryButton: {
    alignItems: 'center'
  },

  addGalleryButtonImage: {
    height: 46 * utils.widthRatio,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cameraButton: {
    alignItems: 'center'
  },

  cameraButtonImage: {
    height: 46 * utils.widthRatio,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },

  gallery_grid_item_button: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 100 * utils.widthRatio,
    height: 100 * utils.widthRatio
  },

  gallery_grid_item_image: {
      width: 100 * utils.widthRatio,
      height: 100 * utils.widthRatio,
      resizeMode: 'cover',
      alignItems: 'center',
      justifyContent: 'center'
  },

});
