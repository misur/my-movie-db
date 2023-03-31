import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {Actor} from '../../../models/actor';


export const ActorsActions = createActionGroup({
  source: 'Actors',
  events: {
    'Add actor start': emptyProps(),
    'Add actor': props<{ actor: Actor }>(),
    'Delete actor': props<{ actor: Actor }>(),
    'Update actor': props<{ index: number, actor: Actor }>(),
    'Add actor list': props<{ actors: Array<Actor> }>(),
  }
});
