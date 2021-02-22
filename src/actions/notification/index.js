import {
  OPERATION_FAILED,
  API_LOADING,
  GET_NOTIFICATION_LIKE_LIST_SUCCESS,
  GET_NOTIFICATION_COMMENT_LIST_SUCCESS
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

export function getNotificationLikeListSuccess(users) {
  return {
    type: GET_NOTIFICATION_LIKE_LIST_SUCCESS,
    users
  }
}

export function getNotificationCommentListSuccess(posts) {
  return {
    type: GET_NOTIFICATION_COMMENT_LIST_SUCCESS,
    posts
  }
}

export function getNotificationLikeList(params) {
  console.log("getNotificationLikeList")
  return (dispatch) => {
    dispatch(fetchingData())
    return fetchDataService('/getLikeNotifications', params)
    .then((response) => {
      console.log("user_response : ", response)
      if(response.data) {
        dispatch(getNotificationLikeList(response))
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

export function getNotificationCommentList(params) {
  console.log("getNotificationCommentList")
  return (dispatch) => {
    dispatch(fetchingData())
    return fetchDataService('/getCommentNotifications', params)
    .then((response) => {
      console.log("user_response : ", response)
      if(response.data) {
        dispatch(getNotificationCommentList(response))
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
