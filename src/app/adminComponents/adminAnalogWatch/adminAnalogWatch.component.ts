import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-adminAnalogWatch',
  templateUrl: './adminAnalogWatch.component.html',
  styleUrls: ['./adminAnalogWatch.component.css']
})
export class AdminAnalogWatchComponent implements OnInit {

  image:any="";
  title:any="";
  details:any="";
  price:any="";
  products:any;
  availabilityData:any;
 constructor(private adminService:AdminService, private http:HttpClient){}
 ngOnInit() {
  this.adminService.getAnalogWatchContent().subscribe(data=>{
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
  this.adminService.pushAnalogWatchContent(Content).subscribe(data=>{
    alert("Content Added")
    this.ngOnInit()
  })
}
deleteData(id:any){
 this.adminService.deleteAnalogWatchContent(id).subscribe(data=>{
  alert("Deleted");
  this.ngOnInit()
 })
}

changeAvailabilityStatus(id:any){
  if(confirm("Admin wants to change availability Status ")){
  this.http.patch("http://localhost:3000/analogWatches/"+id,{availability:this.availabilityData}).subscribe()
  this.ngOnInit()
}
}

}
