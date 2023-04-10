import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-adminDigitalCamera',
  templateUrl: './adminDigitalCamera.component.html',
  styleUrls: ['./adminDigitalCamera.component.css']
})
export class AdminDigitalCameraComponent implements OnInit {

  image:any="";
  title:any="";
  details:any="";
  price:any="";
  products:any;
 constructor(private adminService:AdminService){
  this.adminService.getDigitalCameraContent().subscribe(data=>{
    this.products=data;
  })
 }
 addItem(){
  let Content={
    image:this.image,
    title:this.title,
    details:this.details,
    price:this.price
  }
  this.adminService.pushDigitalCameraContent(Content).subscribe(data=>{
    alert("Content Added")
  })
}
deletedata(id:any){
 this.adminService.deleteDigitalCameraContent(id).subscribe(data=>{
  alert("Deleted");
 })
}

  ngOnInit() {
  }

}
