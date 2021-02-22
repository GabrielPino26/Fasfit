import _ from 'lodash';
import {
  OPERATION_FAILED,
  API_LOADING,
  GET_FASLANCE_LIST_SUCCESS,
  GET_FASLANCE_TIPS_LIST_SUCCESS,
  ADD_FASLANCE_TIP_SUCCESS,
  ADD_FASLANCE_ACCOUNT_SUCCESS
} from '../../constants/actionTypes';

const initialState = {
  headers: {
  },
  apiLoading: false,
   errors: null,
   faslance_list: [],
   faslance_tips: [],
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
    case GET_FASLANCE_LIST_SUCCESS:
      newState.apiLoading = false;
      newState.faslance_list = action.result.data
      return newState
    case GET_FASLANCE_TIPS_LIST_SUCCESS:
      newState.apiLoading = false;
      newState.faslance_tips = action.result.data
      return newState
    case ADD_FASLANCE_TIP_SUCCESS:
      newState.apiLoading = false;
      return newState
    case ADD_FASLANCE_ACCOUNT_SUCCESS:
      newState.apiLoading = false;
      return newState
    default:
      return state;
  }
};

export default reducer;
