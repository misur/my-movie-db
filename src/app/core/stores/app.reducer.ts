import {ActionReducerMap} from '@ngrx/store';

import * as authReducer from '../../services/stores/auth.reducer';
import * as moviesReducer from '../../services/stores/movies.reducer';
import * as actorsReducer from '../../services/stores/actors-store/actors.reducer';

export interface AppState {
  auth: authReducer.State;
  movies: moviesReducer.State;
  actors: actorsReducer.State;

}

export const appReducer: ActionReducerMap<AppState> = {
  auth: authReducer.authReducer,
  movies: moviesReducer.movieListReducer,
  actors: actorsReducer.actorsReducer
};
