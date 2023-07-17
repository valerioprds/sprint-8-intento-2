import { Component, OnInit, ViewChild } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { StarshipService } from 'src/app/_services/starships.service';
import { FichaComponent } from 'src/app/ficha/ficha.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starship.component.css'],
})
export class StarshipComponent implements OnInit {
  @ViewChild(FichaComponent) fichaComponent!: FichaComponent;

  starships: any[] = [];
  page!: number;
  constructor(
    private starshipService: StarshipService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.starshipService.getStarships().subscribe((data) => {
      console.log(data);
      this.starships = data.results.map((object: any) => {
        object.id = object.url!.match(/[1-9]?\d|100/)![0];
        return object;
      });
      console.log(this.starships);
    });
    // this.getMoreShips()
  }

  getMoreShips() {
    console.log('hello from  getMoreShips');
    this.starshipService.getMoreStarships().subscribe(
      (response) => {
        this.starships = this.starships.concat(response.results);
      },
      (error) => {
        console.error('Error when loading the ships:', error);
      }
    );
  }

 
}
