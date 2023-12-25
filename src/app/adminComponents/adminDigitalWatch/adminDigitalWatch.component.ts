import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faDisplay } from '@fortawesome/free-solid-svg-icons';
import { window, windowTime } from 'rxjs';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-adminDigitalWatch',
  templateUrl: './adminDigitalWatch.component.html',
  styleUrls: ['./adminDigitalWatch.component.css']
})
export class AdminDigitalWatchComponent implements OnInit {

  image:any="";
  title:any="";
  details:any="";
  price:any="";
  products:any;
  availabilityData:any;
 constructor(private adminService:AdminService, private http:HttpClient){
 }

 ngOnInit() {
  this.adminService.getDigitalWatchContent().subscribe(data=>{
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
  this.adminService.pushDigitalWatchContent(Content).subscribe(data=>{
    alert("Content Added")
    this.ngOnInit()

  })
}
deleteData(id:any){
 this.adminService.deleteDigitalWatchContent(id).subscribe(data=>{
  alert("Deleted");
  this.ngOnInit()
 })
}

changeAvailabilityStatus(id:any){
  if(confirm("Admin wants to change availability Status ")){
  this.http.patch("http://localhost:3000/digitalWatches/"+id,{availability:this.availabilityData}).subscribe()
  this.ngOnInit()
}
}

}
