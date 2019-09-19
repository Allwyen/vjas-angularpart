import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgotpwd',
  templateUrl: './forgotpwd.component.html',
  styleUrls: ['./forgotpwd.component.css']
})
export class ForgotpwdComponent implements OnInit {

  constructor(private apiservice:ApiService,private router:Router) { }

  getpwd= '';
  getcpwd = '';

  onSubmit(data:NgForm)
  {
    console.log(data.value);

    this.getpwd = data.value.upass;
    this.getcpwd = data.value.ucpass;

    if(data.value.uemail == '' ||data.value.upass == '' ||data.value.ucpass == '')
    {
      alert('Please fill all fields!!');
    }
    else if(this.getpwd != this.getcpwd )
    {
      alert("Passwords don't match");
    }
    else
    {
      this.apiservice.vjasforgotpwd(data.value).subscribe((response:any)=>{
        var result = response as string [];
        console.log(result);
        alert(result);
      });
    }
  }

  ngOnInit() {
  }

}
