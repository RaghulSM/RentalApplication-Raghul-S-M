import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LogingaurdService {
 isLoggedIn:boolean=false;
 isAdminLoggedin:boolean=false;
 userName:any=localStorage.getItem('userName');
 userId:any=localStorage.getItem('userId');
 favourites:any;
  constructor() {
}
// User Login function
isAuthenticated():boolean {
  if(localStorage.getItem('userName') !== null) {
    this.isLoggedIn=true;
    return true;
  }
  return false
}
isAdmin():boolean {
  if(localStorage.getItem('userName') == environment.adminName) {
    this.isAdminLoggedin=true;
    return true;
  }
  return false
}
}
