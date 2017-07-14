import { Injectable } from "@angular/core";
import { User } from "./user";
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do" ;
import "rxjs/add/operator/map" ;

@Injectable()

export class UserService{

	constructor(private http:Http){}

    register(user:User){
	console.log("registartion success");

		this.http.get('http://asrui.000webhostapp.com/angularForm/fetch.php')
			 .map(res=> console.log(res))
    }
	login(user:User){
        alert("login success: " + user.email);
		console.log("login success");
    };

}
