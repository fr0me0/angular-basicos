import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModules } from './contador/contador.module';
// Ejercicio: crear un modulo llamado ContadorModule, declaraciones y exportaciones

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
