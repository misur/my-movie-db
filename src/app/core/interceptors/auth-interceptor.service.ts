import {HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserService} from '../../services/user.service';
import {exhaustMap, take} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {


  constructor(private userService: UserService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.userService.loggedUser.pipe(
      take(1),
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
