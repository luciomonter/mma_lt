webpackJsonp([104],{

<<<<<<< HEAD
/***/ 1798:
=======
/***/ 1870:
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessageOutputAirnotifierDevicesPageModule", function() { return AddonMessageOutputAirnotifierDevicesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__devices__ = __webpack_require__(1922);
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModAssignEditFeedbackModalPageModule", function() { return AddonModAssignEditFeedbackModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_feedback_modal__ = __webpack_require__(1998);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_components_module__ = __webpack_require__(945);
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
var AddonMessageOutputAirnotifierDevicesPageModule = /** @class */ (function () {
    function AddonMessageOutputAirnotifierDevicesPageModule() {
    }
    AddonMessageOutputAirnotifierDevicesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__devices__["a" /* AddonMessageOutputAirnotifierDevicesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__devices__["a" /* AddonMessageOutputAirnotifierDevicesPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonMessageOutputAirnotifierDevicesPageModule);
    return AddonMessageOutputAirnotifierDevicesPageModule;
}());

//# sourceMappingURL=devices.module.js.map

/***/ }),

/***/ 1922:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonMessageOutputAirnotifierDevicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_utils_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addon_pushnotifications_providers_pushnotifications__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_airnotifier__ = __webpack_require__(393);
=======

var AddonModAssignEditFeedbackModalPageModule = /** @class */ (function () {
    function AddonModAssignEditFeedbackModalPageModule() {
    }
    AddonModAssignEditFeedbackModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_feedback_modal__["a" /* AddonModAssignEditFeedbackModalPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_components_module__["a" /* AddonModAssignComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_feedback_modal__["a" /* AddonModAssignEditFeedbackModalPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ]
        })
    ], AddonModAssignEditFeedbackModalPageModule);
    return AddonModAssignEditFeedbackModalPageModule;
}());

//# sourceMappingURL=edit-feedback-modal.module.js.map

/***/ }),

/***/ 1998:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonModAssignEditFeedbackModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utils_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_feedback_delegate__ = __webpack_require__(115);
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
 * Page that displays the list of devices.
 */
var AddonMessageOutputAirnotifierDevicesPage = /** @class */ (function () {
    function AddonMessageOutputAirnotifierDevicesPage(domUtils, airnotifierProivder, pushNotificationsProvider) {
        this.domUtils = domUtils;
        this.airnotifierProivder = airnotifierProivder;
        this.pushNotificationsProvider = pushNotificationsProvider;
        this.devices = [];
        this.devicesLoaded = false;
    }
    /**
     * View loaded.
     */
    AddonMessageOutputAirnotifierDevicesPage.prototype.ionViewDidLoad = function () {
        this.fetchDevices();
    };
    /**
     * Fetches the list of devices.
     *
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonMessageOutputAirnotifierDevicesPage.prototype.fetchDevices = function () {
        var _this = this;
        return this.airnotifierProivder.getUserDevices().then(function (devices) {
            var pushId = _this.pushNotificationsProvider.getPushId();
            // Convert enabled to boolean and search current device.
            devices.forEach(function (device) {
                device.enable = !!device.enable;
                device.current = pushId && pushId == device.pushid;
            });
            _this.devices = devices;
        }).catch(function (message) {
            _this.domUtils.showErrorModal(message);
        }).finally(function () {
            _this.devicesLoaded = true;
        });
    };
    /**
     * Update list of devices after a certain time. The purpose is to store the updated data, it won't be reflected in the view.
     */
    AddonMessageOutputAirnotifierDevicesPage.prototype.updateDevicesAfterDelay = function () {
        var _this = this;
        // Cancel pending updates.
        if (this.updateTimeout) {
            clearTimeout(this.updateTimeout);
        }
        this.updateTimeout = setTimeout(function () {
            _this.updateTimeout = null;
            _this.updateDevices();
        }, 5000);
    };
    /**
     * Fetch devices. The purpose is to store the updated data, it won't be reflected in the view.
     */
    AddonMessageOutputAirnotifierDevicesPage.prototype.updateDevices = function () {
        var _this = this;
        this.airnotifierProivder.invalidateUserDevices().finally(function () {
            _this.airnotifierProivder.getUserDevices();
        });
    };
    /**
     * Refresh the list of devices.
     *
     * @param {any} refresher Refresher.
     */
    AddonMessageOutputAirnotifierDevicesPage.prototype.refreshDevices = function (refresher) {
        var _this = this;
        this.airnotifierProivder.invalidateUserDevices().finally(function () {
            _this.fetchDevices().finally(function () {
                refresher.complete();
            });
        });
    };
    /**
     * Enable or disable a certain device.
     *
     * @param {any} device The device object.
     * @param {boolean} enable True to enable the device, false to disable it.
     */
    AddonMessageOutputAirnotifierDevicesPage.prototype.enableDevice = function (device, enable) {
        var _this = this;
        device.updating = true;
        this.airnotifierProivder.enableDevice(device.id, enable).then(function () {
            // Update the list of devices since it was modified.
            _this.updateDevicesAfterDelay();
        }).catch(function (message) {
            // Show error and revert change.
            _this.domUtils.showErrorModal(message);
            device.enable = !device.enable;
        }).finally(function () {
            device.updating = false;
        });
    };
    /**
     * Page destroyed.
     */
    AddonMessageOutputAirnotifierDevicesPage.prototype.ngOnDestroy = function () {
        // If there is a pending action to update devices, execute it right now.
        if (this.updateTimeout) {
            clearTimeout(this.updateTimeout);
            this.updateDevices();
        }
    };
    AddonMessageOutputAirnotifierDevicesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-message-output-airnotifier-devices',template:/*ion-inline-start:"C:\wamp\www\BCC_mobapp\bcc_custom_mma\src\addon\messageoutput\airnotifier\pages\devices\devices.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'addon.messageoutput_airnotifier.processorsettingsdesc\' | translate }}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-refresher [enabled]="devicesLoaded" (ionRefresh)="refreshDevices($event)">\n\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n    </ion-refresher>\n\n    <core-loading [hideUntil]="devicesLoaded">\n\n        <ion-list>\n\n            <ion-item text-wrap *ngFor="let device of devices">\n\n                <ion-label [class.core-bold]="device.current">\n\n                    {{ device.model }}\n\n                    <span *ngIf="device.current">({{ \'core.currentdevice\' | translate }})</span>\n\n                </ion-label>\n\n                <ion-spinner *ngIf="device.updating" item-end></ion-spinner>\n\n                <ion-toggle [disabled]="device.updating" [(ngModel)]="device.enable" (ngModelChange)="enableDevice(device, device.enable)"></ion-toggle>\n\n            </ion-item>\n\n        </ion-list>\n\n    </core-loading>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp\www\BCC_mobapp\bcc_custom_mma\src\addon\messageoutput\airnotifier\pages\devices\devices.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_utils_dom__["a" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_airnotifier__["a" /* AddonMessageOutputAirnotifierProvider */],
            __WEBPACK_IMPORTED_MODULE_2__addon_pushnotifications_providers_pushnotifications__["a" /* AddonPushNotificationsProvider */]])
    ], AddonMessageOutputAirnotifierDevicesPage);
    return AddonMessageOutputAirnotifierDevicesPage;
}());

