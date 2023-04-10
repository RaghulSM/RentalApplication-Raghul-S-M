import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-bike',
  templateUrl: './admin-bike.component.html',
  styleUrls: ['./admin-bike.component.css']
})
export class AdminBikeComponent implements  OnInit{
  image:any="";
  title:any="";
  details:any="";
  price:any="";
  products:any;
 constructor(private adminService:AdminService){
  this.adminService.getBikeContent().subscribe(data=>{
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
  this.adminService.pushBikeContent(Content).subscribe(data=>{
    alert("Content Added")
  })
}
deletedata(id:any){
 this.adminService.deleteBikeContent(id).subscribe(data=>{
  alert("Deleted");
 })
}
ngOnInit(){

}
}

