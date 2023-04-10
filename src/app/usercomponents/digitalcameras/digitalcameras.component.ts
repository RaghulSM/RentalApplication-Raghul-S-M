import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-digitalcameras',
  templateUrl: './digitalcameras.component.html',
  styleUrls: ['./digitalcameras.component.css']
})
export class DigitalcamerasComponent implements OnInit {

  products:any;
  constructor(private admincontents:AdminService){
  this.admincontents.getDigitalCameraContent().subscribe(data=>{
    this.products=data;
  })
  }
  ngOnInit() {
  }

}
