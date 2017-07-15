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
        var _this = this;
        console.log('login function gets call');
        this.userService.log()
            .subscribe(function (res) {
            alert("you got data.");
            _this.toggle();
        }, function (err) { return alert("Unfortunately we were unable to get data."); });
    };
    ;
    AppComponent.prototype.signUp = function () {
        var _this = this;
        this.userService.register(this.user)
            .subscribe(function () {
            alert("Your account was successfully created.");
            _this.toggle();
        }, function () { return alert("Unfortunately we were unable to create your account."); });
    };
    AppComponent.prototype.toggle = function () {
        this.isLoggin = !this.isLoggin;
    };
    ;
    ;
    AppComponent.prototype.ngOnInit = function () {
        this.login();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMkNBQTBDO0FBQzFDLGdDQUErQjtBQUMvQiwyREFBeUQ7QUFXekQsSUFBYSxZQUFZO0lBc0NyQixzQkFBb0IsSUFBUyxFQUFTLFdBQXVCO1FBQXpDLFNBQUksR0FBSixJQUFJLENBQUs7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQXBDN0QsYUFBUSxHQUFDLElBQUksQ0FBQztRQXFDVixJQUFJLENBQUMsZUFBZSxHQUFHLGdCQUFnQixDQUFDO1FBQ3hDLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxXQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBdENELDZCQUFNLEdBQU47UUFDRixFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFTLENBQUMsQ0FBQSxDQUFDO1lBQzVDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO1FBQy9CLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQSxDQUFDO2dCQUNkLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNqQixDQUFDO1lBQUEsSUFBSSxDQUFBLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO1lBQ2pCLENBQUM7UUFDUixDQUFDO0lBQ0MsQ0FBQztJQUFBLENBQUM7SUFDRiw0QkFBSyxHQUFMO1FBQUEsaUJBV0M7UUFWSCxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUE7UUFFdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUU7YUFDckIsU0FBUyxDQUNULFVBQUMsR0FBRztZQUFPLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNqQyxLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZixDQUFDLEVBQ0QsVUFBQyxHQUFHLElBQUssT0FBQSxLQUFLLENBQUMsMkNBQTJDLENBQUMsRUFBbEQsQ0FBa0QsQ0FDM0QsQ0FBQTtJQUVDLENBQUM7SUFBQSxDQUFDO0lBQ0YsNkJBQU0sR0FBTjtRQUFBLGlCQVFDO1FBUEgsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNuQyxTQUFTLENBQ1Q7WUFBUSxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQztZQUN2RCxLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZixDQUFDLEVBQ0QsY0FBTSxPQUFBLEtBQUssQ0FBQyxzREFBc0QsQ0FBQyxFQUE3RCxDQUE2RCxDQUNuRSxDQUFBO0lBQ0MsQ0FBQztJQUNELDZCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNqQyxDQUFDO0lBQUEsQ0FBQztJQUlELENBQUM7SUFDTCwrQkFBUSxHQUFSO1FBQ0MsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQTdDRCxJQTZDQztBQTdDWSxZQUFZO0lBUHhCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO1FBQ3hCLFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsU0FBUyxFQUFFLENBQUMsOEJBQThCLEVBQUMsdUJBQXVCLENBQUM7S0FDcEUsQ0FBQztxQ0F3QzJCLFdBQUksRUFBcUIsMEJBQVc7R0F0Q3BELFlBQVksQ0E2Q3hCO0FBN0NZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi9zaGFyZWQvdXNlci91c2VyXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXSxcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbG9naW4vbG9naW4uaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2xvZ2luL2xvZ2luLWNvbW1vbi5jc3NcIixcInBhZ2VzL2xvZ2luL2xvZ2luLmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgdXNlcjpVc2VyO1xuICAgIGlzTG9nZ2luPXRydWU7XG4gICAgc3VibWl0KCkge1xuXHRcdGlmKCF0aGlzLnVzZXIuZW1haWwgfHwgIXRoaXMudXNlci5wYXNzd29yZCApe1xuXHRcdFx0YWxlcnQoXCJwbGVhc2UgZmlsbCBhbGwgZmllbGRcIilcblx0XHR9ZWxzZXtcblx0ICAgICAgICBpZih0aGlzLmlzTG9nZ2luKXtcblx0ICAgICAgICAgICAgdGhpcy5sb2dpbigpO1xuXHQgICAgICAgIH1lbHNle1xuXHQgICAgICAgICAgICB0aGlzLnNpZ25VcCgpXG5cdCAgICAgICAgfVxuXHRcdH1cbiAgICB9O1xuICAgIGxvZ2luKCl7XG5cdFx0Y29uc29sZS5sb2coJ2xvZ2luIGZ1bmN0aW9uIGdldHMgY2FsbCcpXG5cblx0XHR0aGlzLnVzZXJTZXJ2aWNlLmxvZygpXG5cdFx0LnN1YnNjcmliZShcblx0XHRcdChyZXMpID0+IHtcdGFsZXJ0KFwieW91IGdvdCBkYXRhLlwiKTtcblx0XHRcdFx0dGhpcy50b2dnbGUoKTtcblx0XHRcdH0sXG5cdFx0XHQoZXJyKSA9PiBhbGVydChcIlVuZm9ydHVuYXRlbHkgd2Ugd2VyZSB1bmFibGUgdG8gZ2V0IGRhdGEuXCIpXG5cdFx0KVxuXG4gICAgfTtcbiAgICBzaWduVXAoKXtcblx0XHR0aGlzLnVzZXJTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMudXNlcilcblx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0KCkgPT4ge1x0YWxlcnQoXCJZb3VyIGFjY291bnQgd2FzIHN1Y2Nlc3NmdWxseSBjcmVhdGVkLlwiKTtcblx0XHRcdFx0dGhpcy50b2dnbGUoKTtcblx0XHRcdH0sXG5cdFx0XHQoKSA9PiBhbGVydChcIlVuZm9ydHVuYXRlbHkgd2Ugd2VyZSB1bmFibGUgdG8gY3JlYXRlIHlvdXIgYWNjb3VudC5cIilcblx0XHQpXG4gICAgfVxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgdGhpcy5pc0xvZ2dpbj0hdGhpcy5pc0xvZ2dpbjtcbiAgICB9O1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTpQYWdlLHByaXZhdGUgdXNlclNlcnZpY2U6VXNlclNlcnZpY2UpIHtcbiAgICAgICAgcGFnZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInJlczovL2JnX2lubmVyXCI7XG4gICAgICAgIHRoaXMudXNlcj1uZXcgVXNlcigpO1xuICAgIH07XG5cdG5nT25Jbml0KCl7XG5cdFx0dGhpcy5sb2dpbigpO1xuXHRcdH1cbn1cbiJdfQ==