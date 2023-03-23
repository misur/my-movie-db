import {Action} from '@ngrx/store';
import {Movie} from '../../../models/movie.model';

export const ADD_MOVIE = 'ADD_MOVIE';
export const ADD_MOVIES = 'ADD_MOVIES';
export const DELETE_MOVIES = 'DELETE_MOVIES';

export const ADD_MOVIE_START = 'ADD_MOVIE_START';

export class AddMovie implements Action {
  readonly type: string = ADD_MOVIE;

  constructor(public payload: Movie) {
  }
}

export class AddMovies implements Action {
  readonly type: string = ADD_MOVIES;

  constructor(public payload: Movie[]) {
  }
}

export class DeleteMovies implements Action {
  readonly type: string = DELETE_MOVIES;

  constructor(public payload: number) {
  }
}

export class AddMovieStart implements Action {
  readonly type: string = ADD_MOVIE_START;

  constructor() {
  }
}

export type MoviesActions = AddMovie | AddMovies | DeleteMovies | AddMovieStart;
