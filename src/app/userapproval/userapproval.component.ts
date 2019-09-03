import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userapproval',
  templateUrl: './userapproval.component.html',
  styleUrls: ['./userapproval.component.css']
})
export class UserapprovalComponent implements OnInit {

  constructor(private apiservice:ApiService,private router:Router) { }

  mydata:Array<object> = [];

  userdata:Array<object> = [];

  ngOnInit() {

    const userid = localStorage.getItem('uid');
    console.log('User ID :'+userid);

    if(userid === null)
    {
      this.router.navigateByUrl('');
    }

    this.apiservice.vjasviewuser().subscribe((response:any)=>{
      for(var i=0;i<response.length;i++)
      {
        if(response[i].urole == null)
        {
          response[i].urole = "Not Yet a Member";
        }
        else if(response[i].urole == 0)
        {
          response[i].urole = "Admin";
        }
        else if(response[i].urole == 1)
        {
          response[i].urole = "Staff";
        }
        else if(response[i].urole == 2)
        {
          response[i].urole = "Mechanic"
        }
      }
      console.log(response);
      this.mydata=response;
    });
  }

  revokeuser(x,y)
  { 
    console.log("UserID: "+x+" Userrole: "+y); 
    var eid = x;
    var uroleset = parseInt(y);
  
    this.userdata = [{eid:eid,uroleset:uroleset}]
    console.log(this.userdata);
    this.apiservice.vjasuserstatus(this.userdata[0]).subscribe((response:any)=>{
      var result = response as string [];
      alert(result);
    });   
  }

  logout()
  {
    localStorage.removeItem('uid');
    this.router.navigateByUrl('');
  }

}
