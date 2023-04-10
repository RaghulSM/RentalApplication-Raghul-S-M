import { style } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegisterService } from '../services/user-register.service';
import { LogingaurdService } from '../services/logingaurd.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailid:any="";
  password:any="";
  gaurd:boolean=true;
  constructor( private clint:HttpClient,private login:UserRegisterService,private form:FormBuilder,private logingaurd:LogingaurdService,private router:Router){}

  // ----------------------------Login serverside validation-----------------------------------------------------------
  validate(){
    if(this.emailid=="admin@gmail.com" && this.password=="123456"){
      location.href=('/admin')
    }
    else{
     this.clint.get("http://localhost:3000/users").subscribe((data:any)=>{
      const users=data.find((result:any)=>{
        return result.emailid==this.emailid && result.password==this.password
      })
      if(users){
        this.logingaurd.isLoggedIn=true;
        this.router.navigateByUrl('/home');

      }
      else{
        alert("Invalid")
      }
     })
  }
}
loginform=this.form.group({
       emails:['',[Validators.email,Validators.required]],
       password:['',[Validators.required]]
})
  }
