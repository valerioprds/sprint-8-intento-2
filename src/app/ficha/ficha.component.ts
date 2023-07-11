import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, Input, OnInit , } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { StarshipService } from 'src/app/_services/starships.service';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.css'],
})
export class FichaComponent implements OnInit {
  constructor(public modal: NgbModal) {}

  @Input() starships: any
  open(content: any) {
    this.modal.open(content);
  }


  openBackground(contenido: any) {
    this.modal.open(contenido, { backdropClass: 'background-modal' });
  }

  ngOnInit(): void {}
}
