import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import {faHeart,faCartShopping}from '@fortawesome/free-solid-svg-icons';
import { LogingaurdService } from 'src/app/services/logingaurd.service';
import { UserRegisterService } from 'src/app/services/user-register.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-traveller',
  templateUrl: './traveller.component.html',
  styleUrls: ['./traveller.component.css']
})
export class TravellerComponent implements OnInit {


  faHeart=faHeart;
  faCartShopping=faCartShopping;
  colour:any;
  products:any;
  fav:any;
  userid:any;
  getfav:any=this.vali.favourites;
  rent:any;
  ngOnInit() {}
constructor(private Contents:AdminService, private vali:LogingaurdService,private http:UserRegisterService,private data:DataService,private router:Router){
 this.Contents.getTravellerContent().subscribe(data=>{
  this.products=data;
 })
 setInterval(()=>{
 this.userid=this.vali.userId
 },1000)
}
addtoFavourite(id:any){
  if(this.vali.isLoggedIn){
    this.Contents.getFavouriteTravellerContent(id).subscribe(data=>{
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
  this.Contents.getFavouriteTravellerContent(id).subscribe(data=>{
    this.rent=data;
    this.data.rentProduct=this.rent;
    this.router.navigateByUrl('/payment')
  })
}
}
