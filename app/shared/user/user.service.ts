import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import { User } from "./user";
import { Config } from "../config";

@Injectable()
export class UserService {
  constructor(private http: Http) {}

  register(user: User) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    return this.http.post(
      "https://asrui.000webhostapp.com/insert.php",
      user,
      { headers: headers }
    )
    .catch(this.handleErrors);
  };

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }

  getData(){
  return this.http.get("https://asrui.000webhostapp.com/get.php")
	 	 	.catch(this.handleErrors);
  }
}
