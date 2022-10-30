import {Injectable} from '@angular/core';

@Injectable()
export class DatabaseService {

  private menuList = [
    {id: 1, url: 'movies', title: 'Movies', description: 'All movies', show: true},
    {id: 2, url: 'tv-shows', title: 'TV Shows', description: 'All tv shows', show: false},
    {id: 3, url: 'users', title: 'My Profile', description: 'Details', show: false},
    {id: 4, url: 'actors', title: 'Actors', description: 'All actors', show: true}
  ];


  constructor() {
  }

  getMenuList() {
    return this.menuList;
  }

}
