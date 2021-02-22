import {
  OPERATION_FAILED,
  API_LOADING,
  GET_WARDROBE_USER_LIST_SUCCESS,
  GET_WARDROBE_POST_LIST_SUCCESS,
  ADD_WARDROBE_POST_ITEM_SUCCESS,
  GET_USER_PROFILE_SUCCESS,
  SEND_LIKE_NOTIFICATION_SUCCESS,
  SEND_COMMENT_NOTIFICATION_SUCCESS,
  SEND_FOLLOW_INVITATION_SUCCESS
} from '../../constants/actionTypes'

import {
    postDataService,
    fetchDataService
} from '../apis'

export function fetchingData () {
  return {
      type: API_LOADING,
  }
}

export function operationFailed (errors) {
  return {
      type: OPERATION_FAILED,
      errors
  }
}

export function getWardrobeUserListSuccess(users) {
  return {
    type: GET_WARDROBE_USER_LIST_SUCCESS,
    users
  }
}

export function getWardrobePostListSuccess(posts) {
  return {
    type: GET_WARDROBE_POST_LIST_SUCCESS,
    posts
  }
}

export function addWardrobePostItemSuccess(post) {
  return {
    type: ADD_WARDROBE_POST_ITEM_SUCCESS,
    post
  }
}

export function getUserProfileSuccess(user) {
  return {
    type: GET_USER_PROFILE_SUCCESS,
    user
  }
}

export function sendLikeNotificationSuccess(post) {
  return {
    type: SEND_LIKE_NOTIFICATION_SUCCESS,
    post
  }
}

export function sendCommentNotificationSuccess(post) {
  return {
    type: SEND_COMMENT_NOTIFICATION_SUCCESS,
    post
  }
}

export function sendFollowInvitationSuccess(post) {
  return {
    type: SEND_FOLLOW_INVITATION_SUCCESS,
    post
  }
}

export function getWardrobeUserList(params) {
  console.log("getWardrobeUserList")
  return (dispatch) => {
    dispatch(fetchingData())
    return fetchDataService('/getUserList', params)
    .then((response) => {
      console.log("user_response : ", response)
      if(response.data) {
        dispatch(getWardrobeUserListSuccess(response))
        return response.data
      }else{
        dispatch(operationFailed(response.errors))
      }
    })
    .catch((err) => {
      dispatch(operationFailed(err))
    })
  }
}

export function getWardrobePostList(params) {
  console.log("getWardrobePostList")
  return (dispatch) => {
    dispatch(fetchingData())
    return fetchDataService('/getPostListByUser', params)
    .then((response) => {
      if(response.data) {
        dispatch(getWardrobePostListSuccess(response))
        return response.data
      }else{
        dispatch(operationFailed(response.errors))
      }
    })
    .catch((err) => {
      dispatch(operationFailed(err))
    })
  }
}

export function addWardrobePostItem(params) {
  return (dispatch) => {
    dispatch(fetchingData())
    return postDataService('/addPost', params)
    .then((response) => {
      if(response.data) {
        dispatch(addWardrobePostItemSuccess(response))
        return response.data
      }else{
        dispatch(operationFailed(response.errors))
      }
    })
    .catch((err) => {
      dispatch(operationFailed(err))
    })
  }
}

export function getUserProfile(params) {
  console.log("getUserProfile")
  return (dispatch) => {
    dispatch(fetchingData())
    return fetchDataService('/getUserProfile', params)
    .then((response) => {
      if(response.data) {
        dispatch(getUserProfileSuccess(response))
        return response.data
      }else{
        dispatch(operationFailed(response.errors))
      }
    })
    .catch((err) => {
      dispatch(operationFailed(err))
    })
  }
}

export function sendLikeNotification(params) {
  return (dispatch) => {
    dispatch(fetchingData())
    return postDataService('/sendLikeNotification', params)
    .then((response) => {
      if(response.data) {
        dispatch(sendLikeNotificationSuccess(response))
        return response.data
      }else{
        dispatch(operationFailed(response.errors))
      }
    })
    .catch((err) => {
      dispatch(operationFailed(err))
    })
  }
}

export function sendCommentNotification(params) {
  return (dispatch) => {
    dispatch(fetchingData())
    return postDataService('/sendCommentNotification', params)
    .then((response) => {
      if(response.data) {
        dispatch(sendCommentNotificationSuccess(response))
        return response.data
      }else{
        dispatch(operationFailed(response.errors))
      }
    })
    .catch((err) => {
      dispatch(operationFailed(err))
    })
  }
}

export function sendFollowInvitation(params) {
  return (dispatch) => {
    dispatch(fetchingData())
    return postDataService('/followInvitation', params)
    .then((response) => {
      if(response.data) {
        dispatch(sendFollowInvitationSuccess(response))
        return response.data
      }else{
        dispatch(operationFailed(response.errors))
      }
    })
    .catch((err) => {
      dispatch(operationFailed(err))
    })
  }
}
