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

  vjasgetuser(data)
  {
    return this.http.post("http://localhost:5566/vjasgetuser",data);
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

  vjaspendingcar()
  {
    return this.http.get("http://localhost:5566/vjaspendingcar");
  }

  vjasworkstatus()
  {
    return this.http.get("http://localhost:5566/vjasworkstatus");
  }

  vjasworkstatussearch(data)
  {
    return this.http.post("http://localhost:5566/vjasworkstatussearch",data);
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

  vjasupdateastatus(data)
  {
    return this.http.post("http://localhost:5566/vjasupdateastatus",data);
  }

  vjasrevokejstatus(data)
  {
    return this.http.post("http://localhost:5566/vjasrevokejstatus",data);
  }

  vjascownersendemail(data)
  {
    return this.http.post("http://localhost:5566/vjascownersendemail",data);
  }

  vjasmechcompletedtask(data)
  {
    return this.http.post("http://localhost:5566/vjasmechcompletedtask",data);
  }

  vjasmechcompletedtasksearch(data)
  {
    return this.http.post("http://localhost:5566/vjasmechcompletedtasksearch",data);
  }
}
