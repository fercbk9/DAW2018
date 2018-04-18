import { Component } from '@angular/core';
import {Http} from '@angular/http';
import { PeliculasService } from './services/peliculas.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private _http:Http, private ps:PeliculasService){
      /*this.ps.cargoJson().subscribe(res => {
        console.log(res);
      });*/
  }
}
