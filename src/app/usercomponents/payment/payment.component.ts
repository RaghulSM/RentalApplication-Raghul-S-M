import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { LogingaurdService } from 'src/app/services/logingaurd.service';
import { UserRegisterService } from 'src/app/services/user-register.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private data:DataService,private order:UserRegisterService, private usereData:LogingaurdService, private form:FormBuilder) {
    setInterval(()=>{
    this.calculateDate();
    this.from
    this.to
    this.days
    this.totalAmount
    this.userName
    this.mobile
    this.address
    this.idProof
    })
  }

  ngOnInit() {}
  products:any=this.data.rentProduct;
  userName:any="";
  mobile:any='';
  address:any='';
  idProof:any='';
  price:any=this.data.rentProduct.price;
  from:any;
  to:any;
  days:any;
  totalAmount:any;
  paymentType:any;
  userId:any=this.usereData.userId
calculateDate(){
  const date1:any = new Date(this.from)
  const date2:any = new Date(this.to)
  const total:any=date2.getTime()-date1.getTime()
  this.days=total/(1000*3600*24)
  this.totalAmount=this.price*this.days
}
rent(){
  let details={
    username:this.userName,
    image:this.products.image,
    title:this.products.title,
    details:this.products.details,
    address:this.address,
    mobile:this.mobile,
    idproof:this.idProof,
    price:this.products.price,
    Rentfrom:this.from,
    Rentto:this.to,
    Totaldays:this.days,
    totalAmount:this.totalAmount,
    Payment:this.paymentType,
    userid:this.userId,
    orderstatus:"Approval Pending",
  }
 this.order.addOrders(details).subscribe(data=>{
  alert("order placed")
 })
}
payform=this.form.group({
  name:['',[Validators.required]],
  mobileNumber:['',[Validators.required]],
  addressDetail:['',[Validators.required]],
  idFile:['',[Validators.required]],
  fromDate:['',[Validators.required]],
  toDate:['',[Validators.required]],
  payType:['',[Validators.required]],
  cardNumber:['',[Validators.minLength(12)]],
  expiryDate:['',[Validators.minLength(2)]],
  ccv:['',[Validators.minLength(3)]],
  expiryYear:['',[Validators.minLength(3)]],
})

}
