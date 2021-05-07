import {
  OPERATION_FAILED,
  API_LOADING,
  GET_LEAST_QUESTION_SUCCESS,
  ADD_LEAST_QUESTION_SUCCESS,
  GET_RECENT_QUESTION_SUCCESS,
  ADD_RECENT_QUESTION_SUCCESS,
  GET_RANDOM_QUESTION_SUCCESS,
  ADD_RANDOM_QUESTION_SUCCESS,
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

export function getLeastQuestionSuccess(least) {
  return {
    type: GET_LEAST_QUESTION_SUCCESS,
    least
  }
}

export function addLeastQuestionSuccess(question) {
  return {
    type: ADD_LEAST_QUESTION_SUCCESS,
    question
  }
}

export function getRecentQuestionSuccess(recent) {
  return {
    type: GET_RECENT_QUESTION_SUCCESS,
    recent
  }
}

export function addRecentQuestionSuccess(question) {
  return {
    type: ADD_RECENT_QUESTION_SUCCESS,
    question
  }
}

export function getRandomQuestionSuccess(randoms) {
  return {
    type: GET_RANDOM_QUESTION_SUCCESS,
    randoms
  }
}

export function addRandomQuestionSuccess(question) {
  return {
    type: ADD_RANDOM_QUESTION_SUCCESS,
    question
  }
}

export function getLeastQuestion(params) {
  console.log("getLeastQuestion")
  return (dispatch) => {
    dispatch(fetchingData())
    return fetchDataService('/getLeastQuestion', params)
    .then((response) => {
      console.log("user_response : ", response)
      if(response.data) {
        dispatch(getLeastQuestionSuccess(response))
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

export function addLeastQuestion(params) {
  return (dispatch) => {
    dispatch(fetchingData())
    return postDataService('/createLeastQuestion', params)
    .then((response) => {
      if(response.data) {
        dispatch(addLeastQuestionSuccess(response))
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


export function getRecentQuestion(params) {
  console.log("getRecentQuestion")
  return (dispatch) => {
    dispatch(fetchingData())
    return fetchDataService('/getRecentQuestion', params)
    .then((response) => {
      console.log("user_response : ", response)
      if(response.data) {
        dispatch(getRecentQuestionSuccess(response))
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

export function addRecentQuestion(params) {
  return (dispatch) => {
    dispatch(fetchingData())
    return postDataService('/createRecentQuestion', params)
    .then((response) => {
      if(response.data) {
        dispatch(addRecentQuestionSuccess(response))
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

export function getRandomQuestion(params) {
  console.log("getRandomQuestion")
  return (dispatch) => {
    dispatch(fetchingData())
    return fetchDataService('/getRandomQuestion', params)
    .then((response) => {
      console.log("user_response : ", response)
      if(response.data) {
        dispatch(getRandomQuestionSuccess(response))
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

export function addRandomQuestion(params) {
  return (dispatch) => {
    dispatch(fetchingData())
    return postDataService('/createRandomQuestion', params)
    .then((response) => {
      if(response.data) {
        dispatch(addRandomQuestionSuccess(response))
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
