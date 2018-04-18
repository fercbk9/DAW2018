import { Injectable } from '@angular/core';
import { Http,Jsonp } from '@angular/http';

import  'rxjs/Rx';
@Injectable()
export class PeliculasService {
  private apiKey:string = "04cb6e63a1049f06c5a3ef235f6b4637";
  private peliculas:any;
private rutaApi:string = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04cb6e63a1049f06c5a3ef235f6b4637&language=es&callback=JSONP_CALLBACK";
peliculasUrl:string = "https://pelis-app.firebaseio.com/peli.json";
pelisUrl:string = "https://heroesapp-79f55.firebaseio.com/peli/";
  constructor(private _http:Http, private _json:Jsonp) { }
  getPeliculas()
  {
    return this._json.get(this.rutaApi).map(data => {
      this.peliculas =  data.json().results;
  for (let pelicula of this.peliculas) {
        this.nuevoHeroe(pelicula).subscribe(res => res);
    }
      return data.json().results;
    });
  }
  getPeliculasDb()
  {
      let headers = new Headers({
        'Content-Type': 'application/json'
      });
      return this._http.get(this.peliculasUrl,{headers}).map(res => {
      return res.json();
      });
  }
  nuevoHeroe(pelicula:any){
  let body = JSON.stringify(pelicula);
  let headers = new Headers({
    'Content-Type': 'application/json'
  });
  return this._http.post(this.peliculasUrl,body).map(res => {
    console.log(res.json());
    return res.json();
  });
}
}
