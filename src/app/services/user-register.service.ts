import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {
  constructor(private http:HttpClient) { }

  postUser(userinfo:any){
    return this.http.post("http://localhost:3000/users",userinfo)
  }
  getUser(){
    return this.http.get("http://localhost:3000/users")
  }
// -------------------------------------------------------------------------------------------------------------------------
  addtoFavourite(cont:any){
    return this.http.post("http://localhost:3000/favourites/",cont)
  }
  deleteFavourite(id:any){
    return this.http.delete("http://localhost:3000/favourites/"+id)
  }
  favouritePaymet(id:any){
    return this.http.get("http://localhost:3000/favourites/"+id)
  }
// ----------------------------------------------------------------------------------------------------------------------------
addOrders(data:any){
  return this.http.post("http://localhost:3000/orders",data)
}
getOrders(){
  return this.http.get("http://localhost:3000/orders")
}
cancelOrder(id:any){
  return this.http.patch("http://localhost:3000/orders/"+id,{orderstatus:"Cancelled"})
}
acceptOrder(id:any){
  return this.http.patch("http://localhost:3000/orders/"+id,{orderstatus:"Order Accepted"})
}
declineOrder(id:any){
  return this.http.patch("http://localhost:3000/orders/"+id,{orderstatus:"Order Declined"})
}
getFavourites(){
  return this.http.get("http://localhost:3000/favourites")
}
// ------------------------------------------------------------------------------------------------------------------------------
  }
