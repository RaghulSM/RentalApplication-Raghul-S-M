import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { LogingaurdService } from 'src/app/services/logingaurd.service';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css']
})
export class BikeComponent {
  products:any;
constructor(private bikeContents:AdminService){
 this.bikeContents.getBikeContent().subscribe(data=>{
  this.products=data;
 })
}

}
