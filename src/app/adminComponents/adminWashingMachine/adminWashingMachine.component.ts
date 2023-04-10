import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-adminWashingMachine',
  templateUrl: './adminWashingMachine.component.html',
  styleUrls: ['./adminWashingMachine.component.css']
})
export class AdminWashingMachineComponent implements OnInit {

  image:any="";
  title:any="";
  details:any="";
  price:any="";
  products:any;
 constructor(private adminService:AdminService){
  this.adminService.getWashingMachineContent().subscribe(data=>{
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
  this.adminService.pushWashingMachineContent(Content).subscribe(data=>{
    alert("Content Added")
  })
}
deletedata(id:any){
 this.adminService.deleteWashingMachineContent(id).subscribe(data=>{
  alert("Deleted");
 })
}



  ngOnInit() {
  }

}
