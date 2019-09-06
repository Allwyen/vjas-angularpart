import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  /* Login,Registration and Forgot Password*/

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

  /* Admin Section */

  vjasviewuser()
  {
    return this.http.get("http://localhost:5566/vjasviewuser");
  }

  vjasuserstatus(data)
  {
    return this.http.post("http://localhost:5566/vjasuserstatus",data);
  }

  /* Staff Section */

  vjasviewcar(data)
  {
    return this.http.post("http://localhost:5566/vjasviewcar",data);
  }

  vjasinsertcar(data)
  {
    return this.http.post("http://localhost:5566/vjasinsertcar",data);
  }

  vjasupdatecar(data)
  {
    return this.http.post("http://localhost:5566/vjasupdatecar",data);
  }

  vjasinsertissue(data)
  {
    return this.http.post("http://localhost:5566/vjasinsertissue",data);
  }

  vjasviewmechanic()
  {
    return this.http.get("http://localhost:5566/vjasviewmechanic");
  }

  vjasviewcarassign(data)
  {
    return this.http.post("http://localhost:5566/vjasviewcarassign",data);
  }

  vjasinsertcarassign(data)
  {
    return this.http.post("http://localhost:5566/vjasinsertcarassign",data);
  }

  vjasupdatejstatus(data)
  {
    return this.http.post("http://localhost:5566/vjasupdatejstatus",data);
  }

  /* Mechanic Section */

  vjasviewmechanictask(data)
  {
    return this.http.post("http://localhost:5566/vjasviewmechanictask",data);
  }
}
