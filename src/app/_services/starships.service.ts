import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class StarshipService {
  private nextPage = 2
  private imageURL = ' https://starwars-visualguide.com/assets/img/starships/';

  private apiUrl = 'https://swapi.dev/api/starships';
  constructor(private http: HttpClient) {}


  getStarshipsDetails(id: string): Observable<any> {
    const path = `https://swapi.dev/api/starships/${id}/`;
    console.log(id);

    return this.http.get<any>(path);
  }
  /* crear otra funcion para display imagern  */

  getImagesShips(starshipId: string) {
    return `${this.imageURL}${starshipId}.jpg`;
  }

  getStarships(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getMoreStarships(): Observable<any> {
    const url = `${this.apiUrl}/?page=${this.nextPage}`;
    console.log(url)
    this.nextPage++;
    return this.http.get<any>(url);
  }
}
