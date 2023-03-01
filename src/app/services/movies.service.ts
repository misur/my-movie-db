import {Injectable} from '@angular/core';
import {Movie} from '../models/movie.model';
import {UserService} from './user.service';
import {exhaustMap, map, take} from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Store} from '@ngrx/store';

import * as appReducer from '../core/stores/app.reducer';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private movies: Movie[] = [
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
  ];

  constructor(private userService: UserService, private http: HttpClient, private store: Store<appReducer.AppState>) {
  }

  getMovies() {
    return this.movies;
  }

  addMovie(movie: Movie) {
    // TODO: Implement validation
    this.movies.push(movie);
  }

  getMoviesWS() {

    return this.store.select('auth').pipe(
      take(1),
      map(authState => {
        return authState.user;
      }),
      exhaustMap(user => {
        if (user) {
          const httpOptions = {
            params: new HttpParams().set('token', user.id)
          };
          return this.http.get(this.userService.URL + 'movies', httpOptions);
        }
        return [];
      }),
      map(item => {
        return item;
      }));
  }
}
