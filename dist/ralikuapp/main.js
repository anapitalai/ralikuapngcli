(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _properties_properties_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./properties/properties.component */ "./src/app/properties/properties.component.ts");
/* harmony import */ var _properties_properties_list_properties_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./properties/properties-list/properties-list.component */ "./src/app/properties/properties-list/properties-list.component.ts");
/* harmony import */ var _properties_property_create_property_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./properties/property-create/property-create.component */ "./src/app/properties/property-create/property-create.component.ts");
/* harmony import */ var _properties_property_single_property_single_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./properties/property-single/property-single.component */ "./src/app/properties/property-single/property-single.component.ts");
/* harmony import */ var _properties_property_update_property_update_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./properties/property-update/property-update.component */ "./src/app/properties/property-update/property-update.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_dashboard_list_dashboard_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard-list/dashboard-list.component */ "./src/app/dashboard/dashboard-list/dashboard-list.component.ts");
/* harmony import */ var _dashboard_dashboard_create_dashboard_create_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/dashboard-create/dashboard-create.component */ "./src/app/dashboard/dashboard-create/dashboard-create.component.ts");
/* harmony import */ var _dashboard_dashboard_single_dashboard_single_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/dashboard-single/dashboard-single.component */ "./src/app/dashboard/dashboard-single/dashboard-single.component.ts");
/* harmony import */ var _dashboard_dashboard_edit_dashboard_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/dashboard-edit/dashboard-edit.component */ "./src/app/dashboard/dashboard-edit/dashboard-edit.component.ts");














var routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_8__["AuthComponent"],
    },
    {
        path: 'properties',
        // canActivate:[AuthGuard],
        component: _properties_properties_component__WEBPACK_IMPORTED_MODULE_3__["PropertiesComponent"],
        // canActivateChild:[AuthGuard],
        children: [{
                path: '',
                component: _properties_properties_list_properties_list_component__WEBPACK_IMPORTED_MODULE_4__["PropertiesListComponent"]
            },
            {
                path: 'create',
                component: _properties_property_create_property_create_component__WEBPACK_IMPORTED_MODULE_5__["PropertyCreateComponent"],
            },
            {
                path: ':id',
                component: _properties_property_single_property_single_component__WEBPACK_IMPORTED_MODULE_6__["PropertySingleComponent"]
            },
            {
                path: ':id/edit',
                component: _properties_property_update_property_update_component__WEBPACK_IMPORTED_MODULE_7__["PropertyUpdateComponent"]
            }
        ]
    },
    {
        path: 'dashboard',
        //canActivate:[AuthGuard],
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
        children: [{
                path: '',
                component: _dashboard_dashboard_list_dashboard_list_component__WEBPACK_IMPORTED_MODULE_10__["DashboardListComponent"]
            },
            {
                path: 'create',
                component: _dashboard_dashboard_create_dashboard_create_component__WEBPACK_IMPORTED_MODULE_11__["DashboardCreateComponent"]
            },
            {
                path: ':id',
                component: _dashboard_dashboard_single_dashboard_single_component__WEBPACK_IMPORTED_MODULE_12__["DashboardSingleComponent"]
            },
            {
                path: ':id/edit',
                component: _dashboard_dashboard_edit_dashboard_edit_component__WEBPACK_IMPORTED_MODULE_13__["DashboardEditComponent"]
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class='navbar navbar-default'>\n\n  <div class='container-fluid'>\n\n    <div class='navbar-header'>\n      <a routerLink='/home' class='navbar-brand'>RALIKU WAPP</a>\n    </div>\n    <div>\n      <ul class='nav navbar-nav'>\n        <li><a routerLink='/properties'>Properties</a></li>\n      </ul>\n      <ul class='nav navbar-nav'>\n        <li><a routerLink='/dashboard'>Dashboard</a></li>\n      </ul>\n      <div class=\"container-fluid\">\n        <ul class='nav navbar-nav navbar-right'>\n          <li *ngIf=\"!isLoggedIn\"><a routerLink=\"/login\">Login</a></li>\n          <li *ngIf=\"isLoggedIn\"><a (click)=\"logout()\">Logout</a></li>\n          <li *ngIf=\"isLoggedIn\"><a><img src='app/images/ej.jpg' alt=\"profile image\"\n                class=\"profile img-circle img-responsive\"></a></li>\n        </ul>\n      </div>\n\n    </div>\n\n\n  </div>\n\n\n\n</nav>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_property_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/property.service */ "./src/app/shared/services/property.service.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/services/dashboard.service */ "./src/app/shared/services/dashboard.service.ts");
/** import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ralikuapp';
}**/






var AppComponent = /** @class */ (function () {
    function AppComponent(service, authService, dashboardService, router) {
        this.service = service;
        this.authService = authService;
        this.dashboardService = dashboardService;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getContacts()
            .subscribe(function (teachers) { return _this.teachers = teachers; });
    };
    AppComponent.prototype.profile = function () {
        console.log(this.dashboardService.getUsers());
    };
    Object.defineProperty(AppComponent.prototype, "isLoggedIn", {
        get: function () {
            return this.authService.isLoggedIn();
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['/login']);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_property_service__WEBPACK_IMPORTED_MODULE_3__["PropertyService"], _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_5__["DashboardService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: authHttpFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authHttpFactory", function() { return authHttpFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _properties_properties_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./properties/properties.component */ "./src/app/properties/properties.component.ts");
/* harmony import */ var _properties_properties_list_properties_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./properties/properties-list/properties-list.component */ "./src/app/properties/properties-list/properties-list.component.ts");
/* harmony import */ var _shared_services_property_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/property.service */ "./src/app/shared/services/property.service.ts");
/* harmony import */ var _shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/services/dashboard.service */ "./src/app/shared/services/dashboard.service.ts");
/* harmony import */ var _shared_services_stationery_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/services/stationery.service */ "./src/app/shared/services/stationery.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _properties_property_create_property_create_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./properties/property-create/property-create.component */ "./src/app/properties/property-create/property-create.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _properties_property_single_property_single_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./properties/property-single/property-single.component */ "./src/app/properties/property-single/property-single.component.ts");
/* harmony import */ var _properties_property_update_property_update_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./properties/property-update/property-update.component */ "./src/app/properties/property-update/property-update.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_dashboard_create_dashboard_create_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dashboard/dashboard-create/dashboard-create.component */ "./src/app/dashboard/dashboard-create/dashboard-create.component.ts");
/* harmony import */ var _dashboard_dashboard_edit_dashboard_edit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dashboard/dashboard-edit/dashboard-edit.component */ "./src/app/dashboard/dashboard-edit/dashboard-edit.component.ts");
/* harmony import */ var _dashboard_dashboard_single_dashboard_single_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dashboard/dashboard-single/dashboard-single.component */ "./src/app/dashboard/dashboard-single/dashboard-single.component.ts");
/* harmony import */ var _dashboard_dashboard_list_dashboard_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dashboard/dashboard-list/dashboard-list.component */ "./src/app/dashboard/dashboard-list/dashboard-list.component.ts");
/* harmony import */ var _shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/guards/auth-guard.service */ "./src/app/shared/guards/auth-guard.service.ts");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");





























