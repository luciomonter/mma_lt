webpackJsonp([18],{

<<<<<<< HEAD
/***/ 1890:
=======
/***/ 1961:
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsSynchronizationPageModule", function() { return CoreSettingsSynchronizationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__synchronization__ = __webpack_require__(2018);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__ = __webpack_require__(67);
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSharedFilesChooseSitePageModule", function() { return CoreSharedFilesChooseSitePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__choose_site__ = __webpack_require__(2093);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__ = __webpack_require__(14);
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

var CoreSettingsSynchronizationPageModule = /** @class */ (function () {
    function CoreSettingsSynchronizationPageModule() {
    }
    CoreSettingsSynchronizationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__synchronization__["a" /* CoreSettingsSynchronizationPage */]
=======
var CoreSharedFilesChooseSitePageModule = /** @class */ (function () {
    function CoreSharedFilesChooseSitePageModule() {
    }
    CoreSharedFilesChooseSitePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__choose_site__["a" /* CoreSharedFilesChooseSitePage */]
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
<<<<<<< HEAD
                __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__["a" /* CorePipesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__synchronization__["a" /* CoreSettingsSynchronizationPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], CoreSettingsSynchronizationPageModule);
    return CoreSettingsSynchronizationPageModule;
}());

//# sourceMappingURL=synchronization.module.js.map

/***/ }),

/***/ 2018:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreSettingsSynchronizationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_constants__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_events__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_config__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_settings_providers_helper__ = __webpack_require__(936);
=======
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__choose_site__["a" /* CoreSharedFilesChooseSitePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ]
        })
    ], CoreSharedFilesChooseSitePageModule);
    return CoreSharedFilesChooseSitePageModule;
}());

//# sourceMappingURL=choose-site.module.js.map

/***/ }),

/***/ 2093:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreSharedFilesChooseSitePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_file__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_helper__ = __webpack_require__(411);
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
 * Page that displays the synchronization settings.
 */
var CoreSettingsSynchronizationPage = /** @class */ (function () {
    function CoreSettingsSynchronizationPage(configProvider, eventsProvider, sitesProvider, domUtils, settingsHelper) {
        var _this = this;
        this.configProvider = configProvider;
        this.eventsProvider = eventsProvider;
        this.sitesProvider = sitesProvider;
        this.domUtils = domUtils;
        this.settingsHelper = settingsHelper;
        this.sites = [];
        this.sitesLoaded = false;
        this.currentSiteId = '';
        this.syncOnlyOnWifi = false;
        this.isDestroyed = false;
        this.currentSiteId = this.sitesProvider.getCurrentSiteId();
        this.sitesObserver = this.eventsProvider.on(__WEBPACK_IMPORTED_MODULE_2__providers_events__["a" /* CoreEventsProvider */].SITE_UPDATED, function (data) {
            _this.sitesProvider.getSite(data.siteId).then(function (site) {
                var siteInfo = site.getInfo();
                var siteEntry = _this.sites.find(function (siteEntry) { return siteEntry.id == site.id; });
                if (siteEntry) {
                    siteEntry.siteUrl = siteInfo.siteurl;
                    siteEntry.siteName = siteInfo.sitename;
                    siteEntry.fullName = siteInfo.fullname;
                }
            });
        });
    }
    /**
     * View loaded.
     */
    CoreSettingsSynchronizationPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.sitesProvider.getSortedSites().then(function (sites) {
            _this.sites = sites;
        }).finally(function () {
            _this.sitesLoaded = true;
        });
        this.configProvider.get(__WEBPACK_IMPORTED_MODULE_1__core_constants__["a" /* CoreConstants */].SETTINGS_SYNC_ONLY_ON_WIFI, true).then(function (syncOnlyOnWifi) {
            _this.syncOnlyOnWifi = !!syncOnlyOnWifi;
        });
    };
    /**
     * Called when sync only on wifi setting is enabled or disabled.
     */
    CoreSettingsSynchronizationPage.prototype.syncOnlyOnWifiChanged = function () {
        this.configProvider.set(__WEBPACK_IMPORTED_MODULE_1__core_constants__["a" /* CoreConstants */].SETTINGS_SYNC_ONLY_ON_WIFI, this.syncOnlyOnWifi ? 1 : 0);
    };
    /**
     * Syncrhonizes a site.
     *
     * @param {string} siteId Site ID.
     */
    CoreSettingsSynchronizationPage.prototype.synchronize = function (siteId) {
        var _this = this;
        this.settingsHelper.synchronizeSite(this.syncOnlyOnWifi, siteId).catch(function (error) {
            if (_this.isDestroyed) {
                return;
            }
            _this.domUtils.showErrorModalDefault(error, 'core.settings.errorsyncsite', true);
        });
    };
    /**
     * Returns true if site is beeing synchronized.
     *
     * @param {string} siteId Site ID.
     * @return {boolean} True if site is beeing synchronized, false otherwise.
     */
    CoreSettingsSynchronizationPage.prototype.isSynchronizing = function (siteId) {
        return !!this.settingsHelper.getSiteSyncPromise(siteId);
    };
    /**
     * Page destroyed.
     */
    CoreSettingsSynchronizationPage.prototype.ngOnDestroy = function () {
        this.isDestroyed = true;
        this.sitesObserver && this.sitesObserver.off();
    };
    CoreSettingsSynchronizationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-settings-synchronization',template:/*ion-inline-start:"C:\wamp\www\BCC_mobapp\bcc_custom_mma\src\core\settings\pages\synchronization\synchronization.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'core.settings.synchronization\' | translate }}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <core-loading [hideUntil]="sitesLoaded">\n\n        <ion-item-divider color="light">\n\n            <p>{{ \'core.settings.syncsettings\' | translate }}</p>\n\n        </ion-item-divider>\n\n        <ion-item text-wrap>\n\n            <ion-label>{{ \'core.settings.enablesyncwifi\' | translate }}</ion-label>\n\n            <ion-toggle item-end [(ngModel)]="syncOnlyOnWifi" (ngModelChange)="syncOnlyOnWifiChanged()">\n\n            </ion-toggle>\n\n        </ion-item>\n\n        <ion-item-divider color="light">\n\n            <p>{{ \'core.settings.sites\' | translate }}</p>\n\n        </ion-item-divider>\n\n        <ion-item *ngFor="let site of sites" [class.core-primary-item]="site.id == currentSiteId" text-wrap>\n\n            <h2><core-format-text [text]="site.siteName"></core-format-text></h2>\n\n            <p>{{ site.fullName }}</p>\n\n            <p>{{ site.siteUrl }}</p>\n\n            <button ion-button icon-only clear item-end *ngIf="!isSynchronizing(site.id)" (click)="synchronize(site.id)" [title]="site.siteName" [attr.aria-label]="\'core.settings.synchronizenow\' | translate">\n\n                <ion-icon name="sync"></ion-icon>\n\n            </button>\n\n            <ion-spinner item-end *ngIf="isSynchronizing(site.id)"></ion-spinner>\n\n        </ion-item>\n\n    </core-loading>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp\www\BCC_mobapp\bcc_custom_mma\src\core\settings\pages\synchronization\synchronization.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_config__["a" /* CoreConfigProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_events__["a" /* CoreEventsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_sites__["a" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__["a" /* CoreDomUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_6__core_settings_providers_helper__["a" /* CoreSettingsHelper */]])
    ], CoreSettingsSynchronizationPage);
    return CoreSettingsSynchronizationPage;
}());

//# sourceMappingURL=synchronization.js.map
=======
/**
 * Modal to display the list of sites to choose one to store a shared file.
 */
var CoreSharedFilesChooseSitePage = /** @class */ (function () {
    function CoreSharedFilesChooseSitePage(navCtrl, navParams, sharedFilesHelper, sitesProvider, domUtils, fileProvider) {
        this.navCtrl = navCtrl;
        this.sharedFilesHelper = sharedFilesHelper;
        this.sitesProvider = sitesProvider;
        this.domUtils = domUtils;
        this.fileProvider = fileProvider;
        this.filePath = navParams.get('filePath');
        this.isInbox = navParams.get('isInbox');
    }
    /**
     * Component being initialized.
     */
    CoreSharedFilesChooseSitePage.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.filePath) {
            this.domUtils.showErrorModal('Error reading file.');
            this.navCtrl.pop();
            return;
        }
        var fileAndDir = this.fileProvider.getFileAndDirectoryFromPath(this.filePath);
        this.fileName = fileAndDir.name;
        // Get the file.
        this.fileProvider.getExternalFile(this.filePath).then(function (fe) {
            _this.fileEntry = fe;
            _this.fileName = _this.fileEntry.name;
        }).catch(function () {
            _this.domUtils.showErrorModal('Error reading file.');
            _this.navCtrl.pop();
        });
        // Get the sites.
        this.sitesProvider.getSites().then(function (sites) {
            _this.sites = sites;
        }).finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Store the file in a certain site.
     *
     * @param {string} siteId Site ID.
     */
    CoreSharedFilesChooseSitePage.prototype.storeInSite = function (siteId) {
        var _this = this;
        this.loaded = false;
        this.sharedFilesHelper.storeSharedFileInSite(this.fileEntry, siteId, this.isInbox).then(function () {
            _this.navCtrl.pop();
        }).finally(function () {
            _this.loaded = true;
        });
    };
    CoreSharedFilesChooseSitePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-shared-files-choose-site',template:/*ion-inline-start:"C:\wamp\www\AX-LT_2019\mma_lt\src\core\sharedfiles\pages\choose-site\choose-site.html"*/'<ion-header>\n    <ion-navbar core-back-button>\n        <ion-title>{{ \'core.sharedfiles.sharedfiles\' | translate }}</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <core-loading [hideUntil]="loaded">\n        <ion-list>\n            <ion-item text-wrap>\n                <p class="item-heading">{{ \'core.sharedfiles.chooseaccountstorefile\' | translate }}</p>\n                <p>{{fileName}}</p>\n            </ion-item>\n            <a ion-item *ngFor="let site of sites" (click)="storeInSite(site.id)">\n                <img [src]="site.avatar" item-start>\n                <h2>{{site.fullName}}</h2>\n                <p><core-format-text clean="true" [text]="site.siteName"></core-format-text></p>\n                <p>{{site.siteUrl}}</p>\n            </a>\n        </ion-list>\n    </core-loading>\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\wamp\www\AX-LT_2019\mma_lt\src\core\sharedfiles\pages\choose-site\choose-site.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_helper__["a" /* CoreSharedFilesHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_sites__["a" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__["a" /* CoreDomUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_file__["a" /* CoreFileProvider */]])
    ], CoreSharedFilesChooseSitePage);
    return CoreSharedFilesChooseSitePage;
}());

//# sourceMappingURL=choose-site.js.map
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d

/***/ })

});
//# sourceMappingURL=18.js.map