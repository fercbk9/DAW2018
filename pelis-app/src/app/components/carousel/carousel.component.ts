import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  peliculas:any
  nuevoarray:any
  array_carousel:any;
  filtro:string = "";
  buscar:string = "";
  buscado:boolean = false;
  //Cargamos las peliculas de la base de datos
  constructor(private _ps:PeliculasService) {
    this._ps.getPeliculasDb().subscribe(data => {
      console.log(data);
      this.peliculas = data;
      this.array_carousel = data;
    });/*
    this._ps.getPeliculas().subscribe(data => {
      console.log(data);

    });*/
   }
   buscarPelicula()
   {
    /* if (this.buscar.length!=0) {
         this._ps.buscaPelicula(this.buscar).subscribe(data => {
          if (data) {
              this.buscado = true;
              this.peliculas = data;
          }
         });
     }*/
     this._ps.getPeliculasDb().subscribe(data => {
       console.log(data);
       this.peliculas = data;
       this.array_carousel = data;
     });
     setTimeout(() => {
       this.nuevoarray = this.peliculas;
       this.peliculas = [];
       for (let variable in this.nuevoarray) {
          if ( this.nuevoarray[variable].movie_title.toLowerCase().includes(this.buscar)) {
              this.peliculas.push(this.nuevoarray[variable]);
            console.log(this.peliculas);
          }
       }
     },400);

   }
  ngOnInit() {

  }

    ordenar(filtro:string){
      this.peliculas = Object.values(this.peliculas);
    switch(filtro){
      case 'fecha':
			this.peliculas.sort((a,b) => {
				return(a.year - b.year);
			});
			

      break;
      case 'valoracion':
		this.peliculas.sort((a,b) => {
			return (b.rating - a.rating);
		});

      break;
      case 'titulo':
		this.peliculas.sort((a, b) => {
			if ( a.movie_title > b.movie_title )
				return 1;
			if ( a.movie_title < b.movie_title )
				return -1;
			return 0;
		});
		
      break;
    }
  }

}
