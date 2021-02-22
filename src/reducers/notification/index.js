import _ from 'lodash';
import {
  OPERATION_FAILED,
  API_LOADING,
  GET_NOTIFICATION_LIKE_LIST_SUCCESS,
  GET_NOTIFICATION_COMMENT_LIST_SUCCESS
} from '../../constants/actionTypes';

const initialState = {
  headers: {
  },
  apiLoading: false,
   errors: null,
   notification_like_list: [],
   notification_comment_list: [],
};

const reducer = (state = initialState, action) => {
  console.log("Login Success", action)
  const newState = _.cloneDeep(state);

  switch (action.type) {
    case API_LOADING:
      newState.apiLoading = true;
      return newState;
    case OPERATION_FAILED:
      newState.apiLoading = false;
      newState.errors = action.errors
      return newState;
    case GET_NOTIFICATION_LIKE_LIST_SUCCESS:
      newState.apiLoading = false;
      newState.notification_like_list = action.result.data
      return newState
    case GET_NOTIFICATION_COMMENT_LIST_SUCCESS:
      newState.apiLoading = false;
      newState.notification_comment_list = action.result.data
      return newState
    default:
      return state;
  }
};

export default reducer;
