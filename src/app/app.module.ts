import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { CorejavaComponent } from './corejava/corejava.component';
import { SpringbootComponent } from './springboot/springboot.component';
import { Springboot2yrsComponent } from './springboot2yrs/springboot2yrs.component';
import { FormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { Springboot3yrsComponent } from './springboot3yrs/springboot3yrs.component';
import { Springboot4yrsComponent } from './springboot4yrs/springboot4yrs.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { Corejava2yrsComponent } from './corejava2yrs/corejava2yrs.component';
import { TechnonewsComponent } from './technonews/technonews.component';
import { ArtofspeakingComponent } from './artofspeaking/artofspeaking.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    CorejavaComponent,
    SpringbootComponent,
    Springboot2yrsComponent,
    HomepageComponent,
    FooterComponent,
    Springboot3yrsComponent,
    Springboot4yrsComponent,
    Corejava2yrsComponent,
    TechnonewsComponent,
    ArtofspeakingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
