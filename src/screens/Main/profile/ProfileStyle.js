import { StyleSheet } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import * as utils from '../../../constants/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  up_content: {
    width: '100%',
    height: 0.5 * utils.deviceHeight,
    backgroundColor: 'white'
  },

  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },

  down_content: {
    flex: 1,
    position: 'absolute',
    flexDirection: 'column',
    width: utils.deviceWidth,
    height: 0.5 * utils.deviceHeight,
    backgroundColor: 'white',
    top: 0.5 * utils.deviceHeight,
    left: 0
  },

  profileBackButton: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 21 * utils.widthRatio,
    left: 10 * utils.widthRatio,
    ...ifIphoneX({
	paddingTop: 20
	})
  },

  profileBackButtonImage: {
    height: 34 * utils.widthRatio,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },

  dmButton: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 21 * utils.widthRatio,
    right: 10 * utils.widthRatio,
    ...ifIphoneX({
      paddingTop: 20
    })
  },

  dmButtonImage: {
    height: 34 * utils.widthRatio,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },

  dmButtonLabel: {
    width: 34 * utils.widthRatio,
    height: 34 * utils.widthRatio,
    marginTop: 11 * utils.widthRatio,
    marginRight: 5 * utils.widthRatio,
    fontSize: 16 * utils.widthRatio,
    color: 'white',
    textAlign: 'center',
  },


  profileContentView: {
    position: 'absolute',
    marginTop: 75 * utils.widthRatio,
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center'
  },

  profilePhotoImage: {
    width: 67 * utils.widthRatio,
    height: 67 * utils.widthRatio,
    borderRadius: 33.5 * utils.widthRatio,
    overflow: 'hidden',
    borderColor: 'white',
    borderWidth: 2,
  },

  profileNameLabel: {
    fontSize: 20 * utils.widthRatio,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 5 * utils.widthRatio,
    textAlign: 'center',
  },

  profileAddressLabel: {
    fontSize: 12 * utils.widthRatio,
    color: 'white',
    marginTop: 5 * utils.widthRatio,
    textAlign: 'center',
  },

  profileFollowView: {
    flex: 1,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 220 * utils.widthRatio,
    width: '55%',
  },
  profileFollowerView: {
    flexDirection: 'column',
  },
  profileFollowerLabel: {
    fontSize: 10 * utils.widthRatio,
    color: 'white',
    textAlign: 'center',
  },
  profileFollowerNumLabel: {
    fontSize: 16 * utils.widthRatio,
    color: 'white',
    marginTop: 2 * utils.widthRatio,
    textAlign: 'center',
  },

  profileFollowingView: {
    flexDirection: 'column',
  },
  profileFollowingLabel: {
    fontSize: 10 * utils.widthRatio,
    color: 'white',
    textAlign: 'center',
  },
  profileFollowingNumLabel: {
    fontSize: 16 * utils.widthRatio,
    color: 'white',
    marginTop: 2 * utils.widthRatio,
    textAlign: 'center',
  },

  profileFollowButton: {
    marginTop: 280 * utils.widthRatio,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 140 * utils.widthRatio,
    height: 36 * utils.widthRatio,
    backgroundColor: '#FFFFFF',
    borderRadius:5 * utils.widthRatio 
  },

  profileFollowButtonLabel: {
    fontSize: 15 * utils.widthRatio,
    color: 'black',
    textAlign: 'center',
  },

  profileCollabButton: {
    marginTop: 330 * utils.widthRatio,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 170 * utils.widthRatio,
    height: 50 * utils.widthRatio,
    backgroundColor: '#0A9BEF',
    borderRadius:5 * utils.widthRatio 
  },

  profileCollabButtonLabel: {
    fontSize: 15 * utils.widthRatio,
    color: 'white',
    textAlign: 'center',
  },

  profileCommentLabel: {
    marginTop: 10 * utils.widthRatio, 
    marginLeft: 20 * utils.widthRatio, 
    marginRight: 20 * utils.widthRatio, 
    marginBottom: 20 * utils.widthRatio, 
    fontSize: 12 * utils.widthRatio,
    color: 'black',
    textAlign: 'left',
  },

  profileDividedLine: {
    marginTop: 10 * utils.widthRatio, 
    marginLeft: 20 * utils.widthRatio, 
    marginRight: 20 * utils.widthRatio,
    marginBottom: 10 * utils.widthRatio, 
    height: 1 * utils.widthRatio,
    backgroundColor: '#939393'
  },

  body_grid_content: {
    marginLeft: 20 * utils.widthRatio, 
    height: 130 * utils.widthRatio,
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

  body_list_content: {
    flex: 1,
    marginTop: 10 * utils.widthRatio, 
    marginLeft: 20 * utils.widthRatio, 
    marginRight: 20 * utils.widthRatio, 
    marginBottom: 40 * utils.widthRatio, 
  },

  list_item_button: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  list_item_image: {
    width: 120 * utils.widthRatio,
    height: 150 * utils.widthRatio,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5 * utils.widthRatio
  },

});
