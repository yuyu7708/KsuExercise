import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {throwError} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable()

export class apiService {
  constructor(private http: HttpClient) { }
  baseUrl='http://127.0.0.1/myapp/public/'
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}`);
      console.log(error.error)
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
  signup_post(body){
    return this.http.post(this.baseUrl+'login/signup',body).pipe(catchError(this.handleError))
  }
  signin_post(body){
    return this.http.post(this.baseUrl+'login/signin',body).pipe(catchError(this.handleError))
  }
}

