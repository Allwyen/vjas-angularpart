import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  vjasregister(data)
  {
    return this.http.post("http://localhost:5566/vjasregister",data);
  }

  vjaslogin(data)
  {
    return this.http.post("http://localhost:5566/vjaslogin",data);
  }

  vjasforgotpwd(data)
  {
    return this.http.post("http://localhost:5566/vjasforgotpwd",data);
  }
  vjasviewuser()
  {
    return this.http.get("http://localhost:5566/vjasviewuser");
  }
}
