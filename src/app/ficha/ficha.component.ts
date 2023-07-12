import { Component, Input, OnInit } from '@angular/core';

import { StarshipService } from 'src/app/_services/starships.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.css'],
})
export class FichaComponent implements OnInit {
  starship: any;

  constructor(
    private route: ActivatedRoute,
    private starshipService: StarshipService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const starShipname = params.get("name")!; // Suponiendo que el parámetro en la ruta se llame 'id'

      // Llamar al servicio para obtener los detalles de la nave por su ID
      this.starshipService
        .getStarshipsDetails(starShipname)
        .subscribe((starship) => {
          this.starship = starship;
        });
    });
  }
}
