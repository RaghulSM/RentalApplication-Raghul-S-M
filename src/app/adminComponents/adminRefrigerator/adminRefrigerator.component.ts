import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-adminRefrigerator',
  templateUrl: './adminRefrigerator.component.html',
  styleUrls: ['./adminRefrigerator.component.css']
})
export class AdminRefrigeratorComponent implements OnInit {

  image:any="";
  title:any="";
  details:any="";
  price:any="";
  products:any;
  availabilityData:any;
 constructor(private adminService:AdminService,private http:HttpClient){
 }

 ngOnInit() {
  this.adminService.getRefrigeratorContent().subscribe(data=>{
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
  this.adminService.pushRefrigeratorContent(Content).subscribe(data=>{
    alert("Content Added")
    this.ngOnInit()
  })
}
deleteData(id:any){
 this.adminService.deleteRefrigeratorContent(id).subscribe(data=>{
  alert("Deleted");
  this.ngOnInit()
 })
}
changeAvailabilityStatus(id:any){
  if(confirm("Admin wants to change availability Status ")){
  this.http.patch("http://localhost:3000/refrigerator/"+id,{availability:this.availabilityData}).subscribe()
  this.ngOnInit()
}
}
}
