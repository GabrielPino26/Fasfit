import { StyleSheet } from 'react-native';
import * as utils from '../../../constants/utils';

export const styles = StyleSheet.create({
    loginContent: {
        flex:1,
        backgroundColor: 'white'
    },

    loginHeaderContent: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        backgroundColor: 'white'
    },

    loginTitleLabel: {
        color: 'black', 
        marginTop: 28 * utils.widthRatio,
        fontSize: 22 * utils.widthRatio,
        fontWeight: 'bold', 
        textAlign: "center"
    },

    loginLogoImage: {
        height: 32 * utils.widthRatio,
        resizeMode: 'contain',
        marginTop: 21 * utils.widthRatio,
        left: 4 * utils.widthRatio,
    },

    loginCloseButton: {
        flex: 1,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 21 * utils.widthRatio,
        right: 10 * utils.widthRatio,
    },

    loginCloseImage: {
        height: 16 * utils.widthRatio,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    loginKeyboardAvoiding: {
        marginTop: 30 * utils.widthRatio
    },

    loginHeaderTitleLabel: {
        color: 'black', 
        marginTop: 12 * utils.widthRatio,
        fontSize: 22 * utils.widthRatio, 
        fontWeight: 'bold',
        left: 20 * utils.widthRatio,
    },

    loginSubTitleLabel: {
        color: '#c8cdce', 
        marginTop: 52 * utils.widthRatio,
        fontSize: 16 * utils.widthRatio, 
        left: 20 * utils.widthRatio,
    },

    underlineStyle: {
        marginLeft: 20 * utils.widthRatio,
        marginRight: 20 * utils.widthRatio,
        borderColor: '#E3E6EF'
    },

    pwdEyeButton: {
        flex: 1,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 402 * utils.widthRatio,
        right: 10 * utils.widthRatio,
    },

    pwdEyeImage: {
        height: 13 * utils.widthRatio,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center',
    },

    confirmpwdEyeButton: {
        flex: 1,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 530 * utils.widthRatio,
        right: 10 * utils.widthRatio,
    },

    confirmpwdEyeImage: {
        height: 13 * utils.widthRatio,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center',
    },

    loginButton: {
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 0.9 * utils.deviceWidth,
        height: 49 * utils.widthRatio,
        marginTop: 32 * utils.widthRatio,
        borderRadius: 5 * utils.widthRatio,
    },

    loginButtonTitle: {
        width: '100%',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 16 * utils.widthRatio,
        fontWeight: '300'
      },
    bottomImage: {
        width: '100%',
        height: 140 * utils.widthRatio,
        resizeMode: 'cover',
        marginTop: 21 * utils.widthRatio,
        left: 4 * utils.widthRatio,
    },

});