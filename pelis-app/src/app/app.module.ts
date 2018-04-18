import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {app_routing} from './app.routes';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CineComponent } from './components/peliculas/cine.component';
import { EstrenosComponent } from './components/peliculas/estrenos.component';
import { ValoracionComponent } from './components/peliculas/valoracion.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { HomeComponent } from './components/home/home.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { NewscineComponent } from './components/eventos/newscine.component';
import { NewstvComponent } from './components/eventos/newstv.component';
import { NewsfameComponent } from './components/eventos/newsfame.component';
import { EncuestasComponent } from './components/eventos/encuestas.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FichaComponent } from './components/ficha/ficha.component';
import { PeliculaPipe } from './pipes/pelicula.pipe';
import { PeliculasService } from './services/peliculas.service';
import { HttpModule, JsonpModule} from '@angular/http';
import { KeysPipe } from './pipes/keys.pipe';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    CineComponent,
    EstrenosComponent,
    ValoracionComponent,
    PeliculasComponent,
    HomeComponent,
    EventosComponent,
    NewscineComponent,
    NewstvComponent,
    NewsfameComponent,
    EncuestasComponent,
    ContactoComponent,
    FichaComponent,
    PeliculaPipe,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpModule,
    JsonpModule
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
