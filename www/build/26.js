webpackJsonp([26],{

<<<<<<< HEAD
/***/ 1882:
=======
/***/ 1953:
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginSitePageModule", function() { return CoreLoginSitePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__site__ = __webpack_require__(2010);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(1);
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginSitesPageModule", function() { return CoreLoginSitesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sites__ = __webpack_require__(2085);
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(14);
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
var CoreLoginSitePageModule = /** @class */ (function () {
    function CoreLoginSitePageModule() {
    }
    CoreLoginSitePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__site__["a" /* CoreLoginSitePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__site__["a" /* CoreLoginSitePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ]
        })
    ], CoreLoginSitePageModule);
    return CoreLoginSitePageModule;
}());

//# sourceMappingURL=site.module.js.map

/***/ }),

/***/ 2010:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreLoginSitePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__configconstants__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_helper__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(20);
=======
var CoreLoginSitesPageModule = /** @class */ (function () {
    function CoreLoginSitesPageModule() {
    }
    CoreLoginSitesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__sites__["a" /* CoreLoginSitesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__sites__["a" /* CoreLoginSitesPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], CoreLoginSitesPageModule);
    return CoreLoginSitesPageModule;
}());

//# sourceMappingURL=sites.module.js.map

/***/ }),

/***/ 2085:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreLoginSitesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_logger__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utils_text__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__addon_pushnotifications_providers_pushnotifications__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_helper__ = __webpack_require__(81);
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








/**
<<<<<<< HEAD
 * Page to enter or select the site URL to connect to.
 */
var CoreLoginSitePage = /** @class */ (function () {
    function CoreLoginSitePage(navParams, navCtrl, fb, appProvider, sitesProvider, loginHelper, modalCtrl, domUtils) {
        this.navCtrl = navCtrl;
        this.appProvider = appProvider;
        this.sitesProvider = sitesProvider;
        this.loginHelper = loginHelper;
        this.modalCtrl = modalCtrl;
        this.domUtils = domUtils;
        this.displayAsButtons = false;
        this.showKeyboard = false;
        this.showKeyboard = !!navParams.get('showKeyboard');
        var url = '';
        // Load fixed sites if they're set.
        if (this.loginHelper.hasSeveralFixedSites()) {
            this.fixedSites = this.loginHelper.getFixedSites();
            this.displayAsButtons = __WEBPACK_IMPORTED_MODULE_5__configconstants__["a" /* CoreConfigConstants */].multisitesdisplay == 'buttons';
            url = this.fixedSites[0].url;
        }
        this.siteForm = fb.group({
            siteUrl: [url, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["h" /* Validators */].required]
        });
    }
    /**
     * Try to connect to a site.
     */
    CoreLoginSitePage.prototype.connect = function (url) {
        var _this = this;
        this.appProvider.closeKeyboard();
        if (!url) {
            this.domUtils.showErrorModal('core.login.siteurlrequired', true);
            return;
        }
        if (!this.appProvider.isOnline()) {
            this.domUtils.showErrorModal('core.networkerrormsg', true);
            return;
        }
        var modal = this.domUtils.showModalLoading(), siteData = this.sitesProvider.getDemoSiteData(url);
        if (siteData) {
            // It's a demo site.
            this.sitesProvider.getUserToken(siteData.url, siteData.username, siteData.password).then(function (data) {
                return _this.sitesProvider.newSite(data.siteUrl, data.token, data.privateToken).then(function () {
                    return _this.loginHelper.goToSiteInitialPage();
                }, function (error) {
                    _this.domUtils.showErrorModal(error);
                });
            }, function (error) {
                _this.loginHelper.treatUserTokenError(siteData.url, error);
            }).finally(function () {
                modal.dismiss();
            });
        }
        else {
            // Not a demo site.
            this.sitesProvider.checkSite(url).then(function (result) {
                if (result.warning) {
                    _this.domUtils.showErrorModal(result.warning, true, 4000);
                }
                if (_this.loginHelper.isSSOLoginNeeded(result.code)) {
                    // SSO. User needs to authenticate in a browser.
                    _this.loginHelper.confirmAndOpenBrowserForSSOLogin(result.siteUrl, result.code, result.service, result.config && result.config.launchurl);
                }
                else {
                    _this.navCtrl.push('CoreLoginCredentialsPage', { siteUrl: result.siteUrl, siteConfig: result.config });
                }
            }, function (error) {
                _this.showLoginIssue(url, error);
            }).finally(function () {
                modal.dismiss();
            });
        }
    };
    /**
     * Show a help modal.
     */
    CoreLoginSitePage.prototype.showHelp = function () {
        var modal = this.modalCtrl.create('CoreLoginSiteHelpPage');
        modal.present();
    };
    /**
     * Show an error that aims people to solve the issue.
     *
     * @param {string} url The URL the user was trying to connect to.
     * @param {string} error Error to display.
     */
    CoreLoginSitePage.prototype.showLoginIssue = function (url, error) {
        var modal = this.modalCtrl.create('CoreLoginSiteErrorPage', { siteUrl: url, issue: error });
        modal.present();
    };
    CoreLoginSitePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-login-site',template:/*ion-inline-start:"C:\wamp\www\BCC_mobapp\bcc_custom_mma\src\core\login\pages\site\site.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'core.login.connecttomoodle\' | translate }}</ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="showHelp()" [attr.aria-label]="\'core.help\' | translate">\n\n                <ion-icon name="help-circle"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content class="core-center-view">\n\n    <div class="box">\n\n        <div text-center padding>\n\n            <img src="assets/img/login_logo.png" class="avatar-full login-logo" role="presentation">\n\n        </div>\n\n        <form ion-list [formGroup]="siteForm" (ngSubmit)="connect(siteForm.value.siteUrl)">\n\n            <!-- Form to input the site URL if there are no fixed sites. -->\n\n            <div *ngIf="!fixedSites">\n\n                <p padding>{{ \'core.login.newsitedescription\' | translate }}</p>\n\n                <ion-item>\n\n                    <ion-input type="url" name="url" placeholder="{{ \'core.login.siteaddress\' | translate }}" formControlName="siteUrl" [core-auto-focus]="showKeyboard"></ion-input>\n\n                </ion-item>\n\n            </div>\n\n\n\n            <!-- Pick the site from a list of fixed sites. -->\n\n            <div *ngIf="fixedSites" text-wrap>\n\n                <!-- Display them using a select. -->\n\n                <ion-item *ngIf="!displayAsButtons" margin-vertical>\n\n                    <ion-label stacked for="siteSelect">{{ \'core.login.selectsite\' | translate }}</ion-label>\n\n                    <ion-select formControlName="siteUrl" name="url" placeholder="{{ \'core.login.siteaddress\' | translate }}" interface="popover">\n\n                        <ion-option *ngFor="let site of fixedSites" [value]="site.url">{{site.name}}</ion-option>\n\n                    </ion-select>\n\n                </ion-item>\n\n\n\n                <!-- Display them using buttons. -->\n\n                <div *ngIf="displayAsButtons">\n\n                    <p class="padding no-padding-bottom">{{ \'core.login.selectsite\' | translate }}</p>\n\n                    <a *ngFor="let site of fixedSites" ion-button block (click)="connect(site.url)" title="{{site.name}}" margin-bottom>{{site.name}}</a>\n\n                </div>\n\n            </div>\n\n\n\n            <button *ngIf="!fixedSites || !displayAsButtons" ion-button block [disabled]="!siteForm.valid">{{ \'core.login.connect\' | translate }}</button>\n\n        </form>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp\www\BCC_mobapp\bcc_custom_mma\src\core\login\pages\site\site.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__providers_app__["a" /* CoreAppProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_sites__["a" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_helper__["a" /* CoreLoginHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__["a" /* CoreDomUtilsProvider */]])
    ], CoreLoginSitePage);
    return CoreLoginSitePage;
}());

//# sourceMappingURL=site.js.map
=======
 * Page that displays the list of stored sites.
 */
var CoreLoginSitesPage = /** @class */ (function () {
    function CoreLoginSitesPage(domUtils, textUtils, sitesProvider, loginHelper, logger, translate, pushNotificationsProvider) {
        this.domUtils = domUtils;
        this.textUtils = textUtils;
        this.sitesProvider = sitesProvider;
        this.loginHelper = loginHelper;
        this.translate = translate;
        this.pushNotificationsProvider = pushNotificationsProvider;
        this.logger = logger.getInstance('CoreLoginSitesPage');
    }
    /**
     * View loaded.
     */
    CoreLoginSitesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.sitesProvider.getSortedSites().then(function (sites) {
            // Remove protocol from the url to show more url text.
            _this.sites = sites.map(function (site) {
                site.siteUrl = site.siteUrl.replace(/^https?:\/\//, '');
                site.badge = 0;
                _this.pushNotificationsProvider.getSiteCounter(site.id).then(function (counter) {
                    site.badge = counter;
                });
                return site;
            });
            _this.showDelete = false;
        }).catch(function () {
            // Shouldn't happen.
        });
    };
    /**
     * Go to the page to add a site.
     */
    CoreLoginSitesPage.prototype.add = function () {
        this.loginHelper.goToAddSite(false, true);
    };
    /**
     * Delete a site.
     *
     * @param {Event} e Click event.
     * @param {number} index Position of the site.
     */
    CoreLoginSitesPage.prototype.deleteSite = function (e, index) {
        var _this = this;
        e.stopPropagation();
        var site = this.sites[index], siteName = site.siteName;
        this.textUtils.formatText(siteName).then(function (siteName) {
            _this.domUtils.showConfirm(_this.translate.instant('core.login.confirmdeletesite', { sitename: siteName })).then(function () {
                _this.sitesProvider.deleteSite(site.id).then(function () {
                    _this.sites.splice(index, 1);
                    _this.showDelete = false;
                    // If there are no sites left, go to add site.
                    _this.sitesProvider.hasSites().then(function (hasSites) {
                        if (!hasSites) {
                            _this.loginHelper.goToAddSite(true, true);
                        }
                    });
                }).catch(function (error) {
                    _this.logger.error('Error deleting site ' + site.id, error);
                    _this.domUtils.showErrorModalDefault(error, 'Delete site failed.');
                    _this.domUtils.showErrorModal('core.login.errordeletesite', true);
                });
            }).catch(function () {
                // User cancelled, nothing to do.
            });
        });
    };
    /**
     * Login in a site.
     *
     * @param {string} siteId The site ID.
     */
    CoreLoginSitesPage.prototype.login = function (siteId) {
        var _this = this;
        var modal = this.domUtils.showModalLoading();
        this.sitesProvider.loadSite(siteId).then(function (loggedIn) {
            if (loggedIn) {
                return _this.loginHelper.goToSiteInitialPage();
            }
        }).catch(function (error) {
            _this.logger.error('Error loading site ' + siteId, error);
            _this.domUtils.showErrorModalDefault(error, 'Error loading site.');
        }).finally(function () {
            modal.dismiss();
        });
    };
    /**
     * Toggle delete.
     */
    CoreLoginSitesPage.prototype.toggleDelete = function () {
        this.showDelete = !this.showDelete;
    };
    CoreLoginSitesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-login-sites',template:/*ion-inline-start:"C:\wamp\www\AX-LT_2019\mma_lt\src\core\login\pages\sites\sites.html"*/'<ion-header>\n    <ion-navbar core-back-button>\n        <ion-title>{{ \'core.settings.sites\' | translate }}</ion-title>\n\n        <ion-buttons end>\n            <button ion-button icon-only [navPush]="\'CoreSettingsListPage\'" [attr.aria-label]="\'core.mainmenu.appsettings\' | translate">\n                <ion-icon name="cog"></ion-icon>\n            </button>\n            <button *ngIf="sites && sites.length > 0" ion-button icon-only (click)="toggleDelete()" [attr.aria-label]="\'core.delete\' | translate">\n                <ion-icon name="create" ios="md-create"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-list>\n        <a ion-item (click)="login(site.id)" *ngFor="let site of sites; let idx = index" detail-none>\n            <ion-avatar item-start>\n                <img [src]="site.avatar" core-external-content [siteId]="site.id" alt="{{ \'core.pictureof\' | translate:{$a: site.fullname} }}" role="presentation" onError="this.src=\'assets/img/user-avatar.png\'">\n            </ion-avatar>\n            <h2>{{site.fullName}}</h2>\n            <p><core-format-text [text]="site.siteName" clean="true" [siteId]="site.id"></core-format-text></p>\n            <p>{{site.siteUrl}}</p>\n            <ion-badge item-end *ngIf="!showDelete && site.badge">{{site.badge}}</ion-badge>\n            <button *ngIf="showDelete" item-end ion-button icon-only clear color="danger" (click)="deleteSite($event, idx)" [attr.aria-label]="\'core.delete\' | translate">\n                <ion-icon name="trash"></ion-icon>\n            </button>\n        </a>\n    </ion-list>\n    <ion-fab core-fab bottom end>\n        <button ion-fab (click)="add()" [attr.aria-label]="\'core.add\' | translate">\n            <ion-icon name="add"></ion-icon>\n        </button>\n    </ion-fab>\n</ion-content>\n'/*ion-inline-end:"C:\wamp\www\AX-LT_2019\mma_lt\src\core\login\pages\sites\sites.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__["a" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_utils_text__["a" /* CoreTextUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_sites__["a" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_helper__["a" /* CoreLoginHelperProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_logger__["a" /* CoreLoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_6__addon_pushnotifications_providers_pushnotifications__["a" /* AddonPushNotificationsProvider */]])
    ], CoreLoginSitesPage);
    return CoreLoginSitesPage;
}());

//# sourceMappingURL=sites.js.map
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d

/***/ })

});
//# sourceMappingURL=26.js.map