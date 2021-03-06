import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Config } from '../config/env.config';

@Injectable()
export class PaymentService {

  constructor(private http: Http) {}
  getPayments(): Observable<string[]> {
    return this.http.get(`${Config.API}/bills`)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  getDetails(): Observable<string[]> {
    return this.http.get(`${Config.API}/details`)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  unsubscribe(): Observable<string[]> {
    return this.http.delete(`${Config.API}/details`)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  reSubscibe(): Observable<string[]> {
    return this.http.post(`${Config.API}/details`, {})
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
