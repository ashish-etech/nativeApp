"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var UserService = (function () {
    function UserService() {
    }
    UserService.prototype.register = function (user) {
        alert("About to register: " + user.email);
        console.log(user);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBSzNDLElBQWEsV0FBVztJQUF4QjtJQU9BLENBQUM7SUFMRyw4QkFBUSxHQUFSLFVBQVMsSUFBUztRQUNkLEtBQUssQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUwsa0JBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQztBQVBZLFdBQVc7SUFGdkIsaUJBQVUsRUFBRTtHQUVBLFdBQVcsQ0FPdkI7QUFQWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3VzZXJcIjtcblxuQEluamVjdGFibGUoKVxuXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2V7XG5cbiAgICByZWdpc3Rlcih1c2VyOlVzZXIpe1xuICAgICAgICBhbGVydChcIkFib3V0IHRvIHJlZ2lzdGVyOiBcIiArIHVzZXIuZW1haWwpO1xuICAgICAgICBjb25zb2xlLmxvZyh1c2VyKTtcbiAgICB9XG5cbn0iXX0=