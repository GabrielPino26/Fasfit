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

  starButton: {
    marginTop: 5 * utils.widthRatio,
    alignItems: 'center',
    justifyContent: 'center',
  },

  starButtonImage: {
    height: 16 * utils.widthRatio,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },

  fasShareButtonImage: {
    height: 16 * utils.widthRatio,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fasWarnButtonImage: {
    height: 15 * utils.widthRatio,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },

  messageSearchButton: {
    flex: 1,
    marginTop: 24 * utils.widthRatio,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: 10 * utils.widthRatio,
  },

  messageSearchButtonImage: {
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

  message_content_view: {
    flex: 1,
    width: '100%',
  },

  message_list_view: {
    flex: 1,
  },

  message_item_view: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8 * utils.widthRatio,
  },

  selected_message_item_view: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8 * utils.widthRatio,
    backgroundColor: '#D4E8EC'
  },

  item_img_view: {
    width: 65 * utils.widthRatio,
    height: 65 * utils.widthRatio
  },

  item_profile_image: {
    marginLeft: 15 * utils.widthRatio,
    width: 40 * utils.widthRatio,
    height: 40 * utils.widthRatio,
    overflow: 'hidden',
    resizeMode: 'contain',
    borderRadius: 20 * utils.widthRatio
  },

  item_info_view: {
    flex: 1,
    flexDirection: 'column',
  },

  item_name_label: {
    marginTop: 10 * utils.widthRatio,
    marginLeft: 10 * utils.widthRatio,
    marginRight: 30 * utils.widthRatio,
    fontSize: 16 * utils.widthRatio,
    color: 'black',
  },

  item_message_label: {
    marginTop: 5 * utils.widthRatio,
    marginLeft: 10 * utils.widthRatio,
    marginBottom: 10 * utils.widthRatio,
    fontSize: 12 * utils.widthRatio,
    color: '#707070',
  },

  item_datetime_label: {
    marginRight: 15 * utils.widthRatio,
    fontSize: 10 * utils.widthRatio,
    color: '#DB143B',
  },

  tabView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 40 * utils.widthRatio
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
    color: 'black',
    borderBottomColor: 'black',
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
  },

  post_view: {
    flexDirection: 'column'
  },
  post_text: {
    marginTop: 10 * utils.widthRatio,
    marginLeft: 20 * utils.widthRatio,
    width: utils.deviceWidth - 120 * utils.widthRatio,
    height: 80 * utils.widthRatio,
    borderRadius: 5 * utils.widthRatio,
    borderColor: '#A3A2A2',
    borderWidth: 1 * utils.widthRatio
  },

  messageButtonImage: {
    height: 12 * utils.widthRatio,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },

  messageButton: {
    position: 'absolute',
    right: 20 * utils.widthRatio,
    bottom: 10 * utils.widthRatio,
    alignItems: 'center',
    justifyContent: 'center'
  },

  selected_thread_button: {
    marginLeft: 20 * utils.widthRatio,
    width: 42 * utils.widthRatio,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  selected_thread_label: {
    height: 22 * utils.widthRatio,
    fontSize: 12 * utils.widthRatio,
    color: 'red',
    borderBottomColor: 'red',
    borderBottomWidth: 1 * utils.widthRatio,
    textAlign: 'center',
  },

  right_arrow_image: {
    height: 7 * utils.widthRatio,
    overflow: 'hidden',
    resizeMode: 'contain',
  },

  like_info_view: {
    marginRight: 5 * utils.widthRatio,
    flexDirection: 'column',
  },

  like_number_label: {
    marginTop: 5 * utils.widthRatio,
    fontSize: 10 * utils.widthRatio,
    color: 'black',
    textAlign: 'center',
  },


});
