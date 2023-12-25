import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-admintraveller',
  templateUrl: './admintraveller.component.html',
  styleUrls: ['./admintraveller.component.css']
})
export class AdmintravellerComponent implements OnInit {
  image:any="";
  title:any="";
  details:any="";
  price:any="";
  products:any;
  availabilityData:any;
  constructor(private adminService:AdminService,private http:HttpClient) {
   }
   ngOnInit() {
    this.adminService.getTravellerContent().subscribe(data=>{
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
    this.adminService.pushTravellerContent(Content).subscribe(data=>{
      alert("Content Added")
      this.ngOnInit()
    })
  }
  deleteData(id:any){
    this.adminService.deleteTravellerContent(id).subscribe(data=>{
     alert("Deleted");
     this.ngOnInit()
    })
   }
   changeAvailabilityStatus(id:any){
    if(confirm("Admin wants to change availability Status ")){
    this.http.patch("http://localhost:3000/traveller/"+id,{availability:this.availabilityData}).subscribe()
    this.ngOnInit()
  }
  }
}
