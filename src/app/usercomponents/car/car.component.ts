import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent{
   products:any;
constructor(private admincontents:AdminService){
this.admincontents.getCarContent().subscribe(data=>{
  this.products=data;
})
}
}