function authHttpFactory(http, options) {
    return new angular2_jwt__WEBPACK_IMPORTED_MODULE_23__["AuthHttp"](new angular2_jwt__WEBPACK_IMPORTED_MODULE_23__["AuthConfig"]({
        tokenGetter: (function () { return localStorage.getItem('access_token'); }),
        noJwtError: true
    }), http, options);
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _properties_properties_component__WEBPACK_IMPORTED_MODULE_5__["PropertiesComponent"],
                _properties_properties_list_properties_list_component__WEBPACK_IMPORTED_MODULE_6__["PropertiesListComponent"],
                _properties_property_create_property_create_component__WEBPACK_IMPORTED_MODULE_11__["PropertyCreateComponent"],
                _properties_property_single_property_single_component__WEBPACK_IMPORTED_MODULE_13__["PropertySingleComponent"],
                _properties_property_update_property_update_component__WEBPACK_IMPORTED_MODULE_14__["PropertyUpdateComponent"],
                _auth_auth_component__WEBPACK_IMPORTED_MODULE_15__["AuthComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"],
                _dashboard_dashboard_create_dashboard_create_component__WEBPACK_IMPORTED_MODULE_18__["DashboardCreateComponent"],
                _dashboard_dashboard_edit_dashboard_edit_component__WEBPACK_IMPORTED_MODULE_19__["DashboardEditComponent"],
                _dashboard_dashboard_single_dashboard_single_component__WEBPACK_IMPORTED_MODULE_20__["DashboardSingleComponent"],
                _dashboard_dashboard_list_dashboard_list_component__WEBPACK_IMPORTED_MODULE_21__["DashboardListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_10__["HttpModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [
                _shared_services_property_service__WEBPACK_IMPORTED_MODULE_7__["PropertyService"],
                _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"],
                {
                    provide: angular2_jwt__WEBPACK_IMPORTED_MODULE_23__["AuthHttp"],
                    useFactory: authHttpFactory,
                    deps: [_angular_http__WEBPACK_IMPORTED_MODULE_10__["Http"], _angular_http__WEBPACK_IMPORTED_MODULE_10__["RequestOptions"]]
                },
                _shared_services_stationery_service__WEBPACK_IMPORTED_MODULE_9__["StationeryService"],
                _shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_8__["DashboardService"],
                _shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.html":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <form (ngSubmit)=\"login()\">\n      <div class=\"form-group\">\n          <label for=\"\">Email</label>\n          <input class=\"form-control\" type='text' name=\"email\" [(ngModel)]='credentials.email'>\n      </div>\n      <div class=\"form-group\">\n              <label for=\"\">Password</label>\n              <input class=\"form-control\" type='password' name=\"password\" [(ngModel)]='credentials.password'>\n      </div>\n\n      <div *ngIf='successMessage' class=\"alert alert-success\">{{successMessage}}</div>\n      <div *ngIf='errorMessage' class=\"alert alert-danger\">{{errorMessage}}</div>\n      \n  <div class=\"form-group\">\n      <button class=\"form-control\" class='btn btn-info btn-sm'>Login</button>\n  </div>        \n  </form>\n</div>\n      \n"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");




var AuthComponent = /** @class */ (function () {
    function AuthComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.credentials = { email: '', password: '' };
        this.errorMessage = '';
        this.successMessage = '';
    }
    AuthComponent.prototype.ngOnInit = function () { };
    AuthComponent.prototype.login = function () {
        var _this = this;
        this.errorMessage = '';
        this.authService.login(this.credentials.email, this.credentials.password)
            .subscribe(function (data) {
            _this.router.navigate(['/properties']);
            console.log(data);
        }, function (err) {
            _this.errorMessage = err;
            console.error(err);
        });
    };
    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/auth/auth.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard-create/dashboard-create.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/dashboard-create/dashboard-create.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf='user'>\n  <form (ngSubmit)=\"createUser()\"> \n      <div class=\"form-group\">\n          <label for=\"\">Email</label>\n          <input class=\"form-control\" type='text' name=\"email\" [(ngModel)]='user.email'>\n      </div>\n      <div class=\"form-group\">\n              <label for=\"\">Password</label>\n              <input class=\"form-control\" type='password' name=\"password\" [(ngModel)]='user.password'>\n      </div>\n\n\n      <div *ngIf='successMessage' class=\"alert alert-success\">{{successMessage}}</div>\n      <div *ngIf='errorMessage' class=\"alert alert-danger\">{{errorMessage}}</div>\n      \n  <div class=\"form-group\">\n      <button class=\"form-control\" class='btn btn-info btn-sm'>CreateUser</button>\n  </div>        \n  </form>\n</div>       \n"

/***/ }),

/***/ "./src/app/dashboard/dashboard-create/dashboard-create.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/dashboard-create/dashboard-create.component.ts ***!
  \**************************************************************************/
/*! exports provided: DashboardCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardCreateComponent", function() { return DashboardCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/dashboard.service */ "./src/app/shared/services/dashboard.service.ts");




var DashboardCreateComponent = /** @class */ (function () {
    function DashboardCreateComponent(router, service) {
        this.router = router;
        this.service = service;
        this.user = { email: '', password: '' };
        this.errorMessage = '';
        this.successMessage = '';
    }
    DashboardCreateComponent.prototype.ngOnInit = function () {
    };
    DashboardCreateComponent.prototype.createUser = function () {
        var _this = this;
        this.successMessage = '';
        this.errorMessage = '';
        this.service.createUser(this.user)
            .subscribe(function (user) {
            _this.successMessage = 'User was created';
            _this.router.navigate(['/dashboard']);
            console.log('User profile created');
        });
    };
    DashboardCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./dashboard-create.component.html */ "./src/app/dashboard/dashboard-create/dashboard-create.component.html"),
            styles: ["\n\n "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["DashboardService"]])
    ], DashboardCreateComponent);
    return DashboardCreateComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard-edit/dashboard-edit.component.html":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/dashboard-edit/dashboard-edit.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>User Data Form</h1><hr>\n<div *ngIf='user'>\n    <form (ngSubmit)=\"updateUser()\">\n        <div class=\"form-group\">\n            <label for=\"\">Email</label>\n            <input class=\"form-control\" type='email' name=\"email\" [(ngModel)]='user.email'>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"\">Password</label>\n            <input class=\"form-control\" type='password' name=\"password\" [(ngModel)]='user.password'>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"\">Admin</label>\n            <input class=\"form-control\" type='boolean' name=\"admin\" [(ngModel)]='user.admin'>\n        </div>\n\n\n\n\n        <div *ngIf='successMessage' class=\"alert alert-success\">{{successMessage}}</div>\n        <div *ngIf='errorMessage' class=\"alert alert-danger\">{{errorMessage}}</div>\n\n        <button type=\"submit\" class=\"btn btn-success\">Update</button>        \n    </form>\n\n</div>       \n"

