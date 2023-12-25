import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import{OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  emailId:any;
  userName:any;
  valid:boolean=false;
  userId:any;
  password:any;
  confrimPassword:any;
constructor(private http:HttpClient, private form:FormBuilder){

}
ngOnInit(){

}

checkUser(){
 this.http.get("http://localhost:3000/users").subscribe((data:any)=>{
  const compare=data.find((result:any)=>{
   if(result.emailid==this.emailId&&result.name==this.userName){
      this.valid=true;
      this.userId=result.id
   }
  })
  if(!this.valid){
    alert("Incorrect emailid or username ")
  }
 })

}

changePassword(id:any=this.userId){
  if(this.password==this.confrimPassword){
    this.http.patch("http://localhost:3000/users/"+id,{password:this.password}).subscribe(data=>{
      alert("Password changed successfully")
      this.ngOnInit()
    })
  }
  else{
    alert("Enter same password entered above")
  }
}

}
