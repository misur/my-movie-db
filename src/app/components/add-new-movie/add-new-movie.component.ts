import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DatabaseService} from '../../services/database.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-add-new-movie',
  templateUrl: './add-new-movie.component.html',
  styleUrls: ['./add-new-movie.component.scss']
})
export class AddNewMovieComponent implements OnInit {
  @Output() addNewMovieEvent = new EventEmitter<{ name: string, description: string, author: string }>();
  public movie = {
    name: '',
    description: '',
    author: ''
  };

  constructor(private databaseService: DatabaseService, private userService: UserService) {
  }

  ngOnInit(): void {
    console.log('Logged user is: ' + this.userService.getLoggedUser().username);
  }

  addNewMovie(): void {
    this.userService.userStatus.emit(true);
    // this.databaseService.addMovie(this.movie);
    // this.addNewMovieEvent.emit(this.movie);
    this.movie = {
      name: '',
      description: '',
      author: ''
    };
    // console.log(' Added new movie from component');
  }
}
