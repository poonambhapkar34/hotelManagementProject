import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retryWhen } from 'rxjs';
// import { UserType } from 'src/interface';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  selectedModule!: string;
  userUrl!: string;
  userUrl2!: string;
  JourneyName! :string;
  urlCreation(urlEndPoint: string){
    this.JourneyName = urlEndPoint;
    //this.selectedModule = urlEndPoint;
    this.userUrl = `http://localhost:3000/${urlEndPoint}`; //http://localhost:3000/owners
 //   this.userUrl2 = "http://localhost:3000/" + urlEndPoint;
    console.log("url",this.userUrl);
    
  }

  // adminUrl = `http://localhost:3000/${this.selectedModule}`;

  constructor(private apiRequest: HttpClient) { }
  
  // adding new user/admin/owner 
  addUsers(user:any){

    return this.apiRequest.post(this.userUrl, user);
  }

  // Checking authentication of user/admin/owner
  getApiCall(){
    console.log(this.userUrl);
    return this.apiRequest.get(this.userUrl);
  }




}
