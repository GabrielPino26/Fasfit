import {
  FETCH_MESSAGES_SUCCESS,
  POST_MESSAGE_SUCCESS,
  OPERATION_FAILED,
  API_LOADING,
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

export function fetchMessagesSuccess(messages) {
  return {
    type: FETCH_MESSAGES_SUCCESS,
    messages,
  };
}

export function postMessageSuccess(result) {
  return {
      type: POST_MESSAGE_SUCCESS,
      result
  }
}


export function fetchMessages(params) {
  return (dispatch, getState) => {
    dispatch(fetchingData());
    return fetchDataService('/messages', params)
      .then(response => {
        if (!response) {
          dispatch(operationFailed('undefined'));
        }
        dispatch(fetchMessagesSuccess(response.data));
      })
      .catch(err => {
        dispatch(operationFailed(err));
      });
  };
}

export function postMessage(params) {
  return (dispatch) => {
      dispatch(fetchingData())
      return postDataService('/messages', params)
      .then((response) => {
        if (response.data) {
            dispatch(postMessageSuccess(response))
            return response.data
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

