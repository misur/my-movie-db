import {Action} from '@ngrx/store';
import {Actor} from '../../../models/actor';


export const ADD_ACTOR_START = '[Actors list] Add actor start';
export const ADD_ACTOR = '[Actors list] Add actor';
export const ADD_LIST_ACTORS = '[Actors list] Add actors list';
export const DELETE_ACTOR = '[Actors list] Delete actor';
export const UPDATE_ACTOR = '[Actors list] Update actor';

export class AddActors implements Action {
  readonly type: string = ADD_ACTOR;
  payload: Actor;

  constructor(payload: Actor) {
    this.payload = payload;
  }
}

export class AddListActors implements Action {
  readonly type: string = ADD_LIST_ACTORS;
  payload: Actor[];

  constructor(payload: Actor[]) {
    this.payload = payload;
  }
}

export class DeleteActor implements Action {
  readonly type: string = DELETE_ACTOR;
  payload: Actor;

  constructor(payload: Actor) {
    this.payload = payload;
  }
}

export class UpdateActor implements Action {
  readonly type: string = UPDATE_ACTOR;
  payload: number;
  updateActor: Actor = null;

  constructor(payload: number, updateActor: Actor) {
    this.payload = payload;
    this.updateActor = updateActor;
  }
}

export class AddActorStart implements Action {
  readonly type = ADD_ACTOR_START;
  payload: Actor[];

  constructor() {
  }

}

export type ActorsActions = AddActors
  | AddListActors
  | DeleteActor
  | UpdateActor
  | AddActorStart;
