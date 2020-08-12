import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app.error';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError,map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private url:string,private http: HttpClient) { }

  getAll() {
    return this.http.get<any>(this.url).pipe(map(res=>res),catchError(this.handleError));
  }

  create(resourse) {
    //return throwError(new AppError());
    return this.http.post(this.url, JSON.stringify(resourse)).pipe(map(res=>res),catchError(this.handleError));
  }
  update(resourse) {
    return this.http.patch(this.url + '/' + resourse.id, JSON.stringify({ isRead: true })).pipe(map(res=>res),catchError(this.handleError));
  }

  delete(id) {
       //return throwError(new AppError());
    return this.http.delete(this.url + '/' + id).pipe(map(res=>res),catchError(this.handleError));

  }

  private handleError(error: Response) {

    if (error.status === 400) {
      return throwError(new BadInput(error.json()))
    }

    if (error.status === 404) {
      return throwError(new NotFoundError())
    }
    return throwError(new AppError(error))
  }

}
