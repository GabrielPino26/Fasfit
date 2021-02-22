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

  settingBackButton: {
    flex: 1,
    marginTop: 24 * utils.widthRatio,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  settingBackButtonImage: {
    height: 34 * utils.widthRatio,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },

  rightNavView: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  navTitleLabel: {
    marginTop: 24 * utils.widthRatio,
    fontSize: 18 * utils.widthRatio,
    color: 'white', 
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center'
  },

  setting_content_view: {
    flex: 1,
    width: '100%',
  },

  accountSubTitleLabel: {
    color: '#c8cdce', 
    marginTop: 22 * utils.widthRatio,
    fontSize: 16 * utils.widthRatio, 
    left: 20 * utils.widthRatio,
  },

  underlineStyle: {
    marginLeft: 20 * utils.widthRatio,
    marginRight: 20 * utils.widthRatio,
    borderColor: '#E3E6EF'
  },
  accountButton: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 0.9 * utils.deviceWidth,
    height: 49 * utils.widthRatio,
    marginTop: 52 * utils.widthRatio,
    borderRadius: 5 * utils.widthRatio,
    marginBottom: 32 * utils.widthRatio,
  },

  accountButtonTitle: {
    width: '100%',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 16 * utils.widthRatio,
    fontWeight: '300'
  },

  locationButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: utils.deviceWidth - 40 * utils.widthRatio,
    height: 49 * utils.widthRatio,
    marginTop: 8 * utils.widthRatio,
    marginLeft: 20 * utils.widthRatio,
    marginRight: 20 * utils.widthRatio,
    borderBottomWidth: 1,
    borderBottomColor: '#E3E6EF'
  },

  locationButtonText: {
    width: '100%',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'left',
    fontSize: 16 * utils.widthRatio,
  },

  languageButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: utils.deviceWidth - 40 * utils.widthRatio,
    height: 49 * utils.widthRatio,
    marginTop: 8 * utils.widthRatio,
    marginLeft: 20 * utils.widthRatio,
    marginRight: 20 * utils.widthRatio,
    borderBottomWidth: 1,
    borderBottomColor: '#E3E6EF'
  },

  languageButtonText: {
    width: '95%',
    color: 'black',
    alignItems: 'flex-start',
    justifyContent: 'center',
    textAlign: 'left',
    fontSize: 16 * utils.widthRatio,
  },
  proffesionImage: {
    height: 7 * utils.widthRatio,
    resizeMode: 'contain',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  collab_view: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: utils.deviceWidth - 40 * utils.widthRatio,
    height: 52 * utils.widthRatio,
    marginLeft: 20 * utils.widthRatio,
    marginRight: 20 * utils.widthRatio,
    marginTop: 6 * utils.widthRatio,
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E3E6EF'
  },

  collab_name_label: {
    flex: 1,
    fontSize: 16 * utils.widthRatio,
    color: 'black',
  },

  collab_switch_view: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

});
