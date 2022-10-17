import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../../models/movie.model';

@Component({
  selector: 'app-movie-item-details',
  templateUrl: './movie-item-details.component.html',
  styleUrls: ['./movie-item-details.component.scss']
})
export class MovieItemDetailsComponent implements OnInit {
  @Input()
  movieItem: Movie;

  constructor() {

  }

  ngOnInit(): void {
    // this.element.name = 'matrix';
    // this.element.description = 'sc-fi';
    // this.element.name = 'misur';
  }

}
