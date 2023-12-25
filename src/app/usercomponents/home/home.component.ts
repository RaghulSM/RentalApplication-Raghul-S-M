import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { LogingaurdService } from 'src/app/services/logingaurd.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  homeProducts:any;
  name:any=this.gaurdService.userName
  id:any=this.gaurdService.userId

  constructor(private homeContent:AdminService, private gaurdService:LogingaurdService){
    this.homeContent.getHomeContent().subscribe(data=>{
      this.homeProducts=data;
    })
  }
}
