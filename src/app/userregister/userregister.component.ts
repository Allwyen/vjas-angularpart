import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {

  constructor(private apiservice:ApiService) { }

  getpwd= '';
  getcpwd = '';
  getmobile ='';
  onSubmit(data:NgForm)
  {
    console.log(data.value);

    this.getpwd = data.value.upass;
    this.getcpwd = data.value.ucpass;
    this.getmobile = data.value.umobile;

    const validEmailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const mobilepattern = /[0-9\+\-\ ]/;

    if(data.value.fname == ''||data.value.umobile == ''||data.value.uname == ''||data.value.uaddress == ''||data.value.uemail == ''||data.value.upass == ''||data.value.ucpass == '')
    {
      alert('Please fill all fileds!!');
    }
    else if(this.getpwd != this.getcpwd )
    {
      alert("Passwords don't match");
    }
    else if(!(validEmailRegEx.test(data.value.uemail)))
    {
      alert('Email Format Not Correct!!')
    }
    else if(!(mobilepattern.test(data.value.umobile)))
    {
      alert('Mobile Format Not Correct!!');
    }
    else if(this.getmobile.length <10 || this.getmobile.length > 10)
    {
      alert('Enter a 10 digit Mobile No!!');
    }
    else
    {
      this.apiservice.vjasregister(data.value).subscribe((response:any)=>{
        var result = response as string [];
        console.log(result);
        alert(result);
      });
    } 
  }

  ngOnInit() {
  }

}
