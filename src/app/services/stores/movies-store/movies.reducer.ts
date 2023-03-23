import * as MoviesActions from './movies.actions';
import {Movie} from '../../../models/movie.model';


export interface State {
  movies: Movie [];
}

const initialState: State = {
  movies: []
};

export function movieListReducer(
  state = initialState,
  action: any) {
  switch (action.type) {
    case MoviesActions.ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload]
      };

    case MoviesActions.ADD_MOVIES:
      return {
        ...state,
        movies: [...state.movies, ...action.payload]
      };
    case MoviesActions.DELETE_MOVIES:
      return {
        ...state,
        movies: state.movies.filter((item, index) => {
          return index !== action.payload;
        })
      };
    default:
      return state;
  }

}
