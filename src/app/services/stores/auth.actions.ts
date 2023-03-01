import {Action} from '@ngrx/store';
import {User} from '../../models/User';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';


export class Login implements Action {
  readonly type = LOGIN;

  constructor(public payload: User) {
  }
}

export class Logout implements Action {
  readonly type = LOGOUT;

  constructor(public payload: User) {
  }
}

export type AuthActions = Login | Logout;

