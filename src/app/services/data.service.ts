import { Injectable } from '@angular/core';
import { UserRegisterService } from './user-register.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
   favouritesdata:any;
   rentProduct:any;
  constructor(private favourites:UserRegisterService) {
    setInterval(()=>{
    this.favourites.getFavourites().subscribe(data=>{
      this.favouritesdata=data;
    })
  },100)
  }

}
