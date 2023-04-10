import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { LogingaurdService } from 'src/app/services/logingaurd.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  homeproducts:any="";
  constructor(private homeContent:AdminService, private gaurdservice:LogingaurdService){
    this.homeContent.getHomeContent().subscribe(data=>{
      this.homeproducts=data;
    })
  }
  h:boolean=this.gaurdservice.isLoggedIn;
}
