import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NuevoComponenteComponent } from './nuevo-componente/nuevo-componente.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { ComponenteHomeComponent } from './componente-home/componente-home.component';
import { TercerComponenteComponent } from './tercer-componente/tercer-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevoComponenteComponent,
    SegundoComponenteComponent,
    ComponenteHomeComponent,
    TercerComponenteComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
