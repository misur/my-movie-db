import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../core/stores/app.reducer';
import * as ActorActions from '../../../services/stores/actors-store/actors.actions';
import {Actor} from '../../../models/actor';

@Component({
  selector: 'app-add-actor',
  templateUrl: './add-actor.component.html',
  styleUrls: ['./add-actor.component.scss']
})
export class AddActorComponent implements OnInit {

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
  }

  addNewActor() {
    this.store.dispatch(
      new ActorActions.AddActors(
        new Actor('Ognjen', 'Jaramaz')));
  }

}
