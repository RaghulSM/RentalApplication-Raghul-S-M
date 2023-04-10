import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-traveller',
  templateUrl: './traveller.component.html',
  styleUrls: ['./traveller.component.css']
})
export class TravellerComponent implements OnInit {

  products:any;
  constructor(private bikeContents:AdminService){
   this.bikeContents.getTravellerContent().subscribe(data=>{
    this.products=data;
   })
  }


  ngOnInit() {
  }

}
