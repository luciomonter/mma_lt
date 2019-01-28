webpackJsonp([27],{

<<<<<<< HEAD
/***/ 1881:
=======
/***/ 1952:
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginSitePolicyPageModule", function() { return CoreLoginSitePolicyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__site_policy__ = __webpack_require__(2009);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__ = __webpack_require__(14);
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginSitePageModule", function() { return CoreLoginSitePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__site__ = __webpack_require__(2084);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(14);
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

var CoreLoginSitePolicyPageModule = /** @class */ (function () {
    function CoreLoginSitePolicyPageModule() {
    }
    CoreLoginSitePolicyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__site_policy__["a" /* CoreLoginSitePolicyPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__site_policy__["a" /* CoreLoginSitePolicyPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ]
        })
    ], CoreLoginSitePolicyPageModule);
    return CoreLoginSitePolicyPageModule;
}());

//# sourceMappingURL=site-policy.module.js.map

/***/ }),

/***/ 2009:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreLoginSitePolicyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utils_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utils_mimetype__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utils_utils__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_helper__ = __webpack_require__(79);
=======
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

/***/ 2084:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreLoginSitePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__configconstants__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_helper__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(24);
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
 * Page to accept a site policy.
 */
var CoreLoginSitePolicyPage = /** @class */ (function () {
    function CoreLoginSitePolicyPage(navCtrl, navParams, loginHelper, domUtils, sitesProvider, utils, mimeUtils) {
        this.navCtrl = navCtrl;
        this.loginHelper = loginHelper;
        this.domUtils = domUtils;
        this.sitesProvider = sitesProvider;
        this.utils = utils;
        this.mimeUtils = mimeUtils;
        this.siteId = navParams.get('siteId');
    }
    /**
     * View laoded.
     */
    CoreLoginSitePolicyPage.prototype.ionViewDidLoad = function () {
        this.currentSite = this.sitesProvider.getCurrentSite();
        if (!this.currentSite) {
            // Not logged in, stop.
            this.cancel();
            return;
        }
        var currentSiteId = this.currentSite.id;
        this.siteId = this.siteId || currentSiteId;
        if (this.siteId != currentSiteId || !this.currentSite.wsAvailable('core_user_agree_site_policy')) {
            // Not current site or WS not available, stop.
            this.cancel();
            return;
        }
        this.fetchSitePolicy();
    };
    /**
     * Fetch the site policy URL.
     *
     * @return {Promise<any>} Promise resolved when done.
     */
    CoreLoginSitePolicyPage.prototype.fetchSitePolicy = function () {
        var _this = this;
        return this.loginHelper.getSitePolicy(this.siteId).then(function (sitePolicy) {
            _this.sitePolicy = sitePolicy;
            // Try to get the mime type.
            return _this.utils.getMimeTypeFromUrl(sitePolicy).then(function (mimeType) {
                var extension = _this.mimeUtils.getExtension(mimeType, sitePolicy);
                _this.showInline = extension == 'html' || extension == 'htm';
            }).catch(function () {
                // Unable to get mime type, assume it's not supported.
                _this.showInline = false;
            }).finally(function () {
                _this.policyLoaded = true;
            });
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error && error.error, 'Error getting site policy.');
            _this.cancel();
        });
    };
    /**
     * Cancel.
     */
    CoreLoginSitePolicyPage.prototype.cancel = function () {
        var _this = this;
        this.sitesProvider.logout().catch(function () {
            // Ignore errors, shouldn't happen.
        }).then(function () {
            _this.navCtrl.setRoot('CoreLoginSitesPage');
        });
    };
    /**
     * Accept the site policy.
     */
    CoreLoginSitePolicyPage.prototype.accept = function () {
        var _this = this;
        var modal = this.domUtils.showModalLoading('core.sending', true);
        this.loginHelper.acceptSitePolicy(this.siteId).then(function () {
            // Success accepting, go to site initial page.
            // Invalidate cache since some WS don't return error if site policy is not accepted.
            return _this.currentSite.invalidateWsCache().catch(function () {
                // Ignore errors.
            }).then(function () {
                return _this.loginHelper.goToSiteInitialPage();
            });
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error.message, 'Error accepting site policy.');
        }).finally(function () {
            modal.dismiss();
        });
    };
    CoreLoginSitePolicyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-login-site-policy',template:/*ion-inline-start:"C:\wamp\www\BCC_mobapp\bcc_custom_mma\src\core\login\pages\site-policy\site-policy.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'core.login.policyagreement\' | translate }}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <core-loading [hideUntil]="policyLoaded">\n\n        <ion-list>\n\n            <ion-item text-wrap>\n\n                {{ \'core.login.policyagree\' | translate }}\n\n            </ion-item>\n\n            <ion-item text-wrap>\n\n                <p><a [href]="sitePolicy" core-link [capture]="false">{{ \'core.login.policyagreementclick\' | translate }}</a></p>\n\n            </ion-item>\n\n            <ion-card *ngIf="showInline">\n\n                <core-iframe [src]="sitePolicy"></core-iframe>\n\n            </ion-card>\n\n            <ion-item text-wrap padding>\n\n                <button ion-button block color="primary" (click)="accept()">{{ \'core.login.policyaccept\' | translate }}</button>\n\n                <button ion-button block (click)="cancel()">{{ \'core.login.cancel\' | translate }}</button>\n\n            </ion-item>\n\n        </ion-list>\n\n    </core-loading>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp\www\BCC_mobapp\bcc_custom_mma\src\core\login\pages\site-policy\site-policy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_helper__["a" /* CoreLoginHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_utils_dom__["a" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_sites__["a" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_utils_utils__["a" /* CoreUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_utils_mimetype__["a" /* CoreMimetypeUtilsProvider */]])
    ], CoreLoginSitePolicyPage);
    return CoreLoginSitePolicyPage;
}());

