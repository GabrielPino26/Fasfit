import {
  OPERATION_FAILED,
  API_LOADING,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SIGNUP_SUCCESS,
  VERIFY_SUCCESS,
  GET_USER_SUCCESS,
  CHECK_LOGIN_SUCCESS,
  SET_SCOPE_SUCCESS,
  FORGOT_SUCCESS
} from '../../constants/actionTypes'

import {
    postDataService,
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

export function logInSuccess(result) {
  return {
      type: LOGIN_SUCCESS,
      result
  }
}

export function signupSuccess(result) {
  return {
      type: SIGNUP_SUCCESS,
      result
  }
}

export function verifyUserSuccess(result) {
  return {
      type: VERIFY_SUCCESS,
      result
  }
}

export function checkLogInSuccess(result) {
  return {
      type: CHECK_LOGIN_SUCCESS,
      result
  }
}

export function getUserSuccess(user) {
  return {
    type: GET_USER_SUCCESS,
    user
  }
}
export function logoutSuccess() {
  return {
      type: LOGOUT_SUCCESS,
  }
}


export function setscopeSuccess(result) {
  return {
      type: SET_SCOPE_SUCCESS,
      result
  }
}

export function forgotSuccess(result) {
  return {
      type: FORGOT_SUCCESS,
      result
  }
}

export function logIn(params) {
  return (dispatch) => {
      dispatch(fetchingData())
      return postDataService('/login', params)
      .then((response) => {
        if (response.data) {
          dispatch(logInSuccess(response))
            return response.data
          } else {
            dispatch(operationFailed(response.errors))
          }
      })
      .catch((err) => {
          dispatch(operationFailed(err))
      })
  }
}

export function verifyUser(params) {
  return (dispatch) => {
      dispatch(fetchingData())
      return postDataService('/MFA', params)
      .then((response) => {
        if (response) {
          dispatch(verifyUserSuccess(response))
            return response
          } else {
            dispatch(operationFailed(response.errors))
          }
      })
      .catch((err) => {
          console.log("ex_err", err)
          dispatch(operationFailed(err))
      })
  }
}

export function signUp(params) {
  
  return (dispatch) => {
      dispatch(fetchingData())
      return postDataService('/signup', params)
      .then((response) => {
          if (response.data) {
            dispatch(signupSuccess(response))
            return response.data
          } else {
            dispatch(operationFailed(response.errors))
          }
      })
      .catch((err) => {
          dispatch(operationFailed(err))
      })
  }
}

export function setScope(params) {
  
  return (dispatch) => {
      dispatch(fetchingData())
      return postDataService('/setScope', params)
      .then((response) => {
          if (response.data) {
            dispatch(setscopeSuccess(response))
            return response.data
          } else {
            dispatch(operationFailed(response.errors))
          }
      })
      .catch((err) => {
          dispatch(operationFailed(err))
      })
  }
}

export function logOut() {
  return (dispatch, getState) => {
    dispatch(logoutSuccess())
  }
}

export function forgotPassword(params) {
  return (dispatch) => {
      dispatch(fetchingData())
      return postDataService('/forgot', params)
      .then((response) => {
        if (response.data) {
          dispatch(forgotSuccess(response))
            return response.data
          } else {
            dispatch(operationFailed(response.errors))
          }
      })
      .catch((err) => {
          dispatch(operationFailed(err))
      })
  }
}
