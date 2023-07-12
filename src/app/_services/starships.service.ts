import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StarshipService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'https://swapi.dev/api/starships';

  getStarshipsDetails(name: string): Observable<any> {
    const path = `https://swapi.dev/api/starships/${name}`;
    console.log(name)

    return this.http.get<any>(path);
  }


  /*
  getTask(id: string) {
    const path = `${this.api}/todos/${id}`
    return this.http.get<Task>(path)
  } */

  getStarships(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
