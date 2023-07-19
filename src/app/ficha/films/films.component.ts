import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  @Input() filmsAPI: any[] = [];

  ngOnInit(): void {
    this.filmsAPI;
  }
}
