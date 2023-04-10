import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserRegisterService } from '../services/user-register.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username:any="";
  emailid:any="";
  password:any="";
  confrimpassword:any="";
  constructor(private userservice:UserRegisterService, private form:FormBuilder){
  }
  submit(){
    var userinfo={
      name:this.username,
      emailid:this.emailid,
      password:this.password
    }
    this.userservice.postUser(userinfo).subscribe(data=>{
      alert("form submitted")
    })
  }
  signupform= this.form.group({
    username:["",[Validators.required,Validators.pattern('[a-zA-Z+0-9]+$')]],
    email:["",[Validators.required,Validators.email]],
    password:[,[Validators.required, Validators.minLength(8)]],
    confrimpassword:[,[Validators.required,Validators.minLength(8)]],
  })
}

