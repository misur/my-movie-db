import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actor} from '../../../models/actor';
import {AppState} from '../../../core/stores/app.reducer';
import {HttpClient} from '@angular/common/http';
import {ActorsActions} from '../../../services/stores/actors-store/actors.actions';
import {ActorsService} from '../../../services/stores/actors-store/actors.service';

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
    private http: HttpClient,
    private actorsService: ActorsService
  ) {
  }

  ngOnInit(): void {
    this.subscription = this.store.select('actors')
      .subscribe(data => {
        this.actorsList = data.actorsList;
        this.loading = data.loading;
      });

    this.store.dispatch(ActorsActions.addActorStart());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  deleteActor(actor: Actor) {
    this.store.dispatch(ActorsActions.deleteActor({actor}));
  }


}
