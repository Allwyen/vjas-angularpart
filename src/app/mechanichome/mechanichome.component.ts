import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-mechanichome',
  templateUrl: './mechanichome.component.html',
  styleUrls: ['./mechanichome.component.css']
})
export class MechanichomeComponent implements OnInit {

  constructor(private router:Router,private apiservice:ApiService) { }

  mydata:Array<object> = [];
  
  myuserid:Array<object> = [];
  uid:String;

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

    this.uid = userid;
    this.myuserid = [{uid:userid}];

    this.apiservice.vjasgetuser(this.myuserid[0]).subscribe((response:any)=>{
      this.mydata=response;
    });


  }
  logout()
  {
    localStorage.removeItem('uid');
    localStorage.removeItem('uroleid');
    this.router.navigateByUrl('');
  }
}
