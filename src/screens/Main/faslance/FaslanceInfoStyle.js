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
    flex: 1,
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
    fontSize: 18 * utils.widthRatio,
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
    backgroundColor: 'white',
  },

  selected_tab_button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10 * utils.widthRatio,
  },

  selected_tab_info_label: {
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
  },

  location_list_view: {
    flex: 1,
  },

  location_item_view: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ECECEC',
    marginTop: 21 * utils.widthRatio,
    marginLeft: 10 * utils.widthRatio,
    borderRadius: 8 * utils.widthRatio,
    width: 0.74 * utils.deviceWidth,

  },

  selected_location_item_view: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#D4E8EC',
    marginTop: 21 * utils.widthRatio,
    marginLeft: 10 * utils.widthRatio,
    borderRadius: 8 * utils.widthRatio,
    width: 0.74 * utils.deviceWidth,
  },

  list_item_view: {
    flex: 1,
    flexDirection: 'row',
  },

  left_item_view: {
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 20 * utils.widthRatio,
  },

  item_profile_button: {
    height: 40 * utils.widthRatio,
    width: 40 * utils.widthRatio,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16 * utils.widthRatio,
    borderRadius: 20 * utils.widthRatio,
  },

  item_profile_button_image: {
    height: 40 * utils.widthRatio,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20 * utils.widthRatio,
  },

  item_hire_button: {
    alignItems: 'center',
    marginTop: 10 * utils.widthRatio,
    backgroundColor: '#4AD295'
  },

  item_hire_button_label: {
    color: 'white',
    fontSize: 12 * utils.widthRatio, 
    textAlign: 'center',
    paddingTop: 4 * utils.widthRatio,
    paddingBottom: 4 * utils.widthRatio,
    paddingLeft: 10 * utils.widthRatio,
    paddingRight: 10 * utils.widthRatio,
  },

  add_remove_view: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10 * utils.widthRatio,
  },

  item_plus_button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 20 * utils.widthRatio,
    height: 20 * utils.widthRatio,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10 * utils.widthRatio
  },

  item_plus_button_label: {
    color: 'black',
    fontSize: 14 * utils.widthRatio,
    fontWeight: 'bold',
    textAlign: 'center',
    height: 20 * utils.widthRatio,
    marginBottom: 2 * utils.widthRatio
  },

  item_divide_label: {
    color: 'black',
    fontSize: 14 * utils.widthRatio, 
    textAlign: 'center',
    height: 20 * utils.widthRatio,
    marginBottom: 2 * utils.widthRatio,
    paddingLeft: 2 * utils.widthRatio,
    paddingRight: 2 * utils.widthRatio
  },

  item_follow_label: {
    color: 'black',
    fontSize: 14 * utils.widthRatio, 
    textAlign: 'center',
    height: 20 * utils.widthRatio,
    marginTop: 10 * utils.widthRatio,
  },

  right_item_view: {
    flexDirection: 'column',
    marginLeft: 20 * utils.widthRatio,
    marginRight: 70 * utils.widthRatio,
  },

  checkbox_view: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 16 * utils.widthRatio,
  },
  item_username_label: {
    width: '80%',
    fontSize: 18 * utils.widthRatio, 
    textAlign: 'left',
    color: 'black',
  },

  checkbox: {
    left: 10 * utils.widthRatio,
  },
  item_userdetail_label: {
    fontSize: 14 * utils.widthRatio, 
    textAlign: 'left',
    color: 'black',
    marginTop: 8 * utils.widthRatio,
  },

  item_hourly_label: {
    fontSize: 14 * utils.widthRatio, 
    textAlign: 'left',
    color: 'red',
    marginTop: 8 * utils.widthRatio,
  },

  feedback_view: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20 * utils.widthRatio
  },

  item_feedback_label: {
    fontSize: 14 * utils.widthRatio, 
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'black',
    marginTop: 8 * utils.widthRatio,
  },

  stars_view: {
    marginTop: 8 * utils.widthRatio,
    marginLeft: 8 * utils.widthRatio,
  }

});
