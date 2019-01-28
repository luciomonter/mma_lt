webpackJsonp([49],{

<<<<<<< HEAD
/***/ 1859:
=======
/***/ 1929:
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreContentLinksChooseSitePageModule", function() { return CoreContentLinksChooseSitePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__choose_site__ = __webpack_require__(1988);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__ = __webpack_require__(14);
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCourseSectionSelectorPageModule", function() { return CoreCourseSectionSelectorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__section_selector__ = __webpack_require__(2062);
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
var CoreContentLinksChooseSitePageModule = /** @class */ (function () {
    function CoreContentLinksChooseSitePageModule() {
    }
    CoreContentLinksChooseSitePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__choose_site__["a" /* CoreContentLinksChooseSitePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__choose_site__["a" /* CoreContentLinksChooseSitePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ]
        })
    ], CoreContentLinksChooseSitePageModule);
    return CoreContentLinksChooseSitePageModule;
}());

//# sourceMappingURL=choose-site.module.js.map

/***/ }),

/***/ 1988:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreContentLinksChooseSitePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utils_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_delegate__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_helper__ = __webpack_require__(31);
=======
var CoreCourseSectionSelectorPageModule = /** @class */ (function () {
    function CoreCourseSectionSelectorPageModule() {
    }
    CoreCourseSectionSelectorPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__section_selector__["a" /* CoreCourseSectionSelectorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__section_selector__["a" /* CoreCourseSectionSelectorPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], CoreCourseSectionSelectorPageModule);
    return CoreCourseSectionSelectorPageModule;
}());

//# sourceMappingURL=section-selector.module.js.map

/***/ }),

/***/ 2062:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreCourseSectionSelectorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_helper__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_course__ = __webpack_require__(10);
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
 * Page to display the list of sites to choose one to perform a content link action.
 */
var CoreContentLinksChooseSitePage = /** @class */ (function () {
    function CoreContentLinksChooseSitePage(navCtrl, navParams, contentLinksDelegate, sitesProvider, domUtils, contentLinksHelper) {
        this.navCtrl = navCtrl;
        this.contentLinksDelegate = contentLinksDelegate;
        this.sitesProvider = sitesProvider;
        this.domUtils = domUtils;
        this.contentLinksHelper = contentLinksHelper;
        this.url = navParams.get('url');
    }
    /**
     * Component being initialized.
     */
    CoreContentLinksChooseSitePage.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.url) {
            return this.leaveView();
        }
        // Get the action to perform.
        this.contentLinksDelegate.getActionsFor(this.url).then(function (actions) {
            _this.action = _this.contentLinksHelper.getFirstValidAction(actions);
            if (!_this.action) {
                return Promise.reject(null);
            }
            // Get the sites that can perform the action.
            return _this.sitesProvider.getSites(_this.action.sites).then(function (sites) {
                _this.sites = sites;
            });
        }).catch(function () {
            _this.domUtils.showErrorModal('core.contentlinks.errornosites', true);
            _this.leaveView();
        }).finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Cancel.
     */
    CoreContentLinksChooseSitePage.prototype.cancel = function () {
        this.leaveView();
    };
    /**
     * Perform the action on a certain site.
     *
     * @param {string} siteId Site ID.
     */
    CoreContentLinksChooseSitePage.prototype.siteClicked = function (siteId) {
        this.action.action(siteId, this.navCtrl);
    };
    /**
     * Cancel and leave the view.
     */
    CoreContentLinksChooseSitePage.prototype.leaveView = function () {
        var _this = this;
        this.sitesProvider.logout().finally(function () {
            _this.navCtrl.setRoot('CoreLoginSitesPage');
        });
    };
    CoreContentLinksChooseSitePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-content-links-choose-site',template:/*ion-inline-start:"C:\wamp\www\BCC_mobapp\bcc_custom_mma\src\core\contentlinks\pages\choose-site\choose-site.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'core.contentlinks.chooseaccount\' | translate }}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <core-loading [hideUntil]="loaded">\n\n        <ion-list>\n\n            <ion-item text-wrap>\n\n                <p class="item-heading">{{ \'core.contentlinks.chooseaccounttoopenlink\' | translate }}</p>\n\n                <p>{{ url }}</p>\n\n            </ion-item>\n\n            <a ion-item *ngFor="let site of sites" (click)="siteClicked(site.id)">\n\n                <img [src]="site.avatar" item-start>\n\n                <h2>{{site.fullName}}</h2>\n\n                <p><core-format-text clean="true" [text]="site.siteName"></core-format-text></p>\n\n                <p>{{site.siteUrl}}</p>\n\n            </a>\n\n            <ion-item>\n\n                <button ion-button block (click)="cancel()">{{ \'core.login.cancel\' | translate }}</button>\n\n            </ion-item>\n\n        </ion-list>\n\n    </core-loading>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp\www\BCC_mobapp\bcc_custom_mma\src\core\contentlinks\pages\choose-site\choose-site.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_delegate__["a" /* CoreContentLinksDelegate */],
            __WEBPACK_IMPORTED_MODULE_2__providers_sites__["a" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_utils_dom__["a" /* CoreDomUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_helper__["a" /* CoreContentLinksHelperProvider */]])
    ], CoreContentLinksChooseSitePage);
    return CoreContentLinksChooseSitePage;
}());

