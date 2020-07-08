import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlyingHeroesPipe } from './flying-heroes.pipe';
import { CalculadoraPipe } from './calculadora.pipe';
import { FetchJsonPipePipe } from './fetch-json-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FlyingHeroesPipe,
    CalculadoraPipe,
    FetchJsonPipePipe,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
