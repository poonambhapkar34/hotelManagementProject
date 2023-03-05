import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  constructor(private router: Router) { }

  routerPath!: string;

  userPath(path: string){
    this.router.navigateByUrl(path);
  }
  adminPath(){
    this.router.navigateByUrl("/admin");
  }
  ownerPath(){
    this.router.navigateByUrl("/owner");
  }
}
