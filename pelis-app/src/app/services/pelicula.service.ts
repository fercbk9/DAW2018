import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Heroe} from '../interfaces/heroe.interface';
import 'rxjs/Rx';
@Injectable()
export class HeroesService {
heroesUrl:string = "https://heroesapp-79f55.firebaseio.com/heroes.json";
heroeUrl:string = "https://heroesapp-79f55.firebaseio.com/heroes/";
  constructor(private _http:Http) { }
  nuevoHeroe(heroe:Heroe){
    let body = JSON.stringify(heroe);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this._http.post(this.heroesUrl,body,{headers}).map(res => {
      console.log(res.json());
      return res.json();
    });
  }
  actualizarHeroe(heroe:Heroe, key$:string){
    let body = JSON.stringify(heroe);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this._http.put(this.heroeUrl+key$+".json",body,{headers}).map(res => {
      console.log(res.json());
      return res.json();
    });
  }
  getHeroe(key$:string){
    let url = this.heroeUrl+key$+".json";
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this._http.get(url,{headers}).map(res => {
      return res.json();
    });
  }
  getHeroes(){

    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this._http.get(this.heroesUrl,{headers}).map(res => {
      return res.json();
    });
  }
  borrarHeroe(key$:string){
    let url = this.heroeUrl+key$+".json";
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this._http.delete(url,{headers}).map(res => {
      return res.json();
    });
  }
}
