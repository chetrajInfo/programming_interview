import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpringbootComponent } from './springboot/springboot.component';
import { Springboot2yrsComponent } from './springboot2yrs/springboot2yrs.component';
import { HomepageComponent } from './homepage/homepage.component';

import { Springboot3yrsComponent } from './springboot3yrs/springboot3yrs.component';
import { Springboot4yrsComponent } from './springboot4yrs/springboot4yrs.component';

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
  },
  {
    path: 'springboot',
    component:Springboot3yrsComponent,
    children: [
      {
        path: '3yrs',
        component:Springboot3yrsComponent
      }
    ]
  },
  {
    path: 'springboot',
    component:Springboot4yrsComponent,
    children: [
      {
        path: '4yrs',
        component:Springboot4yrsComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
