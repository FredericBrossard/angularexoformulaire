import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Ajout de cet import pour gestion de formulaire
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  // Ajout du formsmodule
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
