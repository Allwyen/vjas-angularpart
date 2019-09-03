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

  status=false;

  mydata:Array<object> = [];
  
  onSubmit(data:NgForm)
  {

    if(data.value.cregno === '')
    {
      this.status=false;
      alert('Enter a Registration Number to search!!')
    }
    else
    {
      this.apiservice.vjasviewcar(data.value).subscribe((response:any)=>{
        
        //console.log([response][0]._id);
        if([response].length > 0)
        {
          if([response][0]._id)
          {
            this.status = true;
            this.mydata = [response];
          }
          this.status = false;
        }
      });
    }
    
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
