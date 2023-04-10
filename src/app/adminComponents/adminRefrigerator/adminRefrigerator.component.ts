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
 constructor(private adminService:AdminService){
  this.adminService.getRefrigeratorContent().subscribe(data=>{
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
  this.adminService.pushRefrigeratorContent(Content).subscribe(data=>{
    alert("Content Added")
  })
}
deletedata(id:any){
 this.adminService.deleteRefrigeratorContent(id).subscribe(data=>{
  alert("Deleted");
 })
}


  ngOnInit() {
  }

}
