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
        this.http.get('http://asrui.000webhostapp.com/get.php')
            .subscribe(function (response) {
            console.dir(response.json());
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLHNDQUF3RDtBQUV4RCxnQ0FBK0I7QUFDL0IsaUNBQWdDO0FBSWhDLElBQWEsV0FBVztJQUV2QixxQkFBb0IsSUFBUztRQUFULFNBQUksR0FBSixJQUFJLENBQUs7SUFBRSxDQUFDO0lBRTdCLDhCQUFRLEdBQVIsVUFBUyxJQUFTO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUVuQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsQ0FBQzthQUN0RCxTQUFTLENBQUMsVUFBQyxRQUFRO1lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUE7SUFFQSxDQUFDO0lBQ0osMkJBQUssR0FBTCxVQUFNLElBQVM7UUFDUixLQUFLLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUFBLENBQUM7SUFFTixrQkFBQztBQUFELENBQUMsQUFsQkQsSUFrQkM7QUFsQlksV0FBVztJQUZ2QixpQkFBVSxFQUFFO3FDQUlhLFdBQUk7R0FGakIsV0FBVyxDQWtCdkI7QUFsQlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi91c2VyXCI7XG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSwgSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCIgO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCIgO1xuXG5ASW5qZWN0YWJsZSgpXG5cbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZXtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cCl7fVxuXG4gICAgcmVnaXN0ZXIodXNlcjpVc2VyKXtcblx0Y29uc29sZS5sb2coXCJyZWdpc3RhcnRpb24gc3VjY2Vzc1wiKTtcblxuXHRcdHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9hc3J1aS4wMDB3ZWJob3N0YXBwLmNvbS9nZXQucGhwJylcblx0XHQuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuXHRcdFx0Y29uc29sZS5kaXIocmVzcG9uc2UuanNvbigpKTsgXG5cdFx0fSlcblx0XG4gICAgfVxuXHRsb2dpbih1c2VyOlVzZXIpe1xuICAgICAgICBhbGVydChcImxvZ2luIHN1Y2Nlc3M6IFwiICsgdXNlci5lbWFpbCk7XG5cdFx0Y29uc29sZS5sb2coXCJsb2dpbiBzdWNjZXNzXCIpO1xuICAgIH07XG5cbn1cbiJdfQ==