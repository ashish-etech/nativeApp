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
        this.isLoggin = true;
        page.backgroundImage = "res://bg_inner";
        this.user = new user_1.User();
    }
    ;
    LoginComponent.prototype.submit = function () {
        if (!this.user.email || !this.user.password) {
            alert("All fields required!");
        }
        else {
            if (this.isLoggin) {
                this.logIn();
            }
            else {
                this.signUp();
            }
        }
    };
    ;
    LoginComponent.prototype.fetch = function () {
        console.log('login function gets call');
        this.userService.getData()
            .subscribe(function (res) { return console.dir(res.json()); }, function (err) { return console.log("Unfortunately we were unable to get data."); });
    };
    ;
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        this.userService.register(this.user)
            .subscribe(function (res) {
            console.log(res.text());
            alert(res.text());
            _this.toggle();
        }, function (err) {
            console.log("Unfortunately we were unable to create your account.");
            alert(err.text());
        });
    };
    ;
    LoginComponent.prototype.logIn = function () {
        var _this = this;
        this.userService.login(this.user)
            .subscribe(function (res) {
            _this.router.navigate(["/list"]);
            console.dir(res);
        }, function (err) {
            console.log("Unfortunately we were unable to login.");
            alert(err.text());
        });
    };
    ;
    LoginComponent.prototype.toggle = function () {
        this.isLoggin = !this.isLoggin;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLCtDQUE4QztBQUM5QyxnQ0FBK0I7QUFDL0IsK0RBQTZEO0FBRTdELDBDQUF5QztBQVV6QyxJQUFhLGNBQWM7SUFJdkIsd0JBQW9CLElBQVMsRUFBUyxXQUF1QixFQUFVLE1BQWM7UUFBakUsU0FBSSxHQUFKLElBQUksQ0FBSztRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUZyRixhQUFRLEdBQUMsSUFBSSxDQUFDO1FBR1YsSUFBSSxDQUFDLGVBQWUsR0FBRyxnQkFBZ0IsQ0FBQztRQUN4QyxJQUFJLENBQUMsSUFBSSxHQUFDLElBQUksV0FBSSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUFBLENBQUM7SUFFRiwrQkFBTSxHQUFOO1FBQ0YsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUyxDQUFDLENBQUEsQ0FBQztZQUM1QyxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtRQUM5QixDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUEsQ0FBQztnQkFDZCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDakIsQ0FBQztZQUFBLElBQUksQ0FBQSxDQUFDO2dCQUNGLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQTtZQUNqQixDQUFDO1FBQ1IsQ0FBQztJQUNDLENBQUM7SUFBQSxDQUFDO0lBRUYsOEJBQUssR0FBTDtRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQTtRQUV2QyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRTthQUN6QixTQUFTLENBQ1QsVUFBQyxHQUFHLElBQUssT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUF2QixDQUF1QixFQUNoQyxVQUFDLEdBQUcsSUFBSyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsRUFBeEQsQ0FBd0QsQ0FDakUsQ0FBQTtJQUVDLENBQUM7SUFBQSxDQUFDO0lBRUYsK0JBQU0sR0FBTjtRQUFBLGlCQWFDO1FBWkgsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNuQyxTQUFTLENBQ1QsVUFBQyxHQUFHO1lBQ1MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUN4QixLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFDbEIsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xCLENBQUMsRUFDVixVQUFDLEdBQUc7WUFDUyxPQUFPLENBQUMsR0FBRyxDQUFDLHNEQUFzRCxDQUFDLENBQUM7WUFDcEUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FDSixDQUFBO0lBQ0wsQ0FBQztJQUFBLENBQUM7SUFFRiw4QkFBSyxHQUFMO1FBQUEsaUJBYUM7UUFaRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2hDLFNBQVMsQ0FDTixVQUFDLEdBQUc7WUFDQSxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVyQixDQUFDLEVBQ0QsVUFBQyxHQUFHO1lBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO1lBQ3RELEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQ0osQ0FBQTtJQUNMLENBQUM7SUFBQSxDQUFDO0lBRUYsK0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ2pDLENBQUM7SUFBQSxDQUFDO0lBRU4scUJBQUM7QUFBRCxDQUFDLEFBbEVELElBa0VDO0FBbEVZLGNBQWM7SUFQMUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7UUFDeEIsV0FBVyxFQUFFLDBCQUEwQjtRQUN2QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsRUFBQyx1QkFBdUIsQ0FBQztLQUNwRSxDQUFDO3FDQU0yQixXQUFJLEVBQXFCLDBCQUFXLEVBQWtCLGVBQU07R0FKNUUsY0FBYyxDQWtFMUI7QUFsRVksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICBwcm92aWRlcnM6IFtVc2VyU2VydmljZV0sXG4gIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvbG9naW4vbG9naW4uaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2xvZ2luL2xvZ2luLWNvbW1vbi5jc3NcIixcInBhZ2VzL2xvZ2luL2xvZ2luLmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcbiAgICB1c2VyOlVzZXI7XG4gICAgaXNMb2dnaW49dHJ1ZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTpQYWdlLHByaXZhdGUgdXNlclNlcnZpY2U6VXNlclNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgcGFnZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInJlczovL2JnX2lubmVyXCI7XG4gICAgICAgIHRoaXMudXNlcj1uZXcgVXNlcigpO1xuICAgIH07XG5cbiAgICBzdWJtaXQoKSB7XG5cdFx0aWYoIXRoaXMudXNlci5lbWFpbCB8fCAhdGhpcy51c2VyLnBhc3N3b3JkICl7XG5cdFx0XHRhbGVydChcIkFsbCBmaWVsZHMgcmVxdWlyZWQhXCIpXG5cdFx0fWVsc2V7XG5cdCAgICAgICAgaWYodGhpcy5pc0xvZ2dpbil7XG5cdCAgICAgICAgICAgIHRoaXMubG9nSW4oKTtcblx0ICAgICAgICB9ZWxzZXtcblx0ICAgICAgICAgICAgdGhpcy5zaWduVXAoKVxuXHQgICAgICAgIH1cblx0XHR9XG4gICAgfTtcblxuICAgIGZldGNoKCl7XG5cdFx0Y29uc29sZS5sb2coJ2xvZ2luIGZ1bmN0aW9uIGdldHMgY2FsbCcpXG5cblx0XHR0aGlzLnVzZXJTZXJ2aWNlLmdldERhdGEoKVxuXHRcdC5zdWJzY3JpYmUoXG5cdFx0XHQocmVzKSA9PiBjb25zb2xlLmRpcihyZXMuanNvbigpKSxcblx0XHRcdChlcnIpID0+IGNvbnNvbGUubG9nKFwiVW5mb3J0dW5hdGVseSB3ZSB3ZXJlIHVuYWJsZSB0byBnZXQgZGF0YS5cIilcblx0XHQpXG5cbiAgICB9O1xuXG4gICAgc2lnblVwKCl7XG5cdFx0dGhpcy51c2VyU2VydmljZS5yZWdpc3Rlcih0aGlzLnVzZXIpXG5cdFx0LnN1YnNjcmliZShcblx0XHRcdChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMudGV4dCgpKTtcbiAgICAgICAgICAgICAgICBhbGVydChyZXMudGV4dCgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgICAgICAgICAgfSxcblx0XHRcdChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVuZm9ydHVuYXRlbHkgd2Ugd2VyZSB1bmFibGUgdG8gY3JlYXRlIHlvdXIgYWNjb3VudC5cIik7XG4gICAgICAgICAgICAgICAgYWxlcnQoZXJyLnRleHQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9O1xuXG4gICAgbG9nSW4oKXtcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5sb2dpbih0aGlzLnVzZXIpXG4gICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xpc3RcIl0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGlyKHJlcyk7XG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVbmZvcnR1bmF0ZWx5IHdlIHdlcmUgdW5hYmxlIHRvIGxvZ2luLlwiKTtcbiAgICAgICAgICAgICAgICBhbGVydChlcnIudGV4dCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH07XG5cbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIHRoaXMuaXNMb2dnaW49IXRoaXMuaXNMb2dnaW47XG4gICAgfTtcblxufVxuIl19