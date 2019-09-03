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
  searchregno:Array<object>=[];

  searchcar(cregno)
  {
    this.searchregno = [{cregno:cregno}];

    this.apiservice.vjasviewcar(this.searchregno[0]).subscribe((response)=>{
      console.log(response);
      console.log([response].length);
      if([response].length > 0)
      {
        this.status=true;
        this.mydata=[response];
      }
      else
      {
        this.status=false;
      }
    });
  }

  onSubmit(data:NgForm)
  {
    console.log(data.value);
    this.apiservice.vjasinsertcar(data.value).subscribe((response:any)=>{
      var result = response as string [];
      console.log(result);
      alert(result);
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
