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

  setting_list_view: {
    flex: 1,
  },

  setting_item_view: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginTop: 6 * utils.widthRatio,
    height: 52 * utils.widthRatio,
    alignSelf: 'center'
  },

  item_img_view: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  item_right_image: {
    width: 12 * utils.widthRatio,
    overflow: 'hidden',
    resizeMode: 'contain',
  },

  item_name_label: {
    flex: 1,
    fontSize: 16 * utils.widthRatio,
    fontWeight: 'bold',
    color: 'black',
  },

  setting_divided: {
    position: 'absolute',
    bottom: 1 * utils.widthRatio,
    width: '100%',
    height: 1 * utils.widthRatio,
    backgroundColor: '#AAB2B7',
    alignSelf: 'center'
  },
});
