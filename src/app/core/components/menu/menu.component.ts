import {Component, OnInit} from '@angular/core';
import {DatabaseService} from '../../../services/database.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuList = [];

  constructor(private database: DatabaseService) {
    this.menuList = this.database.getMenuList();
  }

  ngOnInit(): void {
  }

}
