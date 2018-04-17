import { RouterModule, Routes } from '@angular/router';
import {CineComponent} from './cine.component';
import {EstrenosComponent} from './estrenos.component';
import {ValoracionComponent} from './valoracion.component';

export const peliculas_routes: Routes = [
  { path: 'cine', component: CineComponent },
  { path: 'estrenos', component:EstrenosComponent  },
  { path: 'listapelis', component:ValoracionComponent  }
];
