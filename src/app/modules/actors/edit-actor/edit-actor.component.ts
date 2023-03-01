import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppState} from '../../../core/stores/app.reducer';
import {Store} from '@ngrx/store';
import * as ActorsActions from '../../../services/stores/actors-store/actors.actions';
import {Observable, Subscriber} from 'rxjs';
import {Actor} from '../../../models/actor';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.scss']
})
export class EditActorComponent implements OnInit, OnDestroy {
  actorsList: Actor [];
  subscription = null;

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.subscription = this.store.select('actors').subscribe(
      (data) => {
        this.actorsList = data.actorsList;
      }
    );
  }

  updateActor(index: number) {
    const actor: Actor = Object.assign({}, this.actorsList[index],);
    actor.age = 666;
    actor.name = actor.name + ' updated';
    this.store.dispatch(new ActorsActions.UpdateActor(index, actor));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
