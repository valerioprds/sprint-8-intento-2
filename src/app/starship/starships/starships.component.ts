import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starship.component.css'],
})
export class StarshipComponent {
  starships$: Observable<any>;

  constructor(private http: HttpClient) {
    this.starships$ = this.http.get('https://swapi.dev/api/starships/');
  }
}
