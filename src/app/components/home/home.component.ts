import {Component, OnInit} from '@angular/core';
import {DatabaseService} from '../../services/database.service';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'My Movie DB';
  showFormForAdding = false;
  bestTitle = 10;
  movieList = [];

  constructor(private databaseService: DatabaseService, private userService: UserService, private router: Router) {
    this.movieList = databaseService.getMovies();
    let testValue = false;
    this.userService.userStatus.subscribe((value) => {
      testValue = value;
      console.log(`Get user status: ${testValue}`);
    });
  }

  onAddNewMovie(movie): void {
    this.databaseService.addMovie(movie);
  }

  goToUsersPage(): void {
    this.router.navigate(['/users']);
  }

  goToUsersPageParam(): void {
    this.router.navigate(['/users', Math.random()], {queryParams: {edite: true}, queryParamsHandling: 'preserve'});
  }

  ngOnInit(): void {
  }

}
