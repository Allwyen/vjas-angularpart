import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    const userid = localStorage.getItem('uid');
    console.log('User ID :'+userid);

    if(userid === null)
    {
      this.router.navigateByUrl('');
    }
  }

  logout()
  {
    localStorage.removeItem('uid');
    this.router.navigateByUrl('');
  }

}
