import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import {faHeart,faCartShopping}from '@fortawesome/free-solid-svg-icons';
import { LogingaurdService } from 'src/app/services/logingaurd.service';
import { UserRegisterService } from 'src/app/services/user-register.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-vediocameras',
  templateUrl: './vediocameras.component.html',
  styleUrls: ['./vediocameras.component.css']
})
export class VediocamerasComponent implements OnInit {


  faHeart=faHeart;
  faCartShopping=faCartShopping;
  colour:any;
  products:any;
  fav:any;
  userid:any;
  rent:any;
  ngOnInit() {}
constructor(private Contents:AdminService, private validate:LogingaurdService,private http:UserRegisterService,private data:DataService,private router:Router){
 this.Contents.getVedioCameraContent().subscribe(data=>{
  this.products=data;
 })
 setInterval(()=>{
 this.userid=this.validate.userId
 },1000)
}
addtoFavourite(id:any){
  if(this.validate.isLoggedIn){
    this.Contents.getFavouriteVedioCameraContent(id).subscribe(data=>{
      this.fav=data;
       var newdata={
        image:this.fav.image,
        title:this.fav.title,
        details:this.fav.details,
        price:this.fav.price,
        productid:this.fav.id,
        userid:this.userid
      }
      this.http.addtoFavourite(newdata).subscribe(data=>{
        alert('added');
      })
     })

  }
  else{
    alert("login to proceed")
  }
}
payment(id:any){
  this.Contents.getFavouriteVedioCameraContent(id).subscribe(data=>{
    this.rent=data;
    this.data.rentProduct=this.rent;
    this.router.navigateByUrl('/payment')
  })
}
}

