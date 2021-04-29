import {
  OPERATION_FAILED,
  API_LOADING,
  EDIT_PROFILE_SUCCESS
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

export function editProfileSuccess(profile) {
  return {
    type: EDIT_PROFILE_SUCCESS,
    profile
  }
}

export function editProfile(params) {
  return (dispatch) => {
    dispatch(fetchingData())
    return postDataService('/changeUserProfile', params)
    .then((response) => {
      if(response.data) {
        dispatch(editProfileSuccess(response))
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
