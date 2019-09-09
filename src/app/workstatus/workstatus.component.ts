import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-workstatus',
  templateUrl: './workstatus.component.html',
  styleUrls: ['./workstatus.component.css']
})
export class WorkstatusComponent implements OnInit {

  constructor(private router:Router,private apiservice:ApiService) { }

  status = true;

  mycarno:Array<object> = [];
  mydata:Array<object> = [];
  mycarid:Array<object> = [];

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
            this.mycarno = [{acarid:[response][0]._id}];

            this.apiservice.vjasworkstatussearch(this.mycarno[0]).subscribe((response:any)=>{
              console.log(response);
      
              for(var i=0;i<response.length;i++)
              {
                if(response[i].astatus == null)
                {
                  response[i].astatus = "Staff Not Assigned";
                }
                else if(response[i].astatus == 0)
                {
                  response[i].astatus = "Assigned Staff";
                }
                else if(response[i].astatus == 1)
                {
                  response[i].astatus = "Work Ongoing"
                }
                else if(response[i].astatus == 2)
                {
                  response[i].astatus = "Completed"
                }
              }
              this.mydata = response;
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

    if(userid === null)
    {
      this.router.navigateByUrl('');
    }
    else if(parseInt(userrole) != 0)
    {
      this.router.navigateByUrl('');
    }

    this.apiservice.vjasworkstatus().subscribe((response:any)=>{
      console.log(response);
      for(var i=0;i<response.length;i++)
      {
        if(response[i].astatus == null)
        {
          response[i].astatus = "Staff Not Assigned";
        }
        else if(response[i].astatus == 0)
        {
          response[i].astatus = "Assigned Staff";
        }
        else if(response[i].astatus == 1)
        {
          response[i].astatus = "Work Ongoing"
        }
        else if(response[i].astatus == 2)
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
