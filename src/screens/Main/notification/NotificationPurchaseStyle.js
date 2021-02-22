import { StyleSheet } from 'react-native';
import * as utils from '../../../constants/utils';

export const styles = StyleSheet.create({
  content: {
    width: '100%',
    height: '100%',
  },

  purchase_list_view: {
    flex: 1,
  },

  purchase_item_view: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8 * utils.widthRatio,
  },

  selected_purchase_item_view: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8 * utils.widthRatio,
    backgroundColor: '#D4E8EC'
  },

  item_info_view: {
    flex: 1,
    flexDirection: 'column',
  },

  item_purchase_label: {
    flex: 1,
    marginTop: 10 * utils.widthRatio,
    marginLeft: 10 * utils.widthRatio,
    fontSize: 16 * utils.widthRatio,
    color: '#DB143B',
  },

  purchase_view: {
    flex: 1,
    flexDirection: 'row',
  },

  track_purchase_button: {
    alignItems:'center',
    marginTop: 10 * utils.widthRatio,
    marginRight: 15 * utils.widthRatio,
  },

  track_purchase_button_title: {
    fontSize: 16 * utils.widthRatio,
    color: '#4AD295',
    textAlign: 'right'
  },
  item_name_label: {
    marginTop: 10 * utils.widthRatio,
    marginLeft: 10 * utils.widthRatio,
    marginRight: 30 * utils.widthRatio,
    fontSize: 16 * utils.widthRatio,
    color: 'black',
    fontWeight: '600'
  },

  item_content_label: {
    marginTop: 10 * utils.widthRatio,
    marginLeft: 10 * utils.widthRatio,
    fontSize: 12 * utils.widthRatio,
    color: 'black',
  },

  item_purchase_image: {
    marginTop: 10 * utils.widthRatio,
    marginLeft: 10 * utils.widthRatio,
    width: 265 * utils.widthRatio,
    resizeMode: 'contain'
  },

  item_datetime_label: {
    marginTop: 10 * utils.widthRatio,
    marginLeft: 10 * utils.widthRatio,
    marginBottom: 10 * utils.widthRatio,
    fontSize: 10 * utils.widthRatio,
    color: 'black',
  },

});
