import {catchError, exhaustMap, map, switchMap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {ActorsService} from './actors.service';
import {EMPTY} from 'rxjs';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ActorsActions} from './actors.actions';


@Injectable()
export class ActorsEffects {

  actorsAdd$ = createEffect(() => this.actions$.pipe(
    ofType(ActorsActions.addActorStart),

    exhaustMap(() => {
        return this.actorsService.getListOfActors()
          .pipe(
            map(actors => ActorsActions.addActorList({actors})),
            catchError(() => EMPTY)
          );
      }
    )
  ));

  constructor(
    private actions$: Actions,
    private actorsService: ActorsService
  ) {
  }
}