/***/ }),

/***/ "./src/app/dashboard/dashboard-edit/dashboard-edit.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/dashboard-edit/dashboard-edit.component.ts ***!
  \**********************************************************************/
/*! exports provided: DashboardEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardEditComponent", function() { return DashboardEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/dashboard.service */ "./src/app/shared/services/dashboard.service.ts");




var DashboardEditComponent = /** @class */ (function () {
    function DashboardEditComponent(route, service) {
        this.route = route;
        this.service = service;
        this.successMessage = '';
        this.errorMessage = '';
    }
    DashboardEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _id = this.route.snapshot.params['id'];
        this.service.getUser(_id)
            .subscribe(function (user) { return _this.user = user; });
    };
    DashboardEditComponent.prototype.updateUser = function () {
        var _this = this;
        this.service.updateUser(this.user)
            .subscribe(function (user) {
            //method to update date of edit
            _this.updater();
            _this.successMessage = 'Profile was updated.';
            console.log('Profile updated');
        }, function (err) {
            _this.errorMessage = 'Contact cant be updated!';
            console.error(err);
        });
        this.errorMessage = '';
        this.successMessage = '';
    };
    //date updater
    DashboardEditComponent.prototype.updater = function () {
        var _this = this;
        this.service.updater(this.user)
            .subscribe(function (user) {
            //method to update date of edit
            _this.successMessage = 'Update date logged.';
            console.log('Update date updated');
        }, function (err) {
            _this.errorMessage = 'date cant be updated!';
            console.error(err);
        });
        this.errorMessage = '';
        this.successMessage = '';
    };
    DashboardEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./dashboard-edit.component.html */ "./src/app/dashboard/dashboard-edit/dashboard-edit.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["DashboardService"]])
    ], DashboardEditComponent);
    return DashboardEditComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard-list/dashboard-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/dashboard-list/dashboard-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>Users Dashboard</h1>\n  <small>Authentication and Authorization is the main aim.</small><br>\n  <button  routerLink='/dashboard/create'  class=\"btn btn-info\">Create User</button>          \n</div>\n<div class='contacts-list row' *ngIf=\"users\">\n    <div class='col-sm-4' *ngFor=\"let u of users\">\n      <div class=\"user-card text-center\" [routerLink]=\"['/dashboard',u._id]\">\n          <div class='text-center'> <h2>{{ u.email }} <small>{{ u._id}}</small></h2></div>\n\n      </div>\n     <div class=\"image\">\n          <img class='img-responsive' [src]='u.avatar' class='img-responsive img-circle'>\n\n     </div>  \n      \n    </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard-list/dashboard-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/dashboard-list/dashboard-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: DashboardListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardListComponent", function() { return DashboardListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/dashboard.service */ "./src/app/shared/services/dashboard.service.ts");



