import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraficasModule } from './graficas/graficas.module';

import { MenuComponent } from './shared/menu/menu.component';
import { NgChartsModule } from 'ng2-charts';
import {HttpClientModule  } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraficasModule,
    NgChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
