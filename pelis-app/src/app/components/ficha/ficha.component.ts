import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import {Router,ActivatedRoute} from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.css']
})
export class FichaComponent implements OnInit {
  pelicula:any;
  regresar:string = "";
  id:string = "";
  eliminado:boolean = false;

  constructor(private ps:PeliculasService, private ac:ActivatedRoute, private router:Router) {
    this.ac.params.subscribe(params => {
      console.log(params['id']);
    if (params['id']) {
      this.id = params['id'];
      this.ps.getMovie(this.id).subscribe(data => {
        this.pelicula = data;
        console.log(this.pelicula);
      },error => { console.log(error) });
    }
  });
   }
   actualizar()
   {
     this.ps.actualizar(this.pelicula,this.id).subscribe(data => {
        console.log(data)
      },error => { console.log(error) });
   }
   borrar()
   {
     this.ps.borrar(this.id).subscribe(data => {
       console.log(data);
       this.eliminado = true;
     },error => { console.log(error) });
     setTimeout(() => {
       this.router.navigate(['/listapelis']);

     },1500);

   }
  ngOnInit() {
  }

}
