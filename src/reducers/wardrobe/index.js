import _ from 'lodash';
import {
  OPERATION_FAILED,
  API_LOADING,
  GET_WARDROBE_USER_LIST_SUCCESS,
  GET_WARDROBE_POST_LIST_SUCCESS,
  ADD_WARDROBE_POST_ITEM_SUCCESS,
  GET_USER_PROFILE_SUCCESS,
  SEND_LIKE_NOTIFICATION_SUCCESS,
  SEND_COMMENT_NOTIFICATION_SUCCESS,
  SEND_FOLLOW_INVITATION_SUCCESS
} from '../../constants/actionTypes';

const initialState = {
  headers: {
  },
  apiLoading: false,
   errors: null,
   wardrobe_user_list: [],
   wardrobe_post_list: [],
   user_profile: null,
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
    case GET_WARDROBE_USER_LIST_SUCCESS:
      newState.apiLoading = false;
      newState.wardrobe_user_list = action.result.data
      return newState
    case GET_WARDROBE_POST_LIST_SUCCESS:
      newState.apiLoading = false;
      newState.wardrobe_post_list = action.result.data
      return newState
    case ADD_WARDROBE_POST_ITEM_SUCCESS:
      newState.apiLoading = false;
      return newState
    case GET_USER_PROFILE_SUCCESS:
      newState.apiLoading = false;
      newState.user_profile = action.result.data
      return newState
    case SEND_LIKE_NOTIFICATION_SUCCESS:
      newState.apiLoading = false;
      return newState
    case SEND_COMMENT_NOTIFICATION_SUCCESS:
      newState.apiLoading = false;
      return newState
    case SEND_FOLLOW_INVITATION_SUCCESS:
      newState.apiLoading = false;
      return newState
    default:
      return state;
  }
};

export default reducer;
