import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../core/stores/app.reducer';
import {Actor} from '../../../models/actor';
import {ActorsActions} from '../../../services/stores/actors-store/actors.actions';

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
    const actor = new Actor('Ognjen', 'Jaramaz');
    this.store.dispatch(ActorsActions.addActor({actor}));
  }

}
