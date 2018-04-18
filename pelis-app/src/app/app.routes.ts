import { RouterModule, Routes } from '@angular/router';
import {PeliculasComponent} from './components/peliculas/peliculas.component';
import {CineComponent} from './components/peliculas/cine.component';
import {EstrenosComponent} from './components/peliculas/estrenos.component';
import {ValoracionComponent} from './components/peliculas/valoracion.component';


import {EventosComponent} from './components/eventos/eventos.component';
import {NewscineComponent} from './components/eventos/newscine.component';
import {NewstvComponent} from './components/eventos/newstv.component';
import {NewsfameComponent} from './components/eventos/newsfame.component';
import {EncuestasComponent} from './components/eventos/encuestas.component';

import {ContactoComponent} from './components/contacto/contacto.component';
import {HomeComponent} from './components/home/home.component';
import {FichaComponent} from './components/ficha/ficha.component';
import {peliculas_routes} from './components/peliculas/peliculas.routes';
const app_routes: Routes = [
  { path: 'dist/home', component: HomeComponent },
  { path: 'dist/contacto', component: ContactoComponent },
  { path: 'dist/peliculas/:id',component: PeliculasComponent},
  { path: 'dist/cine',component: CineComponent},
  { path: 'dist/estrenos',component: EstrenosComponent},
  { path: 'dist/listapelis',component: ValoracionComponent},
  { path: 'dist/ficha/:id',component: FichaComponent},

  { path: 'dist/eventos/:id',component: EventosComponent},
  { path: 'dist/news-cine',component: NewscineComponent},
  { path: 'dist/news-tv',component: NewstvComponent},
  { path: 'dist/news-famosos',component: NewsfameComponent},
  { path: 'dist/encuestas',component: EncuestasComponent},

  { path: '**', pathMatch: 'full', redirectTo: 'dist/home' }
];

export const app_routing = RouterModule.forRoot(app_routes);
