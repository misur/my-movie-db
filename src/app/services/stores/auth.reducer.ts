import {User} from '../../models/User';
import * as fromAuthActions from './auth.actions';

export interface State {
  user: User;
}

const initState: State = {
  user: null
};

export function authReducer(state = initState, action: fromAuthActions.AuthActions) {

  switch (action.type) {
    case fromAuthActions.LOGIN:
      return {
        ...state,
        user: action.payload
      };
    case fromAuthActions.LOGOUT:
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
}
