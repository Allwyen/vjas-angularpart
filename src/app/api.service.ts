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
    return this.http.post("https://vjas-nodejs.herokuapp.com/vjasregister",data);
  }

  vjaslogin(data)
  {
    return this.http.post("https://vjas-nodejs.herokuapp.com/vjaslogin",data);
  }

  vjasforgotpwd(data)
  {
    return this.http.post("https://vjas-nodejs.herokuapp.com/vjasforgotpwd",data);
  }

  vjasgetuser(data)
  {
    return this.http.post("https://vjas-nodejs.herokuapp.com/vjasgetuser",data);
  }

  /* Admin Section */

  vjasviewuser()
  {
    return this.http.get("https://vjas-nodejs.herokuapp.com/vjasviewuser");
  }

  vjasuserstatus(data)
  {
    return this.http.post("https://vjas-nodejs.herokuapp.com/vjasuserstatus",data);
  }

  vjaspendingcar()
  {
    return this.http.get("https://vjas-nodejs.herokuapp.com/vjaspendingcar");
  }

  vjasworkstatus()
  {
    return this.http.get("https://vjas-nodejs.herokuapp.com/vjasworkstatus");
  }

  vjasworkstatussearch(data)
  {
    return this.http.post("https://vjas-nodejs.herokuapp.com/vjasworkstatussearch",data);
  }

  /* Staff Section */

  vjasviewcar(data)
  {
    return this.http.post("https://vjas-nodejs.herokuapp.com/vjasviewcar",data);
  }

  vjasinsertcar(data)
  {
    return this.http.post("https://vjas-nodejs.herokuapp.com/vjasinsertcar",data);
  }

  vjasupdatecar(data)
  {
    return this.http.post("https://vjas-nodejs.herokuapp.com/vjasupdatecar",data);
  }

  vjasinsertissue(data)
  {
    return this.http.post("https://vjas-nodejs.herokuapp.com/vjasinsertissue",data);
  }

  vjasviewmechanic()
  {
    return this.http.get("https://vjas-nodejs.herokuapp.com/vjasviewmechanic");
  }

  vjasviewcarassign(data)
  {
    return this.http.post("https://vjas-nodejs.herokuapp.com/vjasviewcarassign",data);
  }

  vjasinsertcarassign(data)
  {
    return this.http.post("https://vjas-nodejs.herokuapp.com/vjasinsertcarassign",data);
  }

  vjasupdatejstatus(data)
  {
    return this.http.post("https://vjas-nodejs.herokuapp.com/vjasupdatejstatus",data);
  }

  /* Mechanic Section */

  vjasviewmechanictask(data)
  {
    return this.http.post("https://vjas-nodejs.herokuapp.com/vjasviewmechanictask",data);
  }

  vjasupdateastatus(data)
  {
    return this.http.post("https://vjas-nodejs.herokuapp.com/vjasupdateastatus",data);
  }

  vjasrevokejstatus(data)
  {
    return this.http.post("https://vjas-nodejs.herokuapp.com/vjasrevokejstatus",data);
  }

  vjascownersendemail(data)
  {
    return this.http.post("https://vjas-nodejs.herokuapp.com/vjascownersendemail",data);
  }

  vjasmechcompletedtask(data)
  {
    return this.http.post("https://vjas-nodejs.herokuapp.com/vjasmechcompletedtask",data);
  }

  vjasmechcompletedtasksearch(data)
  {
    return this.http.post("https://vjas-nodejs.herokuapp.com/vjasmechcompletedtasksearch",data);
  }
}
