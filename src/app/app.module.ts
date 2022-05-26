import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PuntoAComponent } from './components/punto-a/punto-a.component';
import { PuntoBComponent } from './components/punto-b/punto-b.component';
import { PuntoCComponent } from './components/punto-c/punto-c.component';
import { Item1Component } from './components/puntoD/item1/item1.component';
import { Item2Component } from './components/puntoD/item2/item2.component';
import { Item3Component } from './components/puntoD/item3/item3.component';
import { Item4Component } from './components/puntoD/item4/item4.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PuntoAComponent,
    PuntoBComponent,
    PuntoCComponent,
    Item1Component,
    Item2Component,
    Item3Component,
    Item4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
