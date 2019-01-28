webpackJsonp([20],{

<<<<<<< HEAD
/***/ 1888:
=======
/***/ 1960:
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsListPageModule", function() { return CoreSettingsListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list__ = __webpack_require__(2016);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__ = __webpack_require__(14);
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsSpaceUsagePageModule", function() { return CoreSettingsSpaceUsagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__space_usage__ = __webpack_require__(2092);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__ = __webpack_require__(63);
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
var CoreSettingsListPageModule = /** @class */ (function () {
    function CoreSettingsListPageModule() {
    }
    CoreSettingsListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__list__["a" /* CoreSettingsListPage */]
=======

var CoreSettingsSpaceUsagePageModule = /** @class */ (function () {
    function CoreSettingsSpaceUsagePageModule() {
    }
    CoreSettingsSpaceUsagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__space_usage__["a" /* CoreSettingsSpaceUsagePage */]
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
<<<<<<< HEAD
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__list__["a" /* CoreSettingsListPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], CoreSettingsListPageModule);
    return CoreSettingsListPageModule;
}());

//# sourceMappingURL=list.module.js.map

/***/ }),

/***/ 2016:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreSettingsListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_delegate__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_split_view_split_view__ = __webpack_require__(104);
=======
                __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__["a" /* CorePipesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__space_usage__["a" /* CoreSettingsSpaceUsagePage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], CoreSettingsSpaceUsagePageModule);
    return CoreSettingsSpaceUsagePageModule;
}());

//# sourceMappingURL=space-usage.module.js.map

/***/ }),

/***/ 2092:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreSettingsSpaceUsagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_filepool__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utils_text__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__ = __webpack_require__(8);
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
 * Page that displays the list of settings pages.
 */
var CoreSettingsListPage = /** @class */ (function () {
    function CoreSettingsListPage(settingsDelegate, platorm, navParams) {
        this.settingsDelegate = settingsDelegate;
        this.isIOS = platorm.is('ios');
        this.selectedPage = navParams.get('page') || false;
=======



/**
 * Page that displays the space usage settings.
 */
var CoreSettingsSpaceUsagePage = /** @class */ (function () {
    function CoreSettingsSpaceUsagePage(filePoolProvider, sitesProvider, textUtils, translate, domUtils, appProvider) {
        this.filePoolProvider = filePoolProvider;
        this.sitesProvider = sitesProvider;
        this.textUtils = textUtils;
        this.translate = translate;
        this.domUtils = domUtils;
        this.usageLoaded = false;
        this.sites = [];
        this.currentSiteId = '';
        this.totalUsage = 0;
        this.currentSiteId = this.sitesProvider.getCurrentSiteId();
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
    }
    /**
     * View loaded.
     */
<<<<<<< HEAD
    CoreSettingsListPage.prototype.ionViewDidLoad = function () {
        this.handlers = this.settingsDelegate.getHandlers();
        if (this.selectedPage) {
            this.openHandler(this.selectedPage);
        }
        else if (this.splitviewCtrl.isOn()) {
            this.openHandler('CoreSettingsGeneralPage');
        }
    };
    /**
     * Open a handler.
     *
     * @param {string} page Page to open.
     * @param {any} params Params of the page to open.
     */
    CoreSettingsListPage.prototype.openHandler = function (page, params) {
        this.selectedPage = page;
        this.splitviewCtrl.push(page, params);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__components_split_view_split_view__["a" /* CoreSplitViewComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__components_split_view_split_view__["a" /* CoreSplitViewComponent */])
    ], CoreSettingsListPage.prototype, "splitviewCtrl", void 0);
    CoreSettingsListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-settings-list',template:/*ion-inline-start:"C:\wamp\www\BCC_mobapp\bcc_custom_mma\src\core\settings\pages\list\list.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'core.settings.settings\' | translate}}</ion-title>\n\n        <ion-buttons end>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<core-split-view>\n\n    <ion-content>\n\n        <ion-list>\n\n            <a ion-item (click)="openHandler(\'CoreSettingsGeneralPage\')" [title]="\'core.settings.general\' | translate"  [class.core-split-item-selected]="\'CoreSettingsGeneralPage\' == selectedPage" detail-push>\n\n                <ion-icon name="construct" item-start></ion-icon>\n\n                <p>{{ \'core.settings.general\' | translate }}</p>\n\n            </a>\n\n            <a ion-item (click)="openHandler(\'CoreSettingsSpaceUsagePage\')" [title]="\'core.settings.spaceusage\' | translate" [class.core-split-item-selected]="\'CoreSettingsSpaceUsagePage\' == selectedPage" detail-push>\n\n                <ion-icon name="stats" item-start></ion-icon>\n\n                <p>{{ \'core.settings.spaceusage\' | translate }}</p>\n\n            </a>\n\n            <a ion-item (click)="openHandler(\'CoreSettingsSynchronizationPage\')" [title]="\'core.settings.synchronization\' | translate" [class.core-split-item-selected]="\'CoreSettingsSynchronizationPage\' == selectedPage" detail-push>\n\n                <ion-icon name="sync" item-start></ion-icon>\n\n                <p>{{ \'core.settings.synchronization\' | translate }}</p>\n\n            </a>\n\n            <a ion-item *ngIf="isIOS" (click)="openHandler(\'CoreSharedFilesListPage\', {manage: true})" [title]="\'core.sharedfiles.sharedfiles\' | translate" [class.core-split-item-selected]="\'CoreSharedFilesListPage\' == selectedPage" detail-push>\n\n                <ion-icon name="folder" item-start></ion-icon>\n\n                <p>{{ \'core.sharedfiles.sharedfiles\' | translate }}</p>\n\n            </a>\n\n\n\n            <a ion-item *ngFor="let handler of handlers" [ngClass]="[\'core-settings-handler\', handler.class]" (click)="openHandler(handler.page, handler.params)" [title]="handler.title | translate" detail-push [class.core-split-item-selected]="handler.page == selectedPage">\n\n                <core-icon [name]="handler.icon" item-start *ngIf="handler.icon"></core-icon>\n\n                <p>{{ handler.title | translate}}</p>\n\n            </a>\n\n\n\n            <a ion-item (click)="openHandler(\'CoreSettingsAboutPage\')" [title]="\'core.settings.about\' | translate" [class.core-split-item-selected]="\'CoreSettingsAboutPage\' == selectedPage" detail-push>\n\n                <ion-icon name="contacts" item-start></ion-icon>\n\n                <p>{{ \'core.settings.about\' | translate }}</p>\n\n            </a>\n\n        </ion-list>\n\n    </ion-content>\n\n</core-split-view>\n\n'/*ion-inline-end:"C:\wamp\www\BCC_mobapp\bcc_custom_mma\src\core\settings\pages\list\list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_delegate__["a" /* CoreSettingsDelegate */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], CoreSettingsListPage);
    return CoreSettingsListPage;
}());

//# sourceMappingURL=list.js.map
=======
    CoreSettingsSpaceUsagePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.fetchData().finally(function () {
            _this.usageLoaded = true;
        });
    };
    /**
     * Convenience function to calculate each site's usage, and the total usage.
     *
     * @return {Promise<any>} Resolved when done.
     */
    CoreSettingsSpaceUsagePage.prototype.calculateSizeUsage = function () {
        var _this = this;
        return this.sitesProvider.getSortedSites().then(function (sites) {
            _this.sites = sites;
            // Get space usage.
            var promises = _this.sites.map(function (siteEntry) {
                return _this.sitesProvider.getSite(siteEntry.id).then(function (site) {
                    return site.getSpaceUsage().then(function (size) {
                        siteEntry.spaceUsage = size;
                    });
                });
            });
            return Promise.all(promises);
        });
    };
    /**
     * Convenience function to calculate total usage.
     */
    CoreSettingsSpaceUsagePage.prototype.calculateTotalUsage = function () {
        var total = 0;
        this.sites.forEach(function (site) {
            if (site.spaceUsage) {
                total += parseInt(site.spaceUsage, 10);
            }
        });
        this.totalUsage = total;
    };
    /**
     * Convenience function to calculate space usage.
     *
     * @return {Promise<any>} Resolved when done.
     */
    CoreSettingsSpaceUsagePage.prototype.fetchData = function () {
        var _this = this;
        var promises = [
            this.calculateSizeUsage().then(function () { return _this.calculateTotalUsage(); }),
        ];
        return Promise.all(promises);
    };
    /**
     * Refresh the data.
     *
     * @param {any} refresher Refresher.
     */
    CoreSettingsSpaceUsagePage.prototype.refreshData = function (refresher) {
        this.fetchData().finally(function () {
            refresher.complete();
        });
    };
    /**
     * Convenience function to update site size, along with total usage.
     *
     * @param {any} site Site object with space usage.
     * @param {number} newUsage New space usage of the site in bytes.
     */
    CoreSettingsSpaceUsagePage.prototype.updateSiteUsage = function (site, newUsage) {
        var oldUsage = site.spaceUsage;
        site.spaceUsage = newUsage;
        this.totalUsage -= oldUsage - newUsage;
    };
    /**
     * Deletes files of a site.
     *
     * @param {any} siteData Site object with space usage.
     */
    CoreSettingsSpaceUsagePage.prototype.deleteSiteFiles = function (siteData) {
        var _this = this;
        this.textUtils.formatText(siteData.siteName).then(function (siteName) {
            var title = _this.translate.instant('core.settings.deletesitefilestitle');
            var message = _this.translate.instant('core.settings.deletesitefiles', { sitename: siteName });
            _this.domUtils.showConfirm(message, title).then(function () {
                return _this.sitesProvider.getSite(siteData.id);
            }).then(function (site) {
                site.deleteFolder().then(function () {
                    _this.filePoolProvider.clearAllPackagesStatus(site.id);
                    _this.filePoolProvider.clearFilepool(site.id);
                    _this.updateSiteUsage(siteData, 0);
                }).catch(function (error) {
                    if (error && error.code === FileError.NOT_FOUND_ERR) {
                        // Not found, set size 0.
                        _this.filePoolProvider.clearAllPackagesStatus(site.id);
                        _this.updateSiteUsage(siteData, 0);
                    }
                    else {
                        // Error, recalculate the site usage.
                        _this.domUtils.showErrorModal('core.settings.errordeletesitefiles', true);
                        site.getSpaceUsage().then(function (size) {
                            _this.updateSiteUsage(siteData, size);
                        });
                    }
                });
            }).catch(function () {
                // Ignore cancelled confirmation modal.
            });
        });
    };
    CoreSettingsSpaceUsagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-settings-space-usage',template:/*ion-inline-start:"C:\wamp\www\AX-LT_2019\mma_lt\src\core\settings\pages\space-usage\space-usage.html"*/'<ion-header>\n    <ion-navbar core-back-button>\n        <ion-title>{{ \'core.settings.spaceusage\' | translate }}</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-refresher [enabled]="usageLoaded" (ionRefresh)="refreshData($event)">\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n    </ion-refresher>\n    <core-loading [hideUntil]="usageLoaded">\n        <ion-item *ngFor="let site of sites" [class.core-primary-selected-item]="site.id == currentSiteId">\n            <h2><core-format-text [text]="site.siteName"></core-format-text></h2>\n            <p>{{ site.fullName }}</p>\n            <p item-end>{{ site.spaceUsage | coreBytesToSize }}</p>\n            <button ion-button icon-only clear color="danger" item-end (click)="deleteSiteFiles(site)" [hidden]="!site.spaceUsage > \'0\'" [attr.aria-label]="\'core.settings.deletesitefilestitle\' | translate">\n                <ion-icon name="trash"></ion-icon>\n            </button>\n        </ion-item>\n        <ion-item-divider>\n            <p>{{ \'core.settings.total\' | translate }}</p>\n            <p item-end>{{ totalUsage | coreBytesToSize }}</p>\n        </ion-item-divider>\n    </core-loading>\n</ion-content>\n'/*ion-inline-end:"C:\wamp\www\AX-LT_2019\mma_lt\src\core\settings\pages\space-usage\space-usage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_filepool__["a" /* CoreFilepoolProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_sites__["a" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_utils_text__["a" /* CoreTextUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__["a" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_app__["a" /* CoreAppProvider */]])
    ], CoreSettingsSpaceUsagePage);
    return CoreSettingsSpaceUsagePage;
}());

//# sourceMappingURL=space-usage.js.map
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d

/***/ })

});
//# sourceMappingURL=20.js.map