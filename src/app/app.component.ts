import { Component, OnInit } from '@angular/core';
import {faInstagram,faFacebook,faTwitter} from '@fortawesome/free-brands-svg-icons';
import {} from '@fortawesome/free-regular-svg-icons';
import {faHome,faBars,faEnvelope,faRightFromBracket,faRightToBracket,faMotorcycle,faStopwatch,faCamera,faShirt,faBlender,faHeart,faCartShopping,faUser,faHistory} from '@fortawesome/free-solid-svg-icons';
import { LogingaurdService } from './services/logingaurd.service';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'renta';
  faHome=faHome;
  faBars=faBars;
  faInstagram=faInstagram;
  faFacebook=faFacebook;
  faTwitter=faTwitter;
  faEnvelope=faEnvelope;
  faRightFromBracket=faRightFromBracket;
  faRightToBracket=faRightToBracket;
  faMotorcycle=faMotorcycle;faHistory=faHistory;
  faStopwatch=faStopwatch;faCamera=faCamera;faShirt=faShirt;faBlender=faBlender;faHeart=faHeart;faCartShopping=faCartShopping;
  faUser=faUser
  isUser:boolean=false;
  isAdmin:boolean=false;
  userName:any;
  userId:any;
  currentImage:any;
ngOnInit() {

}
  constructor( public loginservice:LogingaurdService,private router:Router,private logger:NGXLogger){
    setInterval(()=>{
      this.isUser=this.loginservice.isAuthenticated()
      this.isAdmin=this.loginservice.isAdmin()
      this.userName=this.loginservice.userName
      this.userId=this.loginservice.userId
    },100);

  }
  logOut(){
    localStorage.removeItem('userName')
    localStorage.removeItem('userId')
    this.loginservice.isLoggedIn=false;
    this.loginservice.isAdminLoggedin=false;
    this.loginservice.userName='';
    this.loginservice.userId=""
    this.router.navigateByUrl('home');
    localStorage.removeItem('userName')
    if(this.userName==environment.adminName){
    this.logger.info('Admin LoggedOut') 
    }
    else{
      this.logger.info('User LoggedOut')
    }
  }

}


