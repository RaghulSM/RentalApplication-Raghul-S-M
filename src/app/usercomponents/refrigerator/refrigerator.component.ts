import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import {faHeart,faCartShopping}from '@fortawesome/free-solid-svg-icons';
import { LogingaurdService } from 'src/app/services/logingaurd.service';
import { UserRegisterService } from 'src/app/services/user-register.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-refrigerator',
  templateUrl: './refrigerator.component.html',
  styleUrls: ['./refrigerator.component.css']
})
export class RefrigeratorComponent implements OnInit {


  faHeart=faHeart;
  faCartShopping=faCartShopping;
  colour:any;
  products:any;
  favourites:any;
  userId:any=this.validate.userId;
  rentDetail:any;
  ngOnInit() {}
constructor(private contents:AdminService, private validate:LogingaurdService,private http:UserRegisterService,private data:DataService,private router:Router){
 this.contents.getRefrigeratorContent().subscribe(data=>{
  this.products=data;
 })
}

isFavorite(productId: any,title:any): boolean {
  return this.data.favouritesdata.some((result: any) => {
    return result.productid === productId && result.title===title && result.userid === this.userId;
  });
}

addtoFavourite(id:any,title:any){
  if(this.validate.isLoggedIn){
    if(!this.isFavorite(id,title)){
    this.contents.getFavouriteRefrigeratorContent(id).subscribe(data=>{
      this.favourites=data;
       var newdata={
        image:this.favourites.image,
        title:this.favourites.title,
        details:this.favourites.details,
        price:this.favourites.price,
        productid:this.favourites.id,
        userid:this.userId
      }
      this.http.addtoFavourite(newdata).subscribe(data=>{
        alert('added');
      })
     })
    }
    else{
      alert("already added")
    }
  }
  else{
    alert("login to proceed")
  }
}
payment(id:any){
  this.contents.getFavouriteRefrigeratorContent(id).subscribe(data=>{
    this.rentDetail=data;
    this.data.rentProduct=this.rentDetail;
    this.router.navigateByUrl('/payment')
  })
}
}
