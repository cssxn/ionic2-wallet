import {Request, Response} from '@angular/http';
import {Inject} from '@angular/core';
import {Platform} from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import {IHttpInterceptor} from 'angular2-http-interceptor';
export class AuthInterceptor implements IHttpInterceptor {

  // Remote ajax address
  private BASE_URL = 'http://rap.taobao.org/mockjsdata/13819/';

  constructor(@Inject(Platform) private platform: Platform) {

  }

  before(request: Request): Request {

    if (request.url.startsWith('api/')) {
      request.url = this.BASE_URL + request.url;
    }

    return request;
  }

  after(res: Observable<Response>):Observable<any>{
    console.log('from ServerSide response',res);
    return res;
  }


}