//# sourceMappingURL=site-policy.js.map
=======

/**
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
        this.fixedDisplay = 'buttons';
        this.showKeyboard = false;
        this.filter = '';
        this.showKeyboard = !!navParams.get('showKeyboard');
        var url = '';
        // Load fixed sites if they're set.
        if (this.loginHelper.hasSeveralFixedSites()) {
            this.fixedSites = this.loginHelper.getFixedSites();
            this.fixedDisplay = __WEBPACK_IMPORTED_MODULE_5__configconstants__["a" /* CoreConfigConstants */].multisitesdisplay;
            // Autoselect if not defined.
            if (['list', 'select', 'buttons'].indexOf(this.fixedDisplay) < 0) {
                this.fixedDisplay = this.fixedSites.length > 8 ? 'list' : (this.fixedSites.length > 3 ? 'select' : 'buttons');
            }
            this.filteredSites = this.fixedSites;
            url = this.fixedSites[0].url;
        }
        this.siteForm = fb.group({
            siteUrl: [url, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["h" /* Validators */].required]
        });
    }
    /**
     * Try to connect to a site.
     *
     * @param {Event} e Event.
     * @param {string} url The URL to connect to.
     */
    CoreLoginSitePage.prototype.connect = function (e, url) {
        var _this = this;
        e.preventDefault();
        e.stopPropagation();
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
                _this.loginHelper.treatUserTokenError(siteData.url, error, siteData.username, siteData.password);
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
     * The filter has changed.
     *
     * @param {any} Received Event.
     */
    CoreLoginSitePage.prototype.filterChanged = function (event) {
        var newValue = event.target.value && event.target.value.trim().toLowerCase();
        if (!newValue || !this.fixedSites) {
            this.filteredSites = this.fixedSites;
        }
        else {
            this.filteredSites = this.fixedSites.filter(function (site) {
                return site.name.toLowerCase().indexOf(newValue) > -1 || site.url.toLowerCase().indexOf(newValue) > -1;
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
            selector: 'page-core-login-site',template:/*ion-inline-start:"C:\wamp\www\AX-LT_2019\mma_lt\src\core\login\pages\site\site.html"*/'<ion-header>\n    <ion-navbar core-back-button>\n        <ion-title>{{ \'core.login.connecttomoodle\' | translate }}</ion-title>\n\n        <ion-buttons end>\n            <button ion-button icon-only [navPush]="\'CoreSettingsListPage\'" [attr.aria-label]="\'core.mainmenu.appsettings\' | translate">\n                <ion-icon name="cog"></ion-icon>\n            </button>\n            <button ion-button icon-only (click)="showHelp()" [attr.aria-label]="\'core.help\' | translate">\n                <ion-icon name="help-circle"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content class="core-center-view">\n    <div class="box">\n        <div text-center padding>\n            <img src="assets/img/login_logo.png" class="avatar-full login-logo" role="presentation">\n        </div>\n        <form ion-list [formGroup]="siteForm" (ngSubmit)="connect($event, siteForm.value.siteUrl)" *ngIf="!fixedSites || fixedDisplay == \'select\'">\n            <!-- Form to input the site URL if there are no fixed sites. -->\n            <ng-container *ngIf="!fixedSites">\n                <p padding>{{ \'core.login.newsitedescription\' | translate }}</p>\n                <ion-item>\n                    <ion-input type="url" name="url" placeholder="{{ \'core.login.siteaddress\' | translate }}" formControlName="siteUrl" [core-auto-focus]="showKeyboard"></ion-input>\n                </ion-item>\n            </ng-container>\n\n            <ion-item *ngIf="fixedSites && fixedDisplay == \'select\'" margin-vertical text-wrap>\n                <ion-label stacked for="siteSelect">{{ \'core.login.selectsite\' | translate }}</ion-label>\n                <ion-select formControlName="siteUrl" name="url" placeholder="{{ \'core.login.siteaddress\' | translate }}" interface="action-sheet">\n                    <ion-option *ngFor="let site of fixedSites" [value]="site.url">{{site.name}}</ion-option>\n                </ion-select>\n            </ion-item>\n\n            <button ion-button block [disabled]="!siteForm.valid">{{ \'core.login.connect\' | translate }}</button>\n        </form>\n        <!-- Pick the site from a list of fixed sites. -->\n        <ion-list *ngIf="fixedSites && fixedDisplay == \'list\'">\n            <p class="padding no-padding-bottom">{{ \'core.login.selectsite\' | translate }}</p>\n\n            <ion-searchbar *ngIf="fixedSites.length > 4" [(ngModel)]="filter" (ionInput)="filterChanged($event)" (ionCancel)="filterChanged()" [placeholder]="\'core.login.findyoursite\' | translate"></ion-searchbar>\n            <ion-item *ngFor="let site of filteredSites" (click)="connect($event, site.url)" [title]="site.name" detail-push text-wrap>\n                <h2>{{site.name}}</h2>\n                <p>{{site.url}}</p>\n            </ion-item>\n        </ion-list>\n\n        <!-- Display them using buttons. -->\n        <div *ngIf="fixedSites && fixedDisplay == \'buttons\'">\n            <p class="padding no-padding-bottom">{{ \'core.login.selectsite\' | translate }}</p>\n            <a *ngFor="let site of fixedSites" ion-button block (click)="connect($event, site.url)" [title]="site.name" margin-bottom>{{site.name}}</a>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\wamp\www\AX-LT_2019\mma_lt\src\core\login\pages\site\site.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__providers_app__["a" /* CoreAppProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_sites__["a" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_helper__["a" /* CoreLoginHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__["a" /* CoreDomUtilsProvider */]])
    ], CoreLoginSitePage);
    return CoreLoginSitePage;
}());

//# sourceMappingURL=site.js.map
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d

/***/ })

});
//# sourceMappingURL=27.js.map