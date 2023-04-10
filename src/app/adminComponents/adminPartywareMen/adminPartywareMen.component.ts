import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-adminPartywareMen',
  templateUrl: './adminPartywareMen.component.html',
  styleUrls: ['./adminPartywareMen.component.css']
})
export class AdminPartywareMenComponent implements OnInit {

  image:any="";
  title:any="";
  details:any="";
  price:any="";
  products:any;
 constructor(private adminService:AdminService){
  this.adminService.getPartywareMenContent().subscribe(data=>{
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
  this.adminService.pushPartywareMenContent(Content).subscribe(data=>{
    alert("Content Added")
  })
}
deletedata(id:any){
 this.adminService.deletePartywareMenContent(id).subscribe(data=>{
  alert("Deleted");
 })
}


  ngOnInit() {
  }

}
