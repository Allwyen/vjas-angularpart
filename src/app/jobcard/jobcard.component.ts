import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-jobcard',
  templateUrl: './jobcard.component.html',
  styleUrls: ['./jobcard.component.css']
})
export class JobcardComponent implements OnInit {

  constructor(private router:Router,private apiservice:ApiService) { }

  mydata:Array<object> = [];

  getmobile = '';

  onSubmit(data:NgForm)
  {
    this.getmobile = data.value.comobile;

    const validEmailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const mobilepattern = /[0-9\+\-\ ]/;

    if(data.value.cregno == ''||data.value.cmodel == ''||data.value.ccno == ''||data.value.coname == ''||data.value.coemail == ''||data.value.comobile == '')
    {
      alert('Please fill form!!');
    }
    else if(!(validEmailRegEx.test(data.value.coemail)))
    {
      alert('Email Format Not Correct!!')
    }
    else if(!(mobilepattern.test(data.value.comobile)))
    {
      alert('Mobile Format Not Correct!!');
    }
    else if(this.getmobile.length <10 || this.getmobile.length > 10)
    {
      alert('Enter a 10 digit Mobile No!!');
    }
    else
    {
      this.apiservice.vjasinsertcar(data.value).subscribe((response:any)=>{
     
        console.log(response);
        if([response].length > 0)
        {
          if(!response)
          {
            alert('Registration/Chassis No already exists!!');
          }
          else
          {
            alert('New JobCard Created');
            var carid = response._id;
            console.log(carid);
            localStorage.setItem('cid',carid);
            this.router.navigateByUrl('/carissue');
          }
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
