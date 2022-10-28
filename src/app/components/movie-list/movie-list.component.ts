import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {Movie} from '../../models/movie.model';
import {MoviesService} from '../../services/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  encapsulation: ViewEncapsulation.Emulated
})
export class MovieListComponent implements OnInit, OnChanges {
  searchMovie = '';

  @Input('movieListService') movieList: Movie[] = [];
  randomNumber = 0;

  constructor(private movieService: MoviesService) {
    // this.searchMovie = 'Matrix';
    this.randomNumber = Math.random();
  }

  ngOnInit() {
    this.movieService.getMoviesWS().subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.log(error);
      }
    );
  }

  onClickSearch() {
    // this.movieList.push({description: 'Comedy', name: 'American pie', author: 'Arthur'});
    // console.log('searching movies');
  }

  getWarningColor() {
    return this.randomNumber > 0.5 ? 'red' : 'green';
  }

  findMovies() {
    if (this.searchMovie !== null && this.searchMovie.trim() !== '') {
      this.movieList.filter((item: Movie) => {
        return item.title.toLowerCase().includes(this.searchMovie.toLowerCase());
      });
      //
    }
    return this.movieList;
  }

  ngOnChanges(changes: SimpleChanges): void {

    // console.log(changes);
    // console.log('------ on movie list component changes---------------');
  }
}
