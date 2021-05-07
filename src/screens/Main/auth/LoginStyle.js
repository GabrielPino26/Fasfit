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
        marginTop: 26 * utils.widthRatio,
        fontSize: 22 * utils.widthRatio,
        fontWeight: 'bold', 
        textAlign: "center"
    },

    loginLogoImage: {
        height: 30 * utils.widthRatio,
        resizeMode: 'contain',
        marginTop: 24 * utils.widthRatio,
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
        marginTop: 62 * utils.widthRatio,
        fontSize: 16 * utils.widthRatio, 
        left: 20 * utils.widthRatio,
    },

    loginSubTitleLabel1: {
        color: '#c8cdce', 
        marginTop: 20 * utils.widthRatio,
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
        marginTop: 252 * utils.widthRatio,
        right: 10 * utils.widthRatio,
    },

    pwdEyeImage: {
        height: 13 * utils.widthRatio,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center',
    },

    loginForgetPwdButton: {
        flex: 1,
        marginTop: 24 * utils.widthRatio,
        left: 20 * utils.widthRatio,
    },

    login_forget_button_title: {
        color: '#434040', 
        fontSize: 16 * utils.widthRatio, 
        fontWeight: '200',
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
   
    signupLabelContent: {
        flex: 1,
        flexDirection: 'row',
        width: '90%',
        marginTop: 28 * utils.widthRatio,
        left: 20 * utils.widthRatio,
        backgroundColor: 'white'
    },

    signupQuestion: {
        color: '#434040', 
        fontSize: 16 * utils.widthRatio, 
        fontWeight: 'bold',
    },

    signupButton: {
        flex: 1,
        marginLeft: 6 * utils.widthRatio,
    },

    signupButtonTitle: {
        color: '#434040', 
        fontSize: 16 * utils.widthRatio, 
        fontWeight: 'bold',
    },

});