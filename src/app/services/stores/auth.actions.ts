import {createActionGroup, props} from '@ngrx/store';
import {User} from '../../models/User';


export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    Login: props<{ user: User }>(),
    Logout: props<{ user: User }>()
  }
});


