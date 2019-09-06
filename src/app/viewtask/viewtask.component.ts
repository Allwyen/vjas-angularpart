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
      console.log(response);
    });

  }

  logout()
  {
    localStorage.removeItem('uid');
    localStorage.removeItem('uroleid');
    this.router.navigateByUrl('');
  }

}
