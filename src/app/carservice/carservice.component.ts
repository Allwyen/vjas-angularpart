import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-carservice',
  templateUrl: './carservice.component.html',
  styleUrls: ['./carservice.component.css']
})
export class CarserviceComponent implements OnInit {

  constructor(private router:Router,private apiservice:ApiService) { }

  status=true;

  mydata:Array<object> = [];
  
  onSubmit(data:NgForm)
  {

    if(data.value.cregno === '')
    {
      this.status=true;
      alert('Enter a Registration Number to search!!');
    }
    else
    {
      this.apiservice.vjasviewcar(data.value).subscribe((response:any)=>{
        
        console.log([response].length);
        
        if([response].length > 0)
        {
          if(!response)
          {
            this.status=true;
            alert('Car details Not Found!! Open New JobCard');
          }
          else
          {
            this.status=false;
            this.mydata=[response];
          }
        }
      });
    }
    
  }

  updatecar()
  {
    console.log(this.mydata[0]);
    this.apiservice.vjasupdatecar(this.mydata[0]).subscribe((response:any)=>{
      console.log(response);
      if(!response)
      {
        alert('Update Unsuccessfull!!');
      }
      else
      {
        alert('Updated Successfully!!');
      }
    });
  }

  ngOnInit() {
    const userid = localStorage.getItem('uid');
    const userrole = localStorage.getItem('uroleid')
    console.log('User ID :'+userid);

    if(userid === null )
    {
      this.router.navigateByUrl('');
    }
    else if(parseInt(userrole) != 1)
    {
      this.router.navigateByUrl('');
    }
  }

  logout()
  {
    localStorage.removeItem('uid');
    localStorage.removeItem('uroleid');
    this.router.navigateByUrl('');
  }

}
