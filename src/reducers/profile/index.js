import _ from 'lodash';
import {
  OPERATION_FAILED,
  API_LOADING,
  EDIT_PROFILE_SUCCESS
} from '../../constants/actionTypes';

const initialState = {
  headers: {
  },
  apiLoading: false,
   errors: null,
   profile: {},
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
    case EDIT_PROFILE_SUCCESS:
      newState.apiLoading = false;
      newState.profile = action.result.data
      return newState
    default:
      return state;
  }
};

export default reducer;
