import _ from 'lodash';
import {
  OPERATION_FAILED,
  API_LOADING,
  LOGIN_SUCCESS,
  VERIFY_SUCCESS,
  LOGOUT_SUCCESS,
  SIGNUP_SUCCESS,
  GET_USER_SUCCESS,
  SET_SCOPE_SUCCESS,
  GET_USERBYID_SUCCESS
} from '../../constants/actionTypes';

const initialState = {
  headers: {
  },
  apiLoading: false,
   user: {},
   errors: null,
   isLoggedIn: false,
   isSignedUp: false,
   userId: null,
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
    case LOGIN_SUCCESS:
      newState.apiLoading = false;
      newState.isLoggedIn = true
      newState.user = action.result.data
      return newState
    case SIGNUP_SUCCESS:
      newState.apiLoading = false;
      newState.isSignedUp = true
      newState.user = action.result.data
      return newState
    case VERIFY_SUCCESS:
      newState.user = action.result.data
      return newState
    case GET_USER_SUCCESS:
      newState.user = action.user
      return newState
    case GET_USERBYID_SUCCESS:
      newState.user = action.user
      return newState
    case LOGOUT_SUCCESS:
      newState.isLoggedIn = false
      newState.errors = null
      return newState
    case SET_SCOPE_SUCCESS:
      newState.apiLoading = false;
      return newState        
    default:
      return state;
  }
};

export default reducer;
