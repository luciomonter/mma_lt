webpackJsonp([54],{

<<<<<<< HEAD
/***/ 1852:
=======
/***/ 1924:
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModWorkshopPhaseInfoPageModule", function() { return AddonModWorkshopPhaseInfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__phase__ = __webpack_require__(1978);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_compile_components_compile_html_compile_html_module__ = __webpack_require__(386);
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonNotificationsSettingsPageModule", function() { return AddonNotificationsSettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings__ = __webpack_require__(2057);
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
var AddonModWorkshopPhaseInfoPageModule = /** @class */ (function () {
    function AddonModWorkshopPhaseInfoPageModule() {
    }
    AddonModWorkshopPhaseInfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__phase__["a" /* AddonModWorkshopPhaseInfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_5__core_compile_components_compile_html_compile_html_module__["a" /* CoreCompileHtmlComponentModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__phase__["a" /* AddonModWorkshopPhaseInfoPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonModWorkshopPhaseInfoPageModule);
    return AddonModWorkshopPhaseInfoPageModule;
}());

//# sourceMappingURL=phase.module.js.map

/***/ }),

/***/ 1978:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonModWorkshopPhaseInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utils_utils__ = __webpack_require__(5);
=======
var AddonNotificationsSettingsPageModule = /** @class */ (function () {
    function AddonNotificationsSettingsPageModule() {
    }
    AddonNotificationsSettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* AddonNotificationsSettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__settings__["a" /* AddonNotificationsSettingsPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonNotificationsSettingsPageModule);
    return AddonNotificationsSettingsPageModule;
}());

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 2057:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonNotificationsSettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_notifications__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_user_providers_user__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_settings_providers_helper__ = __webpack_require__(955);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__addon_messageoutput_providers_delegate__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_local_notifications__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_config__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_constants__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_events__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_split_view_split_view__ = __webpack_require__(108);
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
=======
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};











>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d



/**
<<<<<<< HEAD
 * Page that displays the phase info modal.
 */
var AddonModWorkshopPhaseInfoPage = /** @class */ (function () {
    function AddonModWorkshopPhaseInfoPage(params, viewCtrl, utils) {
        this.viewCtrl = viewCtrl;
        this.utils = utils;
        this.phases = params.get('phases');
        this.workshopPhase = params.get('workshopPhase');
        var externalUrl = params.get('externalUrl');
        // Treat phases.
        for (var x in this.phases) {
            this.phases[x].tasks.forEach(function (task) {
                if (!task.link && (task.code == 'examples' || task.code == 'prepareexamples')) {
                    // Add links to manage examples.
                    task.link = externalUrl;
                }
            });
            var action = this.phases[x].actions.find(function (action) {
                return action.url && action.type == 'switchphase';
            });
            this.phases[x].switchUrl = action ? action.url : '';
        }
    }
    /**
     * Close modal.
     */
    AddonModWorkshopPhaseInfoPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    /**
     * Open task.
     *
     * @param {any} task Task to be done.
     */
    AddonModWorkshopPhaseInfoPage.prototype.runTask = function (task) {
        if (task.code == 'submit') {
            // This will close the modal and go to the submit.
            this.viewCtrl.dismiss(true);
        }
        else if (task.link) {
            this.utils.openInBrowser(task.link);
        }
    };
    AddonModWorkshopPhaseInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-mod-workshop-phase-info',template:/*ion-inline-start:"C:\wamp\www\BCC_mobapp\bcc_custom_mma\src\addon\mod\workshop\pages\phase\phase.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'addon.mod_workshop.userplan\' | translate }}</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="closeModal()" [attr.aria-label]="\'core.close\' | translate">\n\n                <ion-icon name="close"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-list>\n\n        <ng-container *ngFor="let phase of phases">\n\n            <ion-item-divider color="light" [class.core-workshop-phase-selected]="workshopPhase == phase.code">\n\n                <h2>{{ phase.title }}</h2>\n\n                <p text-wrap *ngIf="workshopPhase == phase.code">{{ \'addon.mod_workshop.userplancurrentphase\' | translate }}</p>\n\n            </ion-item-divider>\n\n            <a ion-item text-wrap *ngIf="phase.switchUrl" [href]="phase.switchUrl" detail-none>\n\n                <ion-icon item-start name="swap"></ion-icon>\n\n                {{ \'addon.mod_workshop.switchphase\' + phase.code | translate }}\n\n                <ion-icon item-end name="open"></ion-icon>\n\n            </a>\n\n            <a ion-item text-wrap *ngFor="let task of phase.tasks" [class.item-dimmed]="phase.code != workshopPhase" (click)="runTask(task)" detail-none>\n\n                <ion-icon item-start name="radio-button-off" *ngIf="task.completed == null"></ion-icon>\n\n                <ion-icon item-start name="close-circle" color="danger" *ngIf="task.completed == \'\'"></ion-icon>\n\n                <ion-icon item-start name="information-circle" color="info" *ngIf="task.completed == \'info\'"></ion-icon>\n\n                <ion-icon item-start name="checkmark-circle" color="success" *ngIf="task.completed == \'1\'"></ion-icon>\n\n\n\n                <h2 text-wrap>{{task.title}}</h2>\n\n                <p *ngIf="task.details"><core-format-text [text]="task.details"></core-format-text></p>\n\n                <ion-icon item-end *ngIf="task.link && task.code != \'submit\'" name="open"></ion-icon>\n\n            </a>\n\n        </ng-container>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp\www\BCC_mobapp\bcc_custom_mma\src\addon\mod\workshop\pages\phase\phase.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["D" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_utils_utils__["a" /* CoreUtilsProvider */]])
    ], AddonModWorkshopPhaseInfoPage);
    return AddonModWorkshopPhaseInfoPage;
}());

//# sourceMappingURL=phase.js.map
=======
 * Page that displays notifications settings.
 */
var AddonNotificationsSettingsPage = /** @class */ (function () {
    function AddonNotificationsSettingsPage(notificationsProvider, domUtils, settingsHelper, userProvider, navCtrl, messageOutputDelegate, appProvider, configProvider, eventsProvider, localNotificationsProvider, sitesProvider, svComponent) {
        var _this = this;
        this.notificationsProvider = notificationsProvider;
        this.domUtils = domUtils;
        this.settingsHelper = settingsHelper;
        this.userProvider = userProvider;
        this.navCtrl = navCtrl;
        this.messageOutputDelegate = messageOutputDelegate;
        this.configProvider = configProvider;
        this.eventsProvider = eventsProvider;
        this.localNotificationsProvider = localNotificationsProvider;
        this.sitesProvider = sitesProvider;
        this.svComponent = svComponent;
        this.processorHandlers = [];
        this.notifPrefsEnabled = notificationsProvider.isNotificationPreferencesEnabled();
        this.canChangeSound = localNotificationsProvider.isAvailable() && !appProvider.isDesktop();
        if (this.canChangeSound) {
            configProvider.get(__WEBPACK_IMPORTED_MODULE_10__core_constants__["a" /* CoreConstants */].SETTINGS_NOTIFICATION_SOUND, true).then(function (enabled) {
                _this.notificationSound = !!enabled;
            });
        }
    }
    /**
     * View loaded.
     */
    AddonNotificationsSettingsPage.prototype.ionViewDidLoad = function () {
        if (this.notifPrefsEnabled) {
            this.fetchPreferences();
        }
        else {
            this.preferencesLoaded = true;
        }
    };
    /**
     * Fetches preference data.
     *
     * @return {Promise<any>} Resolved when done.
     */
    AddonNotificationsSettingsPage.prototype.fetchPreferences = function () {
        var _this = this;
        return this.notificationsProvider.getNotificationPreferences().then(function (preferences) {
            if (!_this.currentProcessor) {
                // Initialize current processor. Load "Mobile" (airnotifier) if available.
                _this.currentProcessor = _this.settingsHelper.getProcessor(preferences.processors, 'airnotifier');
            }
            if (!_this.currentProcessor) {
                // Shouldn't happen.
                return Promise.reject('No processor found');
            }
            preferences.disableall = !!preferences.disableall; // Convert to boolean.
            _this.preferences = preferences;
            _this.loadProcessor(_this.currentProcessor);
            // Get display data of message output handlers (thery are displayed in the context menu),
            _this.processorHandlers = [];
            if (preferences.processors) {
                preferences.processors.forEach(function (processor) {
                    processor.supported = _this.messageOutputDelegate.hasHandler(processor.name, true);
                    if (processor.hassettings && processor.supported) {
                        _this.processorHandlers.push(_this.messageOutputDelegate.getDisplayData(processor));
                    }
                });
            }
        }).catch(function (message) {
            _this.domUtils.showErrorModal(message);
        }).finally(function () {
            _this.preferencesLoaded = true;
        });
    };
    /**
     * Load a processor.
     *
     * @param {any} processor Processor object.
     */
    AddonNotificationsSettingsPage.prototype.loadProcessor = function (processor) {
        if (!processor) {
            return;
        }
        this.currentProcessor = processor;
        this.components = this.settingsHelper.getProcessorComponents(processor.name, this.preferences.components);
    };
    /**
     * Update preferences after a certain time. The purpose is to store the updated data, it won't be reflected in the view.
     */
    AddonNotificationsSettingsPage.prototype.updatePreferencesAfterDelay = function () {
        var _this = this;
        // Cancel pending updates.
        clearTimeout(this.updateTimeout);
        this.updateTimeout = setTimeout(function () {
            _this.updateTimeout = null;
            _this.updatePreferences();
        }, 5000);
    };
    /**
     * Update preferences. The purpose is to store the updated data, it won't be reflected in the view.
     */
    AddonNotificationsSettingsPage.prototype.updatePreferences = function () {
        var _this = this;
        this.notificationsProvider.invalidateNotificationPreferences().finally(function () {
            _this.notificationsProvider.getNotificationPreferences();
        });
    };
    /**
     * The selected processor was changed.
     *
     * @param {string} name Name of the selected processor.
     */
    AddonNotificationsSettingsPage.prototype.changeProcessor = function (name) {
        var _this = this;
        this.preferences.processors.forEach(function (processor) {
            if (processor.name == name) {
                _this.loadProcessor(processor);
            }
        });
    };
    /**
     * Refresh the list of preferences.
     *
     * @param {any} [refresher] Refresher.
     */
    AddonNotificationsSettingsPage.prototype.refreshPreferences = function (refresher) {
        var _this = this;
        this.notificationsProvider.invalidateNotificationPreferences().finally(function () {
            _this.fetchPreferences().finally(function () {
                refresher && refresher.complete();
            });
        });
    };
    /**
     * Open extra preferences.
     *
     * @param {AddonMessageOutputHandlerData} handlerData
     */
    AddonNotificationsSettingsPage.prototype.openExtraPreferences = function (handlerData) {
        // Decide which navCtrl to use. If this page is inside a split view, use the split view's master nav.
        var navCtrl = this.svComponent ? this.svComponent.getMasterNav() : this.navCtrl;
        navCtrl.push(handlerData.page, handlerData.pageParams);
    };
    /**
     * Change the value of a certain preference.
     *
     * @param {any} notification Notification object.
     * @param {string} state State name, ['loggedin', 'loggedoff'].
     */
    AddonNotificationsSettingsPage.prototype.changePreference = function (notification, state) {
        var _this = this;
        var processorState = notification.currentProcessor[state];
        var preferenceName = notification.preferencekey + '_' + processorState.name;
        var value;
        notification.processors.forEach(function (processor) {
            if (processor[state].checked) {
                if (!value) {
                    value = processor.name;
                }
                else {
                    value += ',' + processor.name;
                }
            }
        });
        if (!value) {
            value = 'none';
        }
        processorState.updating = true;
        this.userProvider.updateUserPreference(preferenceName, value).then(function () {
            // Update the preferences since they were modified.
            _this.updatePreferencesAfterDelay();
        }).catch(function (message) {
            // Show error and revert change.
            _this.domUtils.showErrorModal(message);
            notification.currentProcessor[state].checked = !notification.currentProcessor[state].checked;
        }).finally(function () {
            processorState.updating = false;
        });
    };
    /**
     * Disable all notifications changed.
     */
    AddonNotificationsSettingsPage.prototype.disableAll = function (disable) {
        var _this = this;
        var modal = this.domUtils.showModalLoading('core.sending', true);
        this.userProvider.updateUserPreferences([], disable).then(function () {
            // Update the preferences since they were modified.
            _this.updatePreferencesAfterDelay();
        }).catch(function (message) {
            // Show error and revert change.
            _this.domUtils.showErrorModal(message);
            _this.preferences.disableall = !_this.preferences.disableall;
        }).finally(function () {
            modal.dismiss();
        });
    };
    /**
     * Change the notification sound setting.
     *
     * @param {enabled} enabled True to enable the notification sound, false to disable it.
     */
    AddonNotificationsSettingsPage.prototype.changeNotificationSound = function (enabled) {
        var _this = this;
        this.configProvider.set(__WEBPACK_IMPORTED_MODULE_10__core_constants__["a" /* CoreConstants */].SETTINGS_NOTIFICATION_SOUND, enabled ? 1 : 0).finally(function () {
            var siteId = _this.sitesProvider.getCurrentSiteId();
            _this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_11__providers_events__["a" /* CoreEventsProvider */].NOTIFICATION_SOUND_CHANGED, { enabled: enabled }, siteId);
            _this.localNotificationsProvider.rescheduleAll();
        });
    };
    /**
     * Page destroyed.
     */
    AddonNotificationsSettingsPage.prototype.ngOnDestroy = function () {
        // If there is a pending action to update preferences, execute it right now.
        if (this.updateTimeout) {
            clearTimeout(this.updateTimeout);
            this.updatePreferences();
        }
    };
    AddonNotificationsSettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-notifications-settings',template:/*ion-inline-start:"C:\wamp\www\AX-LT_2019\mma_lt\src\addon\notifications\pages\settings\settings.html"*/'<ion-header>\n    <ion-navbar core-back-button>\n        <ion-title>{{ \'addon.notifications.notificationpreferences\' | translate }}</ion-title>\n        <ion-buttons end>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<core-navbar-buttons>\n    <core-context-menu *ngIf="processorHandlers.length > 0">\n        <core-context-menu-item *ngFor="let handler of processorHandlers" [priority]="handler.priority" [content]="handler.label | translate" (action)="openExtraPreferences(handler)" [iconAction]="handler.icon"></core-context-menu-item>\n    </core-context-menu>\n</core-navbar-buttons>\n<ion-content>\n    <ion-refresher [enabled]="preferencesLoaded && notifPrefsEnabled" (ionRefresh)="refreshPreferences($event)">\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n    </ion-refresher>\n    <core-loading [hideUntil]="preferencesLoaded">\n        <!-- If notification preferences aren\'t enabled, show only the notification sound setting. -->\n        <ion-item *ngIf="canChangeSound && !notifPrefsEnabled">\n            <ion-label>{{ \'addon.notifications.playsound\' | translate }}</ion-label>\n            <ion-toggle [(ngModel)]="notificationSound" (ionChange)="changeNotificationSound(notificationSound)"></ion-toggle>\n        </ion-item>\n\n        <ng-container *ngIf="notifPrefsEnabled">\n            <ion-card>\n                <ion-item text-wrap *ngIf="preferences">\n                    <ion-label>{{ \'core.settings.disableall\' | translate }}</ion-label>\n                    <ion-toggle [(ngModel)]="preferences.disableall" (ionChange)="disableAll(preferences.disableall)"></ion-toggle>\n                </ion-item>\n                <ion-item text-wrap *ngIf="canChangeSound">\n                    <ion-label>{{ \'addon.notifications.playsound\' | translate }}</ion-label>\n                    <ion-toggle [(ngModel)]="notificationSound" (ionChange)="changeNotificationSound(notificationSound)"></ion-toggle>\n                </ion-item>\n            </ion-card>\n\n            <!-- Show processor selector. -->\n            <div padding class="safe-padding-horizontal">\n                <ion-select *ngIf="preferences && preferences.processors && preferences.processors.length > 0" [ngModel]="currentProcessor.name" (ngModelChange)="changeProcessor($event)" interface="action-sheet" class="core-button-select">\n                    <ion-option *ngFor="let processor of preferences.processors" [value]="processor.name">{{ processor.displayname }}</ion-option>\n                </ion-select>\n            </div>\n\n            <ion-card list *ngFor="let component of components">\n                <ion-item-divider text-wrap>\n                    <ion-row no-padding>\n                        <ion-col no-padding>{{ component.displayname }}</ion-col>\n                        <ion-col col-2 text-center no-padding class="hidden-phone">{{ \'core.settings.loggedin\' | translate }}</ion-col>\n                        <ion-col col-2 text-center no-padding class="hidden-phone">{{ \'core.settings.loggedoff\' | translate }}</ion-col>\n                    </ion-row>\n                </ion-item-divider>\n                <ng-container *ngFor="let notification of component.notifications">\n                    <!-- Tablet view -->\n                    <ion-row text-wrap class="hidden-phone" align-items-center>\n                        <ion-col margin-horizontal>{{ notification.displayname }}</ion-col>\n                        <ion-col col-2 text-center *ngFor="let state of [\'loggedin\', \'loggedoff\']">\n                            <!-- If notifications not disabled, show toggle. -->\n                            <ion-spinner [hidden]="preferences.disableall || !(notification.currentProcessor[state] && notification.currentProcessor[state].updating)"></ion-spinner>\n                            <ion-toggle *ngIf="!preferences.disableall && !notification.currentProcessor.locked" [(ngModel)]="notification.currentProcessor[state].checked" (ionChange)="changePreference(notification, state)" [disabled]="notification.currentProcessor[state].updating">\n                            </ion-toggle>\n                            <div padding class="text-gray" *ngIf="!preferences.disableall && notification.currentProcessor.locked">{{\'core.settings.locked\' | translate }}</div>\n                            <!-- If notifications are disabled, show "Disabled" instead of toggle. -->\n                            <span *ngIf="preferences.disableall">{{ \'core.settings.disabled\' | translate }}</span>\n                        </ion-col>\n                    </ion-row>\n                    <!-- Phone view -->\n                    <ion-list-header text-wrap no-margin class="hidden-tablet">{{ notification.displayname }}</ion-list-header>\n                    <!-- If notifications not disabled, show toggles. If notifications are disabled, show "Disabled" instead of toggle. -->\n                    <ion-item *ngFor="let state of [\'loggedin\', \'loggedoff\']" text-wrap class="hidden-tablet">\n                        <ion-label>{{ \'core.settings.\' + state | translate }}</ion-label>\n                        <ion-spinner item-end *ngIf="!preferences.disableall && (notification.currentProcessor[state] && notification.currentProcessor[state].updating)"></ion-spinner>\n                        <ion-toggle item-end *ngIf="!preferences.disableall && !notification.currentProcessor.locked" [(ngModel)]="notification.currentProcessor[state].checked" (ionChange)="changePreference(notification, state)" [disabled]="notification.currentProcessor[state].updating">\n                        </ion-toggle>\n                        <ion-note item-end *ngIf="!preferences.disableall && notification.currentProcessor.locked">{{\'core.settings.locked\' | translate }}</ion-note>\n                        <ion-note item-end *ngIf="preferences.disableall">{{ \'core.settings.disabled\' | translate }}</ion-note>\n                    </ion-item>\n                </ng-container>\n            </ion-card>\n        </ng-container>\n    </core-loading>\n</ion-content>\n'/*ion-inline-end:"C:\wamp\www\AX-LT_2019\mma_lt\src\addon\notifications\pages\settings\settings.html"*/,
        }),
        __param(11, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Optional */])()),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_notifications__["a" /* AddonNotificationsProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__["a" /* CoreDomUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__core_settings_providers_helper__["a" /* CoreSettingsHelper */], __WEBPACK_IMPORTED_MODULE_3__core_user_providers_user__["a" /* CoreUserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__addon_messageoutput_providers_delegate__["a" /* AddonMessageOutputDelegate */],
            __WEBPACK_IMPORTED_MODULE_9__providers_app__["a" /* CoreAppProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_config__["a" /* CoreConfigProvider */], __WEBPACK_IMPORTED_MODULE_11__providers_events__["a" /* CoreEventsProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_local_notifications__["a" /* CoreLocalNotificationsProvider */], __WEBPACK_IMPORTED_MODULE_12__providers_sites__["a" /* CoreSitesProvider */],
            __WEBPACK_IMPORTED_MODULE_13__components_split_view_split_view__["a" /* CoreSplitViewComponent */]])
    ], AddonNotificationsSettingsPage);
    return AddonNotificationsSettingsPage;
}());

//# sourceMappingURL=settings.js.map
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d

/***/ })

});
//# sourceMappingURL=54.js.map