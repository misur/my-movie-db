import {ADD_ACTOR, ADD_ACTOR_START, ADD_LIST_ACTORS, DELETE_ACTOR, UPDATE_ACTOR} from './actors.actions';
import {Actor} from '../../../models/actor';

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

export function actorsReducer(
  state = initialState,
  action: any): State {
  switch (action.type) {
    case ADD_ACTOR:
      return {
        ...state,
        actorsList: [...state.actorsList, action.payload],
        loading: false
      };
    case ADD_LIST_ACTORS:
      return {
        ...state,
        actorsList: [...state.actorsList, ...action.payload],
        loading: false
      };
    case DELETE_ACTOR:
      return {
        ...state,
        actorsList: state.actorsList.filter((item) => {
          return item.name !== action.payload.name && item.surname !== action.payload.surname;
        })
      };
    case UPDATE_ACTOR:
      const actor: Actor = state.actorsList[action.payload];
      const updatedActor = {
        ...actor,
        ...action.updateActor
      };
      const updateActors = [...state.actorsList];
      updateActors[action.payload] = updatedActor;
      return {
        ...state,
        editedActor: updatedActor,
        actorsList: updateActors
      };
    case ADD_ACTOR_START:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
