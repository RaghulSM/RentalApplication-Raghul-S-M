import { FormGroup } from "@angular/forms";

export function confrimvalidators(pass:any,cpass:any){
  return(form:FormGroup)=>{
    const password=form.controls[pass];
    const confrimpassword=form.controls[cpass];
    if(password.value!==confrimpassword.value){
      confrimpassword.setErrors({confrimvalidators:true})
    }
    else{
      confrimpassword.setErrors(null);
    }
  }
}
