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
import { RefrigeratorComponent } from './usercomponents/refrigerator/refrigerator.component';
import { TravellerComponent } from './usercomponents/traveller/traveller.component';
import { VediocamerasComponent } from './usercomponents/vediocameras/vediocameras.component';
import { WashingmachineComponent } from './usercomponents/washingmachine/washingmachine.component';
import { AdmincarComponent } from './adminComponents/admincar/admincar.component';
import { PaymentComponent } from './usercomponents/payment/payment.component';
import { CheckuserGuard } from './gaurds/checkuser.guard';
import { FavouriteComponent } from './usercomponents/favourite/favourite.component';
import { CartComponent } from './usercomponents/cart/cart.component';
import { AdminDigitalWatchComponent } from './adminComponents/adminDigitalWatch/adminDigitalWatch.component';
import { AdminAnalogWatchComponent } from './adminComponents/adminAnalogWatch/adminAnalogWatch.component';
import { AdminDSLRCameraComponent } from './adminComponents/adminDSLRCamera/adminDSLRCamera.component';
import { AdminDigitalCameraComponent } from './adminComponents/adminDigitalCamera/adminDigitalCamera.component';
import { AdminVedioCameraComponent } from './adminComponents/adminVedioCamera/adminVedioCamera.component';
import { AdminRefrigeratorComponent } from './adminComponents/adminRefrigerator/adminRefrigerator.component';
import { AdminWashingMachineComponent } from './adminComponents/adminWashingMachine/adminWashingMachine.component';
import { AdminMixerComponent } from './adminComponents/adminMixer/adminMixer.component';
import { AdminGrinderComponent } from './adminComponents/adminGrinder/adminGrinder.component';
import { OrdersComponent } from './usercomponents/orders/orders.component';
import { UserordersComponent } from './usercomponents/userorders/userorders.component';
import { ForgotPasswordComponent } from './usercomponents/forgot-password/forgot-password.component';
import { AuthGuard } from './gaurds/auth.guard';

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
    path:'forgotPassword',
    component:ForgotPasswordComponent
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
    path:'favourite',
    component:FavouriteComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'cart',
    component:CartComponent,
    canActivate:[CheckuserGuard]
  },
  {
    path:'orders',
    component:OrdersComponent,
  },
  {
    path:'userorders',
    component:UserordersComponent,
  },
  {
    path:'bike',
    component:BikeComponent,
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
    path:'admindigitalwatches',
    component:AdminDigitalWatchComponent
  },
  {
    path:'adminanalogwatches',
    component:AdminAnalogWatchComponent
  },
  {
    path:'adminDSLRcameras',
    component:AdminDSLRCameraComponent
  },
  {
    path:'admindigitalcameras',
    component:AdminDigitalCameraComponent
  },
  {
    path:'adminvediocameras',
    component:AdminVedioCameraComponent
  },
  {
    path:'adminrefrigerator',
    component:AdminRefrigeratorComponent
  },
  {
    path:'adminwashingmachine',
    component:AdminWashingMachineComponent
  },
  {
    path:'adminmixer',
    component:AdminMixerComponent
  },
  {
    path:'admingrinder',
    component:AdminGrinderComponent
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
