import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private  test: string = 'ste';

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
