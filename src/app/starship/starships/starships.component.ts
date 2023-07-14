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
  // @ViewChild(FichaComponent) fichaComponent!: FichaComponent;

  //! parece que no sirve el viewchild

  starships: any = {};
  constructor(
    private starshipService: StarshipService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.starshipService.getStarships().subscribe((data) => {
      console.log(data);
      this.starships = data.results.map((object: any, index: any) => {
        return { ...object, id: index + 1 };
      });

      console.log(this.starships);
    });
  }



}
