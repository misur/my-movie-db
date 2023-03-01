import {Actions, Effect, ofType} from '@ngrx/effects';
import * as ActorsActions from './actors.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Actor} from '../../../models/actor';
import {of} from 'rxjs';
import {Injectable} from '@angular/core';


@Injectable()
export class ActorsEffects {
  constructor(private actions$: Actions, private http: HttpClient) {
  }

  @Effect()
  actorsAdd = this.actions$.pipe(
    ofType('[Actors list] Add actor start'),

    switchMap((actors: ActorsActions.AddActorStart) => {
      return this.http.get<Actor[]>(environment.backendServerURI + 'actors')
        .pipe(
          map(resp => {
            return ({ type: '[Actors list] Add actors list', payload: resp });
            }
          ),
          catchError(error => {
            return of();
          })
        );
    }),
  );
}
