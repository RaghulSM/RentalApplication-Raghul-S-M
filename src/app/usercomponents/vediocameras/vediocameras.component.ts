import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-vediocameras',
  templateUrl: './vediocameras.component.html',
  styleUrls: ['./vediocameras.component.css']
})
export class VediocamerasComponent implements OnInit {

  products:any;
  constructor(private admincontents:AdminService){
  this.admincontents.getVedioCameraContent().subscribe(data=>{
    this.products=data;
  })
  }

  ngOnInit() {
  }

}
