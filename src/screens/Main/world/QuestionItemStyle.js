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

  messageBackButton: {
    flex: 1,
    marginTop: 24 * utils.widthRatio,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  messageBackButtonImage: {
    height: 34 * utils.widthRatio,
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
    marginLeft: 40 * utils.widthRatio,
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
    height: 65 * utils.widthRatio,
    width: 65 * utils.widthRatio,
  },

  item_profile_image: {
    marginTop: 10 * utils.widthRatio,
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

  question_item_view: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8 * utils.widthRatio,
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

});
