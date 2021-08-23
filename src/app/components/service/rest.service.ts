import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Hotel {
  oid: string;
  name: string;
  facilityCode: string;
  address: string;
  hotelRooms: number;
  hotelNumber: number;
}

const endPoint = 'http://localhost:9000/hotel/';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occured', error.error.message);
    } else {
      console.error('Backend returned code ${error.status},' +
        'body was : ${error.error}');
    }
    return throwError('something happend please try again later');
  }

  getHotels(): Observable<any> {
    return this.http.get<Hotel>(endPoint + 'all').pipe(
      catchError(this.handleError)
    );
  }

  getHotelDetails(id: string): Observable<any> {
    return this.http.get<Hotel>(endPoint + id).pipe(
      catchError(this.handleError)
    );
  }

  addHotel(hotel: any): Observable<any> {
    return this.http.post(endPoint + 'add', hotel).pipe(
      catchError(this.handleError)
    );
  }

  deleteHotel(id: string): Observable<any> {
    return this.http.get(endPoint + 'delete/' + id).pipe(
      catchError(this.handleError)
    );
  }
}




