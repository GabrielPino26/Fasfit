import {
  OPERATION_FAILED,
  API_LOADING,
  GET_WORLD_LIST_SUCCESS,
  GET_WORLD_DETAIL_SUCCESS,
  ADD_WORLD_INFO_SUCCESS
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

export function getWorldListSuccess(worlds) {
  return {
    type: GET_WORLD_LIST_SUCCESS,
    worlds
  }
}

export function getWorldDetailSuccess(posts) {
  return {
    type: GET_WORLD_DETAIL_SUCCESS,
    posts
  }
}

export function addWorldInfoSuccess(post) {
  return {
    type: ADD_WORLD_INFO_SUCCESS,
    post
  }
}

export function getWorldList(params) {
  console.log("getWorldList")
  return (dispatch) => {
    dispatch(fetchingData())
    return fetchDataService('/getWorldList', params)
    .then((response) => {
      console.log("user_response : ", response)
      if(response.data) {
        dispatch(getWorldListSuccess(response))
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

export function getWorldDetailByName(params) {
  console.log("getWorldDetailByName")
  return (dispatch) => {
    dispatch(fetchingData())
    return fetchDataService('/getWorldDetailByName', params)
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

export function postWorldInfo(params) {
  return (dispatch) => {
    dispatch(fetchingData())
    return postDataService('/postWorldInfo', params)
    .then((response) => {
      if(response.data) {
        dispatch(addWorldInfoSuccess(response))
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

// export function getUserProfile(params) {
//   console.log("getUserProfile")
//   return (dispatch) => {
//     dispatch(fetchingData())
//     return fetchDataService('/getUserProfile', params)
//     .then((response) => {
//       if(response.data) {
//         dispatch(getUserProfileSuccess(response))
//         return response.data
//       }else{
//         dispatch(operationFailed(response.errors))
//       }
//     })
//     .catch((err) => {
//       dispatch(operationFailed(err))
//     })
//   }
// }
