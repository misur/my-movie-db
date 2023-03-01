import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actor} from '../../../models/actor';
import {Observable, of} from 'rxjs';
import {AppState} from '../../../core/stores/app.reducer';
import * as ActorActions from '../../../services/stores/actors-store/actors.actions';
import {environment} from '../../../../environments/environment';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-actors-list',
  templateUrl: './actors-list.component.html',
  styleUrls: ['./actors-list.component.scss']
})
export class ActorsListComponent implements OnInit, OnDestroy {
  // actorsList: Observable<{ actorsList: Actor [], editedActor: Actor }>;
  actorsList: Actor[];

  loading = true;
  subscription = null;

  constructor(
    private store: Store<AppState>,
    private http: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.subscription = this.store.select('actors')
      .subscribe(data => {
        this.actorsList = data.actorsList;
        this.loading = data.loading;
      });

    this.store.dispatch(new ActorActions.AddActorStart());


  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  deleteActor(actor: Actor) {
    this.store.dispatch(new ActorActions.DeleteActor(actor));
  }


}
