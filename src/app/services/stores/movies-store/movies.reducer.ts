import {Movie} from '../../../models/movie.model';
import {createReducer, on} from '@ngrx/store';
import {MoviesActions} from './movies.actions';


export interface State {
  movies: Movie [];
}

const initialState: State = {
  movies: []
};

export const moviesReducer = createReducer(
  initialState,
  on(MoviesActions.addMovie, (state, {movie}) => {
    return {
      ...state,
      movies: [...state.movies, movie]
    };
  }),
  on(MoviesActions.addMovies, (state, {movies}) => {
    return {
      ...state,
      movies: [...state.movies, ...movies]
    };
  }),
  on(MoviesActions.deleteMovie, (state, {movieIndex}) => {
    return {
      ...state,
      movies: state.movies.filter((item, index) => {
        return index !== movieIndex;
      })
    };
  }),
  on(MoviesActions.addMovieStart, (state) => {
    return {
      ...state,
      movies: []
    };
  })
);

