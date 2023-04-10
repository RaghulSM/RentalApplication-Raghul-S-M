import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-analogwatches',
  templateUrl: './analogwatches.component.html',
  styleUrls: ['./analogwatches.component.css']
})
export class AnalogwatchesComponent implements OnInit {

  products:any;
  constructor(private admincontents:AdminService){
  this.admincontents.getAnalogWatchContent().subscribe(data=>{
    this.products=data;
  })
  }

  ngOnInit() {
  }

}
