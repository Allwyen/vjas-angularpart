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

  onSubmit(data:NgForm)
  {
    console.log(data.value);
    this.apiservice.vjasregister(data.value).subscribe((response:any)=>{
      var result = response as string [];
      console.log(result);
      alert(result);
    });
  }

  ngOnInit() {
  }

}
