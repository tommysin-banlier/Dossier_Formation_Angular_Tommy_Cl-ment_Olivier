import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthentificationInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    if (sessionStorage.getItem('token'))//basicAuth
    {
      let basicAuth=sessionStorage.getItem('token') ?? "" ;//basicAuth

      request=request.clone({
        setHeaders:
        {
          Authorization:basicAuth
        }
        
      })

    }
    return next.handle(request);
  
  
  
  }
}