//# sourceMappingURL=choose-site.js.map
=======
/**
 * Page that displays course section selector.
 */
var CoreCourseSectionSelectorPage = /** @class */ (function () {
    function CoreCourseSectionSelectorPage(navParams, courseHelper, viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.stealthModulesSectionId = __WEBPACK_IMPORTED_MODULE_3__providers_course__["a" /* CoreCourseProvider */].STEALTH_MODULES_SECTION_ID;
        this.sections = navParams.get('sections');
        this.selected = navParams.get('selected');
        var course = navParams.get('course');
        if (course && course.enablecompletion && course.courseformatoptions && course.courseformatoptions.coursedisplay == 1) {
            this.sections.forEach(function (section) {
                var complete = 0, total = 0;
                section.modules && section.modules.forEach(function (module) {
                    if (module.uservisible && typeof module.completiondata != 'undefined' &&
                        module.completiondata.tracking > __WEBPACK_IMPORTED_MODULE_3__providers_course__["a" /* CoreCourseProvider */].COMPLETION_TRACKING_NONE) {
                        total++;
                        if (module.completiondata.state == __WEBPACK_IMPORTED_MODULE_3__providers_course__["a" /* CoreCourseProvider */].COMPLETION_COMPLETE ||
                            module.completiondata.state == __WEBPACK_IMPORTED_MODULE_3__providers_course__["a" /* CoreCourseProvider */].COMPLETION_COMPLETE_PASS) {
                            complete++;
                        }
                    }
                });
                if (total > 0) {
                    section.progress = complete / total * 100;
                }
            });
        }
    }
    /**
     * Close the modal.
     */
    CoreCourseSectionSelectorPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    /**
     * Select a section.
     *
     * @param {any} section Selected section object.
     */
    CoreCourseSectionSelectorPage.prototype.selectSection = function (section) {
        if (section.uservisible !== false) {
            this.viewCtrl.dismiss(section);
        }
    };
    CoreCourseSectionSelectorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-course-section-selector',template:/*ion-inline-start:"C:\wamp\www\AX-LT_2019\mma_lt\src\core\course\pages\section-selector\section-selector.html"*/'<ion-header>\n    <ion-navbar core-back-button>\n        <ion-title>{{ \'core.course.sections\' | translate }}</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="closeModal()" [attr.aria-label]="\'core.close\' | translate">\n                <ion-icon name="close"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ng-container *ngFor="let section of sections">\n        <a ion-item *ngIf="!section.hiddenbynumsections && section.id != stealthModulesSectionId" text-wrap (click)="selectSection(section)" [class.core-primary-selected-item]="selected.id == section.id" [class.item-dimmed]="section.visible === 0 || section.uservisible === false" detail-none>\n            <core-icon name="fa-folder" item-start></core-icon>\n            <h2><core-format-text [text]="section.formattedName || section.name"></core-format-text></h2>\n            <core-progress-bar *ngIf="section.progress >= 0" [progress]="section.progress"></core-progress-bar>\n            <ion-badge color="secondary" *ngIf="section.visible === 0 && section.uservisible !== false">{{ \'core.course.hiddenfromstudents\' | translate }}</ion-badge>\n            <ion-badge color="secondary" *ngIf="section.availabilityinfo"><core-format-text  [text]=" section.availabilityinfo"></core-format-text></ion-badge>\n        </a>\n    </ng-container>\n</ion-content>\n'/*ion-inline-end:"C:\wamp\www\AX-LT_2019\mma_lt\src\core\course\pages\section-selector\section-selector.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_helper__["a" /* CoreCourseHelperProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["E" /* ViewController */]])
    ], CoreCourseSectionSelectorPage);
    return CoreCourseSectionSelectorPage;
}());

//# sourceMappingURL=section-selector.js.map
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d

/***/ })

});
//# sourceMappingURL=49.js.map