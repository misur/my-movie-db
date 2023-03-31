import {EventEmitter, Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {User} from '../models/User';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {map, take, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
import {Store} from '@ngrx/store';

import * as fromAppState from './../core/stores/app.reducer';
import {AuthActions} from './stores/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy {

  URL = environment.backendServerURI;

  activeEmitter = new Subject<{ username: string, email: string }>();

  // loggedUser = new BehaviorSubject<User>(null);
  // loggedUser = new Subject<User>();
  public loggedUserObj = null;

  userStatus = new EventEmitter<boolean>();

  searchParams = new HttpParams().append('te1', '4').append('232', '231');
  httpOptions = {
    headers: new HttpHeaders(),
    // params: new HttpParams().set('test1', '3').set('test2', '5')
    params: this.searchParams
  };

  constructor(private http: HttpClient, private router: Router, private store: Store<fromAppState.AppState>) {
    // this.store.select('auth').pipe(
    //   take(1),
    //   map(authState => {
    //     return authState.user;
    //   })
    // ).subscribe(value => {
    //   this.loggedUserObj = value;
    // });
  }

  getListOfUser() {
    this.http.get<User[]>(this.URL + 'user', this.httpOptions)
      .pipe(
        map(listOfUser => {
          const arr: { id: string, user: User } [] = [];

          for (const user of listOfUser) {
            const obj = {id: user.id, user};
            arr.push(obj);
          }
          return arr;
        }))
      .subscribe(response => {
        console.log(response);
      }, error => {
        console.log(error);
      });
  }

  createNewUser(user: User) {
    return this.http.post(this.URL + 'user', user, {observe: 'response'});
  }


  getLoggedUser() {
    return this.store.select('auth').pipe(
      take(1),
      map(authState => {
        return authState.user;
      })
    );
  }


  setLoggedUser(user) {
    return this.http
      .get<User>(this.URL + 'user', user)
      .pipe(tap(value => {
        this.handleAuth(value[0].username, value[0].email, value[0].password, value[0].id);
      }));

    // this.userService.activeEmitter.next(this.loginForm.value);
  }

  private handleAuth(username: string, email: string, password: string, id: string) {
    const user = new User();
    user.username = username;
    user.email = email;
    user.password = password;
    user.id = id;
    // this.loggedUser.next(user);
    this.store.dispatch(AuthActions.login({user}));
    localStorage.setItem('loggedUser', JSON.stringify(user));
  }

  getLoggedUserFromWS() {
    return this.http.get<User>(this.URL + 'user');
  }

  autoLogin() {
    const user: User = JSON.parse(localStorage.getItem('loggedUser'));
    // this.loggedUser.next(user);
    this.store.dispatch(AuthActions.login({user}));
  }

  logout() {
    // this.loggedUser.next(null);
    this.store.dispatch(AuthActions.logout({user: null}));
    localStorage.removeItem('loggedUser');
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    // this.loggedUser.unsubscribe();
  }
}
