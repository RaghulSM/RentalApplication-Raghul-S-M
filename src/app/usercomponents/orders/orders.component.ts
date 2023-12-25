import { Component, OnInit } from '@angular/core';
import { UserRegisterService } from 'src/app/services/user-register.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  details:any;
  constructor(private client:UserRegisterService) {
   }

  ngOnInit() {
    this.client.getOrders().subscribe(data=>{
      this.details=data
    })
  }
  accept(id:any){
    if(confirm("Admin wants to Accept the Order")){
    this.client.acceptOrder(id).subscribe()
    this.ngOnInit()
  }}
  decline(id:any){
    if(confirm("Admin wants to Decline the Order")){
    this.client.declineOrder(id).subscribe()
    this.ngOnInit()
  }}
}
