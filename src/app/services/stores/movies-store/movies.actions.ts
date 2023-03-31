import {Action, createActionGroup, emptyProps, props} from '@ngrx/store';
import {Movie} from '../../../models/movie.model';


export const MoviesActions = createActionGroup({
  source: 'Movies',
  events: {
    'Add movie': props<{ movie: Movie }>(),
    'Add movies': props<{ movies: Movie[] }>(),
    'Delete movie': props<{ movieIndex: number }>(),
    'Add movie start': emptyProps(),
  }
});


