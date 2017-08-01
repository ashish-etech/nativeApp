"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var HomeComponent = (function () {
    function HomeComponent(page) {
        this.page = page;
        page.backgroundImage = "res://bg_inner";
    }
    ;
    HomeComponent.prototype.ngOnInit = function () { };
    ;
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: "login",
        templateUrl: "./pages/home/home.html",
        styleUrls: ["pages/home/home-common.css", "pages/home/home.css"]
    }),
    __metadata("design:paramtypes", [page_1.Page])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRDtBQUNqRCxnQ0FBK0I7QUFTL0IsSUFBYSxhQUFhO0lBQ3RCLHVCQUFvQixJQUFTO1FBQVQsU0FBSSxHQUFKLElBQUksQ0FBSztRQUN6QixJQUFJLENBQUMsZUFBZSxHQUFHLGdCQUFnQixDQUFDO0lBQzVDLENBQUM7SUFBQSxDQUFDO0lBQ0YsZ0NBQVEsR0FBUixjQUFXLENBQUM7SUFBQSxDQUFDO0lBQ2pCLG9CQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7QUFMWSxhQUFhO0lBTnpCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsT0FBTztRQUNqQixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixFQUFDLHFCQUFxQixDQUFDO0tBQ2hFLENBQUM7cUNBRzJCLFdBQUk7R0FEcEIsYUFBYSxDQUt6QjtBQUxZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImxvZ2luXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvaG9tZS9ob21lLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9ob21lL2hvbWUtY29tbW9uLmNzc1wiLFwicGFnZXMvaG9tZS9ob21lLmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7ICAgIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTpQYWdlKSB7XG4gICAgICAgIHBhZ2UuYmFja2dyb3VuZEltYWdlID0gXCJyZXM6Ly9iZ19pbm5lclwiO1xuICAgIH07XG4gICAgbmdPbkluaXQoKXt9O1xufVxuIl19