import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class LogingaurdService {
 public isLoggedIn:boolean=false;
  constructor() { }
}
