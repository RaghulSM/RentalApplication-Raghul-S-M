import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-digitalwatches',
  templateUrl: './digitalwatches.component.html',
  styleUrls: ['./digitalwatches.component.css']
})
export class DigitalwatchesComponent implements OnInit {

  products:any;
  constructor(private admincontents:AdminService){
  this.admincontents.getDigitalWatchContent().subscribe(data=>{
    this.products=data;
  })
  }

  ngOnInit() {
  }

}
