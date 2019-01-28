webpackJsonp([112],{

<<<<<<< HEAD
/***/ 1790:
=======
/***/ 1858:
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCompetencyCompetenciesPageModule", function() { return AddonCompetencyCompetenciesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__competencies__ = __webpack_require__(1914);
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCompetencyPlanPageModule", function() { return AddonCompetencyPlanPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__plan__ = __webpack_require__(1986);
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
var AddonCompetencyCompetenciesPageModule = /** @class */ (function () {
    function AddonCompetencyCompetenciesPageModule() {
    }
    AddonCompetencyCompetenciesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__competencies__["a" /* AddonCompetencyCompetenciesPage */],
=======

var AddonCompetencyPlanPageModule = /** @class */ (function () {
    function AddonCompetencyPlanPageModule() {
    }
    AddonCompetencyPlanPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__plan__["a" /* AddonCompetencyPlanPage */],
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
<<<<<<< HEAD
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__competencies__["a" /* AddonCompetencyCompetenciesPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonCompetencyCompetenciesPageModule);
    return AddonCompetencyCompetenciesPageModule;
}());

//# sourceMappingURL=competencies.module.js.map

/***/ }),

/***/ 1914:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonCompetencyCompetenciesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utils_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_split_view_split_view__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_competency__ = __webpack_require__(159);
=======
                __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__["a" /* CorePipesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__plan__["a" /* AddonCompetencyPlanPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonCompetencyPlanPageModule);
    return AddonCompetencyPlanPageModule;
}());

//# sourceMappingURL=plan.module.js.map

/***/ }),

/***/ 1986:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonCompetencyPlanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utils_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_split_view_split_view__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_competency__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_helper__ = __webpack_require__(395);
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
 * Page that displays the list of competencies of a learning plan.
 */
var AddonCompetencyCompetenciesPage = /** @class */ (function () {
    function AddonCompetencyCompetenciesPage(navParams, translate, domUtils, competencyProvider) {
        this.translate = translate;
        this.domUtils = domUtils;
        this.competencyProvider = competencyProvider;
        this.competenciesLoaded = false;
        this.competencies = [];
        this.planId = navParams.get('planId');
        this.courseId = navParams.get('courseId');
        this.competencyId = navParams.get('competencyId');
        this.userId = navParams.get('userId');
=======
 * Page that displays a learning plan.
 */
var AddonCompetencyPlanPage = /** @class */ (function () {
    function AddonCompetencyPlanPage(navCtrl, navParams, appProvider, domUtils, svComponent, competencyProvider, competencyHelperProvider) {
        this.navCtrl = navCtrl;
        this.appProvider = appProvider;
        this.domUtils = domUtils;
        this.svComponent = svComponent;
        this.competencyProvider = competencyProvider;
        this.competencyHelperProvider = competencyHelperProvider;
        this.planLoaded = false;
        this.planId = navParams.get('planId');
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
    }
    /**
     * View loaded.
     */
<<<<<<< HEAD
    AddonCompetencyCompetenciesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.competencyId) {
            // There is a competency to load.
            this.openCompetency(this.competencyId);
        }
        this.fetchCompetencies().then(function () {
            if (!_this.competencyId && _this.splitviewCtrl.isOn() && _this.competencies.length > 0) {
                // Take first and load it.
                _this.openCompetency(_this.competencies[0].id);
            }
        }).finally(function () {
            _this.competenciesLoaded = true;
        });
    };
    /**
     * Fetches the competencies and updates the view.
     *
     * @return {Promise<void>} Promise resolved when done.
     */
    AddonCompetencyCompetenciesPage.prototype.fetchCompetencies = function () {
        var _this = this;
        var promise;
        if (this.planId) {
            promise = this.competencyProvider.getLearningPlan(this.planId);
        }
        else if (this.courseId) {
            promise = this.competencyProvider.getCourseCompetencies(this.courseId, this.userId);
        }
        else {
            promise = Promise.reject(null);
        }
        return promise.then(function (response) {
            if (response.competencycount <= 0) {
                return Promise.reject(_this.translate.instant('addon.competency.errornocompetenciesfound'));
            }
            if (_this.planId) {
                _this.title = response.plan.name;
                _this.userId = response.plan.userid;
            }
            else {
                _this.title = _this.translate.instant('addon.competency.coursecompetencies');
            }
            _this.competencies = response.competencies;
        }).catch(function (message) {
            _this.domUtils.showErrorModalDefault(message, 'Error getting competencies data.');
        });
    };
    /**
     * Opens a competency.
     *
     * @param {number} competencyId
     */
    AddonCompetencyCompetenciesPage.prototype.openCompetency = function (competencyId) {
        this.competencyId = competencyId;
        var params;
        if (this.planId) {
            params = { competencyId: competencyId, planId: this.planId };
        }
        else {
            params = { competencyId: competencyId, courseId: this.courseId, userId: this.userId };
        }
        this.splitviewCtrl.push('AddonCompetencyCompetencyPage', params);
    };
    /**
     * Refreshes the competencies.
     *
     * @param {any} refresher Refresher.
     */
    AddonCompetencyCompetenciesPage.prototype.refreshCompetencies = function (refresher) {
        var _this = this;
        var promise;
        if (this.planId) {
            promise = this.competencyProvider.invalidateLearningPlan(this.planId);
        }
        else {
            promise = this.competencyProvider.invalidateCourseCompetencies(this.courseId, this.userId);
        }
        return promise.finally(function () {
            _this.fetchCompetencies().finally(function () {
=======
    AddonCompetencyPlanPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.fetchLearningPlan().finally(function () {
            _this.planLoaded = true;
        });
    };
    /**
     * Fetches the learning plan and updates the view.
     *
     * @return {Promise<void>} Promise resolved when done.
     */
    AddonCompetencyPlanPage.prototype.fetchLearningPlan = function () {
        var _this = this;
        return this.competencyProvider.getLearningPlan(this.planId).then(function (plan) {
            plan.plan.statusname = _this.competencyHelperProvider.getPlanStatusName(plan.plan.status);
            // Get the user profile image.
            _this.competencyHelperProvider.getProfile(plan.plan.userid).then(function (user) {
                _this.user = user;
            });
            plan.competencies.forEach(function (competency) {
                competency.usercompetency = competency.usercompetencyplan || competency.usercompetency;
            });
            _this.plan = plan;
        }).catch(function (message) {
            _this.domUtils.showErrorModalDefault(message, 'Error getting learning plan data.');
        });
    };
    /**
     * Navigates to a particular competency.
     *
     * @param {number} competencyId
     */
    AddonCompetencyPlanPage.prototype.openCompetency = function (competencyId) {
        var navCtrl = this.svComponent ? this.svComponent.getMasterNav() : this.navCtrl;
        if (this.appProvider.isWide()) {
            navCtrl.push('AddonCompetencyCompetenciesPage', { competencyId: competencyId, planId: this.planId });
        }
        else {
            navCtrl.push('AddonCompetencyCompetencyPage', { competencyId: competencyId, planId: this.planId });
        }
    };
    /**
     * Refreshes the learning plan.
     *
     * @param {any} refresher Refresher.
     */
    AddonCompetencyPlanPage.prototype.refreshLearningPlan = function (refresher) {
        var _this = this;
        this.competencyProvider.invalidateLearningPlan(this.planId).finally(function () {
            _this.fetchLearningPlan().finally(function () {
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
                refresher.complete();
            });
        });
    };
<<<<<<< HEAD
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__components_split_view_split_view__["a" /* CoreSplitViewComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__components_split_view_split_view__["a" /* CoreSplitViewComponent */])
    ], AddonCompetencyCompetenciesPage.prototype, "splitviewCtrl", void 0);
    AddonCompetencyCompetenciesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-competency-competencies',template:/*ion-inline-start:"C:\wamp\www\BCC_mobapp\bcc_custom_mma\src\addon\competency\pages\competencies\competencies.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ title }}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<core-split-view>\n\n    <ion-content>\n\n        <ion-refresher [enabled]="competenciesLoaded" (ionRefresh)="refreshCompetencies($event)">\n\n            <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n        </ion-refresher>\n\n        <core-loading [hideUntil]="competenciesLoaded">\n\n            <ion-list>\n\n                <a ion-item text-wrap *ngFor="let competency of competencies" [title]="competency.competency.shortname" (click)="openCompetency(competency.competency.id)" [class.core-split-item-selected]="competency.competency.id == competencyId">\n\n                    {{ competency.competency.shortname }} <small>{{competency.competency.idnumber}}</small>\n\n                    <ion-badge item-end *ngIf="competency.usercompetency" [color]="competency.usercompetency.proficiency ? \'success\' : \'danger\'">{{ competency.usercompetency.gradename }}</ion-badge>\n\n                    <ion-badge item-end *ngIf="competency.usercompetencycourse" [color]="competency.usercompetencycourse.proficiency ? \'success\' : \'danger\'">{{ competency.usercompetencycourse.gradename }}</ion-badge>\n\n                </a>\n\n            </ion-list>\n\n        </core-loading>\n\n    </ion-content>\n\n</core-split-view>'/*ion-inline-end:"C:\wamp\www\BCC_mobapp\bcc_custom_mma\src\addon\competency\pages\competencies\competencies.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__providers_utils_dom__["a" /* CoreDomUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_competency__["a" /* AddonCompetencyProvider */]])
    ], AddonCompetencyCompetenciesPage);
    return AddonCompetencyCompetenciesPage;
}());

//# sourceMappingURL=competencies.js.map
=======
    AddonCompetencyPlanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-competency-plan',template:/*ion-inline-start:"C:\wamp\www\AX-LT_2019\mma_lt\src\addon\competency\pages\plan\plan.html"*/'<ion-header>\n    <ion-navbar core-back-button>\n        <ion-title *ngIf="plan">{{plan.plan.name}}</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-refresher [enabled]="planLoaded" (ionRefresh)="refreshLearningPlan($event)">\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n    </ion-refresher>\n    <core-loading [hideUntil]="planLoaded">\n        <ion-card *ngIf="user">\n            <ion-item text-wrap>\n                <ion-avatar core-user-avatar [user]="user" item-start></ion-avatar>\n                <h2><core-format-text [text]="user.fullname"></core-format-text></h2>\n            </ion-item>\n       </ion-card>\n        <ion-card *ngIf="plan">\n            <ion-list>\n                <ion-item text-wrap>\n                    <strong>{{ \'addon.competency.status\' | translate }}</strong>:\n                    {{ plan.plan.statusname }}\n                </ion-item>\n                <ion-item text-wrap *ngIf="plan.plan.duedate > 0">\n                    <strong>{{ \'addon.competency.duedate\' | translate }}</strong>:\n                    {{ plan.plan.duedate * 1000 | coreFormatDate }}\n                </ion-item>\n                <ion-item text-wrap *ngIf="plan.plan.template">\n                    <strong>{{ \'addon.competency.template\' | translate }}</strong>:\n                    {{ plan.plan.template.shortname }}\n                </ion-item>\n                <ion-item text-wrap>\n                    <strong>{{ \'addon.competency.progress\' | translate }}</strong>:\n                    {{ \'addon.competency.xcompetenciesproficientoutofy\' | translate: {$a: {x: plan.proficientcompetencycount, y: plan.competencycount} } }}\n                    <core-progress-bar [progress]="plan.proficientcompetencypercentage" [text]="plan.proficientcompetencypercentageformatted"></core-progress-bar>\n                </ion-item>\n            </ion-list>\n        </ion-card>\n        <ion-card *ngIf="plan">\n            <ion-card-header text-wrap>{{ \'addon.competency.learningplancompetencies\' | translate }}</ion-card-header>\n            <ion-list>\n                <ion-item text-wrap *ngIf="plan.competencycount == 0">\n                    {{ \'addon.competency.nocompetencies\' | translate }}\n                </ion-item>\n                <a ion-item text-wrap *ngFor="let competency of plan.competencies" (click)="openCompetency(competency.competency.id)" [title]="competency.competency.shortname">\n                    {{competency.competency.shortname}} <small>{{competency.competency.idnumber}}</small>\n                    <ion-badge item-end [color]="competency.usercompetency.proficiency ? \'success\' : \'danger\'">{{ competency.usercompetency.gradename }}</ion-badge>\n                </a>\n            </ion-list>\n        </ion-card>\n    </core-loading>\n</ion-content>\n'/*ion-inline-end:"C:\wamp\www\AX-LT_2019\mma_lt\src\addon\competency\pages\plan\plan.html"*/,
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Optional */])()),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_app__["a" /* CoreAppProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_utils_dom__["a" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_4__components_split_view_split_view__["a" /* CoreSplitViewComponent */],
            __WEBPACK_IMPORTED_MODULE_5__providers_competency__["a" /* AddonCompetencyProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_helper__["a" /* AddonCompetencyHelperProvider */]])
    ], AddonCompetencyPlanPage);
    return AddonCompetencyPlanPage;
}());

//# sourceMappingURL=plan.js.map
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d

/***/ })

});
//# sourceMappingURL=112.js.map