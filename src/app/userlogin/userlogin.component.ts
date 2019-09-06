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
          const uroleid = response[0].urole;
          
          localStorage.setItem('uid',uid);
          localStorage.setItem('uroleid',uroleid);

          this.router.navigateByUrl('adminhome');
        }
        else if(response[0].urole == 1)
        {
          alert('Login Successfull!!');

          const uid = response[0]._id;
          const uroleid = response[0].urole;

          localStorage.setItem('uid',uid);
          localStorage.setItem('uroleid',uroleid);

          this.router.navigateByUrl('staffhome');
        }
        else if(response[0].urole == 2)
        {
          alert('Login Successfull!!');

          const uid = response[0]._id;
          const uroleid = response[0].urole;

          localStorage.setItem('uid',uid);
          localStorage.setItem('uroleid',uroleid);

          this.router.navigateByUrl('mechanichome');
        }
        else if(response[0].urole == 3)
        {
          alert('Removed User!!Cannot access this site');
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
