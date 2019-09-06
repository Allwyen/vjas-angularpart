import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mechanichome',
  templateUrl: './mechanichome.component.html',
  styleUrls: ['./mechanichome.component.css']
})
export class MechanichomeComponent implements OnInit {

  constructor(private router:Router) { }

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
  }
  logout()
  {
    localStorage.removeItem('uid');
    localStorage.removeItem('uroleid');
    this.router.navigateByUrl('');
  }
}
