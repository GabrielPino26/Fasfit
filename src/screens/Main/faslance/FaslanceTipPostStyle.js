import { StyleSheet } from 'react-native';
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
    height: 80 * utils.widthRatio,
    backgroundColor: 'black'
  },

  notificationBackButton: {
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
    marginTop: 24 * utils.widthRatio,
    fontSize: 18 * utils.widthRatio,
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
    width: 200 * utils.widthRatio,
    marginTop: 5 * utils.widthRatio,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  profile_photo_view: {
    height: 200 * utils.widthRatio,
    width: 200 * utils.widthRatio,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C8C8C8',
    overflow: "hidden",
    borderRadius: 16 * utils.widthRatio,
  },

  profile_photo_img: {
    height: 200 * utils.widthRatio,
    width: 200 * utils.widthRatio,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
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
    width: 300 * utils.widthRatio,
    height: 50 * utils.widthRatio,
    marginTop: 35 * utils.widthRatio,
    marginBottom: 35 * utils.widthRatio,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0A7AF6',
    borderRadius: 25 * utils.widthRatio,
    alignSelf: 'center',
  },

  next_button_label: {
    color: 'white', 
    fontSize: 14 * utils.widthRatio, 
    textAlign: 'center',
    alignSelf: 'center',
  },


});
