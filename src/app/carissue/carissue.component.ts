import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-carissue',
  templateUrl: './carissue.component.html',
  styleUrls: ['./carissue.component.css']
})
export class CarissueComponent implements OnInit {

  constructor(private apiservice:ApiService,private router:Router) { }

  mydata:Array<object>=[];
  
  ireadings:Number;
  icomments:String;
  idate:Date;
  icarid:String;
  istaffid:String;
  date:String;
  time:String;

  onSubmit(data:NgForm)
  {
    this.ireadings = [data.value][0].ireadings;
    this.icomments = [data.value][0].icomments;
    this.idate = new Date();

    this.date = this.idate.getFullYear()+'-'+(this.idate.getMonth()+1)+'-'+this.idate.getDate();
    this.time = this.idate.getHours() + ":" + this.idate.getMinutes() + ":" + this.idate.getSeconds();

    this.mydata = [
      {
        ireadings:this.ireadings,
        icomments:this.icomments,
        idate:this.date,
        itime:this.time,
        istaffid:this.istaffid,
        icarid:this.icarid
      }
    ];
    console.log(this.mydata[0]);

    if(this.ireadings === null || this.icomments === '' || [data.value][0].ireadings ==='')
    {
      alert('Fill up the form to continue!!');
    }
    else
    {
      this.apiservice.vjasinsertissue(this.mydata[0]).subscribe((response:any)=>{
        console.log(response);
        if([response].length > 0)
        {
          alert('Vehicle Issue Registered!!');
          localStorage.removeItem('cid');
          this.router.navigateByUrl('/staffhome');
        }
      });
    }
  }

  ngOnInit() {
    const userid = localStorage.getItem('uid');
    const userrole = localStorage.getItem('uroleid')
    const carid = localStorage.getItem('cid');

    console.log('User ID :'+userid);
    console.log('User Role: '+userrole);
    console.log('Car ID: '+carid);
    
    this.icarid = carid;
    this.istaffid = userid;

    if(userid === null )
    {
      this.router.navigateByUrl('');
    }
    else if(parseInt(userrole) != 1)
    {
      this.router.navigateByUrl('');
    }
    else if(carid === null)
    {
      this.router.navigateByUrl('/staffhome');
    }
  
  }

  logout()
  {
    localStorage.removeItem('uid');
    localStorage.removeItem('uroleid');
    this.router.navigateByUrl('');
  }

}
