import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Actor} from '../../../models/actor';
import {AppState} from '../../../core/stores/app.reducer';
import {ActorsActions} from '../../../services/stores/actors-store/actors.actions';
import {actorsSelector, isLoadingSelector} from '../../../services/stores/actors-store/actors.selector';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-actors-list',
  templateUrl: './actors-list.component.html',
  styleUrls: ['./actors-list.component.scss']
})
export class ActorsListComponent implements OnInit, OnDestroy {
  actorsList: Observable<Actor[]>;
  loading: Observable<boolean>;

  constructor(
    private store: Store<AppState>,
  ) {
  }

  ngOnInit(): void {

    this.actorsList = this.store.pipe(select(actorsSelector));
    this.loading = this.store.pipe(select(isLoadingSelector));

    this.store.dispatch(ActorsActions.addActorStart());
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

  deleteActor(actor: Actor) {
    this.store.dispatch(ActorsActions.deleteActor({actor}));
  }


}
