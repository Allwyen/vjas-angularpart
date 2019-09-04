import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-carissue',
  templateUrl: './carissue.component.html',
  styleUrls: ['./carissue.component.css']
})
export class CarissueComponent implements OnInit {

  constructor(private apiservice:ApiService,private router:Router) { }

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
