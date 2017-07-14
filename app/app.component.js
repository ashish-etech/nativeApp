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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMkNBQTBDO0FBQzFDLGdDQUErQjtBQUMvQiwyREFBeUQ7QUFXekQsSUFBYSxZQUFZO0lBd0JyQixzQkFBb0IsSUFBUyxFQUFTLFdBQXVCO1FBQXpDLFNBQUksR0FBSixJQUFJLENBQUs7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQXRCN0QsYUFBUSxHQUFDLElBQUksQ0FBQztRQXVCVixJQUFJLENBQUMsZUFBZSxHQUFHLGdCQUFnQixDQUFDO1FBQ3hDLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxXQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBeEJELDZCQUFNLEdBQU47UUFDRixFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFTLENBQUMsQ0FBQSxDQUFDO1lBQzVDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO1FBQy9CLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQSxDQUFDO2dCQUNkLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNqQixDQUFDO1lBQUEsSUFBSSxDQUFBLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO1lBQ2pCLENBQUM7UUFDUixDQUFDO0lBQ0MsQ0FBQztJQUFBLENBQUM7SUFDRiw0QkFBSyxHQUFMO1FBQ0YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFBQSxDQUFDO0lBQ0YsNkJBQU0sR0FBTjtRQUVJLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsNkJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ2pDLENBQUM7SUFLTCxtQkFBQztBQUFELENBQUMsQUE1QkQsSUE0QkM7QUE1QlksWUFBWTtJQVB4QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztRQUN4QixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixFQUFDLHVCQUF1QixDQUFDO0tBQ3BFLENBQUM7cUNBMEIyQixXQUFJLEVBQXFCLDBCQUFXO0dBeEJwRCxZQUFZLENBNEJ4QjtBQTVCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vc2hhcmVkL3VzZXIvdXNlclwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2VdLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9sb2dpbi9sb2dpbi5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvbG9naW4vbG9naW4tY29tbW9uLmNzc1wiLFwicGFnZXMvbG9naW4vbG9naW4uY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICB1c2VyOlVzZXI7XG4gICAgaXNMb2dnaW49dHJ1ZTtcbiAgICBzdWJtaXQoKSB7XG5cdFx0aWYoIXRoaXMudXNlci5lbWFpbCB8fCAhdGhpcy51c2VyLnBhc3N3b3JkICl7XG5cdFx0XHRhbGVydChcInBsZWFzZSBmaWxsIGFsbCBmaWVsZFwiKVxuXHRcdH1lbHNle1xuXHQgICAgICAgIGlmKHRoaXMuaXNMb2dnaW4pe1xuXHQgICAgICAgICAgICB0aGlzLmxvZ2luKCk7XG5cdCAgICAgICAgfWVsc2V7XG5cdCAgICAgICAgICAgIHRoaXMuc2lnblVwKClcblx0ICAgICAgICB9XG5cdFx0fVxuICAgIH07XG4gICAgbG9naW4oKXtcblx0XHR0aGlzLnVzZXJTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcik7XG4gICAgfTtcbiAgICBzaWduVXAoKXtcblxuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMudXNlcik7XG4gICAgfVxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgdGhpcy5pc0xvZ2dpbj0hdGhpcy5pc0xvZ2dpbjtcbiAgICB9XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOlBhZ2UscHJpdmF0ZSB1c2VyU2VydmljZTpVc2VyU2VydmljZSkge1xuICAgICAgICBwYWdlLmJhY2tncm91bmRJbWFnZSA9IFwicmVzOi8vYmdfaW5uZXJcIjtcbiAgICAgICAgdGhpcy51c2VyPW5ldyBVc2VyKCk7XG4gICAgfVxufVxuIl19