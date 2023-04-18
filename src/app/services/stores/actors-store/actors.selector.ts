import {AppState} from '../../../core/stores/app.reducer';
import {createSelector} from '@ngrx/store';


export const selectActors = (state: AppState) => state.actors;

export const actorsSelector = createSelector(
  selectActors,
  (state) => state.actorsList
);

export const isLoadingSelector = createSelector(
  selectActors,
  (state) => state.loading
);
