import { Component } from "@angular/core";
import { User } from "./shared/user/user";
import { Page } from "ui/page";
import { UserService } from "./shared/user/user.service";

@Component({
  selector: "my-app",
  providers: [UserService],
  templateUrl: "pages/login/login.html",
  styleUrls: ["pages/login/login-common.css","pages/login/login.css"]
})

export class AppComponent {
    user:User;
    isLoggin=true;
    submit() {
		if(!this.user.email || !this.user.password ){
			alert("please fill all field")
		}else{
	        if(this.isLoggin){
	            this.login();
	        }else{
	            this.signUp()
	        }
		}
    };
    login(){
		this.userService.login(this.user);
    };
    signUp(){

        this.userService.register(this.user);
    }
    toggle() {
        this.isLoggin=!this.isLoggin;
    }
    constructor(private page:Page,private userService:UserService) {
        page.backgroundImage = "res://bg_inner";
        this.user=new User();
    }
}
