import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { LogingaurdService } from 'src/app/services/logingaurd.service';
import { faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { UserRegisterService } from 'src/app/services/user-register.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css']
})
export class BikeComponent implements OnInit{
  ngOnInit(){

  }
  faHeart = faHeart;
  faCartShopping = faCartShopping;
  products: any;
  favourite: any;
  userId: any=this.validate.userId;
  rentDetail: any;
  constructor(private contents: AdminService, private validate: LogingaurdService, private http: UserRegisterService, private data: DataService, private router: Router) {
    this.contents.getBikeContent().subscribe(data => {
      this.products = data;
    })
  }

  // --------------------------------------------------------add to favourite----------------------------------------------------------------------------------------
  isFavorite(productId: any , title:any): boolean {
    return this.data.favouritesdata.some((result: any) => {
      return result.productid === productId && result.title===title && result.userid === this.userId;
    });
  }
  addtoFavourite(id: any,title:any) {
    if (this.validate.isLoggedIn) {
      if(!this.isFavorite(id,title)){
      this.contents.getFavouriteBikeContent(id).subscribe(data => {
        this.favourite = data;
        var newdata = {
          image: this.favourite.image,
          title: this.favourite.title,
          details: this.favourite.details,
          price: this.favourite.price,
          productid: this.favourite.id,
          userid: this.userId
        }
        this.http.addtoFavourite(newdata).subscribe(() => {
          alert('added');
          this.ngOnInit();
        })

      })
    }
    else{
      alert('already added')
    }
    }
    else {
      alert("login to proceed")
    }
  }
  // ------------------------------------------------------------Take to Payment-------------------------------------------------------------------
  payment(id: any) {
    this.contents.getFavouriteBikeContent(id).subscribe(data => {      //to get the product details according to id
      this.rentDetail = data;
      this.data.rentProduct = this.rentDetail;
      this.router.navigateByUrl('/payment')
    })
  }
}