var DashboardListComponent = /** @class */ (function () {
    function DashboardListComponent(service) {
        this.service = service;
    }
    DashboardListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getUsers()
            .subscribe(function (users) { return _this.users = users; });
    };
    DashboardListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./dashboard-list.component.html */ "./src/app/dashboard/dashboard-list/dashboard-list.component.html"),
            styles: ["\n   .user-card{cursor:pointer;\n    align-items::center;\n  }\n  .user-card:hover{\n    background:grey;\n    border-radius:20px;\n    \n  }\n\n  img{\n    width:150px;\n    height:150px;\n\n  }\n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"]])
    ], DashboardListComponent);
    return DashboardListComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard-single/dashboard-single.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/dashboard-single/dashboard-single.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  *ngIf=\"user\">     \n  <div class=\"user-card text-center\">\n      <div class='text-center'> <h2>{{ user.email }} <small>{{ user._id }}</small></h2>\n      <div>Is Admin:{{user.admin}}</div>\n      <div>Updated At:{{user.updatedAt}}</div>\n      <div>Created At:{{user.createdAt}}</div>\n      \n      </div>\n      \n      <button [routerLink]=\"['/dashboard',user._id,'edit']\" class=\"btn btn-primary btn-bg\">Edit Profile</button>\n      <button (click)=\"deleteUser()\" class=\"btn btn-danger btn-bg\">Delete User</button>\n  </div>  \n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard-single/dashboard-single.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/dashboard-single/dashboard-single.component.ts ***!
  \**************************************************************************/
/*! exports provided: DashboardSingleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardSingleComponent", function() { return DashboardSingleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/dashboard.service */ "./src/app/shared/services/dashboard.service.ts");




