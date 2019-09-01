import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const appRoutes:Routes = [
  {path:'',component:UserloginComponent},
  {path:'register',component:UserregisterComponent},
  {path:'staffhome',component:StaffhomeComponent},
  {path:'adminhome',component:AdminhomeComponent},
  {path:'mechanichome',component:MechanichomeComponent},
  {path:'forgotpwd',component:ForgotpwdComponent}
];

import { AppComponent } from './app.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { StaffhomeComponent } from './staffhome/staffhome.component';
import { MechanichomeComponent } from './mechanichome/mechanichome.component';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';

@NgModule({
  declarations: [
    AppComponent,
    UserregisterComponent,
    UserloginComponent,
    AdminhomeComponent,
    StaffhomeComponent,
    MechanichomeComponent,
    ForgotpwdComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
