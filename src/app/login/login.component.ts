import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LogingaurdService } from '../services/logingaurd.service';
import { environment } from 'src/environments/environment';
import { NGXLogger } from 'ngx-logger';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  emailid:any="";
  password:any="";
  gaurd:boolean=true;
  userName:any;
  userId:any;
  retUrl="";
  constructor( private client:HttpClient,private form:FormBuilder,private logingaurd:LogingaurdService,private router:Router,route:ActivatedRoute, private logger:NGXLogger){}
ngOnInit(){
  // if(this.retUrl!=null){

  //   this.route.queryParams.subscribe((data: any)=>{
  //     this.router.navigate([data])
  //   })

  // }
}
  // ----------------------------Login serverside validation-----------------------------------------------------------
  validate(){
    if(this.emailid==environment.emailId && this.password==environment.password){
      this.logingaurd.isAdminLoggedin=true;
      localStorage.setItem('userName',(environment.adminName))
      this.logingaurd.userName=localStorage.getItem('userName')
      this.router.navigateByUrl('/admin');
      this.logger.info('Admin LoggedIn')
    }
    else{
     this.client.get("http://localhost:3000/users").subscribe((data:any)=>{
      const users=data.find((result:any)=>{
        if(result.emailid==this.emailid && result.password==this.password){
          this.userId=result.id;
          this.userName=result.name;
        }
        return result.emailid==this.emailid && result.password==this.password

      })
      if(users){
        this.router.navigateByUrl('/home');
        alert('loggedin')
        localStorage.setItem('userName',(users.name))
        localStorage.setItem('userId',(users.id))
        this.logingaurd.userName=localStorage.getItem('userName');
        this.logingaurd.userId=localStorage.getItem('userId');
        this.logger.info('User LoggedIn')

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
