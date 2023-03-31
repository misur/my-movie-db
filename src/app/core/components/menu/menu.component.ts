import {Component, OnInit} from '@angular/core';
import {DatabaseService} from '../../../services/database.service';
import {UserService} from '../../../services/user.service';
import {map, take} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import * as appReducer from './../../stores/app.reducer';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isLogged = false;
  menuList = [];

  constructor(private database: DatabaseService, private userService: UserService, private store: Store<appReducer.AppState>) {
    this.menuList = this.resetMenu(this.database.getMenuList());

    this.store.select('auth').subscribe( value => {
      console.log( 'subscirpbee', value);
      this.afterUpdateState(value);
    });

    this.store.select('auth').pipe(
      take(1),
      map(authState => {
        return authState.user;
      })
    ).subscribe(value => {
      this.afterUpdateState(value);
    });
  }

  afterUpdateState(value){
    this.menuList = this.resetMenu(this.database.getMenuList());

    this.isLogged = !!value;
    if (this.isLogged) {
      this.menuList.map(item => {
        if (item.id === 3) {
          item.url = item.url + '/' + value.id;
        }
      });
    }
  }
  resetMenu(arr: any){
    const myClonedArray: any = [];
    arr.forEach((val: any) => myClonedArray.push(Object.assign({}, val)));
    return myClonedArray;
  }

  showItem(item: any) {
    if (this.isLogged) {
      return true;
    }
    return !(!this.isLogged && !item.show);
  }

  ngOnInit(): void {
  }

}
