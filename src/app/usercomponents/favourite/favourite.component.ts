import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LogingaurdService } from 'src/app/services/logingaurd.service';
import{faSquareMinus,faMinusSquare} from '@fortawesome/free-regular-svg-icons';
import { UserRegisterService } from 'src/app/services/user-register.service';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  products:any;
  faSquareMinus=faSquareMinus;
  faMinusSquare=faMinusSquare;
  rentDetail:any;

  constructor(private http:HttpClient, private userService:LogingaurdService, private userRegisterService:UserRegisterService, private router:Router,private data:DataService) { }
  ngOnInit() {
    this.http.get("http://localhost:3000/favourites").subscribe(data=>{
        this.products=data;})
        this.userService.favourites=this.products;
  }
 userid:any=this.userService.userId

  deleteFavourite(id:any){
   this.userRegisterService.deleteFavourite(id).subscribe(data=>{
    this.ngOnInit()
   })
  }
  payment(id:any){
    this.userRegisterService.favouritePaymet(id).subscribe(data=>{
      this.rentDetail=data;
      this.data.rentProduct=this.rentDetail;
      this.router.navigateByUrl('/payment')
    })
  }

}
