import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PuntoAComponent } from './components/punto-a/punto-a.component';
import { PuntoBComponent } from './components/punto-b/punto-b.component';
import { PuntoCComponent } from './components/punto-c/punto-c.component';
import { Item1Component } from './components/puntoD/item1/item1.component';
import { Item2Component } from './components/puntoD/item2/item2.component';
import { Item3Component } from './components/puntoD/item3/item3.component';
import { Item4Component } from './components/puntoD/item4/item4.component';

const routes: Routes = [
  {path: 'traductor', component: PuntoAComponent},
  {path: 'peliculas', component: PuntoBComponent},
  {path: 'cotizacion', component: PuntoCComponent},
  {path: 'qr', component: Item1Component},
  {path: 'item2', component: Item2Component},
  {path: 'musica', component: Item3Component},
  {path: 'clima', component: Item4Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
