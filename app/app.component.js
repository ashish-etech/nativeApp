"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("./shared/user/user");
var page_1 = require("ui/page");
var user_service_1 = require("./shared/user/user.service");
var AppComponent = (function () {
    function AppComponent(page, userService) {
        this.page = page;
        this.userService = userService;
        this.isLoggin = true;
        page.backgroundImage = "res://bg_inner";
        this.user = new user_1.User();
    }
    AppComponent.prototype.submit = function () {
        if (!this.user.email || !this.user.password) {
            alert("please fill all field");
        }
        else {
            if (this.isLoggin) {
                this.login();
            }
            else {
                this.signUp();
            }
        }
    };
    ;
    AppComponent.prototype.login = function () {
        this.userService.login(this.user);
    };
    ;
    AppComponent.prototype.signUp = function () {
        this.userService.register(this.user);
    };
    AppComponent.prototype.toggle = function () {
        this.isLoggin = !this.isLoggin;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [user_service_1.UserService],
        templateUrl: "pages/login/login.html",
        styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
    }),
    __metadata("design:paramtypes", [page_1.Page, user_service_1.UserService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMkNBQTBDO0FBQzFDLGdDQUErQjtBQUMvQiwyREFBeUQ7QUFTekQsSUFBYSxZQUFZO0lBd0JyQixzQkFBb0IsSUFBUyxFQUFTLFdBQXVCO1FBQXpDLFNBQUksR0FBSixJQUFJLENBQUs7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQXRCN0QsYUFBUSxHQUFDLElBQUksQ0FBQztRQXVCVixJQUFJLENBQUMsZUFBZSxHQUFHLGdCQUFnQixDQUFDO1FBQ3hDLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxXQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBeEJELDZCQUFNLEdBQU47UUFDRixFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFTLENBQUMsQ0FBQSxDQUFDO1lBQzVDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO1FBQy9CLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQSxDQUFDO2dCQUNkLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNqQixDQUFDO1lBQUEsSUFBSSxDQUFBLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO1lBQ2pCLENBQUM7UUFDUixDQUFDO0lBQ0MsQ0FBQztJQUFBLENBQUM7SUFDRiw0QkFBSyxHQUFMO1FBQ0YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFBQSxDQUFDO0lBQ0YsNkJBQU0sR0FBTjtRQUVJLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsNkJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ2pDLENBQUM7SUFLTCxtQkFBQztBQUFELENBQUMsQUE1QkQsSUE0QkM7QUE1QlksWUFBWTtJQVB4QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztRQUN4QixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixFQUFDLHVCQUF1QixDQUFDO0tBQ3BFLENBQUM7cUNBMEIyQixXQUFJLEVBQXFCLDBCQUFXO0dBeEJwRCxZQUFZLENBNEJ4QjtBQTVCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vc2hhcmVkL3VzZXIvdXNlclwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXSxcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbG9naW4vbG9naW4uaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2xvZ2luL2xvZ2luLWNvbW1vbi5jc3NcIixcInBhZ2VzL2xvZ2luL2xvZ2luLmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgdXNlcjpVc2VyO1xuICAgIGlzTG9nZ2luPXRydWU7XG4gICAgc3VibWl0KCkge1xuXHRcdGlmKCF0aGlzLnVzZXIuZW1haWwgfHwgIXRoaXMudXNlci5wYXNzd29yZCApe1xuXHRcdFx0YWxlcnQoXCJwbGVhc2UgZmlsbCBhbGwgZmllbGRcIilcblx0XHR9ZWxzZXtcblx0ICAgICAgICBpZih0aGlzLmlzTG9nZ2luKXtcblx0ICAgICAgICAgICAgdGhpcy5sb2dpbigpO1xuXHQgICAgICAgIH1lbHNle1xuXHQgICAgICAgICAgICB0aGlzLnNpZ25VcCgpXG5cdCAgICAgICAgfVxuXHRcdH1cbiAgICB9O1xuICAgIGxvZ2luKCl7XG5cdFx0dGhpcy51c2VyU2VydmljZS5sb2dpbih0aGlzLnVzZXIpO1xuICAgIH07XG4gICAgc2lnblVwKCl7XG5cbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5yZWdpc3Rlcih0aGlzLnVzZXIpO1xuICAgIH1cbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIHRoaXMuaXNMb2dnaW49IXRoaXMuaXNMb2dnaW47XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTpQYWdlLHByaXZhdGUgdXNlclNlcnZpY2U6VXNlclNlcnZpY2UpIHtcbiAgICAgICAgcGFnZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInJlczovL2JnX2lubmVyXCI7XG4gICAgICAgIHRoaXMudXNlcj1uZXcgVXNlcigpO1xuICAgIH1cbn1cbiJdfQ==