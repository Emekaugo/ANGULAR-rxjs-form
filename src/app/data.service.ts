import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";

import {  throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "http://localhost:3000/products";

  public first: string = "";
  public prev: string = "";
  public next: string = "";
  public last: string = "";

  constructor(private httpClient: HttpClient) { }



  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  // public sendGetRequest(){
  //   return this.httpClient.get(this.REST_API_SERVER).pipe(catchError(this.handleError));
  // }

  // public sendGetRequest(){
  //   return this.httpClient.get(this.REST_API_SERVER).pipe(retry(3), catchError(this.handleError));
  // }

  public sendGetRequest(){
    // Add safe, URL encoded_page parameter
    const options = { params: new HttpParams({fromString: "_page=1&_limit=20"}) };
    return this.httpClient.get(this.REST_API_SERVER, options).pipe(retry(3), catchError(this.handleError));
  }

  // public sendGetRequest(){
  //   // Add safe, URL encoded _page and _limit parameters

  //   return this.httpClient.get(this.REST_API_SERVER, {  params: new HttpParams({fromString: "_page=1&_limit=20"}), observe: "response"}).pipe(retry(3), catchError(this.handleError), tap(res => {
  //     console.log(res.headers.get('Link'));
  //     this.parseLinkHeader(res.headers.get('Link'));
  //   }));
  // }

}
