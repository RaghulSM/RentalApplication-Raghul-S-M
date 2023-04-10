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
 constructor(private adminService:AdminService){
  this.adminService.getGrinderContent().subscribe(data=>{
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
  this.adminService.pushGrinderContent(Content).subscribe(data=>{
    alert("Content Added")
  })
}
deletedata(id:any){
 this.adminService.deleteGrinderContent(id).subscribe(data=>{
  alert("Deleted");
 })
}


  ngOnInit() {
  }

}
