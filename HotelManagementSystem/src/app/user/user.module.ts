import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserSigninComponent } from './user-signin/user-signin.component';
// angular material
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { UsersuccessComponent } from './usersuccess/usersuccess.component';



@NgModule({
  declarations: [
    UserSigninComponent,
    UsersuccessComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatButtonModule,
    FormsModule
  ],
  exports: [ ]
})
export class UserModule { }
