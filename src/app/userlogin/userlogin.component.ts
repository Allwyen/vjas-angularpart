import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  constructor(private apiservice:ApiService,private router:Router) { }

  onSubmit(data:NgForm)
  {
    console.log(data.value);
    this.apiservice.vjaslogin(data.value).subscribe((response:any)=>{

      if(response.length>0)
      {

        console.log(response[0]);
        
        if(response[0].urole == 0)
        {
          alert('Login Successfull!!');

          const uid = response[0]._id;
          //localStorage.setItem('uid',uid);

          this.router.navigateByUrl('adminhome');
        }
        else if(response[0].urole == 1)
        {
          this.router.navigateByUrl('staffhome');
        }
        else if(response[0].urole == 2)
        {
          this.router.navigateByUrl('mechanichome');
        }
        else if(response[0].urole == null)
        {
          alert('Admin approval needed!!');
        }

      }
      else
      {
        alert('Login UnSuccessfull!!');
      }

    });
  }

  ngOnInit() {
  }

}
