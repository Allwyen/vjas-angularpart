import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-userapproval',
  templateUrl: './userapproval.component.html',
  styleUrls: ['./userapproval.component.css']
})
export class UserapprovalComponent implements OnInit {

  constructor(private apiservice:ApiService) { }

  mydata:Array<object> = [];

  ngOnInit() {
    this.apiservice.vjasviewuser().subscribe((response:Array<object>)=>{
      console.log(response);
      this.mydata=response;
    });
  }

}
