import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pelicula'
})
export class PeliculaPipe implements PipeTransform {
private rutaImg:string = "http://image.tmdb.org/t/p/w500";
  transform(pelicula: any, poster:boolean = false): any {
    if (poster && pelicula.poster_path) {
        return this.rutaImg+pelicula.poster_path;
    }

    if (pelicula.backdrop_path) {
        return this.rutaImg+pelicula.backdrop_path;
    }else if(pelicula.poster_path){
        return this.rutaImg+pelicula.poster_path;
    }


    return "assets/No_image.jpg";
  }

}
