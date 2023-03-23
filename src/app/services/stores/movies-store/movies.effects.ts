import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {HttpClient} from '@angular/common/http';
import {catchError, map, switchMap} from 'rxjs/operators';
import * as MoviesActions from './movies.actions';
import {of} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {Movie} from '../../../models/movie.model';

@Injectable()
export class MoviesEffects {
  constructor(private actions$: Actions, private http: HttpClient) {
  }

  @Effect()
  moviesAdd = this.actions$.pipe(

    ofType( 'ADD_MOVIE_START'),
    switchMap((actors: MoviesActions.AddMovieStart) => {
      return this.http.get<Movie[]>(environment.backendServerURI + 'movies')
        .pipe(
                map(resp => {
              return ({ type: 'ADD_MOVIES', payload: resp });
              }
            ),
            catchError(error => {
              return of([]);
            })
        );

    })
  );
}
