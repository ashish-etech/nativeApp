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
    ;
    AppComponent.prototype.submit = function () {
        if (!this.user.email || !this.user.password) {
            alert("All fields required!");
        }
        else {
            if (this.isLoggin) {
                this.fetch();
            }
            else {
                this.signUp();
            }
        }
    };
    ;
    AppComponent.prototype.fetch = function () {
        console.log('login function gets call');
        this.userService.getData()
            .subscribe(function (res) { return console.dir(res.json()); }, function (err) { return console.log("Unfortunately we were unable to get data."); });
    };
    ;
    AppComponent.prototype.signUp = function () {
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
    AppComponent.prototype.toggle = function () {
        this.isLoggin = !this.isLoggin;
    };
    ;
    AppComponent.prototype.ngOnInit = function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMkNBQTBDO0FBQzFDLGdDQUErQjtBQUMvQiwyREFBeUQ7QUFXekQsSUFBYSxZQUFZO0lBSXJCLHNCQUFvQixJQUFTLEVBQVMsV0FBdUI7UUFBekMsU0FBSSxHQUFKLElBQUksQ0FBSztRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBRjdELGFBQVEsR0FBQyxJQUFJLENBQUM7UUFHVixJQUFJLENBQUMsZUFBZSxHQUFHLGdCQUFnQixDQUFDO1FBQ3hDLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxXQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBQUEsQ0FBQztJQUVGLDZCQUFNLEdBQU47UUFDRixFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFTLENBQUMsQ0FBQSxDQUFDO1lBQzVDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO1FBQzlCLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQSxDQUFDO2dCQUNkLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNqQixDQUFDO1lBQUEsSUFBSSxDQUFBLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO1lBQ2pCLENBQUM7UUFDUixDQUFDO0lBQ0MsQ0FBQztJQUFBLENBQUM7SUFDRiw0QkFBSyxHQUFMO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFBO1FBRXZDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFO2FBQ3pCLFNBQVMsQ0FDVCxVQUFDLEdBQUcsSUFBSyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQXZCLENBQXVCLEVBQ2hDLFVBQUMsR0FBRyxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxFQUF4RCxDQUF3RCxDQUNqRSxDQUFBO0lBRUMsQ0FBQztJQUFBLENBQUM7SUFDRiw2QkFBTSxHQUFOO1FBQUEsaUJBYUM7UUFaSCxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ25DLFNBQVMsQ0FDVCxVQUFDLEdBQUc7WUFDUyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ3hCLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNsQixLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEIsQ0FBQyxFQUNWLFVBQUMsR0FBRztZQUNTLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0RBQXNELENBQUMsQ0FBQztZQUNwRSxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUNKLENBQUE7SUFDTCxDQUFDO0lBQUEsQ0FBQztJQUVGLDZCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNqQyxDQUFDO0lBQUEsQ0FBQztJQUlMLCtCQUFRLEdBQVI7SUFFQSxDQUFDO0lBQ0YsbUJBQUM7QUFBRCxDQUFDLEFBdERELElBc0RDO0FBdERZLFlBQVk7SUFQeEIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7UUFDeEIsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsRUFBQyx1QkFBdUIsQ0FBQztLQUNwRSxDQUFDO3FDQU0yQixXQUFJLEVBQXFCLDBCQUFXO0dBSnBELFlBQVksQ0FzRHhCO0FBdERZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi9zaGFyZWQvdXNlci91c2VyXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXSxcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbG9naW4vbG9naW4uaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2xvZ2luL2xvZ2luLWNvbW1vbi5jc3NcIixcInBhZ2VzL2xvZ2luL2xvZ2luLmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgdXNlcjpVc2VyO1xuICAgIGlzTG9nZ2luPXRydWU7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6UGFnZSxwcml2YXRlIHVzZXJTZXJ2aWNlOlVzZXJTZXJ2aWNlKSB7XG4gICAgICAgIHBhZ2UuYmFja2dyb3VuZEltYWdlID0gXCJyZXM6Ly9iZ19pbm5lclwiO1xuICAgICAgICB0aGlzLnVzZXI9bmV3IFVzZXIoKTtcbiAgICB9O1xuXG4gICAgc3VibWl0KCkge1xuXHRcdGlmKCF0aGlzLnVzZXIuZW1haWwgfHwgIXRoaXMudXNlci5wYXNzd29yZCApe1xuXHRcdFx0YWxlcnQoXCJBbGwgZmllbGRzIHJlcXVpcmVkIVwiKVxuXHRcdH1lbHNle1xuXHQgICAgICAgIGlmKHRoaXMuaXNMb2dnaW4pe1xuXHQgICAgICAgICAgICB0aGlzLmZldGNoKCk7XG5cdCAgICAgICAgfWVsc2V7XG5cdCAgICAgICAgICAgIHRoaXMuc2lnblVwKClcblx0ICAgICAgICB9XG5cdFx0fVxuICAgIH07XG4gICAgZmV0Y2goKXtcblx0XHRjb25zb2xlLmxvZygnbG9naW4gZnVuY3Rpb24gZ2V0cyBjYWxsJylcblxuXHRcdHRoaXMudXNlclNlcnZpY2UuZ2V0RGF0YSgpXG5cdFx0LnN1YnNjcmliZShcblx0XHRcdChyZXMpID0+IGNvbnNvbGUuZGlyKHJlcy5qc29uKCkpLFxuXHRcdFx0KGVycikgPT4gY29uc29sZS5sb2coXCJVbmZvcnR1bmF0ZWx5IHdlIHdlcmUgdW5hYmxlIHRvIGdldCBkYXRhLlwiKVxuXHRcdClcblxuICAgIH07XG4gICAgc2lnblVwKCl7XG5cdFx0dGhpcy51c2VyU2VydmljZS5yZWdpc3Rlcih0aGlzLnVzZXIpXG5cdFx0LnN1YnNjcmliZShcblx0XHRcdChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMudGV4dCgpKTtcbiAgICAgICAgICAgICAgICBhbGVydChyZXMudGV4dCgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgICAgICAgICAgfSxcblx0XHRcdChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVuZm9ydHVuYXRlbHkgd2Ugd2VyZSB1bmFibGUgdG8gY3JlYXRlIHlvdXIgYWNjb3VudC5cIik7XG4gICAgICAgICAgICAgICAgYWxlcnQoZXJyLnRleHQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9O1xuXG4gICAgdG9nZ2xlKCkge1xuICAgICAgICB0aGlzLmlzTG9nZ2luPSF0aGlzLmlzTG9nZ2luO1xuICAgIH07XG5cbiAgICBcblxuXHRuZ09uSW5pdCgpe1xuXHRcdFxuXHR9XG59XG4iXX0=