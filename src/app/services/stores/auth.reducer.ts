import {User} from '../../models/User';
import * as fromAuthActions from './auth.actions';
import {createReducer, on} from '@ngrx/store';
import {AuthActions} from './auth.actions';

export interface State {
  user: User;
}

const initState: State = {
  user: null
};

export const authReducer = createReducer(
  initState,
  on(AuthActions.login, (state, {user}) => {
    return {
      ...state,
      user
    };
  }),
  on(AuthActions.logout, (state, {user}) => {
    return {
      ...state,
      user: null
    };
  })
);

