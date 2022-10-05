import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html'
})
export class MovieListComponent implements OnInit, OnChanges {
  searchMovie = '';

  @Input('movieListService') movieList = [];
  randomNumber = 0;

  constructor() {
    // this.searchMovie = 'Matrix';
    this.randomNumber = Math.random();
  }

  ngOnInit() {
    // this.searchMovie = 'Matrix';
  }

  onClickSearch() {
    this.movieList.push({description: 'Comedy', name: 'American pie', author: 'Arthur'});
    // console.log('searching movies');
  }

  getWarningColor() {
    return this.randomNumber > 0.5 ? 'red' : 'green';
  }

  findMovies() {
    if (this.searchMovie !== null && this.searchMovie.trim() !== '') {
      return this.movieList.filter(item => item.name.toLowerCase().includes(this.searchMovie.toLowerCase()));
    }
    return this.movieList;
  }

  ngOnChanges(changes: SimpleChanges): void {

    // console.log(changes);
    // console.log('------ on movie list component changes---------------');
  }
}