var DashboardSingleComponent = /** @class */ (function () {
    function DashboardSingleComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    DashboardSingleComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _id = this.route.snapshot.params['id'];
        this.service.getUser(_id)
            .subscribe(function (user) { return _this.user = user; });
    };
    DashboardSingleComponent.prototype.deleteUser = function () {
        var _this = this;
        this.service.userDelete(this.user._id)
            .subscribe(function (data) {
            _this.router.navigate(['/dashboard']);
        });
    };
    DashboardSingleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./dashboard-single.component.html */ "./src/app/dashboard/dashboard-single/dashboard-single.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["DashboardService"]])
    ], DashboardSingleComponent);
    return DashboardSingleComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/properties/properties-list/properties-list.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/properties/properties-list/properties-list.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-card{cursor:pointer;\n    align-items:center;\n  }\n  .user-card:hover{\n    background:grey;\n    border-radius:20px;\n    \n  }\n  img{\n    width:150px;\n    height:150px;\n\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvcGVydGllcy9wcm9wZXJ0aWVzLWxpc3QvcHJvcGVydGllcy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVyxjQUFjO0lBQ3JCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjs7RUFFcEI7RUFHQTtJQUNFLFdBQVc7SUFDWCxZQUFZOztFQUVkIiwiZmlsZSI6InNyYy9hcHAvcHJvcGVydGllcy9wcm9wZXJ0aWVzLWxpc3QvcHJvcGVydGllcy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1jYXJke2N1cnNvcjpwb2ludGVyO1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgfVxuICAudXNlci1jYXJkOmhvdmVye1xuICAgIGJhY2tncm91bmQ6Z3JleTtcbiAgICBib3JkZXItcmFkaXVzOjIwcHg7XG4gICAgXG4gIH1cblxuXG4gIGltZ3tcbiAgICB3aWR0aDoxNTBweDtcbiAgICBoZWlnaHQ6MTUwcHg7XG5cbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/properties/properties-list/properties-list.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/properties/properties-list/properties-list.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h2>REALESTATE/STATIONERY APP</h2>\n  <small>Let the app get your accomodation in Lae.</small><br>\n  <button *ngIf='auth.isLoggedIn()' routerLink='/properties/create' class=\"btn btn-info\">Create Property</button>\n  <button routerLink='/professionals' class=\"btn btn-danger\">More Stationery</button>\n</div>\n\n<div *ngIf=\"teachers\">\n  <div *ngFor=\"let c of teachers\" class=\"col-sm-4\">\n    <div class=\"thumbnail\" [routerLink]=\"['/properties',c.id]\">\n      <h2> {{ c.name }}</h2><small><i>{{c.description}}</i></small>\n      <h4>{{c.createdAt}}</h4>\n      <img [src]='c.listViewImage' class='img-responsive img-circle'>\n\n      <div class=\"btn btn-info pull-right\">Details</div>\n      <div class=\"btn btn-primary pull-right\">Stationery Details</div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/properties/properties-list/properties-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/properties/properties-list/properties-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: PropertiesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesListComponent", function() { return PropertiesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_property_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/property.service */ "./src/app/shared/services/property.service.ts");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");




var PropertiesListComponent = /** @class */ (function () {
    function PropertiesListComponent(service, auth) {
        this.service = service;
        this.auth = auth;
    }
    PropertiesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getContacts()
            .subscribe(function (teachers) { return _this.teachers = teachers; });
    };
    PropertiesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-properties-list',
            template: __webpack_require__(/*! ./properties-list.component.html */ "./src/app/properties/properties-list/properties-list.component.html"),
            styles: [__webpack_require__(/*! ./properties-list.component.css */ "./src/app/properties/properties-list/properties-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_property_service__WEBPACK_IMPORTED_MODULE_2__["PropertyService"], src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], PropertiesListComponent);
    return PropertiesListComponent;
}());



/***/ }),

/***/ "./src/app/properties/properties.component.css":
/*!*****************************************************!*\
  !*** ./src/app/properties/properties.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3BlcnRpZXMvcHJvcGVydGllcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/properties/properties.component.html":
/*!******************************************************!*\
  !*** ./src/app/properties/properties.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/properties/properties.component.ts":
/*!****************************************************!*\
  !*** ./src/app/properties/properties.component.ts ***!
  \****************************************************/
/*! exports provided: PropertiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesComponent", function() { return PropertiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PropertiesComponent = /** @class */ (function () {
    function PropertiesComponent() {
    }
    PropertiesComponent.prototype.ngOnInit = function () {
    };
    PropertiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-properties',
            template: __webpack_require__(/*! ./properties.component.html */ "./src/app/properties/properties.component.html"),
            styles: [__webpack_require__(/*! ./properties.component.css */ "./src/app/properties/properties.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PropertiesComponent);
    return PropertiesComponent;
}());



/***/ }),

/***/ "./src/app/properties/property-create/property-create.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/properties/property-create/property-create.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-heading text-center\">Add a New Property</div>\n<div class=\"panel-body\" *ngIf='teacher'>\n  <form [formGroup]='form' (ngSubmit)='createTeacher()'>\n    <div class=\"form-group col-sm-4\">\n      <label for=\"\">Name</label>\n      <input class=\"form-control\" type='text' name=\"name\" formControlName='name' required>\n    </div>\n\n    <div class=\"form-group col-sm-4\">\n      <label for=\"\">Description</label>\n      <input class=\"form-control\" type='text' name=\"Description\" formControlName='description' required>\n    </div>\n\n    <div class=\"form-group col-sm-4\">\n      <input type=\"file\" multiple name='avatarImage' (change)=\"onFileSelected($event)\" formControlName='avatarImage' />\n    </div>\n\n\n    <div *ngIf='successMessage' class=\"alert alert-success\">{{successMessage}}</div>\n    <div *ngIf='errorMessage' class=\"alert alert-danger\">{{errorMessage}}</div>\n\n\n    <div class=\"form-group col-sm-12\">\n      <button type=\"submit\" class=\"btn btn-success\">Create</button>\n    </div>\n  </form>\n\n</div>"

/***/ }),

/***/ "./src/app/properties/property-create/property-create.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/properties/property-create/property-create.component.ts ***!
  \*************************************************************************/
/*! exports provided: PropertyCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyCreateComponent", function() { return PropertyCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _shared_services_property_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/property.service */ "./src/app/shared/services/property.service.ts");






