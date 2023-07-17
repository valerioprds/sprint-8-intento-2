import { Component, Input, OnInit } from '@angular/core';

import { StarshipService } from 'src/app/_services/starships.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';




@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.css'],
})
export class FichaComponent implements OnInit {
  starship: any;
  imagesURL: string = '';

  errorImage: string = 'assets/error-icon-28.png';

  constructor(
    private route: ActivatedRoute,
    private starshipService: StarshipService,
    private http: HttpClient,
    private sanitizer: DomSanitizer

  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const starshipId = params.get('id')!;

      // Call the service to get the starship details by its ID
      this.starshipService
        .getStarshipsDetails(starshipId)
        .subscribe((starship) => {
          this.starship = starship;
          this.imagesURL = this.starshipService.getImagesShips(starshipId);


          console.log(this.imagesURL)
        });
    });
  }

  sanitizaImage(imagesURL: string): SafeUrl {
  return  this.sanitizer.bypassSecurityTrustUrl(imagesURL)

  }


  getErrorImage() {
    this.imagesURL = this.errorImage
  }


  /*   ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const starshipId = params.get('id')!;

      // Llamar al servicio para obtener los detalles de la nave por su ID
      this.starshipService
        .getStarshipsDetails(starshipId)
        .subscribe((starship) => {
          this.starship = starship;
          this.imagesURL = this.starshipService.getImagesShips(starshipId);
        });
    });


  } */

  /*  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const starshipId = params.get('id')!;

      // Llamar al servicio para obtener los detalles de la nave por su ID
      this.starshipService
        .getStarshipsDetails(starshipId)
        .subscribe((starship) => {
          this.starship = starship;

          // Realizar solicitud HTTP para obtener la URL de la imagen
          this.http
            .get<any>('https://starwars-visualguide.com/assets/img/starships/')
            .subscribe((data) => {
              this.imageUrl = data.image_url;
              console.log(data.image_url)
            });
        });
    });
  } */
}
