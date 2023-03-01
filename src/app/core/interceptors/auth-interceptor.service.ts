import {HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserService} from '../../services/user.service';
import {exhaustMap, map, take} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import * as appReducer from './../stores/app.reducer';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {


  constructor(private userService: UserService, private store: Store<appReducer.AppState>) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.select('auth').pipe(
      take(1),
      map(authState => {
        return authState.user;
      }),
      exhaustMap(user => {
        if (!user || !user.id) {
          return next.handle(req);
        }
        const modReq = req.clone({
          params: new HttpParams().set('token', user.id)
        });
        return next.handle(modReq);

      })
    );
  }

}
