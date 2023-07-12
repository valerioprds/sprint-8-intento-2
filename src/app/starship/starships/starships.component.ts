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

  starships: any = {};
  constructor(
    private starshipService: StarshipService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.starshipService.getStarships().subscribe((data) => {
      this.starships = data.results;
      console.log(data);
      console.log(this.starships);
    });
  }
}




