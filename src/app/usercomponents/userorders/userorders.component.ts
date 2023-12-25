import { Component, OnInit } from '@angular/core';
import { LogingaurdService } from 'src/app/services/logingaurd.service';
import { UserRegisterService } from 'src/app/services/user-register.service';

@Component({
  selector: 'app-userorders',
  templateUrl: './userorders.component.html',
  styleUrls: ['./userorders.component.css']
})
export class UserordersComponent implements OnInit{
  details:any;
  status:any="cancelled";
  currentUserId:any=this.userData.userId;
 constructor (private client:UserRegisterService, private userData:LogingaurdService){
 }

 ngOnInit(){
    this.client.getOrders().subscribe(data=>{
    this.details=data;
 })
 }

   cancelorder(id:any){
    if(confirm("cancell order")){
      this.client.cancelOrder(id).subscribe()
      this.ngOnInit()
    }
   }
 }
