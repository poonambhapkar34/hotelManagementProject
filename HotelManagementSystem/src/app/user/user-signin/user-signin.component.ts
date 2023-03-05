import { Component } from '@angular/core';
import { FormServiceService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.scss']
})
export class UserSigninComponent {
  userSign = "/user/signup";

  constructor(private formServ: FormServiceService){ }
  
  onUserSignupClicked(){
    this.formServ.userPath(this.userSign);
  }
}

