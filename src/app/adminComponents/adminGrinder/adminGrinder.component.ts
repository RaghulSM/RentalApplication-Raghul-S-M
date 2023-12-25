import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-adminGrinder',
  templateUrl: './adminGrinder.component.html',
  styleUrls: ['./adminGrinder.component.css']
})
export class AdminGrinderComponent implements OnInit {

  image:any="";
  title:any="";
  details:any="";
  price:any="";
  products:any;
  availabilityData:any;
 constructor(private adminService:AdminService,private http:HttpClient){
 }
 ngOnInit() {
  this.adminService.getGrinderContent().subscribe(data=>{
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
  this.adminService.pushGrinderContent(Content).subscribe(data=>{
    alert("Content Added")
    this.ngOnInit()
  })
}
deleteData(id:any){
 this.adminService.deleteGrinderContent(id).subscribe(data=>{
  alert("Deleted");
  this.ngOnInit()
 })
}
changeAvailabilityStatus(id:any){
  if(confirm("Admin wants to change availability Status ")){
  this.http.patch("http://localhost:3000/grinder/"+id,{availability:this.availabilityData}).subscribe()
  this.ngOnInit()
}
}

}
