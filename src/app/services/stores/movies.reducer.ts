import * as MoviesActions from './movies.actions';
import {Movie} from '../../models/movie.model';



export interface State {
  movies: Movie [];
}

const initialState: State = {
  movies: [
    {
      title: 'Matrix',
      description: 'SC-FI',
      director: 'NO',
      rating: 1,
      year: 1995
    },
    {
      title: 'Godfather 2 ',
      description: 'Drama',
      director: 'NO',
      rating: 1,
      year: 1996
    },
    {
      title: 'Godfather 1',
      description: 'Drama',
      director: 'NO',
      rating: 1,
      year: 1995
    },
    {
      title: 'The Lord of The Rings',
      description: 'Drama',
      director: 'NO',
      rating: 1,
      year: 1995
    },
    {
      title: 'The Breve Hart',
      description: 'Drama',
      director: 'NO',
      rating: 1,
      year: 1995
    },
    {
      title: 'American pie',
      description: 'Drama',
      director: 'NO',
      rating: 1,
      year: 1995
    }
  ]
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
