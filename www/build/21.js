webpackJsonp([21],{

<<<<<<< HEAD
/***/ 1887:
=======
/***/ 1957:
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsGeneralPageModule", function() { return CoreSettingsGeneralPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__general__ = __webpack_require__(2015);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(16);
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsListPageModule", function() { return CoreSettingsListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list__ = __webpack_require__(2089);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(13);
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__ = __webpack_require__(14);
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
var CoreSettingsGeneralPageModule = /** @class */ (function () {
    function CoreSettingsGeneralPageModule() {
    }
    CoreSettingsGeneralPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__general__["a" /* CoreSettingsGeneralPage */]
=======
var CoreSettingsListPageModule = /** @class */ (function () {
    function CoreSettingsListPageModule() {
    }
    CoreSettingsListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__list__["a" /* CoreSettingsListPage */]
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
<<<<<<< HEAD
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__general__["a" /* CoreSettingsGeneralPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], CoreSettingsGeneralPageModule);
    return CoreSettingsGeneralPageModule;
}());

//# sourceMappingURL=general.module.js.map

/***/ }),

/***/ 2015:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreSettingsGeneralPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_constants__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_file__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_events__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_lang__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_utils_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_local_notifications__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__configconstants__ = __webpack_require__(73);
=======
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__list__["a" /* CoreSettingsListPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], CoreSettingsListPageModule);
    return CoreSettingsListPageModule;
}());

//# sourceMappingURL=list.module.js.map

/***/ }),

/***/ 2089:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreSettingsListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_delegate__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_split_view_split_view__ = __webpack_require__(108);
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
 * Page that displays the general settings.
 */
var CoreSettingsGeneralPage = /** @class */ (function () {
    function CoreSettingsGeneralPage(appProvider, configProvider, fileProvider, eventsProvider, langProvider, domUtils, localNotificationsProvider) {
        var _this = this;
        this.configProvider = configProvider;
        this.eventsProvider = eventsProvider;
        this.langProvider = langProvider;
        this.domUtils = domUtils;
        this.languages = {};
        this.languageCodes = [];
        this.languages = __WEBPACK_IMPORTED_MODULE_9__configconstants__["a" /* CoreConfigConstants */].languages;
        this.languageCodes = Object.keys(this.languages);
        langProvider.getCurrentLanguage().then(function (currentLanguage) {
            _this.selectedLanguage = currentLanguage;
        });
        this.rteSupported = this.domUtils.isRichTextEditorSupported();
        if (this.rteSupported) {
            this.configProvider.get(__WEBPACK_IMPORTED_MODULE_2__core_constants__["a" /* CoreConstants */].SETTINGS_RICH_TEXT_EDITOR, true).then(function (richTextEditorEnabled) {
                _this.richTextEditor = !!richTextEditorEnabled;
            });
        }
        if (localStorage && localStorage.getItem && localStorage.setItem) {
            this.showReport = true;
            this.reportInBackground = parseInt(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_2__core_constants__["a" /* CoreConstants */].SETTINGS_REPORT_IN_BACKGROUND), 10) === 1;
        }
        else {
            this.showReport = false;
        }
    }
    /**
     * Called when a new language is selected.
     */
    CoreSettingsGeneralPage.prototype.languageChanged = function () {
        var _this = this;
        this.langProvider.changeCurrentLanguage(this.selectedLanguage).finally(function () {
            _this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_5__providers_events__["a" /* CoreEventsProvider */].LANGUAGE_CHANGED);
        });
    };
    /**
     * Called when the rich text editor is enabled or disabled.
     */
    CoreSettingsGeneralPage.prototype.richTextEditorChanged = function () {
        this.configProvider.set(__WEBPACK_IMPORTED_MODULE_2__core_constants__["a" /* CoreConstants */].SETTINGS_RICH_TEXT_EDITOR, this.richTextEditor ? 1 : 0);
    };
    /**
     * Called when the report in background setting is enabled or disabled.
     */
    CoreSettingsGeneralPage.prototype.reportInBackgroundChanged = function () {
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_2__core_constants__["a" /* CoreConstants */].SETTINGS_REPORT_IN_BACKGROUND, this.reportInBackground ? '1' : '0');
    };
    CoreSettingsGeneralPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-settings-general',template:/*ion-inline-start:"C:\wamp\www\BCC_mobapp\bcc_custom_mma\src\core\settings\pages\general\general.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'core.settings.general\' | translate }}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-item text-wrap>\n\n        <ion-label><h2>{{ \'core.settings.language\' | translate }}</h2></ion-label>\n\n        <ion-select [(ngModel)]="selectedLanguage" (ngModelChange)="languageChanged()" interface="popover">\n\n            <ion-option *ngFor="let code of languageCodes" [value]="code">{{ languages[code] }}</ion-option>\n\n        </ion-select>\n\n    </ion-item>\n\n    <ion-item text-wrap *ngIf="rteSupported">\n\n        <ion-label>\n\n            <h2>{{ \'core.settings.enablerichtexteditor\' | translate }}</h2>\n\n            <p>{{ \'core.settings.enablerichtexteditordescription\' | translate }}</p>\n\n        </ion-label>\n\n        <ion-toggle [(ngModel)]="richTextEditor" (ngModelChange)="richTextEditorChanged()"></ion-toggle>\n\n    </ion-item>\n\n    <ion-item text-wrap *ngIf="showReport">\n\n        <ion-label><h2>{{ \'core.settings.reportinbackground\' | translate }}</h2></ion-label>\n\n        <ion-toggle [(ngModel)]="reportInBackground" (ngModelChange)="reportInBackgroundChanged()"></ion-toggle>\n\n    </ion-item>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp\www\BCC_mobapp\bcc_custom_mma\src\core\settings\pages\general\general.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_app__["a" /* CoreAppProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_config__["a" /* CoreConfigProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_file__["a" /* CoreFileProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_events__["a" /* CoreEventsProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_lang__["a" /* CoreLangProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_utils_dom__["a" /* CoreDomUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_local_notifications__["a" /* CoreLocalNotificationsProvider */]])
    ], CoreSettingsGeneralPage);
    return CoreSettingsGeneralPage;
}());

