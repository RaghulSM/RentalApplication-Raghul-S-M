import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-DSLRcameras',
  templateUrl: './DSLRcameras.component.html',
  styleUrls: ['./DSLRcameras.component.css']
})
export class DSLRcamerasComponent implements OnInit {

  products:any;
  constructor(private admincontents:AdminService){
  this.admincontents.getDSLRCameraContent().subscribe(data=>{
    this.products=data;
  })
  }

  ngOnInit() {
  }

}
