import _ from 'lodash';
import {
  OPERATION_FAILED,
  API_LOADING,
  GET_WORLD_LIST_SUCCESS,
  GET_WORLD_DETAIL_SUCCESS,
  ADD_WORLD_INFO_SUCCESS
} from '../../constants/actionTypes';

const initialState = {
  headers: {
  },
  apiLoading: false,
   errors: null,
   world_list: [],
   world_detail: [],
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
    case GET_WORLD_LIST_SUCCESS:
      newState.apiLoading = false;
      newState.world_list = action.result.data
      return newState
    case GET_WORLD_DETAIL_SUCCESS:
      newState.apiLoading = false;
      newState.world_detail = action.result.data
      return newState
    case ADD_WORLD_INFO_SUCCESS:
      newState.apiLoading = false;
      return newState
    default:
      return state;
  }
};

export default reducer;
