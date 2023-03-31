import {ActorsActions} from './actors.actions';
import {Actor} from '../../../models/actor';
import {createReducer, on} from '@ngrx/store';

export interface State {
  actorsList: Actor [];
  editedActor: null;
  loading: boolean;
}

const initialState: State = {
  actorsList: [],
  editedActor: null,
  loading: false
};

export const actorsReducer = createReducer(
  initialState,
  on(ActorsActions.addActor, (state, {actor}) => {
    return {
      ...state,
      actorsList: [...state.actorsList, actor],
      loading: false
    };
  }),
  on(ActorsActions.addActorList, (state, {actors}) => {
    return {
      ...state,
      actorsList: [...state.actorsList, ...actors],
      loading: false
    };
  }),
  on(ActorsActions.updateActor, (state, {index, actor}) => {
    const actorObj: Actor = state.actorsList[index];
    const updatedActor = {
      ...actor,
      ...actorObj
    };
    const updateActors = [...state.actorsList];
    updateActors[index] = updatedActor;
    return {
      ...state,
      actorsList: updateActors
    };
  }),
  on(ActorsActions.deleteActor, (state, {actor}) => {
    return {
      ...state,
      actorsList: state.actorsList.filter((item) => {
        return item.name !== actor.name && item.surname !== actor.surname;
      })
    };
  }),
  on(ActorsActions.addActorStart, (state) => {
    return {
      ...state,
      loading: true
    };
  })
);