//# sourceMappingURL=general.js.map
=======
/**
 * Page that displays the list of settings pages.
 */
var CoreSettingsListPage = /** @class */ (function () {
    function CoreSettingsListPage(settingsDelegate, platorm, navParams) {
        this.settingsDelegate = settingsDelegate;
        this.isIOS = platorm.is('ios');
        this.selectedPage = navParams.get('page') || false;
    }
    /**
     * View loaded.
     */
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
            selector: 'page-core-settings-list',template:/*ion-inline-start:"C:\wamp\www\AX-LT_2019\mma_lt\src\core\settings\pages\list\list.html"*/'<ion-header>\n    <ion-navbar core-back-button>\n        <ion-title>{{ \'core.settings.settings\' | translate}}</ion-title>\n        <ion-buttons end>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<core-split-view>\n    <ion-content>\n        <ion-list>\n            <a ion-item (click)="openHandler(\'CoreSettingsGeneralPage\')" [title]="\'core.settings.general\' | translate"  [class.core-split-item-selected]="\'CoreSettingsGeneralPage\' == selectedPage" detail-push>\n                <ion-icon name="construct" item-start></ion-icon>\n                <p>{{ \'core.settings.general\' | translate }}</p>\n            </a>\n            <a ion-item (click)="openHandler(\'CoreSettingsSpaceUsagePage\')" [title]="\'core.settings.spaceusage\' | translate" [class.core-split-item-selected]="\'CoreSettingsSpaceUsagePage\' == selectedPage" detail-push>\n                <ion-icon name="stats" item-start></ion-icon>\n                <p>{{ \'core.settings.spaceusage\' | translate }}</p>\n            </a>\n            <a ion-item (click)="openHandler(\'CoreSettingsSynchronizationPage\')" [title]="\'core.settings.synchronization\' | translate" [class.core-split-item-selected]="\'CoreSettingsSynchronizationPage\' == selectedPage" detail-push>\n                <ion-icon name="sync" item-start></ion-icon>\n                <p>{{ \'core.settings.synchronization\' | translate }}</p>\n            </a>\n            <a ion-item *ngIf="isIOS" (click)="openHandler(\'CoreSharedFilesListPage\', {manage: true})" [title]="\'core.sharedfiles.sharedfiles\' | translate" [class.core-split-item-selected]="\'CoreSharedFilesListPage\' == selectedPage" detail-push>\n                <ion-icon name="folder" item-start></ion-icon>\n                <p>{{ \'core.sharedfiles.sharedfiles\' | translate }}</p>\n            </a>\n\n            <a ion-item *ngFor="let handler of handlers" [ngClass]="[\'core-settings-handler\', handler.class]" (click)="openHandler(handler.page, handler.params)" [title]="handler.title | translate" detail-push [class.core-split-item-selected]="handler.page == selectedPage">\n                <core-icon [name]="handler.icon" item-start *ngIf="handler.icon"></core-icon>\n                <p>{{ handler.title | translate}}</p>\n            </a>\n\n            <a ion-item (click)="openHandler(\'CoreSettingsAboutPage\')" [title]="\'core.settings.about\' | translate" [class.core-split-item-selected]="\'CoreSettingsAboutPage\' == selectedPage" detail-push>\n                <ion-icon name="contacts" item-start></ion-icon>\n                <p>{{ \'core.settings.about\' | translate }}</p>\n            </a>\n        </ion-list>\n    </ion-content>\n</core-split-view>\n'/*ion-inline-end:"C:\wamp\www\AX-LT_2019\mma_lt\src\core\settings\pages\list\list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_delegate__["a" /* CoreSettingsDelegate */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
    ], CoreSettingsListPage);
    return CoreSettingsListPage;
}());

//# sourceMappingURL=list.js.map
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d

/***/ })

});
//# sourceMappingURL=21.js.map