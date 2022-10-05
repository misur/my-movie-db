import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: { id: number, name: string };
  randomNumber: number = Math.pow(0, 100);

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.user = {
      id: this.route.snapshot.params.id,
      name: 'misur'
    };

    this.route.params.subscribe(
      (params: Params) => {
        this.user.id = params.id;
        this.user.name = 'misur=' + params.id;
        this.randomNumber = Math.random();
      }
    );
  }

}
