import { Component } from '@angular/core';
import {faInstagram,faFacebook,faTwitter} from '@fortawesome/free-brands-svg-icons';
import {} from '@fortawesome/free-regular-svg-icons';
import {faHome,faBars,faEnvelope,faRightFromBracket,faRightToBracket,faMotorcycle,faStopwatch,faCamera,faShirt,faBlender,faHeart,faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { UserRegisterService } from './services/user-register.service';
import { LogingaurdService } from './services/logingaurd.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'renta';
  faHome=faHome;
  faBars=faBars;
  faInstagram=faInstagram;
  faFacebook=faFacebook;
  faTwitter=faTwitter;
  faEnvelope=faEnvelope;
  faRightFromBracket=faRightFromBracket;
  faRightToBracket=faRightToBracket;
  faMotorcycle=faMotorcycle;
  faStopwatch=faStopwatch;faCamera=faCamera;faShirt=faShirt;faBlender=faBlender;faHeart=faHeart;faCartShopping=faCartShopping

  constructor(private gaurdservice:LogingaurdService){
  }
  demo:boolean=this.gaurdservice.isLoggedIn;

}

