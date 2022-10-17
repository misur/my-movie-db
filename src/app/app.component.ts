import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component, DoCheck,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {DatabaseService} from './services/database.service';
import {UserService} from './services/user.service';
import {faFilm} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faRightToBracket} from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DatabaseService]
})
export class AppComponent implements OnInit, OnChanges, OnDestroy, AfterContentInit, AfterViewInit,
  AfterViewChecked, AfterContentChecked, DoCheck {
  title = 'My Movie DB';
  faFilm = faFilm;
  faUser = faUser;
  login = faRightToBracket;
  loggedUser: { username: string, email: string } = null;


  constructor(private userService: UserService, private router: Router) {
  }

  onAddNewMovie(movie): void {
  }

  ngOnInit(): void {
    this.userService.activeEmitter.subscribe(data => {
      this.loggedUser = data;
    });

    // console.log('Logged user is: ' + this.userService.getLog gedUser().username);
  }

  ngOnDestroy() {
    this.userService.activeEmitter.unsubscribe();
  }

  onLogin() {
    this.userService.activeEmitter.next({username: 'misur', email: 'misur@gmail.com'});
  }

  onLogout() {
    this.userService.activeEmitter.next(null);
  }

  ngAfterContentInit(): void {
    // console.log('after content init');
  }

  ngAfterContentChecked(): void {
    // console.log('after content checked');
  }

  ngAfterViewChecked(): void {
    // console.log('after view checked');
  }

  ngAfterViewInit(): void {
    // console.log('after view ');
    console.log(`Curren page ${this.router.url}`);

  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('on changes');
    // console.log(changes);
  }

  ngDoCheck(): void {
    // console.log('ng do check');
  }

}
