import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpringbootComponent } from './springboot/springboot.component';
import { Springboot2yrsComponent } from './springboot2yrs/springboot2yrs.component';

const routes: Routes = [

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
