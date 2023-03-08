import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormServiceService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.scss']
})
export class UserSigninComponent {
  loginData:any
  getApiRespo: any;
  @ViewChild('signin') signinForm!: NgForm
  
  
  constructor(private formServ: FormServiceService,private router : Router){ }

  async onSubmitSignin(){
    console.log(this.signinForm.value);
    this.loginData = this.signinForm.value;

     this.getApiRespo = await this.formServ.getApiCall().toPromise()
            // this.getApiRespo = data;
            // console.log(this.getApiRespo);
  
    if (this.getApiRespo) {
      let journey = this.getApiRespo.find((element: any) => {
        return this.loginData.userName == element.uname && this.loginData.password == element.password
      });

      if (journey) {
        this.router.navigateByUrl('/user/userSuccess');
      }
      else {
        alert('You have entered Wrong Username or Password')
        this.router.navigateByUrl('/user/signIn');
      }
    }
   

  }
  
  
}

