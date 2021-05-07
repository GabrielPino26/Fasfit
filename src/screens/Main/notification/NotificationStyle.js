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
    flex: 1,
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

  notificationSearchButton: {
    flex: 1,
    marginTop: 24 * utils.widthRatio,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: 10 * utils.widthRatio,
  },

  notificationSearchButtonImage: {
    height: 22 * utils.widthRatio,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },

  navTitleLabel: {
    marginTop: 24 * utils.widthRatio,
    fontSize: 24 * utils.widthRatio,
    color: 'white', 
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center'
  },

  tabView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 40 * utils.widthRatio,
    backgroundColor: 'black',
  },

  selected_tab_button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10 * utils.widthRatio,
  },

  selected_tab_label: {
    height: 28 * utils.widthRatio,
    fontSize: 13 * utils.widthRatio,
    color: '#DB143B',
    borderBottomColor: '#DB143B',
    borderBottomWidth: 1 * utils.widthRatio,
    textAlign: 'center',
    alignSelf: 'center',
  },
  
  normal_tab_button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10 * utils.widthRatio,
  },

  normal_tab_label: {
    height: 28 * utils.widthRatio,
    fontSize: 13 * utils.widthRatio,
    color: '#707070',
    textAlign: 'center',
    alignSelf: 'center',
  },

  tab_content_view: {
    flex: 1,
    width: '100%',
  }

});
