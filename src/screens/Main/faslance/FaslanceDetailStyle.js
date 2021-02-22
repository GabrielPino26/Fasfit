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

  detailBackButton: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  detailBackButtonImage: {
    height: 34 * utils.widthRatio,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },

  nave_right_view: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: 10 * utils.widthRatio,
  },

  navTitleLabel: {
    fontSize: 18 * utils.widthRatio,
    color: 'white', 
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },

  detail_content_view: {
    flex: 1,
    width: '100%',
    flexDirection: 'column'
  },

  detail_title_view: {
    width: '100%',
    flexDirection: 'row'
  },

  profile_image: {
    marginTop: 15 * utils.widthRatio,
    marginBottom: 15 * utils.widthRatio,
    marginLeft: 20 * utils.widthRatio,
    width: 40 * utils.widthRatio,
    overflow: 'hidden',
    resizeMode: 'contain',
    borderRadius: 20 * utils.widthRatio
  },

  name_view: {
    flex: 1,
    flexDirection: 'column'
  },

  checkbox: {
    marginTop: 15 * utils.widthRatio,
    right: 20 * utils.widthRatio,
  },

  nameLabel: {
    fontSize: 20 * utils.widthRatio,
    color: 'black', 
    textAlign: 'left',
    alignItems: 'center',
    marginTop: 10 * utils.widthRatio,
    marginLeft: 15 * utils.widthRatio,
  },

  addressLabel: {
    fontSize: 12 * utils.widthRatio,
    color: '#707070', 
    fontWeight: 'bold',
    textAlign: 'left',
    alignItems: 'center',
    marginLeft: 15 * utils.widthRatio,
    marginRight: 15 * utils.widthRatio,
  },

  divided_line: {
    width: '90%',
    height: 1 * utils.widthRatio,
    backgroundColor: '#EFF0F2',
    alignSelf: 'center'
  },

  work_view: {
    width: '100%',
    flexDirection: 'column'
  },

  workTitleLabel: {
    fontSize: 14 * utils.widthRatio,
    color: 'black', 
    fontWeight: 'bold',
    textAlign: 'left',
    alignItems: 'center',
    marginTop: 10 * utils.widthRatio,
    marginLeft: 20 * utils.widthRatio,
  },

  workDetailLabel: {
    fontSize: 12 * utils.widthRatio,
    color: 'black', 
    textAlign: 'left',
    alignItems: 'center',
    marginTop: 5 * utils.widthRatio,
    marginLeft: 20 * utils.widthRatio,
    marginRight: 20 * utils.widthRatio,
    marginBottom: 15 * utils.widthRatio,
  },

  workHourLabel: {
    fontSize: 12 * utils.widthRatio,
    color: 'red', 
    textAlign: 'left',
    alignItems: 'center',
    marginTop: 5 * utils.widthRatio,
    marginLeft: 20 * utils.widthRatio,
    marginRight: 20 * utils.widthRatio,
    marginBottom: 15 * utils.widthRatio,
  },

  feedback_view: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 5 * utils.widthRatio,
    marginLeft: 20 * utils.widthRatio,
    marginBottom: 15 * utils.widthRatio
  },

  item_feedback_label: {
    fontSize: 14 * utils.widthRatio, 
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'black',
  },

  item_follow_label: {
    marginLeft: 8 * utils.widthRatio,
    fontSize: 14 * utils.widthRatio, 
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'black',
  },

  stars_view: {
    marginLeft: 8 * utils.widthRatio,
  },

  detail_content_view: {
    flex: 1,
    width: '100%',
  },

  message_list_view: {
    flex: 1,
  },

  detail_item_view: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4 * utils.widthRatio,
  },

  item_img_view: {
    height: '100%',
    width: 65 * utils.widthRatio,
  },

  item_profile_image: {
    marginTop: 15 * utils.widthRatio,
    marginLeft: 15 * utils.widthRatio,
    marginBottom: 15 * utils.widthRatio,
    width: 40 * utils.widthRatio,
    overflow: 'hidden',
    resizeMode: 'contain',
    borderRadius: 20 * utils.widthRatio
  },

  item_hire_info_view: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'flex-start'
  },

  item_pov_info_view: {
    flex: 1,
    flexDirection: 'column',
  },

  add_remove_view: {
    flexDirection: 'row',
    marginLeft: 10 * utils.widthRatio,
    marginTop: 5 * utils.widthRatio,
  },

  item_name_label: {
    fontSize: 14 * utils.widthRatio,
    fontWeight: 'bold',
    color: 'black',
    marginRight: 10 * utils.widthRatio,
  },

  item_plus_button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 20 * utils.widthRatio,
    height: 20 * utils.widthRatio,
    backgroundColor: 'white',
    borderColor: '#838383',
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

  item_detail_label: {
    marginTop: 5 * utils.widthRatio,
    marginLeft: 10 * utils.widthRatio,
    marginBottom: 10 * utils.widthRatio,
    fontSize: 12 * utils.widthRatio,
    color: '#707070',
  },

  item_datetime_label: {
    marginTop: 15 * utils.widthRatio,
    marginRight: 15 * utils.widthRatio,
    fontSize: 10 * utils.widthRatio,
    color: '#707070',
    alignSelf: 'flex-start'
  },

  item_divided_line: {
    position: 'absolute',
    marginLeft: 20 * utils.widthRatio,
    marginRight: 20 * utils.widthRatio,
    width: utils.deviceWidth - 40 * utils.widthRatio,
    height: 1 * utils.widthRatio,
    backgroundColor: '#EFF0F2',
    alignSelf: 'center',
    bottom: 1 * utils.widthRatio
  },

  hire_button: {
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 0.9 * utils.deviceWidth,
    height: 49 * utils.widthRatio,
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 5 * utils.widthRatio,
    bottom: 40 * utils.widthRatio
  },

  hire_button_label: {
    height: 50 * utils.widthRatio,
    color: 'white',
    fontSize: 16 * utils.widthRatio, 
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center'
  },

});
