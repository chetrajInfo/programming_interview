import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpringbootComponent } from './springboot/springboot.component';
import { Springboot2yrsComponent } from './springboot2yrs/springboot2yrs.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MainpageComponent } from './mainpage/mainpage.component';

const routes: Routes = [
    // Redirect default route to 'home' route
  {path: '', redirectTo: 'homepage', pathMatch: 'full'},

  {path:'homepage', component:HomepageComponent},

  {path:'springboot', component:SpringbootComponent},
  {
    path: 'springboot',
    component:Springboot2yrsComponent,
    children: [
      {
        path: '2yrs',
        component: Springboot2yrsComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
