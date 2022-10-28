import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';


export class AuthInterceptorServiceService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req);
    // const modifiedReq = req.clone({params: req.params.append('interceptor', '1')});
    return next.handle(req);
  }
}

