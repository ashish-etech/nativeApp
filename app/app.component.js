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
        console.log("email:" + this.user.email + "\n Pass: " + this.user.password);
        if (this.isLoggin) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    ;
    AppComponent.prototype.login = function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMkNBQTBDO0FBQzFDLGdDQUErQjtBQUMvQiwyREFBeUQ7QUFPekQsSUFBYSxZQUFZO0lBb0JyQixzQkFBb0IsSUFBUyxFQUFTLFdBQXVCO1FBQXpDLFNBQUksR0FBSixJQUFJLENBQUs7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQWxCN0QsYUFBUSxHQUFDLElBQUksQ0FBQztRQW1CVixJQUFJLENBQUMsZUFBZSxHQUFHLGdCQUFnQixDQUFDO1FBQ3hDLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxXQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBcEJELDZCQUFNLEdBQU47UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxXQUFXLEdBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2RSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUEsQ0FBQztZQUNkLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqQixDQUFDO1FBQ0QsSUFBSSxDQUFBLENBQUM7WUFDRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7UUFDakIsQ0FBQztJQUNMLENBQUM7SUFBQSxDQUFDO0lBQ0YsNEJBQUssR0FBTDtJQUNBLENBQUM7SUFBQSxDQUFDO0lBQ0YsNkJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsNkJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ2pDLENBQUM7SUFLTCxtQkFBQztBQUFELENBQUMsQUF4QkQsSUF3QkM7QUF4QlksWUFBWTtJQU54QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztRQUN4QixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixFQUFDLHVCQUF1QixDQUFDO0tBQ3BFLENBQUM7cUNBcUIyQixXQUFJLEVBQXFCLDBCQUFXO0dBcEJwRCxZQUFZLENBd0J4QjtBQXhCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vc2hhcmVkL3VzZXIvdXNlclwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICBwcm92aWRlcnM6IFtVc2VyU2VydmljZV0sXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xvZ2luL2xvZ2luLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9sb2dpbi9sb2dpbi1jb21tb24uY3NzXCIsXCJwYWdlcy9sb2dpbi9sb2dpbi5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICB1c2VyOlVzZXI7XG4gICAgaXNMb2dnaW49dHJ1ZTtcbiAgICBzdWJtaXQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZW1haWw6XCIrIHRoaXMudXNlci5lbWFpbCtcIlxcbiBQYXNzOiBcIisgdGhpcy51c2VyLnBhc3N3b3JkKTtcbiAgICAgICAgaWYodGhpcy5pc0xvZ2dpbil7XG4gICAgICAgICAgICB0aGlzLmxvZ2luKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRoaXMuc2lnblVwKClcbiAgICAgICAgfVxuICAgIH07XG4gICAgbG9naW4oKXtcbiAgICB9O1xuICAgIHNpZ25VcCgpe1xuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMudXNlcik7XG4gICAgfVxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgdGhpcy5pc0xvZ2dpbj0hdGhpcy5pc0xvZ2dpbjtcbiAgICB9XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOlBhZ2UscHJpdmF0ZSB1c2VyU2VydmljZTpVc2VyU2VydmljZSkge1xuICAgICAgICBwYWdlLmJhY2tncm91bmRJbWFnZSA9IFwicmVzOi8vYmdfaW5uZXJcIjtcbiAgICAgICAgdGhpcy51c2VyPW5ldyBVc2VyKCk7XG4gICAgfVxufSJdfQ==