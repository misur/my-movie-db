import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private movieList: { name: string, description: string, author: string }[] = [{
    name: 'Matrix',
    description: 'SC-FI',
    author: 'NO'
  },
    {
      name: 'Godfather',
      description: 'Drama',
      author: 'NO'
    }];

  constructor() {
  }

  getMovies() {
    return this.movieList;
  }

  addMovie(movie) {
    if (movie != null) {
      this.movieList.push(movie);
    }
  }

}
