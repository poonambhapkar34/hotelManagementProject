import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormServiceService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit{
  path = "user";
  constructor(private formserv: FormServiceService, private formBuilder: FormBuilder, private router: Router){ }
  // routing logic
  signupClicked(){
    this.formserv.userPath(this.path);
  }

  ngOnInit(){
    this.settingFormData();
  }

  signupFormData!: FormGroup;
  settingFormData(){
    this.signupFormData = this.formBuilder.group({
      firstname: [""],
      lastname: [""],
      mobile: [""],
      mail: [""],
      gender: [""],
      hobbies: [""],
    })
    console.log(this.signupFormData);
    
  }

  onSubmitDetails(){

  }

}
