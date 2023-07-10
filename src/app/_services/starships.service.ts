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


/*   getStarships(){
    this.http.get('https://reqres.in/api/users?page=2').subscribe(data => {
      console.log(data);
    });
    console.log("Esto se ejecutará antes que el console log de arriba");
  } */

  getStarships(): Observable<any>{
    return this.http.get('https://swapi.dev/api/starships');
  }
}
