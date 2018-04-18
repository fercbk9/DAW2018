import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  peliculas:any
  constructor(private _ps:PeliculasService) {
    this._ps.getPeliculasDb().subscribe(data => {
      console.log(data);
      this.peliculas = data;
    });
   }

  ngOnInit() {
    /*this._ps.getPeliculas().subscribe(data => {
      console.log(data);

    });*/
  }

}
