import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-mechcompletedtask',
  templateUrl: './mechcompletedtask.component.html',
  styleUrls: ['./mechcompletedtask.component.css']
})
export class MechcompletedtaskComponent implements OnInit {

  constructor(private router:Router,private apiservice:ApiService) { }

  status = true;

  myuserid:Array<object> = [];
  mydata:Array<object> = [];
  mycarid:Array<object> = [];

  staffid:String;
  carid:String;
  
  onSubmit(data:NgForm)
  {
    if(data.value.cregno == "")
    {
      alert('Please Input a value!!');
    }
    else
    {
      this.carid = data.value.cregno;
      this.mycarid = [{cregno:this.carid}];

      this.apiservice.vjasviewcar(this.mycarid[0]).subscribe((response:any)=>{
        if([response].length > 0)
        {
          if(!response)
          {
            alert('No data found!!');
          }
          else
          {
            this.myuserid = [{astaffid:this.staffid,acarid:[response][0]._id}];

            this.apiservice.vjasmechcompletedtasksearch(this.myuserid[0]).subscribe((response:any)=>{
              console.log(response.length);

              if(response.length > 0)
              {

                for(var i=0;i<response.length ; i++)
                  {
                    if(response[i].astatus == 2)
                    {
                      response[i].astatus = "Completed"
                    }
                  }
                  this.mydata = response;
              }
              else
              {
                alert('No data found!!');
              }
              
            });
          }
        }
      });
    }
  }

  ngOnInit() {

    const userid = localStorage.getItem('uid');
    const userrole = localStorage.getItem('uroleid')
    console.log('User ID :'+userid);

    this.staffid = userid;

    if(userid === null)
    {
      this.router.navigateByUrl('');
    }
    else if(parseInt(userrole) != 2)
    {
      this.router.navigateByUrl('');
    }

    this.myuserid = [{astaffid:userid}];

    this.apiservice.vjasmechcompletedtask(this.myuserid[0]).subscribe((response:any)=>{
      console.log(response);
      for(var i=0;i<response.length ; i++)
      {
        if(response[i].astatus == 2)
        {
          response[i].astatus = "Completed"
        }
      }
      this.mydata = response;
    });
  }

  logout()
  {
    localStorage.removeItem('uid');
    localStorage.removeItem('uroleid');
    this.router.navigateByUrl('');
  }

}
