import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, RouterModule, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from 'express';
import { Observable } from 'rxjs';
import { LogingaurdService } from '../services/logingaurd.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private logingaurd:LogingaurdService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
      if(this.logingaurd.isAuthenticated()||this.logingaurd.isAdminLoggedin){
        return true;
      }
      else{
        alert('Login to Proceed');
        return false;
      }
  }

}
