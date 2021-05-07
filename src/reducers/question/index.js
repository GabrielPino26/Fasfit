import _ from 'lodash';
import {
  OPERATION_FAILED,
  API_LOADING,
  GET_LEAST_QUESTION_SUCCESS,
  ADD_LEAST_QUESTION_SUCCESS,
  GET_RECENT_QUESTION_SUCCESS,
  ADD_RECENT_QUESTION_SUCCESS,
  GET_RANDOM_QUESTION_SUCCESS,
  ADD_RANDOM_QUESTION_SUCCESS,
} from '../../constants/actionTypes';

const initialState = {
  headers: {
  },
  apiLoading: false,
   errors: null,
   least_question: [],
   recent_question: [],
   random_question: [],
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
    case GET_LEAST_QUESTION_SUCCESS:
      newState.apiLoading = false;
      newState.least_question = action.result.data
      return newState
    case ADD_LEAST_QUESTION_SUCCESS:
      newState.apiLoading = false;
      return newState
    case GET_RECENT_QUESTION_SUCCESS:
      newState.apiLoading = false;
      newState.recent_question = action.result.data
      return newState
    case ADD_RECENT_QUESTION_SUCCESS:
      newState.apiLoading = false;
      return newState
    case GET_RANDOM_QUESTION_SUCCESS:
      newState.apiLoading = false;
      newState.random_question = action.result.data
      return newState
    case ADD_RANDOM_QUESTION_SUCCESS:
      newState.apiLoading = false;
      return newState
    default:
      return state;
  }
};

export default reducer;
