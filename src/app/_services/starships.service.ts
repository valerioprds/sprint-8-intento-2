import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class StarshipService {
  constructor(private http: HttpClient) {
  }



  getStarships(): Observable<any>{
    return this.http.get('https://swapi.dev/api/starships');
  }
}
