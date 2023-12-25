import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserRegisterService } from '../services/user-register.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: any = "";
  emailid: any = "";
  password: any = "";
  confrimpassword: any = "";
  emailCheck: any;
  constructor(private userservice: UserRegisterService, private form: FormBuilder, private http: HttpClient) {
  }
  submit() {
    var userinfo = {
      name: this.username,
      emailid: this.emailid,
      password: this.password,
    }
    this.userservice.postUser(userinfo).subscribe(data => {
      alert("form submitted")
    })
  }

  signupform = this.form.group({
    username: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^(?!.*?(.)\1{2})[a-zA-Z0-9]*$/)]],
    email: ["", [Validators.required, Validators.email, Validators.pattern(/^(?!.*(?:gmail|googlemail|yahoo|hotmail)@gmail|yahoo|hotmail|googlemail\.com).*$/)]],
    password: [, [Validators.required, Validators.pattern((/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)), Validators.minLength(6)]],
    confrimpassword: [, [Validators.required, Validators.pattern((/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)), Validators.minLength(6)]],
  })
}

