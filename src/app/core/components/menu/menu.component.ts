import {Component, OnInit} from '@angular/core';
import {DatabaseService} from '../../../services/database.service';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isLogged = false;
  menuList = [];

  constructor(private database: DatabaseService, private userService: UserService) {
    this.menuList = this.resetMenu(this.database.getMenuList());

    this.userService.loggedUser.subscribe(value => {
      this.menuList = this.resetMenu(this.database.getMenuList());

      this.isLogged = !!value;
      if (this.isLogged) {
        this.menuList.map(item => {
          if (item.id === 3) {
            item.url = item.url + '/' + value.id;
          }
        });
      }
    });
  }
  resetMenu(arr){
    const myClonedArray = [];
    arr.forEach(val => myClonedArray.push(Object.assign({}, val)));
    return myClonedArray;
  }

  showItem(item) {
    if (this.isLogged) {
      return true;
    }
    return !(!this.isLogged && !item.show);
  }

  ngOnInit(): void {
  }

}
