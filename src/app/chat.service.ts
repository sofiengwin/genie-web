import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response } from "@angular/http"
import { Ichat } from "./ichat"
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ChatService{
  token: number

  constructor(private _http: Http) { 
    this.token = Math.floor(Math.random() * 100000000)
  }

  sendToGenie(message: string): Observable<any> {
    let url = "https://genie-api.eu-gb.mybluemix.net/api/v1/conversations/web_mobile"
    let body = JSON.stringify({ message: message, token: this.token });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post(url, body, options)
      .map((response: Response) => <any> response.json())
      .do(data => console.log("received message" + JSON.stringify(data)))
      .catch(this.handleError)
  }


  handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || "Server Error"); 
  }
}
