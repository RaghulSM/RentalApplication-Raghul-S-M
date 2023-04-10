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
 constructor(private adminService:AdminService){
  this.adminService.getAnalogWatchContent().subscribe(data=>{
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
  this.adminService.pushAnalogWatchContent(Content).subscribe(data=>{
    alert("Content Added")
  })
}
deletedata(id:any){
 this.adminService.deleteAnalogWatchContent(id).subscribe(data=>{
  alert("Deleted");
 })
}
  ngOnInit() {
  }

}
