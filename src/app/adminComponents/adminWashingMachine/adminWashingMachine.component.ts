import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-adminWashingMachine',
  templateUrl: './adminWashingMachine.component.html',
  styleUrls: ['./adminWashingMachine.component.css']
})
export class AdminWashingMachineComponent implements OnInit {

  image:any="";
  title:any="";
  details:any="";
  price:any="";
  products:any;
  availabilityData:any;
 constructor(private adminService:AdminService, private http:HttpClient){
 }

 ngOnInit() {
  this.adminService.getWashingMachineContent().subscribe(data=>{
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
  this.adminService.pushWashingMachineContent(Content).subscribe(data=>{
    alert("Content Added")
    this.ngOnInit()
  })
}
deleteData(id:any){
 this.adminService.deleteWashingMachineContent(id).subscribe(data=>{
  alert("Deleted");
  this.ngOnInit()
 })
}
changeAvailabilityStatus(id:any){
  if(confirm("Admin wants to change availability Status ")){
  this.http.patch("http://localhost:3000/washingMachine/"+id,{availability:this.availabilityData}).subscribe()
  this.ngOnInit()
}
}
}
