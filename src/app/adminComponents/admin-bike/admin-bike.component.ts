import { HttpClient } from '@angular/common/http';
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
  availabilityData:any;
  products:any;

 constructor(private adminService:AdminService,private http:HttpClient){

 }
 ngOnInit(){
  this.adminService.getBikeContent().subscribe(data=>{
    this.products=data;
  })
 }
 addItem(){
  let Content={
    image:this.image,
    title:this.title,
    details:this.details,
    price:this.price,
    availability:"Available"
  }

  this.adminService.pushBikeContent(Content).subscribe(data=>{
    alert("Content Added")
    this.ngOnInit()
  })
}
deleteData(id:any){
 this.adminService.deleteBikeContent(id).subscribe(data=>{
  alert("Deleted");
  this.ngOnInit()
 })

}
changeAvailabilityStatus(id:any){
  if(confirm("Admin wants to change availability Status ")){
  this.http.patch("http://localhost:3000/bikes/"+id,{availability:this.availabilityData}).subscribe()
  this.ngOnInit()
}
}

}

