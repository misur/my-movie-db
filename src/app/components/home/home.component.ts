import {Component, OnDestroy, OnInit} from '@angular/core';
import {DatabaseService} from '../../services/database.service';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {interval, Observable, Subscription} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {MoviesService} from '../../services/movies.service';
import {Movie} from '../../models/movie.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  title = 'My Movie DB';
  showFormForAdding = false;
  bestTitle = 10;
  movieList: Movie[] = [];
  private subscription: Subscription;


  constructor(private movieService: MoviesService, private userService: UserService, private router: Router) {
    this.movieList = movieService.getMovies();
    let testValue = false;

    this.userService.userStatus.subscribe((value) => {
      testValue = value;
      console.log(`Get user status: ${testValue}`);
    });
  }

  onAddNewMovie(movie): void {
    this.movieService.addMovie(movie);
  }

  goToUsersPage(): void {
    this.router.navigate(['/users']);
  }

  goToUsersPageParam(): void {
    this.router.navigate(['/users', Math.random()], {queryParams: {edite: true}, queryParamsHandling: 'preserve'});
  }

  ngOnInit(): void {
    // this.subscription = interval(1000).subscribe(count => {
    //
    //   this.bestTitle += count;
    //   console.log(count, this.bestTitle);
    // });

    const custObs = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        if (count === 3) {
          observer.complete();
        }
        if (count > 5) {
          observer.error(new Error('Count is greater then 5'));
        }
        observer.next(count);
        count++;
      }, 1000);
    });

    this.subscription = custObs.pipe(
      filter(data => {
        return data < 2;
      })
      , map(data => {
        return `Round: ${data}`;
      })).subscribe((data) => {
      console.log(data);
    }, (err) => {
      console.log(err);
    }, () => {
      console.log('Completed!');
    });

  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
