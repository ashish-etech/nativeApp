"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.register = function (user) {
        console.log("registartion success");
        this.http.get('http://asrui.000webhostapp.com/angularForm/fetch.php')
            .map(function (res) { return console.log(res); });
    };
    UserService.prototype.login = function (user) {
        alert("login success: " + user.email);
        console.log("login success");
    };
    ;
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLHNDQUF3RDtBQUV4RCxnQ0FBK0I7QUFDL0IsaUNBQWdDO0FBSWhDLElBQWEsV0FBVztJQUV2QixxQkFBb0IsSUFBUztRQUFULFNBQUksR0FBSixJQUFJLENBQUs7SUFBRSxDQUFDO0lBRTdCLDhCQUFRLEdBQVIsVUFBUyxJQUFTO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUVuQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxzREFBc0QsQ0FBQzthQUNsRSxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUcsT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFoQixDQUFnQixDQUFDLENBQUE7SUFDNUIsQ0FBQztJQUNKLDJCQUFLLEdBQUwsVUFBTSxJQUFTO1FBQ1IsS0FBSyxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFBQSxDQUFDO0lBRU4sa0JBQUM7QUFBRCxDQUFDLEFBZkQsSUFlQztBQWZZLFdBQVc7SUFGdkIsaUJBQVUsRUFBRTtxQ0FJYSxXQUFJO0dBRmpCLFdBQVcsQ0FldkI7QUFmWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3VzZXJcIjtcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlLCBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIiA7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIiA7XG5cbkBJbmplY3RhYmxlKClcblxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNle1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDpIdHRwKXt9XG5cbiAgICByZWdpc3Rlcih1c2VyOlVzZXIpe1xuXHRjb25zb2xlLmxvZyhcInJlZ2lzdGFydGlvbiBzdWNjZXNzXCIpO1xuXG5cdFx0dGhpcy5odHRwLmdldCgnaHR0cDovL2FzcnVpLjAwMHdlYmhvc3RhcHAuY29tL2FuZ3VsYXJGb3JtL2ZldGNoLnBocCcpXG5cdFx0XHQgLm1hcChyZXM9PiBjb25zb2xlLmxvZyhyZXMpKVxuICAgIH1cblx0bG9naW4odXNlcjpVc2VyKXtcbiAgICAgICAgYWxlcnQoXCJsb2dpbiBzdWNjZXNzOiBcIiArIHVzZXIuZW1haWwpO1xuXHRcdGNvbnNvbGUubG9nKFwibG9naW4gc3VjY2Vzc1wiKTtcbiAgICB9O1xuXG59XG4iXX0=