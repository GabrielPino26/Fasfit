import {
  API_LOADING,
  OPERATION_FAILED,
} from '../../constants/actionTypes';

export function fetchingData() {
  return {
    type: API_LOADING,
  };
}

export function operationFailed(errors) {
  return {
    type: OPERATION_FAILED,
    errors,
  };
}
