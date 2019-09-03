import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
@Component({
  selector: 'app-staffhome',
  templateUrl: './staffhome.component.html',
  styleUrls: ['./staffhome.component.css']
})
export class StaffhomeComponent implements OnInit {

  constructor(private router:Router) { }

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
