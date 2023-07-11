import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { StarshipService } from 'src/app/_services/starships.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starship.component.css'],
})
export class StarshipComponent implements OnInit {
  starships: any;
  constructor(public starshipService: StarshipService) {}
  ngOnInit(): void {
    this.starshipService.getStarships().subscribe((data) => {
      this.starships = data;
      console.log(data);
      console.log(this.starships);
    });
  }
}
