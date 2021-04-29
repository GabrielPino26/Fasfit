import _ from 'lodash';
import {
  OPERATION_FAILED,
  API_LOADING,
  GET_FOLDERPOST_LIST_SUCCESS,
  EDIT_FOLDERPOST_SUCCESS,
  ADD_FOLDERPOST_SUCCESS
} from '../../constants/actionTypes';

const initialState = {
  headers: {
  },
  apiLoading: false,
   errors: null,
   folder_post_list: [],
   folder_post: {},
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
    case GET_FOLDERPOST_LIST_SUCCESS:
      newState.apiLoading = false;
      newState.folder_post_list = action.result.data
      return newState
    case EDIT_FOLDERPOST_SUCCESS:
      newState.apiLoading = false;
      newState.folder_post = action.result.data
      return newState
    case ADD_FOLDERPOST_SUCCESS:
      newState.apiLoading = false;
      return newState
    default:
      return state;
  }
};

export default reducer;
