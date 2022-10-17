import {Injectable} from '@angular/core';
import {Movie} from '../models/movie.model';

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

  constructor() {
  }

  getMovies() {
    return this.movies;
  }
  addMovie(movie: Movie){
    // TODO: Implement validation
    this.movies.push(movie);
  }
}
