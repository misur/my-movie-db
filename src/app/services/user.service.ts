import {EventEmitter, Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  activeEmitter = new Subject<{ username: string, email: string }>();

  loggedUser = {username: 'misur', email: 'misur@gmail.com'};

  userStatus = new EventEmitter<boolean>();

  constructor() {
  }

  getLoggedUser() {
    return this.loggedUser;
  }


  setLoggedUser(user) {

    this.loggedUser = user;
  }
}
