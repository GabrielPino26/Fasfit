import { StyleSheet } from 'react-native';
import * as utils from '../../../constants/utils';

export const styles = StyleSheet.create({
  content: {
    width: '100%',
    height: '100%',
  },

  worldwide_list_view: {
    flex: 1,
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
    color: '#4AD295',
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
    color: '#4AD295',
  },


});
