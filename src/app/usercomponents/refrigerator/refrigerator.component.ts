import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-refrigerator',
  templateUrl: './refrigerator.component.html',
  styleUrls: ['./refrigerator.component.css']
})
export class RefrigeratorComponent implements OnInit {

  products:any;
  constructor(private admincontents:AdminService){
  this.admincontents.getRefrigeratorContent().subscribe(data=>{
    this.products=data;
  })
  }

  ngOnInit() {
  }

}
