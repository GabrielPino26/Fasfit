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
    backgroundColor: 'white'
  },

  backButton: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 42 * utils.widthRatio,
    left: 10 * utils.widthRatio,
    ...ifIphoneX({
	paddingTop: 10
	})
  },

  backButtonImage: {
    height: 34 * utils.widthRatio,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },

  nextButton: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 42 * utils.widthRatio,
    right: 10 * utils.widthRatio,
    ...ifIphoneX({
	paddingTop: 10
	})
  },

  scopeTitleLabel: {
    color: 'black', 
    marginTop: 50 * utils.heightRatio,
    fontSize: 18 * utils.widthRatio, 
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
    ...ifIphoneX({
	paddingTop: 10
	})
  },

  item_button: {
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

  item_button_title: {
    width: '100%',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 16 * utils.widthRatio,
    fontWeight: '300'
  },

  selected_item_button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    alignSelf: 'center',
    width: 220 * utils.widthRatio,
    height: 49 * utils.widthRatio,
    marginTop: 20 * utils.widthRatio,
    borderRadius:5 * utils.widthRatio
  },

  selected_item_button_title: {
    width: '100%',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 16 * utils.widthRatio,
    fontWeight: '300'
  },

  subData_contentView: {
    alignSelf: 'center',
    backgroundColor: '#D4E8EC',
    width: 220 * utils.widthRatio,
    borderRadius:5 * utils.widthRatio,
    marginTop: 20 * utils.widthRatio,
  },
  list_view: {
    marginTop: 30 * utils.widthRatio,
  },
  grid_view: {
    flex: 1,
    marginTop: 10 * utils.widthRatio,
  },
  sub_item_button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    alignSelf: 'center',
    width: 100 * utils.widthRatio,
    height: 40 * utils.widthRatio,
    borderWidth: 1,
    borderColor: '#7F7F7F',
    borderRadius:5 * utils.widthRatio
  },

  sub_item_button_title: {
    width: '100%',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 14 * utils.widthRatio,
    fontWeight: '300'
  },

  selected_sub_item_button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    alignSelf: 'center',
    width: 100 * utils.widthRatio,
    height: 40 * utils.widthRatio,
    borderWidth: 1,
    borderColor: '#7F7F7F',
    borderRadius:5 * utils.widthRatio
  },

  selected_sub_item_button_title: {
    width: '100%',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 14 * utils.widthRatio,
    fontWeight: '300'
  },


});
