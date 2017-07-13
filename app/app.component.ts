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
        console.log("email:"+ this.user.email+"\n Pass: "+ this.user.password);
        if(this.isLoggin){
            this.login();
        }
        else{
            this.signUp()
        }
    };
    login(){
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