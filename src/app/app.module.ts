import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const appRoutes:Routes = [
  {path:'',component:UserloginComponent},
  {path:'register',component:UserregisterComponent},
  {path:'forgotpwd',component:ForgotpwdComponent},
  {path:'staffhome',component:StaffhomeComponent},
  {path:'adminhome',component:AdminhomeComponent},
  {path:'mechanichome',component:MechanichomeComponent},
  {path:'userapproval',component:UserapprovalComponent},
  {path:'updatejobcard',component:CarserviceComponent},
  {path:'newjobcard',component:JobcardComponent},
  {path:'carissue',component:CarissueComponent},
  {path:'viewtask',component:ViewtaskComponent},
  {path:'pendingcar',component:PendingcarComponent},
  {path:'mechcompletedtask',component:MechcompletedtaskComponent}
  
];

import { AppComponent } from './app.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { StaffhomeComponent } from './staffhome/staffhome.component';
import { MechanichomeComponent } from './mechanichome/mechanichome.component';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';
import { UserapprovalComponent } from './userapproval/userapproval.component';
import { CarserviceComponent } from './carservice/carservice.component';
import { JobcardComponent } from './jobcard/jobcard.component';
import { CarissueComponent } from './carissue/carissue.component';
import { ViewtaskComponent } from './viewtask/viewtask.component';
import { PendingcarComponent } from './pendingcar/pendingcar.component';
import { MechcompletedtaskComponent } from './mechcompletedtask/mechcompletedtask.component';

@NgModule({
  declarations: [
    AppComponent,
    UserregisterComponent,
    UserloginComponent,
    AdminhomeComponent,
    StaffhomeComponent,
    MechanichomeComponent,
    ForgotpwdComponent,
    UserapprovalComponent,
    CarserviceComponent,
    JobcardComponent,
    CarissueComponent,
    ViewtaskComponent,
    PendingcarComponent,
    MechcompletedtaskComponent,
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
