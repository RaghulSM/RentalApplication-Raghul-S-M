import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-adminMixer',
  templateUrl: './adminMixer.component.html',
  styleUrls: ['./adminMixer.component.css']
})
export class AdminMixerComponent implements OnInit {

  image:any="";
  title:any="";
  details:any="";
  price:any="";
  products:any;
  availabilityData:any;
 constructor(private adminService:AdminService,private http:HttpClient){
 }
 ngOnInit() {
  this.adminService.getMixerContent().subscribe(data=>{
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
  this.adminService.pushMixerContent(Content).subscribe(data=>{
    alert("Content Added")
    this.ngOnInit()
  })
}
deleteData(id:any){
 this.adminService.deleteMixerContent(id).subscribe(data=>{
  alert("Deleted");
  this.ngOnInit()
 })
}
changeAvailabilityStatus(id:any){
  if(confirm("Admin wants to change availability Status ")){
  this.http.patch("http://localhost:3000/mixer/"+id,{availability:this.availabilityData}).subscribe()
  this.ngOnInit()
}
}

}
