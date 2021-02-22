import {
  OPERATION_FAILED,
  API_LOADING,
  GET_FASLANCE_LIST_SUCCESS,
  GET_FASLANCE_TIPS_LIST_SUCCESS,
  ADD_FASLANCE_TIP_SUCCESS,
  ADD_FASLANCE_ACCOUNT_SUCCESS
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

export function getFaslanceTipsListSuccess(tips) {
  return {
    type: GET_FASLANCE_TIPS_LIST_SUCCESS,
    tips
  }
}

export function getFaslanceListSuccess(faslances) {
  return {
    type: GET_FASLANCE_LIST_SUCCESS,
    faslances
  }
}

export function addFaslanceTipSuccess(post) {
  return {
    type: ADD_FASLANCE_TIP_SUCCESS,
    post
  }
}

export function addFaslanceAccountSuccess(account) {
  return {
    type: ADD_FASLANCE_ACCOUNT_SUCCESS,
    account
  }
}

export function getFaslanceList(params) {
  console.log("getFaslanceList")
  return (dispatch) => {
    dispatch(fetchingData())
    return fetchDataService('/getFaslanceListByProfession', params)
    .then((response) => {
      console.log("user_response : ", response)
      if(response.data) {
        dispatch(getFaslanceListSuccess(response))
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

export function getFaslanceTipsList(params) {
  console.log("getFaslanceTipsList")
  return (dispatch) => {
    dispatch(fetchingData())
    return fetchDataService('/getTipsList', params)
    .then((response) => {
      if(response.data) {
        dispatch(getFaslanceTipsListSuccess(response))
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

export function addFaslanceTips(params) {
  return (dispatch) => {
    dispatch(fetchingData())
    return postDataService('/createTips', params)
    .then((response) => {
      if(response.data) {
        dispatch(addFaslanceTipSuccess(response))
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

export function addFaslanceAccount(params) {
  return (dispatch) => {
    dispatch(fetchingData())
    return postDataService('/createFaslance', params)
    .then((response) => {
      if(response.data) {
        dispatch(addFaslanceAccountSuccess(response))
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
