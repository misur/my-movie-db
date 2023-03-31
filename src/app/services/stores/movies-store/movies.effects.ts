import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {HttpClient} from '@angular/common/http';
import {catchError, map, switchMap} from 'rxjs/operators';
import {EMPTY, of} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {Movie} from '../../../models/movie.model';
import {MoviesActions} from './movies.actions';

@Injectable()
export class MoviesEffects {
  constructor(private actions$: Actions, private http: HttpClient) {
  }

  moviesEffect = createEffect(() => this.actions$.pipe(
    ofType(MoviesActions.addMovieStart),
    switchMap(() => {
      return this.http.get<Movie[]>(environment.backendServerURI + 'movies')
        .pipe(
          map(resp => MoviesActions.addMovies({movies: resp})
          ),
          catchError(() => EMPTY)
        );
    })
  ));

  // moviesAdd = this.actions$.pipe(
  //
  //   ofType( 'ADD_MOVIE_START'),
  //   switchMap((actors: MoviesActions.AddMovieStart) => {
  //     return this.http.get<Movie[]>(environment.backendServerURI + 'movies')
  //       .pipe(
  //               map(resp => {
  //             return ({ type: 'ADD_MOVIES', payload: resp });
  //             }
  //           ),
  //           catchError(error => {
  //             return of([]);
  //           })
  //       );
  //
  //   })
  // );
}
