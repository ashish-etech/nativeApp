"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../../shared/user/user");
var page_1 = require("ui/page");
var user_service_1 = require("../../shared/user/user.service");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(page, userService, router) {
        this.page = page;
        this.userService = userService;
        this.router = router;
        page.backgroundImage = "res://bg_inner";
        this.user = new user_1.User();
    }
    ;
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.submit = function () {
        if (!this.user.email || !this.user.password) {
            alert("All fields required!");
        }
        else {
            this.getRegister();
        }
    };
    ;
    LoginComponent.prototype.fetch = function () {
        console.log('login function gets call');
        this.userService.getData()
            .subscribe(function (res) { return console.dir(res.json()); }, function (err) { return console.log("Unfortunately we were unable to get data."); });
    };
    ;
    LoginComponent.prototype.getRegister = function () {
        var _this = this;
        this.userService.register(this.user)
            .subscribe(function (res) {
            console.log('registered', res.text());
            //alert(res.text());
            _this.router.navigate(["/list"]);
        }, function (err) {
            console.log("Unfortunately we were unable to create your account.");
            alert(err.text());
        });
    };
    ;
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [user_service_1.UserService],
        templateUrl: "./pages/login/login.html",
        styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
    }),
    __metadata("design:paramtypes", [page_1.Page, user_service_1.UserService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlEO0FBQ2pELCtDQUE4QztBQUM5QyxnQ0FBK0I7QUFDL0IsK0RBQTZEO0FBRTdELDBDQUF5QztBQWN6QyxJQUFhLGNBQWM7SUFHdkIsd0JBQW9CLElBQVMsRUFBUyxXQUF1QixFQUFVLE1BQWM7UUFBakUsU0FBSSxHQUFKLElBQUksQ0FBSztRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNqRixJQUFJLENBQUMsZUFBZSxHQUFHLGdCQUFnQixDQUFDO1FBQ3hDLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxXQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBQUEsQ0FBQztJQUNGLGlDQUFRLEdBQVI7SUFFQSxDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUNGLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVMsQ0FBQyxDQUFBLENBQUM7WUFDNUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUE7UUFDOUIsQ0FBQztRQUNLLElBQUksQ0FBQSxDQUFDO1lBQ0wsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQ3hCLENBQUM7SUFDQyxDQUFDO0lBQUEsQ0FBQztJQUVGLDhCQUFLLEdBQUw7UUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUE7UUFFdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUU7YUFDekIsU0FBUyxDQUNULFVBQUMsR0FBRyxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBdkIsQ0FBdUIsRUFDaEMsVUFBQyxHQUFHLElBQUssT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLEVBQXhELENBQXdELENBQ2pFLENBQUE7SUFFQyxDQUFDO0lBQUEsQ0FBQztJQUVGLG9DQUFXLEdBQVg7UUFBQSxpQkFZQztRQVhILElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDbkMsU0FBUyxDQUNULFVBQUMsR0FBRztZQUNTLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ3JDLG9CQUFvQjtZQUNwQixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxFQUFDLFVBQUMsR0FBRztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0RBQXNELENBQUMsQ0FBQztZQUNwRSxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUNKLENBQUE7SUFDTCxDQUFDO0lBQUEsQ0FBQztJQWlCTixxQkFBQztBQUFELENBQUMsQUE1REQsSUE0REM7QUE1RFksY0FBYztJQVAxQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztRQUN4QixXQUFXLEVBQUUsMEJBQTBCO1FBQ3ZDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixFQUFDLHVCQUF1QixDQUFDO0tBQ3BFLENBQUM7cUNBSzJCLFdBQUksRUFBcUIsMEJBQVcsRUFBa0IsZUFBTTtHQUg1RSxjQUFjLENBNEQxQjtBQTVEWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1xuICAgIEZvcm1CdWlsZGVyLFxuICAgIFZhbGlkYXRvcnNcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2VdLFxuICB0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzL2xvZ2luL2xvZ2luLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9sb2dpbi9sb2dpbi1jb21tb24uY3NzXCIsXCJwYWdlcy9sb2dpbi9sb2dpbi5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgICB1c2VyOlVzZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6UGFnZSxwcml2YXRlIHVzZXJTZXJ2aWNlOlVzZXJTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgICAgIHBhZ2UuYmFja2dyb3VuZEltYWdlID0gXCJyZXM6Ly9iZ19pbm5lclwiO1xuICAgICAgICB0aGlzLnVzZXI9bmV3IFVzZXIoKTtcbiAgICB9O1xuICAgIG5nT25Jbml0KCl7XG5cbiAgICB9XG5cbiAgICBzdWJtaXQoKSB7XG5cdFx0aWYoIXRoaXMudXNlci5lbWFpbCB8fCAhdGhpcy51c2VyLnBhc3N3b3JkICl7XG5cdFx0XHRhbGVydChcIkFsbCBmaWVsZHMgcmVxdWlyZWQhXCIpXG5cdFx0fVxuICAgICAgICBlbHNle1xuXHQgICAgICAgdGhpcy5nZXRSZWdpc3RlcigpXHQgICAgICAgIFxuXHRcdH1cbiAgICB9O1xuXG4gICAgZmV0Y2goKXtcblx0XHRjb25zb2xlLmxvZygnbG9naW4gZnVuY3Rpb24gZ2V0cyBjYWxsJylcblxuXHRcdHRoaXMudXNlclNlcnZpY2UuZ2V0RGF0YSgpXG5cdFx0LnN1YnNjcmliZShcblx0XHRcdChyZXMpID0+IGNvbnNvbGUuZGlyKHJlcy5qc29uKCkpLFxuXHRcdFx0KGVycikgPT4gY29uc29sZS5sb2coXCJVbmZvcnR1bmF0ZWx5IHdlIHdlcmUgdW5hYmxlIHRvIGdldCBkYXRhLlwiKVxuXHRcdClcblxuICAgIH07XG5cbiAgICBnZXRSZWdpc3Rlcigpe1xuXHRcdHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKVxuXHRcdC5zdWJzY3JpYmUoXG5cdFx0XHQocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZ2lzdGVyZWQnLHJlcy50ZXh0KCkpO1xuICAgICAgICAgICAgICAgIC8vYWxlcnQocmVzLnRleHQoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xpc3RcIl0pO1xuICAgICAgICAgICAgfSwoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVbmZvcnR1bmF0ZWx5IHdlIHdlcmUgdW5hYmxlIHRvIGNyZWF0ZSB5b3VyIGFjY291bnQuXCIpO1xuICAgICAgICAgICAgICAgIGFsZXJ0KGVyci50ZXh0KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfTtcblxuICAgIC8vbG9nSW4oKXtcbiAgICAgICAgLy90aGlzLnVzZXJTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcilcbiAgICAgICAgLy8uc3Vic2NyaWJlKFxuICAgICAgICAvLyAgIChyZXMpID0+IHtcbiAgICAgICAgICAvLyAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9saXN0XCJdKTtcbiAgICAgICAgICAvLyAgICAgIGNvbnNvbGUuZGlyKHJlcyk7XG5cbiAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgLy8gKGVycikgPT4ge1xuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJVbmZvcnR1bmF0ZWx5IHdlIHdlcmUgdW5hYmxlIHRvIGxvZ2luLlwiKTtcbiAgICAgICAgICAgIC8vICAgIGFsZXJ0KGVyci50ZXh0KCkpO1xuICAgICAgICAgICAvLyB9XG4gICAgICAgIC8vKVxuICAgIC8vfTtcblxufVxuIl19