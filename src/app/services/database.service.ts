import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private menuList = [
    {id: 1, url: 'movies', title: 'Movies', description: 'All movies'},
    {id: 2, url: 'tv-shows', title: 'TV Shows', description: 'All tv shows'}
  ];


  constructor() {
  }

  getMenuList() {
    return this.menuList;
  }

}