var PropertyCreateComponent = /** @class */ (function () {
    function PropertyCreateComponent(http, router, service, fb) {
        this.http = http;
        this.router = router;
        this.service = service;
        this.fb = fb;
        this.teacher = { name: '', description: '', avatarImage: '' };
        this.errorMessage = '';
        this.successMessage = '';
        this.filesToUpload = [];
        this.provinces = [
            'East New Britain',
            'West New Britain',
            'New Ireland',
            'Manus'
        ];
    }
    PropertyCreateComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            avatarImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    };
    PropertyCreateComponent.prototype.onFileSelected = function (event) {
        this.filesToUpload = event.target.files;
    };
    PropertyCreateComponent.prototype.createTeacher = function () {
        this.successMessage = '';
        this.errorMessage = '';
        console.log(this.form);
        console.log(this.form.value);
        var files = this.filesToUpload;
        var fd = new FormData();
        for (var i = 0; i < files.length; i++) {
            fd.append("avatarImage", files[i], files[i]['name']);
        }
        fd.append('name', this.form.value.name);
        fd.append('description', this.form.value.description);
        //this.http.post('http://localhost:3007/teachers', fd)
        this.http.post('https://apis.raliku.com/teachers', fd)
            .subscribe(function (res) {
            console.log(res);
        });
    };
    PropertyCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./property-create.component.html */ "./src/app/properties/property-create/property-create.component.html"),
            styles: ["\n  input.ng-valid.ng-touched{\n    border-left:5px solid green;\n  }\n  input.ng-invalid.ng-touched{\n    border-left:5px solid red;\n  }\n\n "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _shared_services_property_service__WEBPACK_IMPORTED_MODULE_5__["PropertyService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], PropertyCreateComponent);
    return PropertyCreateComponent;
}());



/***/ }),

/***/ "./src/app/properties/property-single/property-single.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/properties/property-single/property-single.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"teachers\">\n  <div class=\"user-card text-center\">\n      <div class='text-center'>\n          <h2>{{ teachers.name}} <small>{{ teachers.district }}</small></h2>\n      </div>\n      <div class=\"img-parent\">\n\n          <div class='container' *ngFor='let i of teachers.avatarImage'>\n              <img  [src]='i' class='img-responsive img-circle'>\n          </div>\n      </div>\n      <div class=\"well well-lg\">{{teachers.description}}</div>\n\n      <button [routerLink]=\"['/properties',teachers._id,'edit']\" class=\"btn btn-primary btn-bg\">Edit</button>\n      <button (click)=\"teacherDelete()\" class=\"btn btn-danger btn-bg\">Delete</button>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/properties/property-single/property-single.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/properties/property-single/property-single.component.ts ***!
  \*************************************************************************/
/*! exports provided: PropertySingleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertySingleComponent", function() { return PropertySingleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_property_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/property.service */ "./src/app/shared/services/property.service.ts");




var PropertySingleComponent = /** @class */ (function () {
    function PropertySingleComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    PropertySingleComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _id = this.route.snapshot.params['id'];
        this.service.getContact(_id)
            .subscribe(function (teachers) { return _this.teachers = teachers; });
    };
    PropertySingleComponent.prototype.teacherDelete = function () {
        var _this = this;
        this.service.teacherDelete(this.teachers._id)
            .subscribe(function (data) {
            _this.router.navigate(['/properties']);
        });
    };
    PropertySingleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./property-single.component.html */ "./src/app/properties/property-single/property-single.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_services_property_service__WEBPACK_IMPORTED_MODULE_3__["PropertyService"]])
    ], PropertySingleComponent);
    return PropertySingleComponent;
}());



/***/ }),

/***/ "./src/app/properties/property-update/property-update.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/properties/property-update/property-update.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf='teacher'>\n  <form (ngSubmit)=\"updateContact()\">\n      <div class=\"form-group\">\n          <label for=\"\">Name</label>\n          <input class=\"form-control\" type='text' name=\"name\" [(ngModel)]='teacher.name'>\n      </div>\n      <div>\n          <label for=\"\">description</label>\n          <input class=\"form-control\" type='textarea' name=\"description\" [(ngModel)]='teacher.description'>\n      </div>\n\n\n      <div class=\"form-group\">\n          <label for=\"\">Created At</label>\n          <input class='form-control' type='text' name=\"createdAt\" [(ngModel)]='teacher.createdAt'>\n      </div>\n\n\n      <div *ngIf='successMessage' class=\"alert alert-success\">{{successMessage}}</div>\n      <div *ngIf='errorMessage' class=\"alert alert-danger\">{{errorMessage}}</div>\n\n      <button type=\"submit\" class=\"btn btn-success\">Update</button>\n  </form>\n\n</div>"

/***/ }),

/***/ "./src/app/properties/property-update/property-update.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/properties/property-update/property-update.component.ts ***!
  \*************************************************************************/
/*! exports provided: PropertyUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyUpdateComponent", function() { return PropertyUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_property_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/property.service */ "./src/app/shared/services/property.service.ts");




