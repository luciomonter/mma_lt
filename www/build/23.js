webpackJsonp([23],{

<<<<<<< HEAD
/***/ 1886:
=======
/***/ 1956:
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreMainMenuPageModule", function() { return CoreMainMenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__more__ = __webpack_require__(2014);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__ = __webpack_require__(14);
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsAboutPageModule", function() { return CoreSettingsAboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about__ = __webpack_require__(2088);
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
var CoreMainMenuPageModule = /** @class */ (function () {
    function CoreMainMenuPageModule() {
    }
    CoreMainMenuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__more__["a" /* CoreMainMenuMorePage */],
=======

var CoreSettingsAboutPageModule = /** @class */ (function () {
    function CoreSettingsAboutPageModule() {
    }
    CoreSettingsAboutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__about__["a" /* CoreSettingsAboutPage */]
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
<<<<<<< HEAD
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__more__["a" /* CoreMainMenuMorePage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], CoreMainMenuPageModule);
    return CoreMainMenuPageModule;
}());

//# sourceMappingURL=more.module.js.map

/***/ }),

/***/ 2014:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreMainMenuMorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_events__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_delegate__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_mainmenu__ = __webpack_require__(929);
=======
                __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__["a" /* CorePipesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__about__["a" /* CoreSettingsAboutPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], CoreSettingsAboutPageModule);
    return CoreSettingsAboutPageModule;
}());

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 2088:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreSettingsAboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_file__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_init__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_lang__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_local_notifications__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__configconstants__ = __webpack_require__(75);
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
 * Page that displays the list of main menu options that aren't in the tabs.
 */
var CoreMainMenuMorePage = /** @class */ (function () {
    function CoreMainMenuMorePage(menuDelegate, sitesProvider, navCtrl, mainMenuProvider, eventsProvider) {
        this.menuDelegate = menuDelegate;
        this.sitesProvider = sitesProvider;
        this.navCtrl = navCtrl;
        this.mainMenuProvider = mainMenuProvider;
        this.langObserver = eventsProvider.on(__WEBPACK_IMPORTED_MODULE_2__providers_events__["a" /* CoreEventsProvider */].LANGUAGE_CHANGED, this.loadSiteInfo.bind(this));
        this.updateSiteObserver = eventsProvider.on(__WEBPACK_IMPORTED_MODULE_2__providers_events__["a" /* CoreEventsProvider */].SITE_UPDATED, this.loadSiteInfo.bind(this), sitesProvider.getCurrentSiteId());
        this.loadSiteInfo();
    }
    /**
     * View loaded.
     */
    CoreMainMenuMorePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // Load the handlers.
        this.subscription = this.menuDelegate.getHandlers().subscribe(function (handlers) {
            _this.handlers = handlers.slice(__WEBPACK_IMPORTED_MODULE_5__providers_mainmenu__["a" /* CoreMainMenuProvider */].NUM_MAIN_HANDLERS); // Remove the main handlers.
            _this.handlersLoaded = _this.menuDelegate.areHandlersLoaded();
        });
    };
    /**
     * Page destroyed.
     */
    CoreMainMenuMorePage.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    /**
     * Load the site info required by the view.
     */
    CoreMainMenuMorePage.prototype.loadSiteInfo = function () {
        var _this = this;
        var currentSite = this.sitesProvider.getCurrentSite(), config = currentSite.getStoredConfig();
        this.siteInfo = currentSite.getInfo();
        this.logoutLabel = 'core.mainmenu.' + (config && config.tool_mobile_forcelogout == '1' ? 'logout' : 'changesite');
        this.showWeb = !currentSite.isFeatureDisabled('CoreMainMenuDelegate_website');
        this.showHelp = !currentSite.isFeatureDisabled('CoreMainMenuDelegate_help');
        currentSite.getDocsUrl().then(function (docsUrl) {
            _this.docsUrl = docsUrl;
        });
        this.mainMenuProvider.getCustomMenuItems().then(function (items) {
            _this.customItems = items;
        });
    };
    /**
     * Open a handler.
     *
     * @param {CoreMainMenuHandlerData} handler Handler to open.
     */
    CoreMainMenuMorePage.prototype.openHandler = function (handler) {
        this.navCtrl.push(handler.page, handler.pageParams);
    };
    /**
     * Open an embedded custom item.
     *
     * @param {CoreMainMenuCustomItem} item Item to open.
     */
    CoreMainMenuMorePage.prototype.openItem = function (item) {
        this.navCtrl.push('CoreViewerIframePage', { title: item.label, url: item.url });
    };
    /**
     * Open settings page.
     */
    CoreMainMenuMorePage.prototype.openSettings = function () {
        this.navCtrl.push('CoreSettingsListPage');
    };
    /**
     * Logout the user.
     */
    CoreMainMenuMorePage.prototype.logout = function () {
        this.sitesProvider.logout();
    };
    CoreMainMenuMorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-mainmenu-more',template:/*ion-inline-start:"C:\wamp\www\BCC_mobapp\bcc_custom_mma\src\core\mainmenu\pages\more\more.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title><core-format-text [text]="siteInfo.sitename"></core-format-text></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-list>\n\n        <a ion-item core-user-link userId="{{siteInfo.userid}}">\n\n            <ion-avatar item-start>\n\n                <img [src]="siteInfo.userpictureurl" core-external-content alt="{{ \'core.pictureof\' | translate:{$a: siteInfo.fullname} }}" role="presentation">\n\n            </ion-avatar>\n\n            <p>{{siteInfo.fullname}}</p>\n\n        </a>\n\n        <ion-item-divider color="light"></ion-item-divider>\n\n        <ion-item text-center *ngIf="(!handlers || !handlers.length) && !handlersLoaded">\n\n            <ion-spinner></ion-spinner>\n\n        </ion-item>\n\n        <a ion-item *ngFor="let handler of handlers" [ngClass]="[\'core-moremenu-handler\', handler.class]" (click)="openHandler(handler)" title="{{ handler.title | translate }}" detail-push>\n\n            <core-icon [name]="handler.icon" item-start></core-icon>\n\n            <p>{{ handler.title | translate}}</p>\n\n            <ion-badge item-end *ngIf="handler.showBadge" [hidden]="handler.loading || !handler.badge">{{handler.badge}}</ion-badge>\n\n            <ion-spinner item-end *ngIf="handler.showBadge && handler.loading"></ion-spinner>\n\n        </a>\n\n        <div *ngFor="let item of customItems" class="core-moremenu-customitem">\n\n            <a ion-item *ngIf="item.type != \'embedded\'" [href]="item.url" core-link [capture]="item.type == \'app\'" [inApp]="item.type == \'inappbrowser\'" title="{{item.label}}">\n\n                <core-icon [name]="item.icon" item-start></core-icon>\n\n                <p>{{item.label}}</p>\n\n            </a>\n\n            <a ion-item *ngIf="item.type == \'embedded\'" (click)="openItem(item)" title="{{item.label}}">\n\n                <core-icon [name]="item.icon" item-start></core-icon>\n\n                <p>{{item.label}}</p>\n\n            </a>\n\n        </div>\n\n        <a *ngIf="showWeb" ion-item [href]="siteInfo.siteurl" core-link autoLogin="yes" title="{{ \'core.mainmenu.website\' | translate }}">\n\n            <ion-icon name="globe" item-start></ion-icon>\n\n            <p>{{ \'core.mainmenu.website\' | translate }}</p>\n\n        </a>\n\n        <a *ngIf="showHelp" ion-item [href]="docsUrl" core-link autoLogin="no" title="{{ \'core.mainmenu.help\' | translate }}">\n\n            <ion-icon name="help-buoy" item-start></ion-icon>\n\n            <p>{{ \'core.mainmenu.help\' | translate }}</p>\n\n        </a>\n\n        <a ion-item (click)="openSettings()" title="{{ \'core.mainmenu.appsettings\' | translate }}">\n\n            <ion-icon name="cog" item-start></ion-icon>\n\n            <p>{{ \'core.mainmenu.appsettings\' | translate }}</p>\n\n        </a>\n\n        <a ion-item (click)="logout()" title="{{ logoutLabel | translate }}">\n\n            <ion-icon name="log-out" item-start></ion-icon>\n\n            <p>{{ logoutLabel | translate }}</p>\n\n        </a>\n\n        <!-- a ion-item (click)="visitExternalLinkWithIframe()" title="Lucio -> webview">\n\n			<ion-icon name="bicycle" item-start></ion-icon>\n\n            <p>Lucio -> webview</p>\n\n        </a -->\n\n\n\n		\n\n		\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp\www\BCC_mobapp\bcc_custom_mma\src\core\mainmenu\pages\more\more.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_delegate__["a" /* CoreMainMenuDelegate */], __WEBPACK_IMPORTED_MODULE_3__providers_sites__["a" /* CoreSitesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_mainmenu__["a" /* CoreMainMenuProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_events__["a" /* CoreEventsProvider */]])
    ], CoreMainMenuMorePage);
    return CoreMainMenuMorePage;
}());

//# sourceMappingURL=more.js.map
=======




/**
 * Page that displays the about settings.
 */
var CoreSettingsAboutPage = /** @class */ (function () {
    function CoreSettingsAboutPage(platform, device, appProvider, fileProvider, initDelegate, langProvider, sitesProvider, localNotificationsProvider) {
        var _this = this;
        var currentSite = sitesProvider.getCurrentSite();
        this.appName = appProvider.isDesktop() ? __WEBPACK_IMPORTED_MODULE_9__configconstants__["a" /* CoreConfigConstants */].desktopappname : __WEBPACK_IMPORTED_MODULE_9__configconstants__["a" /* CoreConfigConstants */].appname;
        this.versionName = __WEBPACK_IMPORTED_MODULE_9__configconstants__["a" /* CoreConfigConstants */].versionname;
        this.versionCode = __WEBPACK_IMPORTED_MODULE_9__configconstants__["a" /* CoreConfigConstants */].versioncode;
        this.compilationTime = __WEBPACK_IMPORTED_MODULE_9__configconstants__["a" /* CoreConfigConstants */].compilationtime;
        this.lastCommit = __WEBPACK_IMPORTED_MODULE_9__configconstants__["a" /* CoreConfigConstants */].lastcommit;
        // Calculate the privacy policy to use.
        this.privacyPolicy = (currentSite && (currentSite.getStoredConfig('tool_mobile_apppolicy') ||
            currentSite.getStoredConfig('sitepolicy'))) || __WEBPACK_IMPORTED_MODULE_9__configconstants__["a" /* CoreConfigConstants */].privacypolicy;
        this.navigator = window.navigator;
        if (window.location && window.location.href) {
            var url = window.location.href;
            this.locationHref = url.substr(0, url.indexOf('#'));
        }
        this.appReady = initDelegate.isReady() ? 'core.yes' : 'core.no';
        this.deviceType = platform.is('tablet') ? 'core.tablet' : 'core.phone';
        if (platform.is('android')) {
            this.deviceOs = 'core.android';
        }
        else if (platform.is('ios')) {
            this.deviceOs = 'core.ios';
        }
        else if (platform.is('windows')) {
            this.deviceOs = 'core.windowsphone';
        }
        else {
            var matches = navigator.userAgent.match(/\(([^\)]*)\)/);
            if (matches && matches.length > 1) {
                this.deviceOs = matches[1];
            }
            else {
                this.deviceOs = 'core.unknown';
            }
        }
        langProvider.getCurrentLanguage().then(function (lang) {
            _this.currentLanguage = lang;
        });
        this.networkStatus = appProvider.isOnline() ? 'core.online' : 'core.offline';
        this.wifiConnection = appProvider.isWifi() ? 'core.yes' : 'core.no';
        this.deviceWebWorkers = !!window['Worker'] && !!window['URL'] ? 'core.yes' : 'core.no';
        this.device = device;
        if (fileProvider.isAvailable()) {
            fileProvider.getBasePath().then(function (basepath) {
                _this.fileSystemRoot = basepath;
                _this.fsClickable = fileProvider.usesHTMLAPI();
            });
        }
        this.localNotifAvailable = localNotificationsProvider.isAvailable() ? 'core.yes' : 'core.no';
    }
    CoreSettingsAboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-settings-about',template:/*ion-inline-start:"C:\wamp\www\AX-LT_2019\mma_lt\src\core\settings\pages\about\about.html"*/'<ion-header>\n    <ion-navbar core-back-button>\n        <ion-title>{{ \'core.settings.about\' | translate }}</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-item text-wrap>\n        <h2>{{ appName }} {{ versionName }}</h2>\n    </ion-item>\n    <ion-item-group>\n        <ion-item-divider text-wrap>\n            {{ \'core.settings.license\' | translate }}\n        </ion-item-divider>\n        <ion-item text-wrap>\n            <h2>Apache 2.0</h2>\n            <p><a href="http://www.apache.org/licenses/LICENSE-2.0" core-link auto-login="no">http://www.apache.org/licenses/LICENSE-2.0</a></p>\n        </ion-item>\n    </ion-item-group>\n    <ion-item-group *ngIf="privacyPolicy">\n        <ion-item-divider text-wrap>\n            {{ \'core.settings.privacypolicy\' | translate }}\n        </ion-item-divider>\n        <ion-item text-wrap>\n            <p><a [href]="privacyPolicy" core-link auto-login="no">{{ privacyPolicy }}</a></p>\n        </ion-item>\n    </ion-item-group>\n    <ion-item-group>\n        <ion-item-divider text-wrap>\n            {{ \'core.settings.deviceinfo\' | translate }}\n        </ion-item-divider>\n        <ion-item text-wrap *ngIf="versionName">\n            <h2>{{ \'core.settings.versionname\' | translate}}</h2>\n            <p>{{ versionName }}</p>\n        </ion-item>\n        <ion-item text-wrap *ngIf="versionCode">\n            <h2>{{ \'core.settings.versioncode\' | translate}}</h2>\n            <p>{{ versionCode }}</p>\n        </ion-item>\n        <ion-item text-wrap *ngIf="compilationTime || lastCommit">\n            <h2>{{ \'core.settings.compilationinfo\' | translate }}</h2>\n            <p *ngIf="compilationTime">{{ compilationTime | coreFormatDate: "LLL Z": false }}</p>\n            <p *ngIf="lastCommit">{{ lastCommit }}</p>\n        </ion-item>\n        <ion-item text-wrap *ngIf="fileSystemRoot">\n            <h2>{{ \'core.settings.filesystemroot\' | translate}}</h2>\n            <p><a *ngIf="fsClickable" [href]="fileSystemRoot" core-link auto-login="no">{{ fileSystemRoot }}</a></p>\n            <p *ngIf="!fsClickable">{{ fileSystemRoot }}</p>\n        </ion-item>\n        <ion-item text-wrap *ngIf="navigator && navigator.userAgent">\n            <h2>{{ \'core.settings.navigatoruseragent\' | translate}}</h2>\n            <p>{{ navigator.userAgent }}</p>\n        </ion-item>\n        <ion-item text-wrap *ngIf="navigator && navigator.language">\n            <h2>{{ \'core.settings.navigatorlanguage\' | translate}}</h2>\n            <p>{{ navigator.language }}</p>\n        </ion-item>\n        <ion-item text-wrap *ngIf="locationHref">\n            <h2>{{ \'core.settings.locationhref\' | translate}}</h2>\n            <p>{{ locationHref }}</p>\n        </ion-item>\n        <ion-item text-wrap *ngIf="appReady">\n            <h2>{{ \'core.settings.appready\' | translate}}</h2>\n            <p>{{ appReady | translate }}</p>\n        </ion-item>\n        <ion-item text-wrap *ngIf="deviceType">\n            <h2>{{ \'core.settings.displayformat\' | translate}}</h2>\n            <p>{{ deviceType | translate }}</p>\n        </ion-item>\n        <ion-item text-wrap *ngIf="deviceOs">\n            <h2>{{ \'core.settings.deviceos\' | translate}}</h2>\n            <p>{{ deviceOs | translate }}</p>\n        </ion-item>\n        <ion-item text-wrap *ngIf="currentLanguage">\n            <h2>{{ \'core.settings.currentlanguage\' | translate}}</h2>\n            <p>{{ currentLanguage }}</p>\n        </ion-item>\n        <ion-item text-wrap *ngIf="networkStatus">\n            <h2>{{ \'core.settings.networkstatus\' | translate}}</h2>\n            <p>{{ networkStatus | translate }}</p>\n        </ion-item>\n        <ion-item text-wrap *ngIf="wifiConnection">\n            <h2>{{ \'core.settings.wificonnection\' | translate}}</h2>\n            <p>{{ wifiConnection | translate }}</p>\n        </ion-item>\n        <ion-item text-wrap *ngIf="deviceWebWorkers">\n            <h2>{{ \'core.settings.devicewebworkers\' | translate}}</h2>\n            <p>{{ deviceWebWorkers | translate }}</p>\n        </ion-item>\n        <ion-item text-wrap *ngIf="device && device.cordova">\n            <h2>{{ \'core.settings.cordovaversion\' | translate}}</h2>\n            <p>{{ device.cordova }}</p>\n        </ion-item>\n        <ion-item text-wrap *ngIf="device && device.platform">\n            <h2>{{ \'core.settings.cordovadeviceplatform\' | translate}}</h2>\n            <p>{{ device.platform }}</p>\n        </ion-item>\n        <ion-item text-wrap *ngIf="device && device.version">\n            <h2>{{ \'core.settings.cordovadeviceosversion\' | translate}}</h2>\n            <p>{{ device.version }}</p>\n        </ion-item>\n        <ion-item text-wrap *ngIf="device && device.model">\n            <h2>{{ \'core.settings.cordovadevicemodel\' | translate}}</h2>\n            <p>{{ device.model }}</p>\n        </ion-item>\n        <ion-item text-wrap *ngIf="device && device.uuid">\n            <h2>{{ \'core.settings.cordovadeviceuuid\' | translate}}</h2>\n            <p>{{ device.uuid }}</p>\n        </ion-item>\n        <ion-item text-wrap *ngIf="localNotifAvailable">\n            <h2>{{ \'core.settings.localnotifavailable\' | translate}}</h2>\n            <p>{{ localNotifAvailable | translate }}</p>\n        </ion-item>\n    </ion-item-group>\n</ion-content>\n'/*ion-inline-end:"C:\wamp\www\AX-LT_2019\mma_lt\src\core\settings\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_3__providers_app__["a" /* CoreAppProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_file__["a" /* CoreFileProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_init__["a" /* CoreInitDelegate */], __WEBPACK_IMPORTED_MODULE_6__providers_lang__["a" /* CoreLangProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_sites__["a" /* CoreSitesProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_local_notifications__["a" /* CoreLocalNotificationsProvider */]])
    ], CoreSettingsAboutPage);
    return CoreSettingsAboutPage;
}());

//# sourceMappingURL=about.js.map
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d

/***/ })

});
//# sourceMappingURL=23.js.map