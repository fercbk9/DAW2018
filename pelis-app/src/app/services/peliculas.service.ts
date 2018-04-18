import { Injectable } from '@angular/core';
import { Http,Jsonp } from '@angular/http';

import  'rxjs/Rx';
@Injectable()
export class PeliculasService {
  private apiKey:string = "04cb6e63a1049f06c5a3ef235f6b4637";
  private peliculas:any;
private rutaApi:string = "assets/pelis.json";
peliculasUrl:string = "https://pelis-app.firebaseio.com/peli.json";
pelisUrl:string = "https://pelis-app.firebaseio.com/peli/";
  constructor(private _http:Http, private _json:Jsonp) {


  }
  //Cargamos las peliculas
  getPeliculas()
  {
    return this._http.get(this.rutaApi).map(data => {
      this.peliculas =  data.json();
  for (let pelicula of this.peliculas) {

        this.nuevoHeroe(pelicula).subscribe(res => res);
    }
      return data.json();
    });
  }

  cargoJson()
  {
    return this._http.get('assets/pelis.json').map( res => {
      console.log(res.json());
      return res.json();

    });
  }
  //sacamos las peliculas de la db
  getPeliculasDb()
  {
      /*let headers = new Headers({
        'Content-Type': 'application/json'
      });*/
      return this._http.get(this.peliculasUrl).map(res => {
      return res.json();
      });
  }
  nuevoHeroe(pelicula:any){
  let body = JSON.stringify(pelicula);
  /*let headers = new Headers({
    'Content-Type': 'application/json'
  });*/
  return this._http.post(this.peliculasUrl,body).map(res => {
    console.log(res.json());
    return res.json();
  });
}
buscaPelicula(pelicula:string)
{
  let url = "https://api.themoviedb.org/3/search/movie?query="+pelicula+"&sort_by=popularity.desc&api_key=04cb6e63a1049f06c5a3ef235f6b4637&language=es&callback=JSONP_CALLBACK";

  return this._http.get(url).map(data => {
    this.peliculas = data.json().results;
    return data.json().results;
  });
}
//Mostramos la pelicula que introducimos por parametro
getMovie(key$:string){
  let url = this.pelisUrl+key$+".json";
  /*let headers = new Headers({
    'Content-Type': 'application/json'
  });*/
  return this._http.get(url).map(res => {

    return res.json();
  });
}
actualizar(pelicula:any, key$:string){
  let body = JSON.stringify(pelicula);
  /*let headers = new Headers({
    'Content-Type': 'application/json'
  });*/
  return this._http.put(this.pelisUrl+key$+".json",body).map(res => {
    console.log(res.json());
    return res.json();
  });
}
borrar(key$:string){
  let url = this.pelisUrl+key$+".json";

  return this._http.delete(url).map(res => {
    return res.json();
  });
}
}
