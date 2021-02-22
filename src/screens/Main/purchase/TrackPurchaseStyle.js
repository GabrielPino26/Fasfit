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

  navTitleLabel: {
    fontSize: 18 * utils.widthRatio,
    color: 'white', 
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
  },

  navRightView: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: 10 * utils.widthRatio,
  },

  content_view: {
    flex: 1,
    width: '100%',
  },

  purchaseTitleLabel: {
    marginTop: 20 * utils.widthRatio,
    marginLeft: 20 * utils.widthRatio,
    fontSize: 14 * utils.widthRatio,
    color: 'black', 
    fontWeight: 'bold',
  },

  purchaseContentLabel: {
    marginTop: 5 * utils.widthRatio,
    marginLeft: 20 * utils.widthRatio,
    fontSize: 12 * utils.widthRatio,
    width: '60%',
    color: 'black', 
  },

  purchasePriceLabel: {
    marginTop: 20 * utils.widthRatio,
    marginLeft: 20 * utils.widthRatio,
    fontSize: 14 * utils.widthRatio,
    color: 'red', 
  },

  purchaseImage: {
    marginTop: 5 * utils.widthRatio,
    marginLeft: 20 * utils.widthRatio,
    width: 265 * utils.widthRatio,
    resizeMode: 'contain'
  },

  purchaseDatetimeLabel: {
    marginTop: 5 * utils.widthRatio,
    marginLeft: 20 * utils.widthRatio,
    fontSize: 10 * utils.widthRatio,
    color: 'black',
  },

  progressStepIndicator: {
    marginTop: 20 * utils.widthRatio,
    marginLeft: 20 * utils.widthRatio,
    height: '45%'
  }

});