//# sourceMappingURL=devices.js.map
=======

/**
 * Modal that allows editing a feedback plugin.
 */
var AddonModAssignEditFeedbackModalPage = /** @class */ (function () {
    function AddonModAssignEditFeedbackModalPage(params, viewCtrl, domUtils, translate, feedbackDelegate) {
        this.viewCtrl = viewCtrl;
        this.domUtils = domUtils;
        this.translate = translate;
        this.feedbackDelegate = feedbackDelegate;
        this.forceLeave = false; // To allow leaving the page without checking for changes.
        this.assign = params.get('assign');
        this.submission = params.get('submission');
        this.plugin = params.get('plugin');
        this.userId = params.get('userId');
    }
    /**
     * Check if we can leave the page or not.
     *
     * @return {boolean|Promise<void>} Resolved if we can leave it, rejected if not.
     */
    AddonModAssignEditFeedbackModalPage.prototype.ionViewCanLeave = function () {
        var _this = this;
        if (this.forceLeave) {
            return true;
        }
        return this.hasDataChanged().then(function (changed) {
            if (changed) {
                return _this.domUtils.showConfirm(_this.translate.instant('core.confirmcanceledit'));
            }
        });
    };
    /**
     * Close modal.
     *
     * @param {any} data Data to return to the page.
     */
    AddonModAssignEditFeedbackModalPage.prototype.closeModal = function (data) {
        this.viewCtrl.dismiss(data);
    };
    /**
     * Done editing.
     *
     * @param {Event} e Click event.
     */
    AddonModAssignEditFeedbackModalPage.prototype.done = function (e) {
        e.preventDefault();
        e.stopPropagation();
        // Close the modal, sending the input data.
        this.forceLeave = true;
        this.closeModal(this.getInputData());
    };
    /**
     * Get the input data.
     *
     * @return {any} Object with the data.
     */
    AddonModAssignEditFeedbackModalPage.prototype.getInputData = function () {
        return this.domUtils.getDataFromForm(document.forms['addon-mod_assign-edit-feedback-form']);
    };
    /**
     * Check if data has changed.
     *
     * @return {Promise<boolean>} Promise resolved with boolean: whether the data has changed.
     */
    AddonModAssignEditFeedbackModalPage.prototype.hasDataChanged = function () {
        return this.feedbackDelegate.hasPluginDataChanged(this.assign, this.userId, this.plugin, this.getInputData(), this.userId)
            .catch(function () {
            // Ignore errors.
            return true;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], AddonModAssignEditFeedbackModalPage.prototype, "assign", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], AddonModAssignEditFeedbackModalPage.prototype, "submission", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], AddonModAssignEditFeedbackModalPage.prototype, "plugin", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], AddonModAssignEditFeedbackModalPage.prototype, "userId", void 0);
    AddonModAssignEditFeedbackModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-mod-assign-edit-feedback-modal',template:/*ion-inline-start:"C:\wamp\www\AX-LT_2019\mma_lt\src\addon\mod\assign\pages\edit-feedback-modal\edit-feedback-modal.html"*/'<ion-header>\n    <ion-navbar core-back-button>\n        <ion-title><core-format-text [text]="plugin.name"></core-format-text></ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="closeModal()" [attr.aria-label]="\'core.close\' | translate">\n                <ion-icon name="close"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <form name="addon-mod_assign-edit-feedback-form" *ngIf="userId && plugin">\n        <addon-mod-assign-feedback-plugin [assign]="assign" [submission]="submission" [userId]="userId" [plugin]="plugin" [edit]="true"></addon-mod-assign-feedback-plugin>\n        <button ion-button block (click)="done($event)">{{ \'core.done\' | translate }}</button>\n    </form>\n</ion-content>\n'/*ion-inline-end:"C:\wamp\www\AX-LT_2019\mma_lt\src\addon\mod\assign\pages\edit-feedback-modal\edit-feedback-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["E" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_utils_dom__["a" /* CoreDomUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4__providers_feedback_delegate__["a" /* AddonModAssignFeedbackDelegate */]])
    ], AddonModAssignEditFeedbackModalPage);
    return AddonModAssignEditFeedbackModalPage;
}());

//# sourceMappingURL=edit-feedback-modal.js.map
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d

/***/ })

});
//# sourceMappingURL=104.js.map