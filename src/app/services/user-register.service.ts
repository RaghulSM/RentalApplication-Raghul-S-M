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
  }
