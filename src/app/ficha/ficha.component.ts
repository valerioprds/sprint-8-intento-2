import { Component, Input, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { StarshipService } from 'src/app/_services/starships.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.css'],
})
export class FichaComponent implements OnInit {


 //@Input() starships: any;
  /* constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => console.log(params));
  } */
  ngOnInit(): void {}
}
