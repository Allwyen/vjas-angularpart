import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-pendingcar',
  templateUrl: './pendingcar.component.html',
  styleUrls: ['./pendingcar.component.css']
})
export class PendingcarComponent implements OnInit {

  constructor(private router:Router,private apiservice:ApiService) { }

  mydata:Array<object> = [];
  mydropdown:Array<object> = [];
  staffid:Array<object> = [];
  myassign1:Array<object> = [];

  aissueid:String;
  acarid:String;
  astaffid:String;
  
  assignbyadmin(x,y,z)
  {
    this.aissueid = x;
    this.acarid = y;
    this.astaffid = z;

    this.staffid = [{astaffid:this.astaffid}];

    console.log(this.aissueid+"---"+this.acarid+"---"+this.astaffid);

    if(this.astaffid == "0".toString())
    {
      alert('Invalid User!!');
    }
    else
    {
      this.myassign1 = [
        {
          astatus:0,
          acarid:this.acarid,
          astaffid:this.astaffid,
          aissueid:this.aissueid
        }
      ];

      this.apiservice.vjasinsertcarassign(this.myassign1[0]).subscribe((response:any)=>{
        console.log([response].length);

        if([response].length > 0)
        {
          this.apiservice.vjasupdatejstatus(this.staffid[0]).subscribe((response:any)=>{
            console.log(response);
            alert('Staff allocated for work!!');
            this.router.navigateByUrl('/adminhome');
          });
        }
      });
    }
  }


  ngOnInit() {

    const userid = localStorage.getItem('uid');
    const userrole = localStorage.getItem('uroleid')
    console.log('User ID :'+userid);

    if(userid === null)
    {
      this.router.navigateByUrl('');
    }
    else if(parseInt(userrole) != 0)
    {
      this.router.navigateByUrl('');
    }

    this.apiservice.vjaspendingcar().subscribe((response:any)=>{
      console.log(response);
      if(response.length == 0)
      {
        alert('No Pending tasks yet!!');
      }
      else
      {
        this.mydata = response;
      }
      
    });

    this.apiservice.vjasviewmechanic().subscribe((response:any)=>{
      console.log(response);
      this.mydropdown=response;
    });
  }

  logout()
  {
    localStorage.removeItem('uid');
    localStorage.removeItem('uroleid');
    this.router.navigateByUrl('');
  }
}
