"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var admin_component_1 = require("./admin.component");
var manage_new_component_1 = require("./manage-new.component");
var manage_about_component_1 = require("./manage-about.component");
var adminDashboard_component_1 = require("./adminDashboard.component");
var admin_routing_module_1 = require("./admin-routing.module");
var AdminModule = (function () {
    function AdminModule() {
    }
    return AdminModule;
}());
AdminModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            admin_routing_module_1.AdminRoutingModule
        ],
        declarations: [
            admin_component_1.AdminComponent,
            manage_new_component_1.ManageNewsComponent,
            manage_about_component_1.ManageAboutComponent,
            adminDashboard_component_1.AdminDashboardComponent
        ]
    })
], AdminModule);
exports.AdminModule = AdminModule;
//# sourceMappingURL=admin.module.js.map