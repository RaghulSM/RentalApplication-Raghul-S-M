import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './usercomponents/home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { AdminHomeComponent } from './adminComponents/admin-home/admin-home.component';
import { AdminBikeComponent } from './adminComponents/admin-bike/admin-bike.component';
import { BikeComponent } from './usercomponents/bike/bike.component'
import { AdmincarComponent } from './adminComponents/admincar/admincar.component';
import { AdmintravellerComponent } from './adminComponents/admintraveller/admintraveller.component';
import { CarComponent } from './usercomponents/car/car.component';
import { TravellerComponent } from './usercomponents/traveller/traveller.component';
import { DigitalwatchesComponent } from './usercomponents/digitalwatches/digitalwatches.component';
import { AdminDigitalWatchComponent } from './adminComponents/adminDigitalWatch/adminDigitalWatch.component';
import { AnalogwatchesComponent } from './usercomponents/analogwatches/analogwatches.component';
import { AdminAnalogWatchComponent } from './adminComponents/adminAnalogWatch/adminAnalogWatch.component';
import { DSLRcamerasComponent } from './usercomponents/DSLRcameras/DSLRcameras.component';
import { AdminDSLRCameraComponent } from './adminComponents/adminDSLRCamera/adminDSLRCamera.component';
import { DigitalcamerasComponent } from './usercomponents/digitalcameras/digitalcameras.component';
import { AdminDigitalCameraComponent } from './adminComponents/adminDigitalCamera/adminDigitalCamera.component';
import { VediocamerasComponent } from './usercomponents/vediocameras/vediocameras.component';
import { AdminVedioCameraComponent } from './adminComponents/adminVedioCamera/adminVedioCamera.component';
import { RefrigeratorComponent } from './usercomponents/refrigerator/refrigerator.component';
import { AdminRefrigeratorComponent } from './adminComponents/adminRefrigerator/adminRefrigerator.component';
import { WashingmachineComponent } from './usercomponents/washingmachine/washingmachine.component';
import { AdminWashingMachineComponent } from './adminComponents/adminWashingMachine/adminWashingMachine.component';
import { MixerComponent } from './usercomponents/Mixer/Mixer.component';
import { AdminMixerComponent } from './adminComponents/adminMixer/adminMixer.component';
import { GrinderComponent } from './usercomponents/Grinder/Grinder.component';
import { AdminGrinderComponent } from './adminComponents/adminGrinder/adminGrinder.component';
import { FavouriteComponent } from './usercomponents/favourite/favourite.component';
import { CartComponent } from './usercomponents/cart/cart.component';
import { PaymentComponent } from './usercomponents/payment/payment.component';
import { OrdersComponent } from './usercomponents/orders/orders.component';
import { UserordersComponent } from './usercomponents/userorders/userorders.component';
import { ForgotPasswordComponent } from './usercomponents/forgot-password/forgot-password.component';
import { LoggerModule,NgxLoggerLevel } from 'ngx-logger';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AdminHomeComponent,
    AdminBikeComponent,
    BikeComponent,
    AdmincarComponent,AdmintravellerComponent,
    CarComponent,TravellerComponent,
    DigitalwatchesComponent,AdminDigitalWatchComponent,
    AnalogwatchesComponent,AdminAnalogWatchComponent,
    DSLRcamerasComponent,AdminDSLRCameraComponent,
    DigitalcamerasComponent,AdminDigitalCameraComponent,
    VediocamerasComponent,AdminVedioCameraComponent,
    RefrigeratorComponent,AdminRefrigeratorComponent,
    WashingmachineComponent,AdminWashingMachineComponent,
    MixerComponent,AdminMixerComponent,
    GrinderComponent,AdminGrinderComponent,
    FavouriteComponent,CartComponent,PaymentComponent,OrdersComponent, UserordersComponent, ForgotPasswordComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule, LoggerModule.forRoot({serverLoggingUrl:environment.logUrl, timestampFormat: 'dd MMM,yyyy hh:mm:ss a' ,level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.TRACE})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
