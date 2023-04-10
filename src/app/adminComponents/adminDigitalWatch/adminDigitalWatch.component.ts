import { Component, OnInit } from '@angular/core';
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
 constructor(private adminService:AdminService){
  this.adminService.getDigitalWatchContent().subscribe(data=>{
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
  this.adminService.pushDigitalWatchContent(Content).subscribe(data=>{
    alert("Content Added")
  })
}
deletedata(id:any){
 this.adminService.deleteDigitalWatchContent(id).subscribe(data=>{
  alert("Deleted");
 })
}


  ngOnInit() {
  }

}
