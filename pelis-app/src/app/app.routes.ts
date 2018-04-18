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
  { path: 'home', component: HomeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'peliculas/:id',component: PeliculasComponent},
  { path: 'cine',component: CineComponent},
  { path: 'estrenos',component: EstrenosComponent},
  { path: 'listapelis',component: ValoracionComponent},
  { path: 'ficha/:id',component: FichaComponent},

  { path: 'eventos/:id',component: EventosComponent},
  { path: 'news-cine',component: NewscineComponent},
  { path: 'news-tv',component: NewstvComponent},
  { path: 'news-famosos',component: NewsfameComponent},
  { path: 'encuestas',component: EncuestasComponent},

  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes);
