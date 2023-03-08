import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { UsersuccessComponent } from './usersuccess/usersuccess.component';

const routes: Routes = [
  { path: "", component: UserSigninComponent},
  { path : "userSuccess", component : UsersuccessComponent},
  { path : "signIn" , component : UserSigninComponent},
  { path: "signup", loadChildren: () => import('../signup/signup.module').then((m => m.SignupModule))},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
