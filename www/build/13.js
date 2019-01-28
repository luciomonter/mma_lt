webpackJsonp([13],{

<<<<<<< HEAD
/***/ 1895:
=======
/***/ 1967:
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSitePluginsPluginPageModule", function() { return CoreSitePluginsPluginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__plugin_page__ = __webpack_require__(2023);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module__ = __webpack_require__(937);
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreUserAboutPageModule", function() { return CoreUserAboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about__ = __webpack_require__(2099);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_components_module__ = __webpack_require__(397);
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






<<<<<<< HEAD
/**
 * Module to lazy load the page.
 */
var CoreSitePluginsPluginPageModule = /** @class */ (function () {
    function CoreSitePluginsPluginPageModule() {
    }
    CoreSitePluginsPluginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__plugin_page__["a" /* CoreSitePluginsPluginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_components_module__["a" /* CoreSitePluginsComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__plugin_page__["a" /* CoreSitePluginsPluginPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ]
        })
    ], CoreSitePluginsPluginPageModule);
    return CoreSitePluginsPluginPageModule;
}());

//# sourceMappingURL=plugin-page.module.js.map

/***/ }),

/***/ 2023:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreSitePluginsPluginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_plugin_content_plugin_content__ = __webpack_require__(120);
=======

var CoreUserAboutPageModule = /** @class */ (function () {
    function CoreUserAboutPageModule() {
    }
    CoreUserAboutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__about__["a" /* CoreUserAboutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_components_module__["a" /* CoreUserComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__about__["a" /* CoreUserAboutPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], CoreUserAboutPageModule);
    return CoreUserAboutPageModule;
}());

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 2099:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreUserAboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_helper__ = __webpack_require__(949);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_events__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_utils_text__ = __webpack_require__(11);
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



<<<<<<< HEAD
/**
 * Page to render a site plugin page.
 */
var CoreSitePluginsPluginPage = /** @class */ (function () {
    function CoreSitePluginsPluginPage(params) {
        this.title = params.get('title');
        this.component = params.get('component');
        this.method = params.get('method');
        this.args = params.get('args');
        this.initResult = params.get('initResult');
        this.jsData = params.get('jsData');
    }
    /**
     * Refresh the data.
     *
     * @param {any} refresher Refresher.
     */
    CoreSitePluginsPluginPage.prototype.refreshData = function (refresher) {
        this.content.refreshContent(false).finally(function () {
            refresher.complete();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__components_plugin_content_plugin_content__["a" /* CoreSitePluginsPluginContentComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__components_plugin_content_plugin_content__["a" /* CoreSitePluginsPluginContentComponent */])
    ], CoreSitePluginsPluginPage.prototype, "content", void 0);
    CoreSitePluginsPluginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-site-plugins-plugin',template:/*ion-inline-start:"C:\wamp\www\BCC_mobapp\bcc_custom_mma\src\core\siteplugins\pages\plugin-page\plugin-page.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ title | translate }}</ion-title>\n\n\n\n        <ion-buttons end>\n\n            <!-- If the site plugin defines some buttons using core-nav-buttons, they will be added here. -->\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-refresher [enabled]="content && content.dataLoaded" (ionRefresh)="refreshData($event)">\n\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n    </ion-refresher>\n\n    <core-site-plugins-plugin-content [component]="component" [method]="method" [args]="args" [initResult]="initResult" [data]="jsData"></core-site-plugins-plugin-content>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp\www\BCC_mobapp\bcc_custom_mma\src\core\siteplugins\pages\plugin-page\plugin-page.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], CoreSitePluginsPluginPage);
    return CoreSitePluginsPluginPage;
}());

//# sourceMappingURL=plugin-page.js.map
=======





/**
 * Page that displays an user about page.
 */
var CoreUserAboutPage = /** @class */ (function () {
    function CoreUserAboutPage(navParams, userProvider, userHelper, domUtils, eventsProvider, sitesProvider, textUtils) {
        this.userProvider = userProvider;
        this.userHelper = userHelper;
        this.domUtils = domUtils;
        this.eventsProvider = eventsProvider;
        this.sitesProvider = sitesProvider;
        this.textUtils = textUtils;
        this.userLoaded = false;
        this.hasContact = false;
        this.hasDetails = false;
        this.user = {};
        this.userId = navParams.get('userId');
        this.courseId = navParams.get('courseId');
        this.siteId = this.sitesProvider.getCurrentSite().getId();
    }
    /**
     * View loaded.
     */
    CoreUserAboutPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.fetchUser().finally(function () {
            _this.userLoaded = true;
        });
    };
    /**
     * Fetches the user and updates the view.
     */
    CoreUserAboutPage.prototype.fetchUser = function () {
        var _this = this;
        return this.userProvider.getProfile(this.userId, this.courseId).then(function (user) {
            if (user.address) {
                user.address = _this.userHelper.formatAddress(user.address, user.city, user.country);
                user.encodedAddress = _this.textUtils.buildAddressURL(user.address);
            }
            _this.hasContact = user.email || user.phone1 || user.phone2 || user.city || user.country || user.address;
            _this.hasDetails = user.url || user.interests || (user.customfields && user.customfields.length > 0);
            _this.user = user;
            _this.title = user.fullname;
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'core.user.errorloaduser', true);
        });
    };
    /**
     * Refresh the user.
     *
     * @param {any} refresher Refresher.
     */
    CoreUserAboutPage.prototype.refreshUser = function (refresher) {
        var _this = this;
        this.userProvider.invalidateUserCache(this.userId).finally(function () {
            _this.fetchUser().finally(function () {
                _this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_2__providers_user__["a" /* CoreUserProvider */].PROFILE_REFRESHED, {
                    courseId: _this.courseId, userId: _this.userId,
                    user: _this.user
                }, _this.siteId);
                refresher && refresher.complete();
            });
        });
    };
    CoreUserAboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-user-about',template:/*ion-inline-start:"C:\wamp\www\AX-LT_2019\mma_lt\src\core\user\pages\about\about.html"*/'<ion-header>\n    <ion-navbar core-back-button>\n        <ion-title><core-format-text [text]="title"></core-format-text></ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-refresher [enabled]="userLoaded" (ionRefresh)="refreshUser($event)">\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n    </ion-refresher>\n    <core-loading [hideUntil]="userLoaded">\n        <div *ngIf="user">\n            <ion-item-group *ngIf="hasContact">\n                <ion-item-divider>{{ \'core.user.contact\' | translate}}</ion-item-divider>\n                <ion-item text-wrap *ngIf="user.email">\n                    <h2>{{ \'core.user.email\' | translate }}</h2>\n                    <p><a href="mailto:{{user.email}}" core-link auto-login="no">\n                        <core-format-text [text]="user.email"></core-format-text>\n                    </a></p>\n                </ion-item>\n                <ion-item text-wrap *ngIf="user.phone1">\n                    <h2>{{ \'core.user.phone1\' | translate}}</h2>\n                    <p><a href="tel:{{user.phone1}}" core-link auto-login="no">\n                        <core-format-text [text]="user.phone1"></core-format-text>\n                    </a></p>\n                </ion-item>\n                <ion-item text-wrap *ngIf="user.phone2">\n                    <h2>{{ \'core.user.phone2\' | translate}}</h2>\n                    <p><a href="tel:{{user.phone2}}" core-link auto-login="no">\n                        <core-format-text [text]="user.phone2"></core-format-text>\n                    </a></p>\n                </ion-item>\n                <ion-item text-wrap *ngIf="user.address">\n                    <h2>{{ \'core.user.address\' | translate}}</h2>\n                    <p><a [href]="user.encodedAddress" core-link auto-login="no">\n                            <core-format-text [text]="user.address"></core-format-text>\n                        </a>\n                    </p>\n                </ion-item>\n                <ion-item text-wrap *ngIf="user.city && !user.address">\n                    <h2>{{ \'core.user.city\' | translate}}</h2>\n                    <p><core-format-text [text]="user.city"></core-format-text></p>\n                </ion-item>\n                <ion-item text-wrap *ngIf="user.country && !user.address">\n                    <h2>{{ \'core.user.country\' | translate}}</h2>\n                    <p><core-format-text [text]="user.country"></core-format-text></p>\n                </ion-item>\n            </ion-item-group>\n            <ion-item-group *ngIf="hasDetails">\n                <ion-item-divider>{{ \'core.userdetails\' | translate}}</ion-item-divider>\n                <ion-item text-wrap *ngIf="user.url">\n                    <h2>{{ \'core.user.webpage\' | translate}}</h2>\n                    <p><a href="{{user.url}}" core-link>\n                        <core-format-text [text]="user.url"></core-format-text>\n                    </a></p>\n                </ion-item>\n                <ion-item text-wrap *ngIf="user.interests">\n                    <h2>{{ \'core.user.interests\' | translate}}</h2>\n                    <p><core-format-text [text]="user.interests"></core-format-text></p>\n                </ion-item>\n                <core-user-profile-field *ngFor="let field of user.customfields" [field]="field"></core-user-profile-field>\n            </ion-item-group>\n            <ion-item-group *ngIf="user.description">\n                <ion-item-divider>{{ \'core.user.description\' | translate}}</ion-item-divider>\n                <ion-item text-wrap>\n                    <p><core-format-text [text]="user.description"></core-format-text></p>\n                </ion-item>\n            </ion-item-group>\n        </div>\n        <core-empty-box *ngIf="!user || (!hasContact && !hasDetails && !user.description)" icon="person" [message]=" \'core.user.detailsnotavailable\' | translate"></core-empty-box>\n    </core-loading>'/*ion-inline-end:"C:\wamp\www\AX-LT_2019\mma_lt\src\core\user\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_user__["a" /* CoreUserProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_helper__["a" /* CoreUserHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__["a" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_events__["a" /* CoreEventsProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_sites__["a" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_utils_text__["a" /* CoreTextUtilsProvider */]])
    ], CoreUserAboutPage);
    return CoreUserAboutPage;
}());

//# sourceMappingURL=about.js.map
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d

/***/ })

});
//# sourceMappingURL=13.js.map