var PropertyUpdateComponent = /** @class */ (function () {
    function PropertyUpdateComponent(route, service) {
        this.route = route;
        this.service = service;
        this.successMessage = '';
        this.errorMessage = '';
    }
    PropertyUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _id = this.route.snapshot.params['id'];
        this.service.getContact(_id)
            .subscribe(function (teacher) { return _this.teacher = teacher; });
    };
    PropertyUpdateComponent.prototype.updateContact = function () {
        var _this = this;
        this.service.updateContact(this.teacher)
            .subscribe(function (teacher) {
            _this.successMessage = 'Profile was updated.';
            console.log('Profile updated');
        }, function (err) {
            _this.errorMessage = 'Contact cant be updated!';
            console.error(err);
        });
        this.errorMessage = '';
        this.successMessage = '';
    };
    PropertyUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./property-update.component.html */ "./src/app/properties/property-update/property-update.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _shared_services_property_service__WEBPACK_IMPORTED_MODULE_3__["PropertyService"]])
    ], PropertyUpdateComponent);
    return PropertyUpdateComponent;
}());



/***/ }),

/***/ "./src/app/shared/guards/auth-guard.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/guards/auth-guard.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function () {
        console.log('check is in progress');
        if (this.authService.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard.prototype.canActivateChild = function () {
        console.log('check child router is in progress');
        if (this.authService.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var AuthService = /** @class */ (function () {
    function AuthService(authHttp) {
        this.authHttp = authHttp;
        //private authUrl='http://localhost:3007/users/login';
        this.authUrl = 'https://apis.raliku.com/users/login';
        this.loggedIn = false;
        this.token = localStorage.getItem('token');
        //testing
        this.jwtHelper = new angular2_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelper"]();
        this.loggedIn = !!localStorage.getItem('token');
    }
    AuthService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return this.authHttp.post("" + this.authUrl, { email: email, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) {
            //const expiresAt=JSON.stringify(((this.jwtHelper.decodeToken(this.token)).exp) * 1000 + new Date().getTime());
            if (res.token) {
                localStorage.setItem('token', res.token);
                //localStorage.setItem('expiresAt',expiresAt);
                _this.loggedIn = true;
                _this.useJwtHelper();
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    //logout
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
        this.loggedIn = false;
    };
    AuthService.prototype.useJwtHelper = function () {
        var token = localStorage.getItem('token');
        //var expirationDate=this.jwtHelper.getTokenExpirationDate(token);
        //const decodedTkn=this.jwtHelper.decodeToken(token).exp;
        console.log(this.jwtHelper.decodeToken(token), this.jwtHelper.getTokenExpirationDate(token), this.jwtHelper.isTokenExpired(token));
    };
    //handle errors
    AuthService.prototype.handleError = function (err) {
        var errMessage;
        if (err instanceof _angular_http__WEBPACK_IMPORTED_MODULE_2__["Response"]) {
            var body = err.json() || '';
            var error = body.error || JSON.stringify(body);
            errMessage = err.status + "-" + (err.statusText || '') + " " + error;
        }
        else {
            errMessage = err.message ? err.message : err.toString();
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(errMessage);
    };
    AuthService.prototype.ngOnInit = function () { };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({}),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_jwt__WEBPACK_IMPORTED_MODULE_3__["AuthHttp"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/services/dashboard.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/dashboard.service.ts ***!
  \******************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var DashboardService = /** @class */ (function () {
    function DashboardService(http) {
        this.http = http;
        //private url:string='http://localhost:3007/users';
        this.url = 'https://apis.raliku.com.com/users';
        //observable source
        this.userDeletedSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.userCreatedSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        //observable stream
        this.userCreated$ = this.userCreatedSource.asObservable();
        this.userDeleted$ = this.userDeletedSource.asObservable();
    }
    //all contacts
    DashboardService.prototype.getUsers = function () {
        return this.http.get(this.url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    DashboardService.prototype.handleError = function (err) {
        var errMessage;
        if (err instanceof _angular_http__WEBPACK_IMPORTED_MODULE_2__["Response"]) {
            var body = err.json() || '';
            var error = body.error || JSON.stringify(body);
            errMessage = err.status + "-" + (err.statusText || '') + " " + error;
        }
        else {
            errMessage = err.message ? err.message : err.toString();
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(errMessage);
    };
    //get single contact
    DashboardService.prototype.getUser = function (id) {
        return this.http.get(this.url + "/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    //get single user profile image
    DashboardService.prototype.getUserProfile = function (id) {
        return this.http.get(this.url + "/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    //update user details
    DashboardService.prototype.updateUser = function (user) {
        return this.http.put(this.url + "/" + user._id, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (user) { return user.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    //update user details
    DashboardService.prototype.updater = function (user) {
        return this.http.put(this.url + "/update/" + user._id, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (user) { return user.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    DashboardService.prototype.createUser = function (user) {
        var _this = this;
        return this.http.post(this.url + "/signup", user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (user) { return _this.userCreated(user); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    DashboardService.prototype.userDelete = function (id) {
        var _this = this;
        return this.http.delete(this.url + "/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) { return _this.userDeleted(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    //messages
    DashboardService.prototype.userCreated = function (teacher) {
        console.log('New Teacher has been created!');
        this.userCreatedSource.next(teacher);
    };
    DashboardService.prototype.userDeleted = function () {
        this.userDeletedSource.next();
        console.log('Teacher has been deleted!');
    };
    DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "./src/app/shared/services/property.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/property.service.ts ***!
  \*****************************************************/
/*! exports provided: PropertyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyService", function() { return PropertyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/** import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor() { }
}**/





var PropertyService = /** @class */ (function () {
    function PropertyService(http) {
        this.http = http;
        //private url:string='http://localhost:3007/teachers';
        this.url = 'https://apis.raliku.com/teachers';
        //observable source
        this.contactDeletedSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.contactCreatedSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.config = { headers: { 'Content-Type': 'multipart/form-data' } };
        //observable stream
        this.contactCreated$ = this.contactCreatedSource.asObservable();
        this.contactDeleted$ = this.contactDeletedSource.asObservable();
    }
    //all contacts
    PropertyService.prototype.getContacts = function () {
        return this.http.get("" + this.url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json().teachers; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    PropertyService.prototype.handleError = function (err) {
        var errMessage;
        if (err instanceof _angular_http__WEBPACK_IMPORTED_MODULE_2__["Response"]) {
            var body = err.json() || '';
            var error = body.error || JSON.stringify(body);
            errMessage = err.status + "-" + (err.statusText || '') + " " + error;
        }
        else {
            errMessage = err.message ? err.message : err.toString();
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(errMessage);
    };
    //get single contact
    PropertyService.prototype.getContact = function (id) {
        return this.http.get(this.url + "/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    //update user details
    PropertyService.prototype.updateContact = function (teacher) {
        return this.http.put(this.url + "/" + teacher._id, teacher)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (teacher) { return teacher.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    PropertyService.prototype.createTeacher = function (teacher) {
        var _this = this;
        return this.http.post(this.url, teacher)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (teacher) { return _this.teacherCreated(teacher); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    PropertyService.prototype.teacherDelete = function (id) {
        var _this = this;
        return this.http.delete(this.url + "/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) { return _this.teacherDeleted(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    //messages
    PropertyService.prototype.teacherCreated = function (teacher) {
        console.log('New Property has been created!');
        this.contactCreatedSource.next(teacher);
    };
    PropertyService.prototype.teacherDeleted = function () {
        this.contactDeletedSource.next();
        console.log('Property has been deleted!');
    };
    PropertyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], PropertyService);
    return PropertyService;
}());



/***/ }),

/***/ "./src/app/shared/services/stationery.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/stationery.service.ts ***!
  \*******************************************************/
/*! exports provided: StationeryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StationeryService", function() { return StationeryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var StationeryService = /** @class */ (function () {
    function StationeryService(http) {
        this.http = http;
        //private url:string='http://localhost:3007/professionals';
        this.url = 'https://apis.raliku.com/professionals';
        //observable source
        this.deletedProfessionalSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.createdProfessionalSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        //observable stream
        this.createdProfessional$ = this.createdProfessionalSource.asObservable();
        this.deletedProfessional$ = this.deletedProfessionalSource.asObservable();
    }
    //all contacts
    StationeryService.prototype.getProfessionals = function () {
        return this.http.get("" + this.url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) { return res.json().professionals; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    StationeryService.prototype.handleError = function (err) {
        var errMessage;
        if (err instanceof _angular_http__WEBPACK_IMPORTED_MODULE_2__["Response"]) {
            var body = err.json() || '';
            var error = body.error || JSON.stringify(body);
            errMessage = err.status + "-" + (err.statusText || '') + " " + error;
        }
        else {
            errMessage = err.message ? err.message : err.toString();
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(errMessage);
    };
    //get single contact
    StationeryService.prototype.getProfessional = function (id) {
        return this.http.get(this.url + "/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    //update user details
    StationeryService.prototype.updateProfessional = function (professional) {
        return this.http.put(this.url + "/" + professional._id, professional)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (teacher) { return teacher.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    StationeryService.prototype.createProfessional = function (teacher) {
        var _this = this;
        return this.http.post(this.url, teacher)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (teacher) { return _this.createdProfessional(teacher); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    StationeryService.prototype.deleteProfessional = function (id) {
        var _this = this;
        return this.http.delete(this.url + "/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) { return _this.deletedProfessional(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    //messages
    StationeryService.prototype.createdProfessional = function (teacher) {
        console.log('New Stationery has been created!');
        this.createdProfessionalSource.next(teacher);
    };
    StationeryService.prototype.deletedProfessional = function () {
        this.deletedProfessionalSource.next();
        console.log('Teacher has been deleted!');
    };
    StationeryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], StationeryService);
    return StationeryService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/sly/Documents/raliku-app-api--final/workingupload/ralikuapp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map