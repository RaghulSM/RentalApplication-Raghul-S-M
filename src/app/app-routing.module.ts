import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminBikeComponent } from './adminComponents/admin-bike/admin-bike.component';
import { AdminHomeComponent } from './adminComponents/admin-home/admin-home.component';
import { AdmintravellerComponent } from './adminComponents/admintraveller/admintraveller.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AnalogwatchesComponent } from './usercomponents/analogwatches/analogwatches.component';
import { BikeComponent } from './usercomponents/bike/bike.component';
import { CarComponent } from './usercomponents/car/car.component';
import { DigitalcamerasComponent } from './usercomponents/digitalcameras/digitalcameras.component';
import { DigitalwatchesComponent } from './usercomponents/digitalwatches/digitalwatches.component';
import { DSLRcamerasComponent } from './usercomponents/DSLRcameras/DSLRcameras.component';
import { GrinderComponent } from './usercomponents/Grinder/Grinder.component';
import { HomeComponent } from './usercomponents/home/home.component';
import { MixerComponent } from './usercomponents/Mixer/Mixer.component';
import { PartywaremensComponent } from './usercomponents/partywaremens/partywaremens.component';
import { PartywarewomensComponent } from './usercomponents/partywarewomens/partywarewomens.component';
import { RefrigeratorComponent } from './usercomponents/refrigerator/refrigerator.component';
import { TravellerComponent } from './usercomponents/traveller/traveller.component';
import { VediocamerasComponent } from './usercomponents/vediocameras/vediocameras.component';
import { WashingmachineComponent } from './usercomponents/washingmachine/washingmachine.component';
import { WeddingwaremensComponent } from './usercomponents/weddingwaremens/weddingwaremens.component';
import { WeddingwarewomensComponent } from './usercomponents/weddingwarewomens/weddingwarewomens.component';
import { AdmincarComponent } from './adminComponents/admincar/admincar.component';
import { PaymentComponent } from './usercomponents/payment/payment.component';
import { CheckuserGuard } from './gaurds/checkuser.guard';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'payment',
    component:PaymentComponent,
    canActivate:[CheckuserGuard]
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'bike',
    component:BikeComponent
  },
  {
    path:'car',
    component:CarComponent
  },
  {
    path:'traveller',
    component:TravellerComponent
  },
  {
    path:'digitalwatches',
    component:DigitalwatchesComponent
  },
  {
    path:'analogwatches',
    component:AnalogwatchesComponent
  },
  {
    path:'DSLRcameras',
    component:DSLRcamerasComponent
  },
  {
    path:'digitalcameras',
    component:DigitalcamerasComponent
  },
  {
    path:'vediocameras',
    component:VediocamerasComponent
  },
  {
    path:'partywaremens',
    component:PartywaremensComponent
  },
  {
    path:'partywarewomens',
    component:PartywarewomensComponent
  },
  {
    path:'weddingwaremens',
    component:WeddingwaremensComponent
  },
  {
    path:'weddingwarewomens',
    component:WeddingwarewomensComponent
  },
  {
    path:'refrigerator',
    component:RefrigeratorComponent
  },
  {
    path:'washingmachine',
    component:WashingmachineComponent
  },
  {
    path:'mixer',
    component:MixerComponent
  },
  {
    path:'grinder',
    component:GrinderComponent
  },
  {
    path:'admin',
    component:AdminHomeComponent
  },
  {
    path:'adminbike',
    component:AdminBikeComponent
  },
  {
    path:'adminhome',
    component:AdminHomeComponent
  },
  {
    path:'admincar',
    component:AdmincarComponent
  },
  {
    path:'admintraveller',
    component:AdmintravellerComponent
  },
  {
    path:'**',
    redirectTo:'home',
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
