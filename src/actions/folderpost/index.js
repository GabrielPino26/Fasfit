import {
  OPERATION_FAILED,
  API_LOADING,
  GET_FOLDERPOST_LIST_SUCCESS,
  EDIT_FOLDERPOST_SUCCESS,
  ADD_FOLDERPOST_SUCCESS
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

export function getFolderPostListSuccess(folderposts) {
  return {
    type: GET_FOLDERPOST_LIST_SUCCESS,
    folderposts
  }
}

export function editFolderPostSuccess(folderpost) {
  return {
    type: EDIT_FOLDERPOST_SUCCESS,
    folderpost
  }
}

export function addFolderPostSuccess(folderpost) {
  return {
    type: ADD_FOLDERPOST_SUCCESS,
    folderpost
  }
}

export function getFolderPostList(params) {
  console.log("getFolderPostList")
  return (dispatch) => {
    dispatch(fetchingData())
    return fetchDataService('/getFolderPostList', params)
    .then((response) => {
      console.log("folder_post_response : ", response)
      if(response.data) {
        dispatch(getFolderPostListSuccess(response))
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

export function editFolderPost(params) {
  return (dispatch) => {
    dispatch(fetchingData())
    return postDataService('/changeFolderPost', params)
    .then((response) => {
      if(response.data) {
        dispatch(editFolderPostSuccess(response))
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

export function addFolderPost(params) {
  return (dispatch) => {
    dispatch(fetchingData())
    return postDataService('/createFolderPost', params)
    .then((response) => {
      if(response.data) {
        dispatch(addFolderPostSuccess(response))
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
