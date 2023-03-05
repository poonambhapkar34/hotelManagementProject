import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminSigninComponent } from './admin-signin/admin-signin.component';
// angular material
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    AdminSigninComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatButtonModule
  ],
  exports: [ ]
})
export class AdminModule { }
