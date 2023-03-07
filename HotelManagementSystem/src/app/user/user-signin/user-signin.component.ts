import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormServiceService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.scss']
})
export class UserSigninComponent {

  @ViewChild('signin') signinForm!: NgForm
  
  constructor(private formServ: FormServiceService){ }

  onSubmitSignin(){
    console.log(this.signinForm);
    this.formServ.varifySignin().subscribe((data) => {
      console.log(data);
    })
    
  }
  
  
}

