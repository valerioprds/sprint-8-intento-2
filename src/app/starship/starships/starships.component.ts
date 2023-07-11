import { Component, OnInit, ViewChild  } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { StarshipService } from 'src/app/_services/starships.service';
import { FichaComponent } from 'src/app/ficha/ficha.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starship.component.css'],
})


export class StarshipComponent implements OnInit {
  @ViewChild(FichaComponent) fichaComponent!: FichaComponent;


  starships: any = {};
  constructor(public starshipService: StarshipService , public modal: NgbModal) {}



  ngOnInit(): void {
    this.starshipService.getStarships().subscribe((data) => {
      this.starships = data.results;
      console.log(data);
      console.log(this.starships);
    });
  }

  open(content: any) {
    this.modal.open(content);
  }

  openBackground(content: any) {
    this.modal.open(content, { backdropClass: 'background-modal' });
  }

}
