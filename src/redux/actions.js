import { APIURL } from '../constants/constants'
import { SYSTEM_LIST, SYSTEMS_COMMIT, SYSTEMS_ROLLBACK, LOGIN_USRE_COMMIT, LOGIN_USER_ROLLBACK } from '../constants/actionTypes';
export const loginUser = (email, password) => ({  
  type: 'LOGIN_USER',
  payload: { email, password },
  meta: {
    offline: {
      // passed to network sink
      effect: {        
        url: `${APIURL}/users/login`,
        method: 'POST',        
        body: JSON.stringify({email: email, password: password }),              
        headers: {'Content-Type': 'application/json'}
      },
      // dispatched when effect succeeds
      commit: {
        type: LOGIN_USRE_COMMIT,
        meta: { email, password }
      },
      // dispatched if effect fails
      rollback: {
        type: LOGIN_USER_ROLLBACK,
        payload: null,
        error: true,
        meta: { email, password }
      }
    }
  }
});

export const systemList = () => ({  
  type: SYSTEM_LIST,
  payload: { },
  meta: {
    offline: {
      // passed to network sink
      effect: {        
        url: `${APIURL}/systems`,
        method: 'GET',        
        headers: {'Content-Type': 'application/json'}
      },
      // dispatched when effect succeeds
      commit: {
        type: SYSTEMS_COMMIT
      },
      // dispatched if effect fails
      rollback: {
        type: SYSTEMS_ROLLBACK,
        payload: null,
        error: true        
      }
    }
  }
});
