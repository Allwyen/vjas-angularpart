import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.css']
})
export class ViewtaskComponent implements OnInit {

  constructor(private router:Router,private apiservice:ApiService) { }

  myuserid:Array<object> = [];
  mydata:Array<object> = [];
  assigndata:Array<object> = [];
  jstatusdata:Array<object> = [];
  cownerdata:Array<object> = [];
  
  coemail:String;
  coname:String;

  updateassignstatus(x,y,z)
  { 
    console.log("Assign_ID: "+x+" Assign_Status: "+y); 
    var aid = x;
    var astatus = parseInt(y);
    var astaffid = z;

    this.assigndata = [{aid:aid,astatus:astatus}]
    console.log(this.assigndata);
    
    this.jstatusdata = [{astaffid:astaffid}];

    if(astatus == 1)
    {
      this.apiservice.vjasupdateastatus(this.assigndata[0]).subscribe((response:any)=>{
        console.log(response);
        alert('This work is now in ongong state');
      });
    }
    else if(astatus == 2)
    {
      this.apiservice.vjasupdateastatus(this.assigndata[0]).subscribe((response:any)=>{
        console.log(response);

        if([response].length > 0)
        {
          this.apiservice.vjasrevokejstatus(this.jstatusdata[0]).subscribe((response:any)=>{
            console.log(response);
            
            if([response].length > 0)
            {
              alert('Assigned task Completed!!');
              this.cownerdata = [{coemail:this.coemail,coname:this.coname}];
              console.log(this.cownerdata);

              this.apiservice.vjascownersendemail(this.cownerdata[0]).subscribe((response:any)=>{
                console.log(response);
                alert('Email notification has been sent!!');
                this.router.navigateByUrl('/mechanichome');
              });
            }
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
    else if(parseInt(userrole) != 2)
    {
      this.router.navigateByUrl('');
    }

    this.myuserid = [{myuserid:userid}];

    this.apiservice.vjasviewmechanictask(this.myuserid[0]).subscribe((response:any)=>{
      if(response.length == 0)
      {
        alert('No new task available yet!!');
      }
      else
      {
        for(var i=0;i<response.length;i++)
        {
          if(response[i].astatus == 0)
          {
            response[i].astatus = "Assigned to staff";
          }
          else if(response[i].astatus == 1)
          {
            response[i].astatus = "Work Ongoing";
          }
          else if(response[i].astatus == 2)
          {
            response[i].astatus = "Completed";
          }
        }
        this.mydata = response;
        console.log(this.mydata);
    
        this.coemail = response[0].cars[0].coemail;
        this.coname = response[0].cars[0].coname;
      }
      
    });

  }

  logout()
  {
    localStorage.removeItem('uid');
    localStorage.removeItem('uroleid');
    this.router.navigateByUrl('');
  }

}
