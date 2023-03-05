import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerSigninComponent } from './owner-signin/owner-signin.component';
// angular material
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    OwnerSigninComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    MatButtonModule
  ]
})
export class OwnerModule { }
