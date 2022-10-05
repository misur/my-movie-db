import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-movie-item-details',
  templateUrl: './movie-item-details.component.html',
  styleUrls: ['./movie-item-details.component.scss']
})
export class MovieItemDetailsComponent implements OnInit {
  @Input()
  movieItem: {
    name: string,
    description: string,
    author: string
  };

  constructor() {

  }

  ngOnInit(): void {
    // this.element.name = 'matrix';
    // this.element.description = 'sc-fi';
    // this.element.name = 'misur';
  }

}
