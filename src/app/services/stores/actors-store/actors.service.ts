import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../../models/User';
import {environment} from '../../../../environments/environment';
import {Actor} from '../../../models/actor';

@Injectable({
  providedIn: 'root'
})
export class ActorsService implements OnDestroy {
  URL = environment.backendServerURI;

  constructor(private http: HttpClient) {
  }

  getListOfActors() {
    return this.http.get<Actor[]>(this.URL + 'actors');
  }

  ngOnDestroy(): void {
  }
}
