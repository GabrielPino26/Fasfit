import AsyncStorage from '@react-native-community/async-storage'

const USERTYPE = 'usertype'
const USERINFO = 'userinfo'
const DEVICETOKEN = 'devicetoken'
const POSTTYPE = 'posttype'
const data = {
    userType: 'personal',
    userInfo: {},
    deviceToken: '',
    postType: 'wardrobe_post' //world_post, path_post
}

export const storage = {
    getUserType: async () => {
        data.userType = await AsyncStorage.getItem(USERTYPE)
        return data.userType
    },

    setUserType: async(value)=> {
        data.userType = value
        return AsyncStorage.setItem(USERTYPE, value)
    },

    getUserInfo: async () => {
        data.userInfo = await AsyncStorage.getItem(USERINFO)
        return JSON.parse(data.userInfo)
    },

    setUserInfo: async(value)=> {
        return AsyncStorage.setItem(USERINFO, JSON.stringify(value))
    },

    getDeviceToken: async () => {
        data.deviceToken = await AsyncStorage.getItem(DEVICETOKEN)
        return data.deviceToken
    },

    setDeviceToken: async(value)=> {
        data.deviceToken = value
        console.log("token: ", value)
        return AsyncStorage.setItem(DEVICETOKEN, value)
    },

    getPostType: async () => {
        data.postType = await AsyncStorage.getItem(POSTTYPE)
        return data.postType
    },

    setPostType: async(value)=> {
        data.postType = value
        return AsyncStorage.setItem(POSTTYPE, value)
    },


}