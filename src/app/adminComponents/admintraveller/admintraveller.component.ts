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
  constructor(private adminService:AdminService) {
    this.adminService.getTravellerContent().subscribe(data=>{
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
    this.adminService.pushTravellerContent(Content).subscribe(data=>{
      alert("Content Added")
    })
  }
  deletedata(id:any){
    this.adminService.deleteTravellerContent(id).subscribe(data=>{
     alert("Deleted");
    })
   }
  ngOnInit() {
  }

}
