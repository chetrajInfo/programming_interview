import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { CorejavaComponent } from './corejava/corejava.component';
import { SpringbootComponent } from './springboot/springboot.component';
import { Springboot2yrsComponent } from './springboot2yrs/springboot2yrs.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    CorejavaComponent,
    SpringbootComponent,
    Springboot2yrsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
