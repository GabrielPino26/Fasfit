import { StyleSheet } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import * as utils from '../../../constants/utils';

export const styles = StyleSheet.create({
  header_content: {
    width: '100%',
    height: 72 * utils.widthRatio,
    backgroundColor: 'black',
    ...ifIphoneX({
	marginTop: 10
	})
  },

  body_content: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white'
  },

  body_data_content: {
    flexDirection: 'column',
    width: utils.deviceWidth - 76 * utils.widthRatio,
    height: utils.deviceHeight - 80 * utils.widthRatio,
    left: 76 * utils.widthRatio,
    marginTop: 16 * utils.widthRatio,
  },

  body_search_content: {
    position: 'absolute',
    width: utils.deviceWidth - 96 * utils.widthRatio,
    height: 36 * utils.widthRatio,
  },

  body_search_text: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ECECEC',
    borderRadius: 8 * utils.widthRatio,
    fontSize: 14 * utils.widthRatio,
  },

  body_grid_content: {
    width: '100%',
    height: 130 * utils.widthRatio,
  },

  divided_line: {
    marginTop: 16 * utils.widthRatio,
    width: '100%',
    height: 1.5 * utils.widthRatio,
    backgroundColor: '#F0F0F0'
  },

  body_list_content: {
    width: '100%',
    height: utils.deviceHeight - 303 * utils.widthRatio,
  },

  home_list_view: {
  },

  list_item_view: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 21 * utils.widthRatio,
    width: 0.74 * utils.deviceWidth,
    height: 1.07 * utils.deviceWidth,
    backgroundColor: '#ECECEC',
    borderRadius: 8 * utils.widthRatio,
  },

  item_header_view: {
    width: '100%',
    height: 0.19 * utils.deviceWidth,
  },

  item_header_profile_button: {
    position: 'absolute',
    height: 0.19 * utils.deviceWidth - 32 * utils.widthRatio,
    width: 0.19 * utils.deviceWidth - 32 * utils.widthRatio,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16 * utils.widthRatio,
    left: 20 * utils.widthRatio,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: (0.19 * utils.deviceWidth - 32 * utils.widthRatio) / 2,
  },

  item_header_profile_button_image: {
    height: 0.19 * utils.deviceWidth - 34 * utils.widthRatio,
    width: 0.19 * utils.deviceWidth - 34 * utils.widthRatio,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: (0.19 * utils.deviceWidth - 34 * utils.widthRatio) / 2,
  },
  item_header_name_view: {
    position: 'absolute',
    flexDirection: 'column',
    marginLeft: 0.19 * utils.deviceWidth - 4 * utils.widthRatio,
    marginTop: 20 * utils.widthRatio,
  },
  item_header_title_label: {
    color: 'black',
    fontSize: 14 * utils.widthRatio, 
    fontWeight: 'bold',
    textAlign: 'left',
  },
  item_header_time_label: {
    marginTop: 2 * utils.widthRatio,
    color: '#707070',
    fontSize: 10 * utils.widthRatio, 
    textAlign: 'left',
  },

  item_header_tail_view: {
    position: 'absolute',
    height: '100%',
    right: 20 * utils.widthRatio,
    marginTop: 18 * utils.widthRatio,
  },

  item_header_share_button: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    right: 0 * utils.widthRatio,
  },

  item_header_share_button_image: {
    height: 12 * utils.widthRatio,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },

  item_header_heart_button: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 40 * utils.widthRatio,
    right: 55 * utils.widthRatio,
  },

  item_header_heart_button_image: {
    height: 11 * utils.widthRatio,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },


  item_header_heart_button_label: {
    color: '#FF2C55',
    fontSize: 10 * utils.widthRatio, 
    textAlign: 'right',
  },

  item_header_comment_button: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 40 * utils.widthRatio,
    right: 10 * utils.widthRatio,
  },

  item_header_comment_button_image: {
    height: 11 * utils.widthRatio,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },


  item_header_comment_button_label: {
    color: '#242A38',
    fontSize: 10 * utils.widthRatio, 
    textAlign: 'right',
  },

  item_content_view: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: 0.73 * utils.deviceWidth,
  },

  item_cost_label: {
    color: 'white',
    backgroundColor: 'black',
    position: 'absolute',
    marginTop: 10 * utils.widthRatio,
    right: 20 * utils.widthRatio,
    width: 64 * utils.widthRatio,
    fontSize: 14 * utils.widthRatio, 
    textAlign: 'center',
  },

  item_content_image: {
    marginTop: 40 * utils.widthRatio,
    width: 0.74 * utils.deviceWidth - 40 * utils.widthRatio,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },

  item_content_comment: {
    color: '#242A38',
    width: 0.74 * utils.deviceWidth - 40 * utils.widthRatio,
    fontSize: 16 * utils.widthRatio, 
    textAlign: 'left',
  },

  item_bottom_view: {
    flexDirection: 'column',
    width: '100%',
    height: 0.15 * utils.deviceWidth,
    alignItems: 'center',
  },

  item_bottom_line: {
    marginTop: 5 * utils.widthRatio,
    width: 0.74 * utils.deviceWidth - 40 * utils.widthRatio,
    height: 1.5 * utils.widthRatio,
    backgroundColor: '#D9DBDC'
  },

  item_bottom_buttons_view: {
    flexDirection: 'row',
    marginTop: 5 * utils.widthRatio,
    width: 0.74 * utils.deviceWidth - 40 * utils.widthRatio,
    height: 20 * utils.widthRatio,
  },

  item_bottom_like_button: {
    flex: 1,
    flexDirection: 'row',
  },

  item_bottom_like_button_image: {
    height: 11 * utils.widthRatio,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },


  item_bottom_like_button_label: {
    color: '#242A38',
    fontSize: 10 * utils.widthRatio, 
    textAlign: 'left',
    alignSelf: 'center',
  },

  item_bottom_comment_button: {
    flex: 1,
    flexDirection: 'row',
  },

  item_bottom_comment_button_image: {
    height: 11 * utils.widthRatio,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },


  item_bottom_comment_button_label: {
    color: '#242A38',
    fontSize: 10 * utils.widthRatio, 
    textAlign: 'left',
    alignSelf: 'center',
  },

  item_bottom_wishlist_button: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 20 * utils.widthRatio,
  },

  item_bottom_wishlist_button_image: {
    height: 11 * utils.widthRatio,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },


  item_bottom_wishlist_button_label: {
    color: '#242A38',
    fontSize: 10 * utils.widthRatio, 
    textAlign: 'left',
    alignSelf: 'center',
  },

  selected_grid_item_button: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 120 * utils.widthRatio,
    height: 120 * utils.widthRatio,
    borderWidth: 2,
    borderColor: '#3C82FB',
    borderRadius: 5 * utils.widthRatio
  },

  grid_item_button: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 120 * utils.widthRatio,
    height: 120 * utils.widthRatio,
    borderWidth: 2,
    borderColor: '#DB143B',
    borderRadius: 5 * utils.widthRatio
  },

  grid_item_image: {
    width: 116 * utils.widthRatio,
    height: 116 * utils.widthRatio,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2 * utils.widthRatio
  },

  pushpin_button: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 7 * utils.widthRatio,
    right: 16 * utils.widthRatio,
  },

  pushpin_image: {
    width: 21 * utils.widthRatio,
    height: 21 * utils.widthRatio,
    resizeMode: 'contain',
    alignSelf: 'center'
  },

  side_menu: {
    flex: 1,
    flexDirection: 'column',
    position: 'absolute',
    width: 64 * utils.widthRatio,
    height: utils.deviceHeight - 196 * utils.widthRatio,
    marginTop: 80 * utils.widthRatio,
    backgroundColor: 'black',
    ...ifIphoneX({
	marginTop: 90
	})
  },

  side_menu_item: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 52 * utils.widthRatio,
  },

  side_menu_divided: {
    width: '100%',
    height: 3 * utils.widthRatio,
    backgroundColor: 'white'
  },

  side_menu_item_mail: {
    width: 20 * utils.widthRatio,
    height: 16 * utils.widthRatio,
    resizeMode: 'contain',
    alignSelf: 'center'
  },

  side_menu_item_notification: {
    width: 18 * utils.widthRatio,
    height: 18 * utils.widthRatio,
    resizeMode: 'contain',
    alignSelf: 'center'
  },

  side_menu_item_shopping: {
    width: 19 * utils.widthRatio,
    height: 19 * utils.widthRatio,
    resizeMode: 'contain',
    alignSelf: 'center'
  },

  side_menu_item_like: {
    width: 19 * utils.widthRatio,
    height: 17 * utils.widthRatio,
    resizeMode: 'contain',
    alignSelf: 'center'
  },

  side_menu_item_settings: {
    width: 19 * utils.widthRatio,
    height: 19 * utils.widthRatio,
    resizeMode: 'contain',
    alignSelf: 'center'
  },

  side_menu_item_plus: {
    width: 19 * utils.widthRatio,
    height: 19 * utils.widthRatio,
    resizeMode: 'contain',
    alignSelf: 'center'
  },

  side_menu_hanger_bg: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  side_menu_global_bg: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  side_menu_path_bg: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  side_menu_hanger_img_view: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 50 * utils.widthRatio,
    marginBottom: 50 * utils.widthRatio
  },

  side_hanger_o1_image: {
    flex: 1,
    height: 42 * utils.widthRatio,
    width: 42 * utils.widthRatio,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },

  menu_Flourish: {
    flex: 1,
    color: 'white',
    fontSize: 28 * utils.widthRatio, 
    fontWeight: 'bold',
    textAlign: 'center'
  },
  side_hanger_o2_image: {
    flex: 1,
    height: 42 * utils.widthRatio,
    width: 42 * utils.widthRatio,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },

  side_hanger_t_image: {
    flex: 1,
    height: 41 * utils.widthRatio,
    width: 32 * utils.widthRatio,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },

  side_hanger_d_image: {
    flex: 1,
    height: 41 * utils.widthRatio,
    width: 37 * utils.widthRatio,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },

  side_menu_global_img_view: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    marginTop: 20 * utils.widthRatio,
    alignItems: 'center',
  },

  side_global_fire_image: {
    height: 42 * utils.widthRatio,
    width: 66 * utils.widthRatio,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },

  side_global_fire_divided: {
    width: '100%',
    height: 20 * utils.widthRatio,
  },



  side_global_fire_text: {
    color: 'yellow',
    width: '100%',
    fontSize: 48 * utils.widthRatio, 
    fontWeight: 'bold',
    textAlign: 'center'
  },

  side_menu_path_img_view: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    marginTop: 20 * utils.widthRatio,
    alignItems: 'center',
  },

  side_path_tips_image: {
    height: 65 * utils.widthRatio,
    width: 50 * utils.widthRatio,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },


  profileButton: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32 * utils.widthRatio,
    left: 10 * utils.widthRatio,
  },

  profileButtonImage: {
    width: 30 * utils.widthRatio,
    height: 30 * utils.widthRatio,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15 * utils.widthRatio
  },

  searchButtonImage: {
    height: 22 * utils.widthRatio,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },

  searchButton: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 38 * utils.widthRatio,
    right: 10 * utils.widthRatio,
  },

  homeTitleLabel: {
    color: 'white', 
    marginTop: 36 * utils.heightRatio,
    fontSize: 24 * utils.widthRatio, 
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center'
  },

  bottom_menu: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    alignSelf: 'center',
    width: 0.68 * utils.deviceWidth,
    height: 56 * utils.widthRatio,
    bottom: 20 * utils.widthRatio,
    backgroundColor: '#0E0E0E',
    borderRadius: 16 * utils.widthRatio,
  },

  bottom_menu_item: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48 * utils.widthRatio,
    height: '100%',
  },

  bottom_menu_item1: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    right: 5 * utils.widthRatio,
    width: 48 * utils.widthRatio,
    height: '100%',
  },

  bottom_menu_item_hanger: {
    width: 26 * utils.widthRatio,
    height: 21 * utils.widthRatio,
    resizeMode: 'contain',
    alignSelf: 'center'
  },

  bottom_menu_item_global: {
    width: 25 * utils.widthRatio,
    height: 25 * utils.widthRatio,
    resizeMode: 'contain',
    alignSelf: 'center'
  },

  bottom_menu_item_path: {
    width: 24 * utils.widthRatio,
    height: 24 * utils.widthRatio,
    resizeMode: 'contain',
    alignSelf: 'center'
  },

  bottom_menu_item_compass: {
    width: 35 * utils.widthRatio,
    height: 35 * utils.widthRatio,
    resizeMode: 'contain',
    alignSelf: 'center'
  },

  compass_popup_view: {
    position: 'absolute',
    width: 85 * utils.widthRatio,
    height: 32 * utils.widthRatio,
    // height: 97 * utils.widthRatio,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    right: 0.16 * utils.deviceWidth,
    bottom: 90 * utils.widthRatio,
    borderRadius: 12 * utils.widthRatio,
    backgroundColor: '#0A0A0A'
  },

  compass_popup_button: {
    flex: 1,
    flexDirection: 'row',
    width: 75 * utils.widthRatio,
    height: 20 * utils.widthRatio,
    alignItems: 'center',
    justifyContent: 'center',
  },

  compass_popup_buy_image: {
    width: 19 * utils.widthRatio,
    height: 17 * utils.widthRatio,
    resizeMode: 'contain',
    alignSelf: 'center'
  },

  compass_popup_sell_image: {
    width: 13 * utils.widthRatio,
    height: 17 * utils.widthRatio,
    resizeMode: 'contain',
    alignSelf: 'center'
  },

  compass_popup_post_image: {
    width: 16 * utils.widthRatio,
    height: 11 * utils.widthRatio,
    resizeMode: 'contain',
    alignSelf: 'center'
  },

  compass_popup_button_text: {
    left: 8 * utils.widthRatio,
    textAlign: "left",
    color: 'white',
    width: 48 * utils.widthRatio,
    fontSize: 12 * utils.widthRatio, 
    fontWeight: '300',
    alignSelf: 'center',
  },

});
