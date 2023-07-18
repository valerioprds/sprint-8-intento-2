import { Component, OnInit, ViewChild } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { StarshipService } from 'src/app/_services/starships.service';
//import { FichaComponent } from 'src/app/ficha/ficha.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starship.component.css'],
})
export class StarshipComponent implements OnInit {
  starshipsNew : any [] = []
  starships: any[] = [];
  page!: number;
  constructor(
    private starshipService: StarshipService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('hello from ngOnInit');
    this.starshipService.getStarships().subscribe(
      (data) => {
        console.log(data);
        this.processStarships(data.results);
      },
      (error) => {
        console.error('Error when loading the ships:', error);
      }
    );
  }

  getMoreShips() {
    console.log('hello from getMoreShips');
    this.starshipService.getMoreStarships().subscribe(
      (resp) => {
        console.log(resp);
        this.processStarships(resp.results);
      },
      (error) => {
        console.error('Error when loading more ships:', error);
      }
    );
  }

  private processStarships(results: any[]): void {
    const processedResults = results.map((object: any) => {
      object.id = object.url!.match(/[1-9]?\d|100/)![0];
      return object;
    });
    this.starships = this.starships.concat(processedResults);
    console.log(this.starships);
  }
}
