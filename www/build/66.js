webpackJsonp([66],{

<<<<<<< HEAD
/***/ 1837:
=======
/***/ 1909:
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModQuizNavigationModalPageModule", function() { return AddonModQuizNavigationModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navigation_modal__ = __webpack_require__(1961);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(14);
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModQuizReviewPageModule", function() { return AddonModQuizReviewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_question_components_components_module__ = __webpack_require__(952);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__review__ = __webpack_require__(2038);
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
var AddonModQuizNavigationModalPageModule = /** @class */ (function () {
    function AddonModQuizNavigationModalPageModule() {
    }
    AddonModQuizNavigationModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__navigation_modal__["a" /* AddonModQuizNavigationModalPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__navigation_modal__["a" /* AddonModQuizNavigationModalPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ]
        })
    ], AddonModQuizNavigationModalPageModule);
    return AddonModQuizNavigationModalPageModule;
}());

//# sourceMappingURL=navigation-modal.module.js.map

/***/ }),

/***/ 1961:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonModQuizNavigationModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
=======



var AddonModQuizReviewPageModule = /** @class */ (function () {
    function AddonModQuizReviewPageModule() {
    }
    AddonModQuizReviewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__review__["a" /* AddonModQuizReviewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__["a" /* CorePipesModule */],
                __WEBPACK_IMPORTED_MODULE_6__core_question_components_components_module__["a" /* CoreQuestionComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_7__review__["a" /* AddonModQuizReviewPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonModQuizReviewPageModule);
    return AddonModQuizReviewPageModule;
}());

//# sourceMappingURL=review.module.js.map

/***/ }),

/***/ 2038:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonModQuizReviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utils_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utils_text__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utils_time__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_question_providers_helper__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_quiz__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_helper__ = __webpack_require__(256);
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
 * Modal that renders the quiz navigation.
 */
var AddonModQuizNavigationModalPage = /** @class */ (function () {
    function AddonModQuizNavigationModalPage(params, viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.isReview = !!params.get('isReview');
        this.pageInstance = params.get('page');
    }
    /**
     * Close modal.
     */
    AddonModQuizNavigationModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    /**
     * Load a certain page.
     *
     * @param {number} page The page to load.
     * @param {number} [slot] Slot of the question to scroll to.
     */
    AddonModQuizNavigationModalPage.prototype.loadPage = function (page, slot) {
        this.pageInstance.changePage && this.pageInstance.changePage(page, true, slot);
        this.closeModal();
    };
    /**
     * Switch mode in review.
     */
    AddonModQuizNavigationModalPage.prototype.switchMode = function () {
        this.pageInstance.switchMode && this.pageInstance.switchMode();
        this.closeModal();
    };
    AddonModQuizNavigationModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-mod-quiz-navigation-modal',template:/*ion-inline-start:"C:\wamp\www\BCC_mobapp\bcc_custom_mma\src\addon\mod\quiz\pages\navigation-modal\navigation-modal.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'addon.mod_quiz.quiznavigation\' | translate }}</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="closeModal()" [attr.aria-label]="\'core.close\' | translate">\n\n                <ion-icon name="close"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content class="addon-mod_quiz-navigation-modal">\n\n    <nav>\n\n        <ion-list>\n\n            <!-- In player, show button to finish attempt. -->\n\n            <a ion-item text-wrap *ngIf="!isReview" (click)="loadPage(-1)">\n\n                {{ \'addon.mod_quiz.finishattemptdots\' | translate }}\n\n            </a>\n\n\n\n            <!-- In review we can toggle between all questions in same page or one page at a time. -->\n\n            <a ion-item text-wrap *ngIf="isReview && pageInstance.numPages > 1" (click)="switchMode()">\n\n                <span *ngIf="!pageInstance.showAll">{{ \'addon.mod_quiz.showall\' | translate }}</span>\n\n                <span *ngIf="pageInstance.showAll">{{ \'addon.mod_quiz.showeachpage\' | translate }}</span>\n\n            </a>\n\n            <a ion-item text-wrap *ngFor="let question of pageInstance.navigation" class="{{question.stateClass}}" [ngClass]=\'{"addon-mod_quiz-selected": !pageInstance.showSummary && pageInstance.attempt.currentpage == question.page}\' (click)="loadPage(question.page, question.slot)">\n\n                <span *ngIf="question.number">{{ \'core.question.questionno\' | translate:{$a: question.number} }}</span>\n\n                <span *ngIf="!question.number">{{ \'core.question.information\' | translate }}</span>\n\n            </a>\n\n\n\n            <!-- In player, show button to finish attempt. -->\n\n            <a ion-item text-wrap *ngIf="!isReview" (click)="loadPage(-1)">\n\n                {{ \'addon.mod_quiz.finishattemptdots\' | translate }}\n\n            </a>\n\n\n\n            <!-- In review we can toggle between all questions in same page or one page at a time. -->\n\n            <a ion-item text-wrap *ngIf="isReview && pageInstance.numPages > 1" (click)="switchMode()">\n\n                <span *ngIf="!pageInstance.showAll">{{ \'addon.mod_quiz.showall\' | translate }}</span>\n\n                <span *ngIf="pageInstance.showAll">{{ \'addon.mod_quiz.showeachpage\' | translate }}</span>\n\n            </a>\n\n        </ion-list>\n\n    </nav>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp\www\BCC_mobapp\bcc_custom_mma\src\addon\mod\quiz\pages\navigation-modal\navigation-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["D" /* ViewController */]])
    ], AddonModQuizNavigationModalPage);
    return AddonModQuizNavigationModalPage;
}());

//# sourceMappingURL=navigation-modal.js.map
=======







/**
 * Page that allows reviewing a quiz attempt.
 */
var AddonModQuizReviewPage = /** @class */ (function () {
    function AddonModQuizReviewPage(navParams, modalCtrl, translate, domUtils, timeUtils, quizProvider, quizHelper, questionHelper, textUtils) {
        this.translate = translate;
        this.domUtils = domUtils;
        this.timeUtils = timeUtils;
        this.quizProvider = quizProvider;
        this.quizHelper = quizHelper;
        this.questionHelper = questionHelper;
        this.textUtils = textUtils;
        this.component = __WEBPACK_IMPORTED_MODULE_7__providers_quiz__["a" /* AddonModQuizProvider */].COMPONENT; // Component to link the files to.
        this.quizId = navParams.get('quizId');
        this.courseId = navParams.get('courseId');
        this.attemptId = navParams.get('attemptId');
        this.currentPage = navParams.get('page') || -1;
        this.showAll = this.currentPage == -1;
        // Create the navigation modal.
        this.navigationModal = modalCtrl.create('AddonModQuizNavigationModalPage', {
            isReview: true,
            page: this
        });
    }
    /**
     * Component being initialized.
     */
    AddonModQuizReviewPage.prototype.ngOnInit = function () {
        var _this = this;
        this.fetchData().then(function () {
            _this.quizProvider.logViewAttemptReview(_this.attemptId).catch(function (error) {
                // Ignore errors.
            });
        }).finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Change the current page. If slot is supplied, try to scroll to that question.
     *
     * @param {number} page Page to load. -1 means all questions in same page.
     * @param {boolean} [fromModal] Whether the page was selected using the navigation modal.
     * @param {number} [slot] Slot of the question to scroll to.
     */
    AddonModQuizReviewPage.prototype.changePage = function (page, fromModal, slot) {
        var _this = this;
        if (typeof slot != 'undefined' && (this.attempt.currentpage == -1 || page == this.currentPage)) {
            // Scrol to a certain question in the current page.
            this.scrollToQuestion(slot);
            return;
        }
        else if (page == this.currentPage) {
            // If the user is navigating to the current page and no question specified, we do nothing.
            return;
        }
        this.loaded = false;
        this.domUtils.scrollToTop(this.content);
        this.loadPage(page).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'addon.mod_quiz.errorgetquestions', true);
        }).finally(function () {
            _this.loaded = true;
            if (typeof slot != 'undefined') {
                // Scroll to the question. Give some time to the questions to render.
                setTimeout(function () {
                    _this.scrollToQuestion(slot);
                }, 2000);
            }
        });
    };
    /**
     * Convenience function to get the quiz data.
     *
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonModQuizReviewPage.prototype.fetchData = function () {
        var _this = this;
        return this.quizProvider.getQuizById(this.courseId, this.quizId).then(function (quizData) {
            _this.quiz = quizData;
            _this.componentId = _this.quiz.coursemodule;
            return _this.quizProvider.getCombinedReviewOptions(_this.quizId).then(function (result) {
                _this.options = result;
                // Load the navigation data.
                return _this.loadNavigation().then(function () {
                    // Load questions.
                    return _this.loadPage(_this.currentPage);
                });
            });
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'addon.mod_quiz.errorgetquiz', true);
        });
    };
    /**
     * Load a page questions.
     *
     * @param {number} page The page to load.
     * @return {Promise<void>} Promise resolved when done.
     */
    AddonModQuizReviewPage.prototype.loadPage = function (page) {
        var _this = this;
        return this.quizProvider.getAttemptReview(this.attemptId, page).then(function (data) {
            _this.attempt = data.attempt;
            _this.attempt.currentpage = page;
            _this.currentPage = page;
            // Set the summary data.
            _this.setSummaryCalculatedData(data);
            _this.questions = data.questions;
            _this.nextPage = page == -1 ? undefined : page + 1;
            _this.previousPage = page - 1;
            _this.questions.forEach(function (question) {
                // Get the readable mark for each question.
                question.readableMark = _this.quizHelper.getQuestionMarkFromHtml(question.html);
                // Extract the question info box.
                _this.questionHelper.extractQuestionInfoBox(question, '.info');
                // Set the preferred behaviour.
                question.preferredBehaviour = _this.quiz.preferredbehaviour;
            });
        });
    };
    /**
     * Load data to navigate the questions using the navigation modal.
     *
     * @return {Promise<void>} Promise resolved when done.
     */
    AddonModQuizReviewPage.prototype.loadNavigation = function () {
        var _this = this;
        // Get all questions in single page to retrieve all the questions.
        return this.quizProvider.getAttemptReview(this.attemptId, -1).then(function (data) {
            var lastQuestion = data.questions[data.questions.length - 1];
            data.questions.forEach(function (question) {
                question.stateClass = _this.questionHelper.getQuestionStateClass(question.state);
            });
            _this.navigation = data.questions;
            _this.numPages = lastQuestion ? lastQuestion.page + 1 : 0;
        });
    };
    /**
     * Refreshes data.
     *
     * @param {any} refresher Refresher
     */
    AddonModQuizReviewPage.prototype.refreshData = function (refresher) {
        var _this = this;
        var promises = [];
        promises.push(this.quizProvider.invalidateQuizData(this.courseId));
        promises.push(this.quizProvider.invalidateCombinedReviewOptionsForUser(this.quizId));
        promises.push(this.quizProvider.invalidateAttemptReview(this.attemptId));
        Promise.all(promises).finally(function () {
            return _this.fetchData();
        }).finally(function () {
            refresher.complete();
        });
    };
    /**
     * Scroll to a certain question.
     *
     * @param {number} slot Slot of the question to scroll to.
     */
    AddonModQuizReviewPage.prototype.scrollToQuestion = function (slot) {
        this.domUtils.scrollToElementBySelector(this.content, '#addon-mod_quiz-question-' + slot);
    };
    /**
     * Calculate review summary data.
     *
     * @param {any} data Result of getAttemptReview.
     */
    AddonModQuizReviewPage.prototype.setSummaryCalculatedData = function (data) {
        var _this = this;
        this.attempt.readableState = this.quizProvider.getAttemptReadableStateName(this.attempt.state);
        if (this.attempt.state == __WEBPACK_IMPORTED_MODULE_7__providers_quiz__["a" /* AddonModQuizProvider */].ATTEMPT_FINISHED) {
            this.showCompleted = true;
            this.additionalData = data.additionaldata;
            var timeTaken = this.attempt.timefinish - this.attempt.timestart;
            if (timeTaken) {
                // Format time taken.
                this.attempt.timeTaken = this.timeUtils.formatTime(timeTaken);
                // Calculate overdue time.
                if (this.quiz.timelimit && timeTaken > this.quiz.timelimit + 60) {
                    this.attempt.overTime = this.timeUtils.formatTime(timeTaken - this.quiz.timelimit);
                }
            }
            // Treat grade.
            if (this.options.someoptions.marks >= __WEBPACK_IMPORTED_MODULE_7__providers_quiz__["a" /* AddonModQuizProvider */].QUESTION_OPTIONS_MARK_AND_MAX &&
                this.quizProvider.quizHasGrades(this.quiz)) {
                if (data.grade === null || typeof data.grade == 'undefined') {
                    this.attempt.readableGrade = this.quizProvider.formatGrade(data.grade, this.quiz.decimalpoints);
                }
                else {
                    // Show raw marks only if they are different from the grade (like on the entry page).
                    if (this.quiz.grade != this.quiz.sumgrades) {
                        this.attempt.readableMark = this.translate.instant('addon.mod_quiz.outofshort', { $a: {
                                grade: this.quizProvider.formatGrade(this.attempt.sumgrades, this.quiz.decimalpoints),
                                maxgrade: this.quizProvider.formatGrade(this.quiz.sumgrades, this.quiz.decimalpoints)
                            } });
                    }
                    // Now the scaled grade.
                    var gradeObject = {
                        grade: this.quizProvider.formatGrade(data.grade, this.quiz.decimalpoints),
                        maxgrade: this.quizProvider.formatGrade(this.quiz.grade, this.quiz.decimalpoints)
                    };
                    if (this.quiz.grade != 100) {
                        gradeObject.percent = this.textUtils.roundToDecimals(this.attempt.sumgrades * 100 / this.quiz.sumgrades, 0);
                        this.attempt.readableGrade = this.translate.instant('addon.mod_quiz.outofpercent', { $a: gradeObject });
                    }
                    else {
                        this.attempt.readableGrade = this.translate.instant('addon.mod_quiz.outof', { $a: gradeObject });
                    }
                }
            }
            // Treat additional data.
            this.additionalData.forEach(function (data) {
                // Remove help links from additional data.
                data.content = _this.domUtils.removeElementFromHtml(data.content, '.helptooltip');
            });
        }
    };
    /**
     * Switch mode: all questions in same page OR one page at a time.
     */
    AddonModQuizReviewPage.prototype.switchMode = function () {
        this.showAll = !this.showAll;
        // Load all questions or first page, depending on the mode.
        this.loadPage(this.showAll ? -1 : 0);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], AddonModQuizReviewPage.prototype, "content", void 0);
    AddonModQuizReviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-mod-quiz-review',template:/*ion-inline-start:"C:\wamp\www\AX-LT_2019\mma_lt\src\addon\mod\quiz\pages\review\review.html"*/'<ion-header>\n    <ion-navbar core-back-button>\n        <ion-title>{{ \'addon.mod_quiz.review\' | translate }}</ion-title>\n\n        <ion-buttons end>\n            <button *ngIf="navigation && navigation.length" ion-button icon-only [attr.aria-label]="\'addon.mod_quiz.opentoc\' | translate" (click)="navigationModal.present()">\n                <ion-icon name="bookmark"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-refresher [enabled]="loaded" (ionRefresh)="refreshData($event)">\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n    </ion-refresher>\n    <core-loading [hideUntil]="loaded">\n\n        <!-- Review summary -->\n        <ion-card *ngIf="attempt">\n            <ion-card-header text-wrap>\n                <h2 *ngIf="attempt.preview">{{ \'addon.mod_quiz.reviewofpreview\' | translate }}</h2>\n                <h2 *ngIf="!attempt.preview">{{ \'addon.mod_quiz.reviewofattempt\' | translate:{$a: attempt.attempt} }}</h2>\n            </ion-card-header>\n            <ion-list>\n                <ion-item text-wrap>\n                    <p class="item-heading">{{ \'addon.mod_quiz.startedon\' | translate }}</p>\n                    <p>{{ attempt.timestart * 1000 | coreFormatDate }}</p>\n                </ion-item>\n                <ion-item text-wrap>\n                    <p class="item-heading">{{ \'addon.mod_quiz.attemptstate\' | translate }}</p>\n                    <p>{{ attempt.readableState }}</p>\n                </ion-item>\n                <ion-item text-wrap *ngIf="showCompleted">\n                    <p class="item-heading">{{ \'addon.mod_quiz.completedon\' | translate }}</p>\n                    <p>{{ attempt.timefinish * 1000 | coreFormatDate }}</p>\n                </ion-item>\n                <ion-item text-wrap *ngIf="attempt.timeTaken">\n                    <p class="item-heading">{{ \'addon.mod_quiz.timetaken\' | translate }}</p>\n                    <p>{{ attempt.timeTaken }}</p>\n                </ion-item>\n                <ion-item text-wrap *ngIf="attempt.overTime">\n                    <p class="item-heading">{{ \'addon.mod_quiz.overdue\' | translate }}</p>\n                    <p>{{ attempt.overTime }}</p>\n                </ion-item>\n                <ion-item text-wrap *ngIf="attempt.readableMark">\n                    <p class="item-heading">{{ \'addon.mod_quiz.marks\' | translate }}</p>\n                    <p><core-format-text [text]="attempt.readableMark"></core-format-text></p>\n                </ion-item>\n                <ion-item text-wrap *ngIf="attempt.readableGrade">\n                    <p class="item-heading">{{ \'addon.mod_quiz.grade\' | translate }}</p>\n                    <p>{{ attempt.readableGrade }}</p>\n                </ion-item>\n                <ion-item text-wrap *ngFor="let data of additionalData">\n                    <p class="item-heading">{{ data.title }}</p>\n                    <core-format-text [component]="component" [componentId]="componentId" [text]="data.content"></core-format-text>\n                </ion-item>\n            </ion-list>\n        </ion-card>\n\n        <!-- Questions -->\n        <div *ngIf="attempt && questions.length">\n            <!-- Arrows to go to next/previous. -->\n            <ng-container *ngTemplateOutlet="navArrows"></ng-container>\n\n            <!-- Questions. -->\n            <div *ngFor="let question of questions">\n                <ion-card id="addon-mod_quiz-question-{{question.slot}}">\n                    <!-- "Header" of the question. -->\n                    <ion-item-divider>\n                        <h2 *ngIf="question.number" class="inline">{{ \'core.question.questionno\' | translate:{$a: question.number} }}</h2>\n                        <h2 *ngIf="!question.number" class="inline">{{ \'core.question.information\' | translate }}</h2>\n                        <ion-note text-wrap item-end *ngIf="question.status || question.readableMark">\n                            <p *ngIf="question.status" class="block">{{question.status}}</p>\n                            <p *ngIf="question.readableMark"><core-format-text [text]="question.readableMark"></core-format-text></p>\n                        </ion-note>\n                    </ion-item-divider>\n                    <!-- Body of the question. -->\n                    <core-question text-wrap [question]="question" [component]="component" [componentId]="componentId" [attemptId]="attempt.id" [offlineEnabled]="false"></core-question>\n                </ion-card>\n            </div>\n\n            <!-- Arrows to go to next/previous. -->\n            <ng-container *ngTemplateOutlet="navArrows"></ng-container>\n        </div>\n    </core-loading>\n</ion-content>\n\n<!-- Arrows to go to next/previous. -->\n<ng-template #navArrows>\n    <ion-row align-items-center>\n        <ion-col text-start>\n            <a ion-button icon-only color="light" *ngIf="previousPage >= 0" (click)="changePage(previousPage)" [title]="\'core.previous\' | translate">\n                <ion-icon name="arrow-back" md="ios-arrow-back"></ion-icon>\n            </a>\n        </ion-col>\n        <ion-col text-end>\n            <a ion-button icon-only color="light" *ngIf="nextPage >= -1" (click)="changePage(nextPage)" [title]="\'core.next\' | translate">\n                <ion-icon name="arrow-forward" md="ios-arrow-forward"></ion-icon>\n            </a>\n        </ion-col>\n    </ion-row>\n</ng-template>\n'/*ion-inline-end:"C:\wamp\www\AX-LT_2019\mma_lt\src\addon\mod\quiz\pages\review\review.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_utils_dom__["a" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_utils_time__["a" /* CoreTimeUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_quiz__["a" /* AddonModQuizProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_helper__["a" /* AddonModQuizHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_6__core_question_providers_helper__["a" /* CoreQuestionHelperProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_utils_text__["a" /* CoreTextUtilsProvider */]])
    ], AddonModQuizReviewPage);
    return AddonModQuizReviewPage;
}());

//# sourceMappingURL=review.js.map
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d

/***/ })

});
//# sourceMappingURL=66.js.map