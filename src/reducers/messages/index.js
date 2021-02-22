import _ from 'lodash';
import {
  FETCH_MESSAGES_SUCCESS,
  POST_MESSAGE_SUCCESS,
  API_LOADING,
} from '../../constants/actionTypes';

const initialState = {
  messages: [],
  apiLoading: false,
  message: {},
};

const reducer = (state = initialState, action) => {
  const newState = _.cloneDeep(state);

  switch (action.type) {
    case FETCH_MESSAGES_SUCCESS:
      newState.messages = action.messages;
      return newState;
    case POST_MESSAGE_SUCCESS:
      newState.apiLoading = false;
      newState.message = action.result.data
      return newState
    case API_LOADING:
      newState.messages = [];
      newState.message = {};
      return newState;
    default:
      return state;
  }
};

export default reducer;
