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

  selected_tab_worldwide_label: {
    height: 28 * utils.widthRatio,
    fontSize: 13 * utils.widthRatio,
    color: '#DB143B',
    borderBottomColor: '#DB143B',
    borderBottomWidth: 1 * utils.widthRatio,
    textAlign: 'center',
    alignSelf: 'center',
  },

  selected_tab_ingroup_label: {
    height: 28 * utils.widthRatio,
    fontSize: 13 * utils.widthRatio,
    color: '#0447FF',
    borderBottomColor: '#0447FF',
    borderBottomWidth: 1 * utils.widthRatio,
    textAlign: 'center',
    alignSelf: 'center',
  },

  selected_tab_outgroup_label: {
    height: 28 * utils.widthRatio,
    fontSize: 13 * utils.widthRatio,
    color: '#4AD295',
    borderBottomColor: '#4AD295',
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

  world_list_view: {
    flex:1
  },
  worldwide_item_view: {
    flex: 1,
    flexDirection: 'row',
  },

  selected_worldwide_item_view: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#D4E8EC'
  },

  item_img_view: {
    flex: 1,
    height: '100%',
    flexDirection: 'column'
  },
  item_image: {
    marginTop: 10 * utils.widthRatio,
    marginLeft: 15 * utils.widthRatio,
    width: 120 * utils.widthRatio,
    height: 120 * utils.widthRatio,
    overflow: 'hidden',
    resizeMode: 'contain',
  },

  item_detail_2_label: {
    marginTop: 5 * utils.widthRatio,
    marginLeft: 15 * utils.widthRatio,
    marginRight: 10 * utils.widthRatio,
    fontSize: 12 * utils.widthRatio,
    color: '#DB143B',
  },

  item_info_view: {
    flex: 1.3,
    flexDirection: 'column',
  },

  item_name_label: {
    marginTop: 10 * utils.widthRatio,
    marginLeft: 15 * utils.widthRatio,
    marginRight: 10 * utils.widthRatio,
    fontSize: 16 * utils.widthRatio,
    fontWeight: 'bold',
    color: 'black',
  },

  item_datetime_label: {
    marginTop: 5 * utils.widthRatio,
    marginLeft: 15 * utils.widthRatio,
    fontSize: 10 * utils.widthRatio,
    color: 'black',
  },

  item_detail_1_label: {
    marginTop: 5 * utils.widthRatio,
    marginLeft: 15 * utils.widthRatio,
    marginRight: 10 * utils.widthRatio,
    fontSize: 12 * utils.widthRatio,
    color: '#DB143B',
  },
});
