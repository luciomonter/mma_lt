webpackJsonp([6],{

<<<<<<< HEAD
/***/ 1839:
=======
/***/ 1912:
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModQuizPlayerPageModule", function() { return AddonModQuizPlayerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_question_components_components_module__ = __webpack_require__(933);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__player__ = __webpack_require__(1963);
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModScormPlayerPageModule", function() { return AddonModScormPlayerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__player__ = __webpack_require__(2041);
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

var AddonModQuizPlayerPageModule = /** @class */ (function () {
    function AddonModQuizPlayerPageModule() {
    }
    AddonModQuizPlayerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__player__["a" /* AddonModQuizPlayerPage */],
=======
var AddonModScormPlayerPageModule = /** @class */ (function () {
    function AddonModScormPlayerPageModule() {
    }
    AddonModScormPlayerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__player__["a" /* AddonModScormPlayerPage */],
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
<<<<<<< HEAD
                __WEBPACK_IMPORTED_MODULE_5__core_question_components_components_module__["a" /* CoreQuestionComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__player__["a" /* AddonModQuizPlayerPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonModQuizPlayerPageModule);
    return AddonModQuizPlayerPageModule;
=======
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__player__["a" /* AddonModScormPlayerPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonModScormPlayerPageModule);
    return AddonModScormPlayerPageModule;
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
}());

//# sourceMappingURL=player.module.js.map

/***/ }),

<<<<<<< HEAD
/***/ 1963:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonModQuizPlayerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_events__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_logger__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_sync__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_utils_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_utils_time__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_question_providers_helper__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_quiz__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_quiz_sync__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_helper__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__classes_auto_save__ = __webpack_require__(1964);
=======
/***/ 2041:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonModScormPlayerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_events__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_sync__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utils_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_utils_time__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_scorm__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_helper__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_scorm_sync__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__classes_data_model_12__ = __webpack_require__(2042);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_toc_popover_toc_popover__ = __webpack_require__(978);
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
 * Page that allows attempting a quiz.
 */
var AddonModQuizPlayerPage = /** @class */ (function () {
    function AddonModQuizPlayerPage(navParams, logger, translate, eventsProvider, sitesProvider, syncProvider, domUtils, popoverCtrl, timeUtils, quizProvider, quizHelper, quizSync, questionHelper, cdr, modalCtrl, navCtrl) {
        this.translate = translate;
=======
/**
 * Page that allows playing a SCORM.
 */
var AddonModScormPlayerPage = /** @class */ (function () {
    function AddonModScormPlayerPage(navParams, popoverCtrl, eventsProvider, sitesProvider, syncProvider, domUtils, timeUtils, scormProvider, scormHelper, scormSyncProvider) {
        this.popoverCtrl = popoverCtrl;
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
        this.eventsProvider = eventsProvider;
        this.sitesProvider = sitesProvider;
        this.syncProvider = syncProvider;
        this.domUtils = domUtils;
        this.timeUtils = timeUtils;
<<<<<<< HEAD
        this.quizProvider = quizProvider;
        this.quizHelper = quizHelper;
        this.quizSync = quizSync;
        this.questionHelper = questionHelper;
        this.cdr = cdr;
        this.navCtrl = navCtrl;
        this.component = __WEBPACK_IMPORTED_MODULE_10__providers_quiz__["a" /* AddonModQuizProvider */].COMPONENT; // Component to link the files to.
        this.preflightData = {}; // Preflight data to attempt the quiz.
        this.forceLeave = false; // If true, don't perform any check when leaving the view.
        this.reloadNavigaton = false; // Whether navigation needs to be reloaded because some data was sent to server.
        this.quizId = navParams.get('quizId');
        this.courseId = navParams.get('courseId');
        this.moduleUrl = navParams.get('moduleUrl');
        // Block the quiz so it cannot be synced.
        this.syncProvider.blockOperation(__WEBPACK_IMPORTED_MODULE_10__providers_quiz__["a" /* AddonModQuizProvider */].COMPONENT, this.quizId);
        // Create the auto save instance.
        this.autoSave = new __WEBPACK_IMPORTED_MODULE_13__classes_auto_save__["a" /* AddonModQuizAutoSave */]('addon-mod_quiz-player-form', '#addon-mod_quiz-connection-error-button', logger, popoverCtrl, questionHelper, quizProvider);
        // Create the navigation modal.
        this.navigationModal = modalCtrl.create('AddonModQuizNavigationModalPage', {
            page: this
        });
=======
        this.scormProvider = scormProvider;
        this.scormHelper = scormHelper;
        this.scormSyncProvider = scormSyncProvider;
        this.loadingToc = true; // Whether the TOC is being loaded.
        this.offline = false; // Whether it's offline mode.
        this.scorm = navParams.get('scorm') || {};
        this.mode = navParams.get('mode') || __WEBPACK_IMPORTED_MODULE_7__providers_scorm__["a" /* AddonModScormProvider */].MODENORMAL;
        this.newAttempt = !!navParams.get('newAttempt');
        this.organizationId = navParams.get('organizationId');
        this.initialScoId = navParams.get('scoId');
        this.siteId = this.sitesProvider.getCurrentSiteId();
        // We use SCORM name at start, later we'll use the SCO title.
        this.title = this.scorm.name;
        // Block the SCORM so it cannot be synchronized.
        this.syncProvider.blockOperation(__WEBPACK_IMPORTED_MODULE_7__providers_scorm__["a" /* AddonModScormProvider */].COMPONENT, this.scorm.id, 'player');
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
    }
    /**
     * Component being initialized.
     */
<<<<<<< HEAD
    AddonModQuizPlayerPage.prototype.ngOnInit = function () {
        var _this = this;
        // Start the player when the page is loaded.
        this.start();
        // Listen for errors on auto-save.
        this.autoSaveErrorSubscription = this.autoSave.onError().subscribe(function (error) {
            _this.autoSaveError = error;
            _this.cdr.detectChanges();
        });
    };
    /**
     * Component being destroyed.
     */
    AddonModQuizPlayerPage.prototype.ngOnDestroy = function () {
        // Stop auto save.
        this.autoSave.cancelAutoSave();
        this.autoSave.stopCheckChangesProcess();
        this.autoSaveErrorSubscription && this.autoSaveErrorSubscription.unsubscribe();
        // Unblock the quiz so it can be synced.
        this.syncProvider.unblockOperation(__WEBPACK_IMPORTED_MODULE_10__providers_quiz__["a" /* AddonModQuizProvider */].COMPONENT, this.quizId);
    };
    /**
     * Check if we can leave the page or not.
     *
     * @return {boolean|Promise<void>} Resolved if we can leave it, rejected if not.
     */
    AddonModQuizPlayerPage.prototype.ionViewCanLeave = function () {
        var _this = this;
        if (this.forceLeave) {
            return true;
        }
        if (this.questions && this.questions.length && !this.showSummary) {
            // Save answers.
            var modal_1 = this.domUtils.showModalLoading('core.sending', true);
            return this.processAttempt(false, false).catch(function () {
                // Save attempt failed. Show confirmation.
                modal_1.dismiss();
                return _this.domUtils.showConfirm(_this.translate.instant('addon.mod_quiz.confirmleavequizonerror'));
            }).finally(function () {
                modal_1.dismiss();
            });
        }
        return Promise.resolve();
    };
    /**
     * Abort the quiz.
     */
    AddonModQuizPlayerPage.prototype.abortQuiz = function () {
        this.quizAborted = true;
    };
    /**
     * A behaviour button in a question was clicked (Check, Redo, ...).
     *
     * @param {any} button Clicked button.
     */
    AddonModQuizPlayerPage.prototype.behaviourButtonClicked = function (button) {
        var _this = this;
        // Confirm that the user really wants to do it.
        this.domUtils.showConfirm(this.translate.instant('core.areyousure')).then(function () {
            var modal = _this.domUtils.showModalLoading('core.sending', true), answers = _this.getAnswers();
            // Add the clicked button data.
            answers[button.name] = button.value;
            // Behaviour checks are always in online.
            return _this.quizProvider.processAttempt(_this.quiz, _this.attempt, answers, _this.preflightData).then(function () {
                _this.reloadNavigaton = true; // Data sent to server, navigation should be reloaded.
                // Reload the current page.
                var scrollElement = _this.content.getScrollElement(), scrollTop = scrollElement.scrollTop || 0, scrollLeft = scrollElement.scrollLeft || 0;
                _this.loaded = false;
                _this.domUtils.scrollToTop(_this.content); // Scroll top so the spinner is seen.
                return _this.loadPage(_this.attempt.currentpage).finally(function () {
                    _this.loaded = true;
                    _this.domUtils.scrollTo(_this.content, scrollLeft, scrollTop);
                });
            }).finally(function () {
                modal.dismiss();
            });
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'Error performing action.');
        });
    };
    /**
     * Change the current page. If slot is supplied, try to scroll to that question.
     *
     * @param {number} page Page to load. -1 means summary.
     * @param {boolean} [fromModal] Whether the page was selected using the navigation modal.
     * @param {number} [slot] Slot of the question to scroll to.
     */
    AddonModQuizPlayerPage.prototype.changePage = function (page, fromModal, slot) {
        var _this = this;
        if (page != -1 && (this.attempt.state == __WEBPACK_IMPORTED_MODULE_10__providers_quiz__["a" /* AddonModQuizProvider */].ATTEMPT_OVERDUE || this.attempt.finishedOffline)) {
            // We can't load a page if overdue or the local attempt is finished.
            return;
        }
        else if (page == this.attempt.currentpage && !this.showSummary && typeof slot != 'undefined') {
            // Navigating to a question in the current page.
            this.scrollToQuestion(slot);
            return;
        }
        else if ((page == this.attempt.currentpage && !this.showSummary) || (fromModal && this.quiz.isSequential && page != -1)) {
            // If the user is navigating to the current page we do nothing.
            // Also, in sequential quizzes we don't allow navigating using the modal except for finishing the quiz (summary).
            return;
        }
        else if (page === -1 && this.showSummary) {
            // Summary already shown.
            return;
        }
        this.loaded = false;
        this.domUtils.scrollToTop(this.content);
        // First try to save the attempt data. We only save it if we're not seeing the summary.
        var promise = this.showSummary ? Promise.resolve() : this.processAttempt(false, false);
        promise.then(function () {
            if (!_this.showSummary) {
                _this.reloadNavigaton = true; // Data sent to server, navigation should be reloaded.
            }
            // Attempt data successfully saved, load the page or summary.
            var subPromise;
            // Stop checking for changes during page change.
            _this.autoSave.stopCheckChangesProcess();
            if (page === -1) {
                subPromise = _this.loadSummary();
            }
            else {
                subPromise = _this.loadPage(page);
            }
            return subPromise.catch(function (error) {
                // If the user isn't seeing the summary, start the check again.
                if (!_this.showSummary) {
                    _this.autoSave.startCheckChangesProcess(_this.quiz, _this.attempt, _this.preflightData, _this.offline);
                }
                _this.domUtils.showErrorModalDefault(error, 'addon.mod_quiz.errorgetquestions', true);
            });
        }, function (error) {
            _this.domUtils.showErrorModalDefault(error, 'addon.mod_quiz.errorsaveattempt', true);
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
    AddonModQuizPlayerPage.prototype.fetchData = function () {
        var _this = this;
        // Wait for any ongoing sync to finish. We won't sync a quiz while it's being played.
        return this.quizSync.waitForSync(this.quizId).then(function () {
            // Sync finished, now get the quiz.
            return _this.quizProvider.getQuizById(_this.courseId, _this.quizId);
        }).then(function (quizData) {
            _this.quiz = quizData;
            _this.quiz.isSequential = _this.quizProvider.isNavigationSequential(_this.quiz);
            if (_this.quizProvider.isQuizOffline(_this.quiz)) {
                // Quiz supports offline.
                return true;
            }
            else {
                // Quiz doesn't support offline right now, but maybe it did and then the setting was changed.
                // If we have an unfinished offline attempt then we'll use offline mode.
                return _this.quizProvider.isLastAttemptOfflineUnfinished(_this.quiz);
            }
        }).then(function (offlineMode) {
            _this.offline = offlineMode;
            if (_this.quiz.timelimit > 0) {
                _this.quiz.readableTimeLimit = _this.timeUtils.formatTime(_this.quiz.timelimit);
            }
            // Get access information for the quiz.
            return _this.quizProvider.getQuizAccessInformation(_this.quiz.id, _this.offline, true);
        }).then(function (info) {
            _this.quizAccessInfo = info;
            // Get user attempts to determine last attempt.
            return _this.quizProvider.getUserAttempts(_this.quiz.id, 'all', true, _this.offline, true);
        }).then(function (attempts) {
            if (!attempts.length) {
                // There are no attempts, start a new one.
                _this.newAttempt = true;
            }
            else {
                var promises = [];
                // Get the last attempt. If it's finished, start a new one.
                _this.lastAttempt = attempts[attempts.length - 1];
                _this.newAttempt = _this.quizProvider.isAttemptFinished(_this.lastAttempt.state);
                // Load quiz last sync time.
                promises.push(_this.quizSync.getSyncTime(_this.quiz.id).then(function (time) {
                    _this.quiz.syncTime = time;
                    _this.quiz.syncTimeReadable = _this.quizSync.getReadableTimeFromTimestamp(time);
                }));
                // Load flag to show if attempts are finished but not synced.
                promises.push(_this.quizProvider.loadFinishedOfflineData(attempts));
                return Promise.all(promises);
            }
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'addon.mod_quiz.errorgetquiz', true);
        });
    };
    /**
     * Finish an attempt, either by timeup or because the user clicked to finish it.
     *
     * @param {boolean} [userFinish] Whether the user clicked to finish the attempt.
     * @param {boolean} [timeUp] Whether the quiz time is up.
     * @return {Promise<void>} Promise resolved when done.
     */
    AddonModQuizPlayerPage.prototype.finishAttempt = function (userFinish, timeUp) {
        var _this = this;
        var promise;
        // Show confirm if the user clicked the finish button and the quiz is in progress.
        if (!timeUp && this.attempt.state == __WEBPACK_IMPORTED_MODULE_10__providers_quiz__["a" /* AddonModQuizProvider */].ATTEMPT_IN_PROGRESS) {
            promise = this.domUtils.showConfirm(this.translate.instant('addon.mod_quiz.confirmclose'));
        }
        else {
            promise = Promise.resolve();
        }
        return promise.then(function () {
            var modal = _this.domUtils.showModalLoading('core.sending', true);
            return _this.processAttempt(userFinish, timeUp).then(function () {
                // Trigger an event to notify the attempt was finished.
                _this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_10__providers_quiz__["a" /* AddonModQuizProvider */].ATTEMPT_FINISHED_EVENT, {
                    quizId: _this.quizId,
                    attemptId: _this.attempt.id,
                    synced: !_this.offline
                }, _this.sitesProvider.getCurrentSiteId());
                // Leave the player.
                _this.forceLeave = true;
                _this.navCtrl.pop();
            }).finally(function () {
                modal.dismiss();
            });
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'addon.mod_quiz.errorsaveattempt', true);
        });
    };
    /**
     * Get the input answers.
     *
     * @return {any} Object with the answers.
     */
    AddonModQuizPlayerPage.prototype.getAnswers = function () {
        return this.questionHelper.getAnswersFromForm(document.forms['addon-mod_quiz-player-form']);
    };
    /**
     * Initializes the timer if enabled.
     */
    AddonModQuizPlayerPage.prototype.initTimer = function () {
        if (this.attemptAccessInfo.endtime > 0) {
            // Quiz has an end time. Check if time left should be shown.
            if (this.quizProvider.shouldShowTimeLeft(this.quizAccessInfo.activerulenames, this.attempt, this.attemptAccessInfo.endtime)) {
                this.endTime = this.attemptAccessInfo.endtime;
            }
            else {
                delete this.endTime;
            }
        }
    };
    /**
     * Load a page questions.
     *
     * @param {number} page The page to load.
     * @return {Promise<void>} Promise resolved when done.
     */
    AddonModQuizPlayerPage.prototype.loadPage = function (page) {
        var _this = this;
        return this.quizProvider.getAttemptData(this.attempt.id, page, this.preflightData, this.offline, true).then(function (data) {
            // Update attempt, status could change during the execution.
            _this.attempt = data.attempt;
            _this.attempt.currentpage = page;
            _this.questions = data.questions;
            _this.nextPage = data.nextpage;
            _this.previousPage = _this.quiz.isSequential ? -1 : page - 1;
            _this.showSummary = false;
            _this.questions.forEach(function (question) {
                // Get the readable mark for each question.
                question.readableMark = _this.quizHelper.getQuestionMarkFromHtml(question.html);
                // Extract the question info box.
                _this.questionHelper.extractQuestionInfoBox(question, '.info');
                // Set the preferred behaviour.
                question.preferredBehaviour = _this.quiz.preferredbehaviour;
                // Check if the question is blocked. If it is, treat it as a description question.
                if (_this.quizProvider.isQuestionBlocked(question)) {
                    question.type = 'description';
                }
            });
            // Mark the page as viewed. We'll ignore errors in this call.
            _this.quizProvider.logViewAttempt(_this.attempt.id, page, _this.preflightData, _this.offline).catch(function (error) {
                // Ignore errors.
            });
            // Start looking for changes.
            _this.autoSave.startCheckChangesProcess(_this.quiz, _this.attempt, _this.preflightData, _this.offline);
        });
    };
    /**
     * Load attempt summary.
     *
     * @return {Promise<void>} Promise resolved when done.
     */
    AddonModQuizPlayerPage.prototype.loadSummary = function () {
        var _this = this;
        this.summaryQuestions = [];
        return this.quizProvider.getAttemptSummary(this.attempt.id, this.preflightData, this.offline, true, true).then(function (qs) {
            _this.showSummary = true;
            _this.summaryQuestions = qs;
            _this.canReturn = _this.attempt.state == __WEBPACK_IMPORTED_MODULE_10__providers_quiz__["a" /* AddonModQuizProvider */].ATTEMPT_IN_PROGRESS && !_this.attempt.finishedOffline;
            _this.preventSubmitMessages = _this.quizProvider.getPreventSubmitMessages(_this.summaryQuestions);
            _this.attempt.dueDateWarning = _this.quizProvider.getAttemptDueDateWarning(_this.quiz, _this.attempt);
            // Log summary as viewed.
            _this.quizProvider.logViewAttemptSummary(_this.attempt.id, _this.preflightData).catch(function (error) {
                // Ignore errors.
            });
        });
    };
    /**
     * Load data to navigate the questions using the navigation modal.
     *
     * @return {Promise<void>} Promise resolved when done.
     */
    AddonModQuizPlayerPage.prototype.loadNavigation = function () {
        var _this = this;
        // We use the attempt summary to build the navigation because it contains all the questions.
        return this.quizProvider.getAttemptSummary(this.attempt.id, this.preflightData, this.offline, true, true)
            .then(function (questions) {
            questions.forEach(function (question) {
                question.stateClass = _this.questionHelper.getQuestionStateClass(question.state);
            });
            _this.navigation = questions;
        });
    };
    /**
     * Open the navigation modal.
     *
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonModQuizPlayerPage.prototype.openNavigation = function () {
        var _this = this;
        var promise;
        if (this.reloadNavigaton) {
            // Some data has changed, reload the navigation.
            var modal_2 = this.domUtils.showModalLoading();
            promise = this.loadNavigation().catch(function () {
                // Ignore errors.
            }).then(function () {
                modal_2.dismiss();
                _this.reloadNavigaton = false;
            });
        }
        else {
            promise = Promise.resolve();
        }
        return promise.finally(function () {
            _this.navigationModal.present();
        });
    };
    // Prepare the answers to be sent for the attempt.
    AddonModQuizPlayerPage.prototype.prepareAnswers = function () {
        return this.questionHelper.prepareAnswers(this.questions, this.getAnswers(), this.offline);
    };
    /**
     * Process attempt.
     *
     * @param {boolean} [userFinish] Whether the user clicked to finish the attempt.
     * @param {boolean} [timeUp] Whether the quiz time is up.
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonModQuizPlayerPage.prototype.processAttempt = function (userFinish, timeUp) {
        var _this = this;
        // Get the answers to send.
        return this.prepareAnswers().then(function (answers) {
            // Send the answers.
            return _this.quizProvider.processAttempt(_this.quiz, _this.attempt, answers, _this.preflightData, userFinish, timeUp, _this.offline);
        }).then(function () {
            // Answers saved, cancel auto save.
            _this.autoSave.cancelAutoSave();
            _this.autoSave.hideAutoSaveError();
        });
    };
    /**
     * Scroll to a certain question.
     *
     * @param {number} slot Slot of the question to scroll to.
     */
    AddonModQuizPlayerPage.prototype.scrollToQuestion = function (slot) {
        this.domUtils.scrollToElementBySelector(this.content, '#addon-mod_quiz-question-' + slot);
    };
    /**
     * Show connection error.
     *
     * @param {Event} ev Click event.
     */
    AddonModQuizPlayerPage.prototype.showConnectionError = function (ev) {
        this.autoSave.showAutoSaveError(ev);
    };
    /**
     * Convenience function to start the player.
     */
    AddonModQuizPlayerPage.prototype.start = function () {
        var _this = this;
        var promise;
        this.loaded = false;
        if (this.quizDataLoaded) {
            // Quiz data has been loaded, try to start or continue.
            promise = this.startOrContinueAttempt();
        }
        else {
            // Fetch data.
            promise = this.fetchData().then(function () {
                _this.quizDataLoaded = true;
                return _this.startOrContinueAttempt();
            });
        }
        promise.finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Start or continue an attempt.
     *
     * @return {Promise<any>} [description]
     */
    AddonModQuizPlayerPage.prototype.startOrContinueAttempt = function () {
        var _this = this;
        var attempt = this.newAttempt ? undefined : this.lastAttempt;
        // Get the preflight data and start attempt if needed.
        return this.quizHelper.getAndCheckPreflightData(this.quiz, this.quizAccessInfo, this.preflightData, attempt, this.offline, false, 'addon.mod_quiz.startattempt').then(function (attempt) {
            // Re-fetch attempt access information with the right attempt (might have changed because a new attempt was created).
            return _this.quizProvider.getAttemptAccessInformation(_this.quiz.id, attempt.id, _this.offline, true).then(function (info) {
                _this.attemptAccessInfo = info;
                _this.attempt = attempt;
                return _this.loadNavigation();
            }).then(function () {
                if (_this.attempt.state != __WEBPACK_IMPORTED_MODULE_10__providers_quiz__["a" /* AddonModQuizProvider */].ATTEMPT_OVERDUE && !_this.attempt.finishedOffline) {
                    // Attempt not overdue and not finished in offline, load page.
                    return _this.loadPage(_this.attempt.currentpage).then(function () {
                        _this.initTimer();
                    });
                }
                else {
                    // Attempt is overdue or finished in offline, we can only load the summary.
                    return _this.loadSummary();
                }
            });
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'addon.mod_quiz.errorgetquestions', true);
        });
    };
    /**
     * Quiz time has finished.
     */
    AddonModQuizPlayerPage.prototype.timeUp = function () {
        if (this.timeUpCalled) {
            return;
        }
        this.timeUpCalled = true;
        this.finishAttempt(false, true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], AddonModQuizPlayerPage.prototype, "content", void 0);
    AddonModQuizPlayerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-mod-quiz-player',template:/*ion-inline-start:"C:\wamp\www\BCC_mobapp\bcc_custom_mma\src\addon\mod\quiz\pages\player\player.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title><core-format-text *ngIf="quiz" [text]="quiz.name"></core-format-text></ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button id="addon-mod_quiz-connection-error-button" ion-button icon-only [hidden]="!autoSaveError" (click)="showConnectionError($event)" [attr.aria-label]="\'core.error\' | translate">\n\n                <ion-icon name="alert"></ion-icon>\n\n            </button>\n\n            <button *ngIf="navigation && navigation.length" ion-button icon-only [attr.aria-label]="\'addon.mod_quiz.opentoc\' | translate" (click)="openNavigation()">\n\n                <ion-icon name="bookmark"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <!-- Navigation arrows and time left. -->\n\n    <ion-toolbar *ngIf="loaded && endTime && questions && questions.length && !quizAborted && !showSummary" color="light" ion-fixed>\n\n        <ion-title>\n\n            <core-timer [endTime]="endTime" (finished)="timeUp()" [timerText]="\'addon.mod_quiz.timeleft\' | translate" align="center"></core-timer>\n\n        </ion-title>\n\n        <ion-buttons end>\n\n            <a ion-button icon-only *ngIf="previousPage >= 0" (click)="changePage(previousPage)" [title]="\'core.previous\' | translate">\n\n                <ion-icon name="arrow-back" md="ios-arrow-back"></ion-icon>\n\n            </a>\n\n            <a ion-button icon-only *ngIf="nextPage >= -1" (click)="changePage(nextPage)" [title]="\'core.next\' | translate">\n\n                <ion-icon name="arrow-forward" md="ios-arrow-forward"></ion-icon>\n\n            </a>\n\n        </ion-buttons>\n\n    </ion-toolbar>\n\n    <core-loading [hideUntil]="loaded" [class.core-has-fixed-timer]="endTime">\n\n        <!-- Navigation arrows and time left. -->\n\n        <ion-toolbar *ngIf="!endTime && questions && questions.length && !quizAborted && !showSummary" color="light">\n\n            <ion-buttons end>\n\n                <a ion-button icon-only *ngIf="previousPage >= 0" (click)="changePage(previousPage)" [title]="\'core.previous\' | translate">\n\n                    <ion-icon name="arrow-back" md="ios-arrow-back"></ion-icon>\n\n                </a>\n\n                <a ion-button icon-only *ngIf="nextPage >= -1" (click)="changePage(nextPage)" [title]="\'core.next\' | translate">\n\n                    <ion-icon name="arrow-forward" md="ios-arrow-forward"></ion-icon>\n\n                </a>\n\n            </ion-buttons>\n\n        </ion-toolbar>\n\n        <!-- Button to start attempting. -->\n\n        <div padding *ngIf="!attempt">\n\n            <button ion-button block (click)="start()">{{ \'addon.mod_quiz.startattempt\' | translate }}</button>\n\n        </div>\n\n\n\n        <!-- Questions -->\n\n        <form name="addon-mod_quiz-player-form" *ngIf="questions && questions.length && !quizAborted && !showSummary">\n\n            <div *ngFor="let question of questions">\n\n                <ion-card id="addon-mod_quiz-question-{{question.slot}}">\n\n                    <!-- "Header" of the question. -->\n\n                    <ion-item-divider color="light">\n\n                        <h2 *ngIf="question.number" class="inline">{{ \'core.question.questionno\' | translate:{$a: question.number} }}</h2>\n\n                        <h2 *ngIf="!question.number" class="inline">{{ \'core.question.information\' | translate }}</h2>\n\n                        <ion-note text-wrap item-end *ngIf="question.status || question.readableMark">\n\n                            <p *ngIf="question.status" class="block">{{question.status}}</p>\n\n                            <p *ngIf="question.readableMark"><core-format-text [text]="question.readableMark"></core-format-text></p>\n\n                        </ion-note>\n\n                    </ion-item-divider>\n\n                    <!-- Body of the question. -->\n\n                    <core-question text-wrap [question]="question" [component]="component" [componentId]="quiz.coursemodule" [attemptId]="attempt.id" [offlineEnabled]="offline" (onAbort)="abortQuiz()" (buttonClicked)="behaviourButtonClicked($event)"></core-question>\n\n                </ion-card>\n\n            </div>\n\n        </form>\n\n\n\n        <!-- Go to next or previous page. -->\n\n        <ion-grid text-wrap *ngIf="questions && questions.length && !quizAborted && !showSummary">\n\n            <ion-row>\n\n                <ion-col *ngIf="previousPage >= 0" >\n\n                    <button ion-button block icon-start color="light" (click)="changePage(previousPage)">\n\n                        <ion-icon name="arrow-back" md="ios-arrow-back"></ion-icon>\n\n                        {{ \'core.previous\' | translate }}\n\n                    </button>\n\n                </ion-col>\n\n                <ion-col *ngIf="nextPage >= -1">\n\n                    <button ion-button block icon-end (click)="changePage(nextPage)">\n\n                        {{ \'core.next\' | translate }}\n\n                        <ion-icon name="arrow-forward" md="ios-arrow-forward"></ion-icon>\n\n                    </button>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n\n\n        <!-- Summary -->\n\n        <ion-card *ngIf="!quizAborted && showSummary && summaryQuestions && summaryQuestions.length" class="addon-mod_quiz-table">\n\n            <ion-card-header text-wrap>\n\n                <h2>{{ \'addon.mod_quiz.summaryofattempt\' | translate }}</h2>\n\n            </ion-card-header>\n\n            <!-- "Header" of the summary table. -->\n\n            <ion-item text-wrap>\n\n                <ion-row align-items-center>\n\n                    <ion-col col-3 text-center><b>{{ \'addon.mod_quiz.question\' | translate }}</b></ion-col>\n\n                    <ion-col col-9 text-center><b>{{ \'addon.mod_quiz.status\' | translate }}</b></ion-col>\n\n                </ion-row>\n\n            </ion-item>\n\n            <!-- Lift of questions of the summary table. -->\n\n            <ng-container *ngFor="let question of summaryQuestions">\n\n                <a ion-item (click)="changePage(question.page, false, question.slot)" *ngIf="question.number" [attr.aria-label]="\'core.question.questionno\' | translate:{$a: question.number}" [attr.detail-push]="!quiz.isSequential && canReturn ? true : null">\n\n                    <ion-row align-items-center>\n\n                        <ion-col col-3 text-center>{{ question.number }}</ion-col>\n\n                        <ion-col col-9 text-center>{{ question.status }}</ion-col>\n\n                    </ion-row>\n\n                </a>\n\n            </ng-container>\n\n            <!-- Button to return to last page seen. -->\n\n            <ion-item *ngIf="canReturn">\n\n                <a ion-button block (click)="changePage(attempt.currentpage)">{{ \'addon.mod_quiz.returnattempt\' | translate }}</a>\n\n            </ion-item>\n\n            <!-- Due date warning. -->\n\n            <ion-item text-wrap *ngIf="attempt.dueDateWarning">\n\n                {{ attempt.dueDateWarning }}\n\n            </ion-item>\n\n            <!-- Time left (if quiz is timed). -->\n\n            <core-timer *ngIf="endTime" [endTime]="endTime" (finished)="timeUp()" [timerText]="\'addon.mod_quiz.timeleft\' | translate"></core-timer>\n\n            <!-- List of messages explaining why the quiz cannot be submitted. -->\n\n            <ion-item text-wrap *ngIf="preventSubmitMessages.length">\n\n                <p class="item-heading">{{ \'addon.mod_quiz.cannotsubmitquizdueto\' | translate }}</p>\n\n                <p *ngFor="let message of preventSubmitMessages">{{message}}</p>\n\n                <a ion-button block icon-end [href]="moduleUrl" core-link>\n\n                    <ion-icon name="open"></ion-icon>\n\n                    {{ \'core.openinbrowser\' | translate }}\n\n                </a>\n\n            </ion-item>\n\n            <!-- Button to submit the quiz. -->\n\n            <ion-item *ngIf="!attempt.finishedOffline && !preventSubmitMessages.length">\n\n                <a ion-button block (click)="finishAttempt(true)">{{ \'addon.mod_quiz.submitallandfinish\' | translate }}</a>\n\n            </ion-item>\n\n        </ion-card>\n\n\n\n        <!-- Quiz aborted -->\n\n        <ion-card *ngIf="attempt && (((!questions || !questions.length) && !showSummary) || quizAborted)">\n\n            <ion-item text-wrap>\n\n                <p>{{ \'addon.mod_quiz.errorparsequestions\' | translate }}</p>\n\n            </ion-item>\n\n            <ion-item>\n\n                <a ion-button block icon-end [href]="moduleUrl" core-link>\n\n                    <ion-icon name="open"></ion-icon>\n\n                    {{ \'core.openinbrowser\' | translate }}\n\n                </a>\n\n            </ion-item>\n\n        </ion-card>\n\n    </core-loading>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp\www\BCC_mobapp\bcc_custom_mma\src\addon\mod\quiz\pages\player\player.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_logger__["a" /* CoreLoggerProvider */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_events__["a" /* CoreEventsProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_sites__["a" /* CoreSitesProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_sync__["a" /* CoreSyncProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_utils_dom__["a" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_utils_time__["a" /* CoreTimeUtilsProvider */], __WEBPACK_IMPORTED_MODULE_10__providers_quiz__["a" /* AddonModQuizProvider */],
            __WEBPACK_IMPORTED_MODULE_12__providers_helper__["a" /* AddonModQuizHelperProvider */], __WEBPACK_IMPORTED_MODULE_11__providers_quiz_sync__["a" /* AddonModQuizSyncProvider */],
            __WEBPACK_IMPORTED_MODULE_9__core_question_providers_helper__["a" /* CoreQuestionHelperProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */]])
    ], AddonModQuizPlayerPage);
    return AddonModQuizPlayerPage;
=======
    AddonModScormPlayerPage.prototype.ngOnInit = function () {
        var _this = this;
        this.showToc = this.scormProvider.displayTocInPlayer(this.scorm);
        if (this.scorm.popup) {
            // If we receive a value <= 100 we need to assume it's a percentage.
            if (this.scorm.width <= 100) {
                this.scorm.width = this.scorm.width + '%';
            }
            if (this.scorm.height <= 100) {
                this.scorm.height = this.scorm.height + '%';
            }
        }
        // Fetch the SCORM data.
        this.fetchData().then(function () {
            if (_this.currentSco) {
                // Set start time if it's a new attempt.
                var promise = _this.newAttempt ? _this.setStartTime(_this.currentSco.id) : Promise.resolve();
                return promise.catch(function (error) {
                    _this.domUtils.showErrorModalDefault(error, 'addon.mod_scorm.errorgetscorm', true);
                }).finally(function () {
                    // Load SCO.
                    _this.loadSco(_this.currentSco);
                });
            }
        }).finally(function () {
            _this.loaded = true;
        });
        // Listen for events to update the TOC, navigate through SCOs and go offline.
        this.tocObserver = this.eventsProvider.on(__WEBPACK_IMPORTED_MODULE_7__providers_scorm__["a" /* AddonModScormProvider */].UPDATE_TOC_EVENT, function (data) {
            if (data.scormId === _this.scorm.id) {
                if (_this.offline) {
                    // Wait a bit to make sure data is stored.
                    setTimeout(_this.refreshToc.bind(_this), 100);
                }
                else {
                    _this.refreshToc();
                }
            }
        }, this.siteId);
        this.launchNextObserver = this.eventsProvider.on(__WEBPACK_IMPORTED_MODULE_7__providers_scorm__["a" /* AddonModScormProvider */].LAUNCH_NEXT_SCO_EVENT, function (data) {
            if (data.scormId === _this.scorm.id && _this.nextSco) {
                _this.loadSco(_this.nextSco);
            }
        }, this.siteId);
        this.launchPrevObserver = this.eventsProvider.on(__WEBPACK_IMPORTED_MODULE_7__providers_scorm__["a" /* AddonModScormProvider */].LAUNCH_PREV_SCO_EVENT, function (data) {
            if (data.scormId === _this.scorm.id && _this.previousSco) {
                _this.loadSco(_this.previousSco);
            }
        }, this.siteId);
        this.goOfflineObserver = this.eventsProvider.on(__WEBPACK_IMPORTED_MODULE_7__providers_scorm__["a" /* AddonModScormProvider */].GO_OFFLINE_EVENT, function (data) {
            if (data.scormId === _this.scorm.id && !_this.offline) {
                _this.offline = true;
                // Wait a bit to prevent collisions between this store and SCORM API's store.
                setTimeout(function () {
                    _this.scormHelper.convertAttemptToOffline(_this.scorm, _this.attempt).catch(function (error) {
                        _this.domUtils.showErrorModalDefault(error, 'core.error', true);
                    }).then(function () {
                        _this.refreshToc();
                    });
                }, 200);
            }
        }, this.siteId);
    };
    /**
     * Calculate the next and previous SCO.
     *
     * @param {number} scoId Current SCO ID.
     */
    AddonModScormPlayerPage.prototype.calculateNextAndPreviousSco = function (scoId) {
        this.previousSco = this.scormHelper.getPreviousScoFromToc(this.toc, scoId);
        this.nextSco = this.scormHelper.getNextScoFromToc(this.toc, scoId);
    };
    /**
     * Determine the attempt to use, the mode (normal/preview) and if it's offline or online.
     *
     * @param {AddonModScormAttemptCountResult} attemptsData Attempts count.
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonModScormPlayerPage.prototype.determineAttemptAndMode = function (attemptsData) {
        var _this = this;
        var result;
        return this.scormHelper.determineAttemptToContinue(this.scorm, attemptsData).then(function (data) {
            _this.attempt = data.number;
            _this.offline = data.offline;
            if (_this.attempt != attemptsData.lastAttempt.number) {
                _this.attemptToContinue = _this.attempt;
            }
            // Check if current attempt is incomplete.
            if (_this.attempt > 0) {
                return _this.scormProvider.isAttemptIncomplete(_this.scorm.id, _this.attempt, _this.offline);
            }
            else {
                // User doesn't have attempts. Last attempt is not incomplete (since he doesn't have any).
                return false;
            }
        }).then(function (incomplete) {
            // Determine mode and attempt to use.
            result = _this.scormProvider.determineAttemptAndMode(_this.scorm, _this.mode, _this.attempt, _this.newAttempt, incomplete);
            if (result.attempt > _this.attempt) {
                // We're creating a new attempt.
                if (_this.offline) {
                    // Last attempt was offline, so we'll create a new offline attempt.
                    return _this.scormHelper.createOfflineAttempt(_this.scorm, result.attempt, attemptsData.online.length);
                }
                else {
                    // Last attempt was online, verify that we can create a new online attempt. We ignore cache.
                    return _this.scormProvider.getScormUserData(_this.scorm.id, result.attempt, undefined, false, true).catch(function () {
                        // Cannot communicate with the server, create an offline attempt.
                        _this.offline = true;
                        return _this.scormHelper.createOfflineAttempt(_this.scorm, result.attempt, attemptsData.online.length);
                    });
                }
            }
        }).then(function () {
            _this.mode = result.mode;
            _this.newAttempt = result.newAttempt;
            _this.attempt = result.attempt;
        });
    };
    /**
     * Fetch data needed to play the SCORM.
     *
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonModScormPlayerPage.prototype.fetchData = function () {
        var _this = this;
        // Wait for any ongoing sync to finish. We won't sync a SCORM while it's being played.
        return this.scormSyncProvider.waitForSync(this.scorm.id).then(function () {
            // Get attempts data.
            return _this.scormProvider.getAttemptCount(_this.scorm.id).then(function (attemptsData) {
                return _this.determineAttemptAndMode(attemptsData).then(function () {
                    // Fetch TOC and get user data.
                    var promises = [];
                    promises.push(_this.fetchToc());
                    promises.push(_this.scormProvider.getScormUserData(_this.scorm.id, _this.attempt, undefined, _this.offline)
                        .then(function (data) {
                        _this.userData = data;
                    }));
                    return Promise.all(promises);
                });
            }).catch(function (error) {
                _this.domUtils.showErrorModalDefault(error, 'addon.mod_scorm.errorgetscorm', true);
            });
        });
    };
    /**
     * Fetch the TOC.
     *
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonModScormPlayerPage.prototype.fetchToc = function () {
        var _this = this;
        this.loadingToc = true;
        // We need to check incomplete again: attempt number or status might have changed.
        return this.scormProvider.isAttemptIncomplete(this.scorm.id, this.attempt, this.offline).then(function (incomplete) {
            _this.scorm.incomplete = incomplete;
            // Get TOC.
            return _this.scormProvider.getOrganizationToc(_this.scorm.id, _this.attempt, _this.organizationId, _this.offline);
        }).then(function (toc) {
            _this.toc = _this.scormProvider.formatTocToArray(toc);
            // Get images for each SCO.
            _this.toc.forEach(function (sco) {
                sco.image = _this.scormProvider.getScoStatusIcon(sco, _this.scorm.incomplete);
            });
            // Determine current SCO if we received an ID..
            if (_this.initialScoId > 0) {
                // SCO set by parameter, get it from TOC.
                _this.currentSco = _this.scormHelper.getScoFromToc(_this.toc, _this.initialScoId);
            }
            if (!_this.currentSco) {
                // No SCO defined. Get the first valid one.
                return _this.scormHelper.getFirstSco(_this.scorm.id, _this.attempt, _this.toc, _this.organizationId, _this.offline)
                    .then(function (sco) {
                    if (sco) {
                        _this.currentSco = sco;
                    }
                    else {
                        // We couldn't find a SCO to load: they're all inactive or without launch URL.
                        _this.errorMessage = 'addon.mod_scorm.errornovalidsco';
                    }
                });
            }
        }).finally(function () {
            _this.loadingToc = false;
        });
    };
    /**
     * Page will leave.
     */
    AddonModScormPlayerPage.prototype.ionViewWillUnload = function () {
        // Empty src when leaving the state so unload event is triggered in the iframe.
        this.src = '';
    };
    /**
     * Load a SCO.
     *
     * @param {any} sco The SCO to load.
     */
    AddonModScormPlayerPage.prototype.loadSco = function (sco) {
        var _this = this;
        if (!this.dataModel) {
            // Create the model.
            this.dataModel = new __WEBPACK_IMPORTED_MODULE_10__classes_data_model_12__["a" /* AddonModScormDataModel12 */](this.eventsProvider, this.scormProvider, this.siteId, this.scorm, sco.id, this.attempt, this.userData, this.mode, this.offline);
            // Add the model to the window so the SCORM can access it.
            window.API = this.dataModel;
        }
        else {
            // Load the SCO in the existing model.
            this.dataModel.loadSco(sco.id);
        }
        this.currentSco = sco;
        this.title = sco.title || this.scorm.name; // Try to use SCO title.
        this.calculateNextAndPreviousSco(sco.id);
        // Load the SCO source.
        this.scormProvider.getScoSrc(this.scorm, sco).then(function (src) {
            if (src == _this.src) {
                // Re-loading same page. Set it to empty and then re-set the src in the next digest so it detects it has changed.
                _this.src = '';
                setTimeout(function () {
                    _this.src = src;
                });
            }
            else {
                _this.src = src;
            }
        });
        if (sco.scormtype == 'asset') {
            // Mark the asset as completed.
            var tracks_1 = [{
                    element: 'cmi.core.lesson_status',
                    value: 'completed'
                }];
            this.scormProvider.saveTracks(sco.id, this.attempt, tracks_1, this.scorm, this.offline).catch(function () {
                // Error saving data. We'll go offline if we're online and the asset is not marked as completed already.
                if (!_this.offline) {
                    return _this.scormProvider.getScormUserData(_this.scorm.id, _this.attempt, undefined, false).then(function (data) {
                        if (!data[sco.id] || data[sco.id].userdata['cmi.core.lesson_status'] != 'completed') {
                            // Go offline.
                            return _this.scormHelper.convertAttemptToOffline(_this.scorm, _this.attempt).then(function () {
                                _this.offline = true;
                                _this.dataModel.setOffline(true);
                                return _this.scormProvider.saveTracks(sco.id, _this.attempt, tracks_1, _this.scorm, true);
                            }).catch(function (error) {
                                _this.domUtils.showErrorModalDefault(error, 'core.error', true);
                            });
                        }
                    });
                }
            }).then(function () {
                // Refresh TOC, some prerequisites might have changed.
                _this.refreshToc();
            });
        }
        // Trigger SCO launch event.
        this.scormProvider.logLaunchSco(this.scorm.id, sco.id).catch(function () {
            // Ignore errors.
        });
    };
    /**
     * Show the TOC.
     *
     * @param {MouseEvent} event Event.
     */
    AddonModScormPlayerPage.prototype.openToc = function (event) {
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_11__components_toc_popover_toc_popover__["a" /* AddonModScormTocPopoverComponent */], {
            toc: this.toc,
            attemptToContinue: this.attemptToContinue,
            mode: this.mode
        });
        // If the popover sends back a SCO, load it.
        popover.onDidDismiss(function (sco) {
            if (sco) {
                _this.loadSco(sco);
            }
        });
        popover.present({
            ev: event
        });
    };
    /**
     * Refresh the TOC.
     *
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonModScormPlayerPage.prototype.refreshToc = function () {
        var _this = this;
        return this.scormProvider.invalidateAllScormData(this.scorm.id).catch(function () {
            // Ignore errors.
        }).then(function () {
            return _this.fetchToc();
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'addon.mod_scorm.errorgetscorm', true);
        });
    };
    /**
     * Set SCORM start time.
     *
     * @param {number} scoId SCO ID.
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonModScormPlayerPage.prototype.setStartTime = function (scoId) {
        var _this = this;
        var tracks = [{
                element: 'x.start.time',
                value: this.timeUtils.timestamp()
            }];
        return this.scormProvider.saveTracks(scoId, this.attempt, tracks, this.scorm, this.offline).then(function () {
            if (!_this.offline) {
                // New online attempt created, update cached data about online attempts.
                _this.scormProvider.getAttemptCount(_this.scorm.id, false, true).catch(function () {
                    // Ignore errors.
                });
            }
        });
    };
    /**
     * Component being destroyed.
     */
    AddonModScormPlayerPage.prototype.ngOnDestroy = function () {
        // Stop listening for events.
        this.tocObserver && this.tocObserver.off();
        this.launchNextObserver && this.launchNextObserver.off();
        this.launchPrevObserver && this.launchPrevObserver.off();
        this.goOfflineObserver && this.goOfflineObserver.off();
        // Unblock the SCORM so it can be synced.
        this.syncProvider.unblockOperation(__WEBPACK_IMPORTED_MODULE_7__providers_scorm__["a" /* AddonModScormProvider */].COMPONENT, this.scorm.id, 'player');
    };
    AddonModScormPlayerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-mod-scorm-player',template:/*ion-inline-start:"C:\wamp\www\AX-LT_2019\mma_lt\src\addon\mod\scorm\pages\player\player.html"*/'<ion-header>\n    <ion-navbar core-back-button>\n        <ion-title><core-format-text [text]="title"></core-format-text></ion-title>\n\n        <ion-buttons end>\n            <button *ngIf="showToc && !loadingToc && toc && toc.length" ion-button icon-only (click)="openToc($event)">\n                <ion-icon name="bookmark"></ion-icon>\n            </button>\n            <ion-spinner *ngIf="showToc && loadingToc"></ion-spinner>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <core-loading [hideUntil]="loaded">\n        <core-navigation-bar [previous]="previousSco" [next]="nextSco" (action)="loadSco($event)"></core-navigation-bar>\n        <core-iframe *ngIf="loaded && src" [src]="src" [iframeWidth]="scorm.popup ? scorm.width : undefined" [iframeHeight]="scorm.popup ? scorm.height : undefined"></core-iframe>\n        <p *ngIf="!src && errorMessage">{{ errorMessage | translate }}</p>\n    </core-loading>\n</ion-content>\n'/*ion-inline-end:"C:\wamp\www\AX-LT_2019\mma_lt\src\addon\mod\scorm\pages\player\player.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2__providers_events__["a" /* CoreEventsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_sites__["a" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_sync__["a" /* CoreSyncProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_utils_dom__["a" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_utils_time__["a" /* CoreTimeUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_scorm__["a" /* AddonModScormProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_helper__["a" /* AddonModScormHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_scorm_sync__["a" /* AddonModScormSyncProvider */]])
    ], AddonModScormPlayerPage);
    return AddonModScormPlayerPage;
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
}());

//# sourceMappingURL=player.js.map

/***/ }),

<<<<<<< HEAD
/***/ 1964:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonModQuizAutoSave; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_connection_error_connection_error__ = __webpack_require__(958);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
=======
/***/ 2042:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonModScormDataModel12; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_scorm__ = __webpack_require__(141);
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

<<<<<<< HEAD

/**
 * Class to support auto-save in quiz. Every certain seconds, it will check if there are changes in the current page answers
 * and, if so, it will save them automatically.
 */
var AddonModQuizAutoSave = /** @class */ (function () {
    /**
     * Constructor.
     *
     * @param {string} formName Name of the form where the answers are stored.
     * @param {string} buttonSelector Selector to find the button to show the connection error.
     * @param {CoreLoggerProvider} loggerProvider CoreLoggerProvider instance.
     * @param {PopoverController} popoverCtrl PopoverController instance.
     * @param {CoreQuestionHelperProvider} questionHelper CoreQuestionHelperProvider instance.
     * @param {AddonModQuizProvider} quizProvider AddonModQuizProvider instance.
     */
    function AddonModQuizAutoSave(formName, buttonSelector, loggerProvider, popoverCtrl, questionHelper, quizProvider) {
        var _this = this;
        this.formName = formName;
        this.buttonSelector = buttonSelector;
        this.popoverCtrl = popoverCtrl;
        this.questionHelper = questionHelper;
        this.quizProvider = quizProvider;
        this.CHECK_CHANGES_INTERVAL = 5000;
        this.popoverShown = false; // Whether the popover is shown.
        this.logger = loggerProvider.getInstance('AddonModQuizAutoSave');
        // Create the popover.
        this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_0__components_connection_error_connection_error__["a" /* AddonModQuizConnectionErrorComponent */]);
        this.popover.onDidDismiss(function () {
            _this.popoverShown = false;
        });
        // Create the observable to notify if an error happened.
        this.errorObservable = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](false);
    }
    /**
     * Cancel a pending auto save.
     */
    AddonModQuizAutoSave.prototype.cancelAutoSave = function () {
        clearTimeout(this.autoSaveTimeout);
        this.autoSaveTimeout = undefined;
    };
    /**
     * Check if the answers have changed in a page.
     *
     * @param {any} quiz Quiz.
     * @param {any} attempt Attempt.
     * @param {any} preflightData Preflight data.
     * @param {boolean} [offline] Whether the quiz is being attempted in offline mode.
     */
    AddonModQuizAutoSave.prototype.checkChanges = function (quiz, attempt, preflightData, offline) {
        if (this.autoSaveTimeout) {
            // We already have an auto save pending, no need to check changes.
            return;
        }
        var answers = this.getAnswers();
        if (!this.previousAnswers) {
            // Previous answers isn't set, set it now.
            this.previousAnswers = answers;
        }
        else {
            // Check if answers have changed.
            var equal = true;
            for (var name_1 in answers) {
                if (this.previousAnswers[name_1] != answers[name_1]) {
                    equal = false;
                    break;
                }
            }
            if (!equal) {
                this.setAutoSaveTimer(quiz, attempt, preflightData, offline);
            }
            this.previousAnswers = answers;
        }
    };
    /**
     * Get answers from a form.
     *
     * @return {any} Answers.
     */
    AddonModQuizAutoSave.prototype.getAnswers = function () {
        return this.questionHelper.getAnswersFromForm(document.forms[this.formName]);
    };
    /**
     * Hide the auto save error.
     */
    AddonModQuizAutoSave.prototype.hideAutoSaveError = function () {
        this.errorObservable.next(false);
        this.popover.dismiss();
    };
    /**
     * Returns an observable that will notify when an error happens or stops.
     * It will send true when there's an error, and false when the error has been ammended.
     *
     * @return {BehaviorSubject<boolean>} Observable.
     */
    AddonModQuizAutoSave.prototype.onError = function () {
        return this.errorObservable;
    };
    /**
     * Schedule an auto save process if it's not scheduled already.
     *
     * @param {any} quiz Quiz.
     * @param {any} attempt Attempt.
     * @param {any} preflightData Preflight data.
     * @param {boolean} [offline] Whether the quiz is being attempted in offline mode.
     */
    AddonModQuizAutoSave.prototype.setAutoSaveTimer = function (quiz, attempt, preflightData, offline) {
        var _this = this;
        // Don't schedule if already shceduled or quiz is almost closed.
        if (quiz.autosaveperiod && !this.autoSaveTimeout && !this.quizProvider.isAttemptTimeNearlyOver(quiz, attempt)) {
            // Schedule save.
            this.autoSaveTimeout = setTimeout(function () {
                var answers = _this.getAnswers();
                _this.cancelAutoSave();
                _this.previousAnswers = answers; // Update previous answers to match what we're sending to the server.
                _this.quizProvider.saveAttempt(quiz, attempt, answers, preflightData, offline).then(function () {
                    // Save successful, we can hide the connection error if it was shown.
                    _this.hideAutoSaveError();
                }).catch(function (error) {
                    // Error auto-saving. Show error and set timer again.
                    _this.logger.warn('Error auto-saving data.', error);
                    // If there was no error already, show the error message.
                    if (!_this.errorObservable.getValue()) {
                        _this.errorObservable.next(true);
                        _this.showAutoSaveError();
                    }
                    // Try again.
                    _this.setAutoSaveTimer(quiz, attempt, preflightData, offline);
                });
            }, quiz.autosaveperiod * 1000);
        }
    };
    /**
     * Show an error popover due to an auto save error.
     */
    AddonModQuizAutoSave.prototype.showAutoSaveError = function (ev) {
        // Don't show popover if it was already shown.
        if (!this.popoverShown) {
            this.popoverShown = true;
            // If no event is provided, simulate it targeting the button.
            this.popover.present({
                ev: ev || { target: document.querySelector(this.buttonSelector) }
            });
        }
    };
    /**
     * Start a process to periodically check changes in answers.
     *
     * @param {any} quiz Quiz.
     * @param {any} attempt Attempt.
     * @param {any} preflightData Preflight data.
     * @param {boolean} [offline] Whether the quiz is being attempted in offline mode.
     */
    AddonModQuizAutoSave.prototype.startCheckChangesProcess = function (quiz, attempt, preflightData, offline) {
        var _this = this;
        if (this.checkChangesInterval || !quiz.autosaveperiod) {
            // We already have the interval in place or the quiz has autosave disabled.
            return;
        }
        this.previousAnswers = undefined;
        // Load initial answers in 2.5 seconds so the first check interval finds them already loaded.
        this.loadPreviousAnswersTimeout = setTimeout(function () {
            _this.checkChanges(quiz, attempt, preflightData, offline);
        }, 2500);
        // Check changes every certain time.
        this.checkChangesInterval = setInterval(function () {
            _this.checkChanges(quiz, attempt, preflightData, offline);
        }, this.CHECK_CHANGES_INTERVAL);
    };
    /**
     * Stops the periodical check for changes.
     */
    AddonModQuizAutoSave.prototype.stopCheckChangesProcess = function () {
        clearTimeout(this.loadPreviousAnswersTimeout);
        clearInterval(this.checkChangesInterval);
        this.loadPreviousAnswersTimeout = undefined;
        this.checkChangesInterval = undefined;
    };
    return AddonModQuizAutoSave;
}());

//# sourceMappingURL=auto-save.js.map
=======
/**
 * SCORM data model implementation for version 1.2.
 */
var AddonModScormDataModel12 = /** @class */ (function () {
    /**
     * Constructor.
     *
     * @param {CoreEventsProvider} eventsProvider Events provider instance.
     * @param {AddonModScormProvider} scormProvider SCORM provider instance.
     * @param {any} scorm SCORM.
     * @param {number} scoId Current SCO ID.
     * @param {number} attempt Attempt number.
     * @param {any} userData The user default data.
     * @param {string} [mode] Mode being played. By default, MODENORMAL.
     * @param {boolean} offline Whether the attempt is offline.
     */
    function AddonModScormDataModel12(eventsProvider, scormProvider, siteId, scorm, scoId, attempt, userData, mode, offline) {
        this.eventsProvider = eventsProvider;
        this.scormProvider = scormProvider;
        this.siteId = siteId;
        this.scorm = scorm;
        this.scoId = scoId;
        this.attempt = attempt;
        this.mode = mode;
        this.offline = offline;
        // Standard Data Type Definition.
        this.CMI_STRING_256 = '^[\\u0000-\\uFFFF]{0,255}$';
        this.CMI_STRING_4096 = '^[\\u0000-\\uFFFF]{0,4096}$';
        this.CMI_TIME = '^([0-2]{1}[0-9]{1}):([0-5]{1}[0-9]{1}):([0-5]{1}[0-9]{1})(\.[0-9]{1,2})?$';
        this.CMI_TIMESPAN = '^([0-9]{2,4}):([0-9]{2}):([0-9]{2})(\.[0-9]{1,2})?$';
        this.CMI_INTEGER = '^\\d+$';
        this.CMI_SINTEGER = '^-?([0-9]+)$';
        this.CMI_DECIMAL = '^-?([0-9]{0,3})(\.[0-9]*)?$';
        this.CMI_IDENTIFIER = '^[\\u0021-\\u007E]{0,255}$';
        this.CMI_FEEDBACK = this.CMI_STRING_256; // This must be redefined.
        this.CMI_INDEX = '[._](\\d+).';
        // Vocabulary Data Type Definition.
        this.CMI_STATUS = '^passed$|^completed$|^failed$|^incomplete$|^browsed$';
        this.CMI_STATUS_2 = '^passed$|^completed$|^failed$|^incomplete$|^browsed$|^not attempted$';
        this.CMI_EXIT = '^time-out$|^suspend$|^logout$|^$';
        this.CMI_TYPE = '^true-false$|^choice$|^fill-in$|^matching$|^performance$|^sequencing$|^likert$|^numeric$';
        this.CMI_RESULT = '^correct$|^wrong$|^unanticipated$|^neutral$|^([0-9]{0,3})?(\.[0-9]*)?$';
        this.NAV_EVENT = '^previous$|^continue$';
        // Children lists.
        this.CMI_CHILDREN = 'core,suspend_data,launch_data,comments,objectives,student_data,student_preference,interactions';
        this.CORE_CHILDREN = 'student_id,student_name,lesson_location,credit,lesson_status,entry,score,total_time,lesson_mode,' +
            'exit,session_time';
        this.SCORE_CHILDREN = 'raw,min,max';
        this.COMMENTS_CHILDREN = 'content,location,time';
        this.OBJECTIVES_CHILDREN = 'id,score,status';
        this.CORRECT_RESPONSES_CHILDREN = 'pattern';
        this.STUDENT_DATA_CHILDREN = 'mastery_score,max_time_allowed,time_limit_action';
        this.STUDENT_PREFERENCE_CHILDREN = 'audio,language,speed,text';
        this.INTERACTIONS_CHILDREN = 'id,objectives,time,type,correct_responses,weighting,student_response,result,latency';
        // Data ranges.
        this.SCORE_RANGE = '0#100';
        this.AUDIO_RANGE = '-1#100';
        this.SPEED_RANGE = '-100#100';
        this.WEIGHTING_RANGE = '-100#100';
        this.TEXT_RANGE = '-1#1';
        // Error messages.
        this.ERROR_STRINGS = {
            0: 'No error',
            101: 'General exception',
            201: 'Invalid argument error',
            202: 'Element cannot have children',
            203: 'Element not an array - cannot have count',
            301: 'Not initialized',
            401: 'Not implemented error',
            402: 'Invalid set value, element is a keyword',
            403: 'Element is read only',
            404: 'Element is write only',
            405: 'Incorrect data type'
        };
        this.currentUserData = {}; // Current user data.
        this.def = {}; // Object containing the default values.
        this.defExtra = {}; // Extra object that will contain the objectives and interactions data (all the .n. elements).
        this.dataModel = {}; // The SCORM 1.2 data model.
        this.initialized = false; // Whether LMSInitialize has been called.
        this.mode = mode || __WEBPACK_IMPORTED_MODULE_0__providers_scorm__["a" /* AddonModScormProvider */].MODENORMAL;
        this.offline = !!offline;
        this.init(userData);
    }
    /**
     * Utility function for adding two times in format hh:mm:ss.
     *
     * @param {string} first  First time.
     * @param {string} second Second time.
     * @return {string} Total time.
     */
    AddonModScormDataModel12.prototype.addTime = function (first, second) {
        var sFirst = first.split(':'), sSecond = second.split(':'), cFirst = sFirst[2].split('.'), cSecond = sSecond[2].split('.');
        var change = 0;
        var firstCents = 0; // Cents.
        if (cFirst.length > 1) {
            firstCents = parseInt(cFirst[1], 10);
        }
        var secondCents = 0;
        if (cSecond.length > 1) {
            secondCents = parseInt(cSecond[1], 10);
        }
        var cents = firstCents + secondCents;
        change = Math.floor(cents / 100);
        cents = cents - (change * 100);
        if (Math.floor(cents) < 10) {
            cents = '0' + cents.toString();
        }
        var secs = parseInt(cFirst[0], 10) + parseInt(cSecond[0], 10) + change; // Seconds.
        change = Math.floor(secs / 60);
        secs = secs - (change * 60);
        if (Math.floor(secs) < 10) {
            secs = '0' + secs.toString();
        }
        var mins = parseInt(sFirst[1], 10) + parseInt(sSecond[1], 10) + change; // Minutes.
        change = Math.floor(mins / 60);
        mins = mins - (change * 60);
        if (mins < 10) {
            mins = '0' + mins.toString();
        }
        var hours = parseInt(sFirst[0], 10) + parseInt(sSecond[0], 10) + change; // Hours.
        if (hours < 10) {
            hours = '0' + hours.toString();
        }
        if (cents != '0') {
            return hours + ':' + mins + ':' + secs + '.' + cents;
        }
        else {
            return hours + ':' + mins + ':' + secs;
        }
    };
    /**
     * Utility function for cloning an object
     *
     * @param {any} obj The object to be cloned
     * @return {any} The object cloned
     */
    AddonModScormDataModel12.prototype.cloneObj = function (obj) {
        if (obj == null || typeof (obj) != 'object') {
            return obj;
        }
        var temp = new obj.constructor(); // Changed (twice).
        for (var key in obj) {
            temp[key] = this.cloneObj(obj[key]);
        }
        return temp;
    };
    /**
     * Collect all the user tracking data that must be persisted in the system, this is usually called by LMSCommit().
     *
     * @return {any[]} Collected data.
     */
    AddonModScormDataModel12.prototype.collectData = function () {
        var data = [];
        for (var element in this.currentUserData[this.scoId]) {
            // Ommit for example the nav. elements.
            if (element.substr(0, 3) == 'cmi') {
                var expression = new RegExp(this.CMI_INDEX, 'g');
                // Get the generic name for this element (e.g. convert 'cmi.interactions.1.id' to 'cmi.interactions.n.id')
                var elementModel = String(element).replace(expression, '.n.');
                // Ignore the session time element.
                if (element != 'cmi.core.session_time') {
                    // Check if this specific element is not defined in the datamodel, but the generic element name is.
                    if (typeof this.dataModel[this.scoId][element] == 'undefined' &&
                        typeof this.dataModel[this.scoId][elementModel] != 'undefined') {
                        // Add this element to the data model (by cloning the generic element) so we can track changes to it.
                        this.dataModel[this.scoId][element] = this.cloneObj(this.dataModel[this.scoId][elementModel]);
                    }
                    // Check if the current element exists in the datamodel.
                    if (typeof this.dataModel[this.scoId][element] != 'undefined') {
                        // Make sure this is not a read only element.
                        if (this.dataModel[this.scoId][element].mod != 'r') {
                            var el = {
                                // Moodle stores the organizations and interactions using _n. instead .n.
                                element: element.replace(expression, '_$1.'),
                                value: this.getEl(element)
                            };
                            // Check if the element has a default value.
                            if (typeof this.dataModel[this.scoId][element].defaultvalue != 'undefined') {
                                // Check if the default value is different from the current value.
                                if (this.dataModel[this.scoId][element].defaultvalue != el.value ||
                                    typeof this.dataModel[this.scoId][element].defaultvalue != typeof (el.value)) {
                                    data.push(el);
                                    // Update the element default to reflect the current committed value.
                                    this.dataModel[this.scoId][element].defaultvalue = el.value;
                                }
                            }
                            else {
                                data.push(el);
                                // No default value for the element, so set it now.
                                this.dataModel[this.scoId][element].defaultvalue = el.value;
                            }
                        }
                    }
                }
            }
        }
        return data;
    };
    /**
     * Get the value of the given element from the non-persistent (current) user data.
     *
     * @param {string} el The element
     * @return {any} The element value
     */
    AddonModScormDataModel12.prototype.getEl = function (el) {
        if (typeof this.currentUserData[this.scoId] != 'undefined' && typeof this.currentUserData[this.scoId][el] != 'undefined') {
            return this.currentUserData[this.scoId][el];
        }
        return '';
    };
    /**
     * Initialize the model.
     *
     * @param {any} userData The user default data.
     */
    AddonModScormDataModel12.prototype.init = function (userData) {
        // Prepare the definition array containing the default values.
        for (var scoId in userData) {
            var sco = userData[scoId];
            this.def[scoId] = sco.defaultdata;
            this.defExtra[scoId] = sco.userdata;
        }
        // Set up data model for each SCO.
        for (var scoId in this.def) {
            this.dataModel[scoId] = {
                'cmi._children': { defaultvalue: this.CMI_CHILDREN, mod: 'r', writeerror: '402' },
                'cmi._version': { defaultvalue: '3.4', mod: 'r', writeerror: '402' },
                'cmi.core._children': { defaultvalue: this.CORE_CHILDREN, mod: 'r', writeerror: '402' },
                'cmi.core.student_id': { defaultvalue: this.def[scoId]['cmi.core.student_id'], mod: 'r', writeerror: '403' },
                'cmi.core.student_name': { defaultvalue: this.def[scoId]['cmi.core.student_name'], mod: 'r', writeerror: '403' },
                'cmi.core.lesson_location': { defaultvalue: this.def[scoId]['cmi.core.lesson_location'],
                    format: this.CMI_STRING_256, mod: 'rw', writeerror: '405' },
                'cmi.core.credit': { defaultvalue: this.def[scoId]['cmi.core.credit'], mod: 'r', writeerror: '403' },
                'cmi.core.lesson_status': { defaultvalue: this.def[scoId]['cmi.core.lesson_status'], format: this.CMI_STATUS,
                    mod: 'rw', writeerror: '405' },
                'cmi.core.entry': { defaultvalue: this.def[scoId]['cmi.core.entry'], mod: 'r', writeerror: '403' },
                'cmi.core.score._children': { defaultvalue: this.SCORE_CHILDREN, mod: 'r', writeerror: '402' },
                'cmi.core.score.raw': { defaultvalue: this.def[scoId]['cmi.core.score.raw'], format: this.CMI_DECIMAL,
                    range: this.SCORE_RANGE, mod: 'rw', writeerror: '405' },
                'cmi.core.score.max': { defaultvalue: this.def[scoId]['cmi.core.score.max'], format: this.CMI_DECIMAL,
                    range: this.SCORE_RANGE, mod: 'rw', writeerror: '405' },
                'cmi.core.score.min': { defaultvalue: this.def[scoId]['cmi.core.score.min'], format: this.CMI_DECIMAL,
                    range: this.SCORE_RANGE, mod: 'rw', writeerror: '405' },
                'cmi.core.total_time': { defaultvalue: this.def[scoId]['cmi.core.total_time'], mod: 'r', writeerror: '403' },
                'cmi.core.lesson_mode': { defaultvalue: this.def[scoId]['cmi.core.lesson_mode'], mod: 'r', writeerror: '403' },
                'cmi.core.exit': { defaultvalue: this.def[scoId]['cmi.core.exit'], format: this.CMI_EXIT, mod: 'w',
                    readerror: '404', writeerror: '405' },
                'cmi.core.session_time': { format: this.CMI_TIMESPAN, mod: 'w', defaultvalue: '00:00:00', readerror: '404',
                    writeerror: '405' },
                'cmi.suspend_data': { defaultvalue: this.def[scoId]['cmi.suspend_data'], format: this.CMI_STRING_4096,
                    mod: 'rw', writeerror: '405' },
                'cmi.launch_data': { defaultvalue: this.def[scoId]['cmi.launch_data'], mod: 'r', writeerror: '403' },
                'cmi.comments': { defaultvalue: this.def[scoId]['cmi.comments'], format: this.CMI_STRING_4096, mod: 'rw',
                    writeerror: '405' },
                // Deprecated evaluation attributes.
                'cmi.evaluation.comments._count': { defaultvalue: '0', mod: 'r', writeerror: '402' },
                'cmi.evaluation.comments._children': { defaultvalue: this.COMMENTS_CHILDREN, mod: 'r', writeerror: '402' },
                'cmi.evaluation.comments.n.content': { defaultvalue: '', pattern: this.CMI_INDEX, format: this.CMI_STRING_256,
                    mod: 'rw', writeerror: '405' },
                'cmi.evaluation.comments.n.location': { defaultvalue: '', pattern: this.CMI_INDEX, format: this.CMI_STRING_256,
                    mod: 'rw', writeerror: '405' },
                'cmi.evaluation.comments.n.time': { defaultvalue: '', pattern: this.CMI_INDEX, format: this.CMI_TIME,
                    mod: 'rw', writeerror: '405' },
                'cmi.comments_from_lms': { mod: 'r', writeerror: '403' },
                'cmi.objectives._children': { defaultvalue: this.OBJECTIVES_CHILDREN, mod: 'r', writeerror: '402' },
                'cmi.objectives._count': { mod: 'r', defaultvalue: '0', writeerror: '402' },
                'cmi.objectives.n.id': { pattern: this.CMI_INDEX, format: this.CMI_IDENTIFIER, mod: 'rw', writeerror: '405' },
                'cmi.objectives.n.score._children': { pattern: this.CMI_INDEX, mod: 'r', writeerror: '402' },
                'cmi.objectives.n.score.raw': { defaultvalue: '', pattern: this.CMI_INDEX, format: this.CMI_DECIMAL,
                    range: this.SCORE_RANGE, mod: 'rw', writeerror: '405' },
                'cmi.objectives.n.score.min': { defaultvalue: '', pattern: this.CMI_INDEX, format: this.CMI_DECIMAL,
                    range: this.SCORE_RANGE, mod: 'rw', writeerror: '405' },
                'cmi.objectives.n.score.max': { defaultvalue: '', pattern: this.CMI_INDEX, format: this.CMI_DECIMAL,
                    range: this.SCORE_RANGE, mod: 'rw', writeerror: '405' },
                'cmi.objectives.n.status': { pattern: this.CMI_INDEX, format: this.CMI_STATUS_2, mod: 'rw', writeerror: '405' },
                'cmi.student_data._children': { defaultvalue: this.STUDENT_DATA_CHILDREN, mod: 'r', writeerror: '402' },
                'cmi.student_data.mastery_score': { defaultvalue: this.def[scoId]['cmi.student_data.mastery_score'], mod: 'r',
                    writeerror: '403' },
                'cmi.student_data.max_time_allowed': { defaultvalue: this.def[scoId]['cmi.student_data.max_time_allowed'],
                    mod: 'r', writeerror: '403' },
                'cmi.student_data.time_limit_action': { defaultvalue: this.def[scoId]['cmi.student_data.time_limit_action'],
                    mod: 'r', writeerror: '403' },
                'cmi.student_preference._children': { defaultvalue: this.STUDENT_PREFERENCE_CHILDREN, mod: 'r',
                    writeerror: '402' },
                'cmi.student_preference.audio': { defaultvalue: this.def[scoId]['cmi.student_preference.audio'],
                    format: this.CMI_SINTEGER, range: this.AUDIO_RANGE, mod: 'rw', writeerror: '405' },
                'cmi.student_preference.language': { defaultvalue: this.def[scoId]['cmi.student_preference.language'],
                    format: this.CMI_STRING_256, mod: 'rw', writeerror: '405' },
                'cmi.student_preference.speed': { defaultvalue: this.def[scoId]['cmi.student_preference.speed'],
                    format: this.CMI_SINTEGER, range: this.SPEED_RANGE, mod: 'rw', writeerror: '405' },
                'cmi.student_preference.text': { defaultvalue: this.def[scoId]['cmi.student_preference.text'],
                    format: this.CMI_SINTEGER, range: this.TEXT_RANGE, mod: 'rw', writeerror: '405' },
                'cmi.interactions._children': { defaultvalue: this.INTERACTIONS_CHILDREN, mod: 'r', writeerror: '402' },
                'cmi.interactions._count': { mod: 'r', defaultvalue: '0', writeerror: '402' },
                'cmi.interactions.n.id': { pattern: this.CMI_INDEX, format: this.CMI_IDENTIFIER, mod: 'w', readerror: '404',
                    writeerror: '405' },
                'cmi.interactions.n.objectives._count': { pattern: this.CMI_INDEX, mod: 'r', defaultvalue: '0', writeerror: '402' },
                'cmi.interactions.n.objectives.n.id': { pattern: this.CMI_INDEX, format: this.CMI_IDENTIFIER, mod: 'w',
                    readerror: '404', writeerror: '405' },
                'cmi.interactions.n.time': { pattern: this.CMI_INDEX, format: this.CMI_TIME, mod: 'w', readerror: '404',
                    writeerror: '405' },
                'cmi.interactions.n.type': { pattern: this.CMI_INDEX, format: this.CMI_TYPE, mod: 'w', readerror: '404',
                    writeerror: '405' },
                'cmi.interactions.n.correct_responses._count': { pattern: this.CMI_INDEX, mod: 'r', defaultvalue: '0',
                    writeerror: '402' },
                'cmi.interactions.n.correct_responses.n.pattern': { pattern: this.CMI_INDEX, format: this.CMI_FEEDBACK,
                    mod: 'w', readerror: '404', writeerror: '405' },
                'cmi.interactions.n.weighting': { pattern: this.CMI_INDEX, format: this.CMI_DECIMAL,
                    range: this.WEIGHTING_RANGE, mod: 'w', readerror: '404', writeerror: '405' },
                'cmi.interactions.n.student_response': { pattern: this.CMI_INDEX, format: this.CMI_FEEDBACK, mod: 'w',
                    readerror: '404', writeerror: '405' },
                'cmi.interactions.n.result': { pattern: this.CMI_INDEX, format: this.CMI_RESULT, mod: 'w', readerror: '404',
                    writeerror: '405' },
                'cmi.interactions.n.latency': { pattern: this.CMI_INDEX, format: this.CMI_TIMESPAN, mod: 'w',
                    readerror: '404', writeerror: '405' },
                'nav.event': { defaultvalue: '', format: this.NAV_EVENT, mod: 'w', readerror: '404', writeerror: '405' }
            };
            this.currentUserData[scoId] = {};
            // Load default values.
            for (var element in this.dataModel[scoId]) {
                if (element.match(/\.n\./) === null) {
                    if (typeof this.dataModel[scoId][element].defaultvalue != 'undefined') {
                        this.currentUserData[scoId][element] = this.dataModel[scoId][element].defaultvalue;
                    }
                }
            }
            // Load initial user data for current SCO.
            for (var element in this.def[scoId]) {
                if (element.match(/\.n\./) === null) {
                    if (typeof this.dataModel[scoId][element].defaultvalue != 'undefined') {
                        this.currentUserData[scoId][element] = this.dataModel[scoId][element].defaultvalue;
                    }
                    else if (typeof this.defExtra[scoId][element] != 'undefined') {
                        // Check in user data values.
                        this.currentUserData[scoId][element] = this.defExtra[scoId][element];
                    }
                    else {
                        this.currentUserData[scoId][element] = '';
                    }
                }
            }
            // Load interactions and objectives, and init the counters.
            var expression = new RegExp(this.CMI_INDEX, 'g');
            for (var element in this.defExtra[scoId]) {
                var counterElement = '', currentCounterIndex = 0, elementDotFormat = void 0, currentN = void 0;
                // This check for an indexed element. cmi.objectives.1.id or cmi.objectives_1.id.
                if (element.match(expression)) {
                    // Normalize to the expected value according the standard.
                    // Moodle stores this values using _n. instead .n.
                    elementDotFormat = element.replace(expression, '.$1.');
                    this.currentUserData[scoId][elementDotFormat] = this.defExtra[scoId][element];
                    // Get the correct counter and current index.
                    if (elementDotFormat.indexOf('cmi.evaluation.comments') === 0) {
                        counterElement = 'cmi.evaluation.comments._count';
                        currentCounterIndex = elementDotFormat.match(/.(\d+)./)[1];
                    }
                    else if (elementDotFormat.indexOf('cmi.objectives') === 0) {
                        counterElement = 'cmi.objectives._count';
                        currentCounterIndex = elementDotFormat.match(/.(\d+)./)[1];
                    }
                    else if (elementDotFormat.indexOf('cmi.interactions') === 0) {
                        if (elementDotFormat.indexOf('.objectives.') > 0) {
                            currentN = elementDotFormat.match(/cmi.interactions.(\d+)./)[1];
                            currentCounterIndex = elementDotFormat.match(/objectives.(\d+)./)[1];
                            counterElement = 'cmi.interactions.' + currentN + '.objectives._count';
                        }
                        else if (elementDotFormat.indexOf('.correct_responses.') > 0) {
                            currentN = elementDotFormat.match(/cmi.interactions.(\d+)./)[1];
                            currentCounterIndex = elementDotFormat.match(/correct_responses.(\d+)./)[1];
                            counterElement = 'cmi.interactions.' + currentN + '.correct_responses._count';
                        }
                        else {
                            counterElement = 'cmi.interactions._count';
                            currentCounterIndex = elementDotFormat.match(/.(\d+)./)[1];
                        }
                    }
                    if (counterElement) {
                        if (typeof this.currentUserData[scoId][counterElement] == 'undefined') {
                            this.currentUserData[scoId][counterElement] = 0;
                        }
                        // Check if we need to sum.
                        if (parseInt(currentCounterIndex) == parseInt(this.currentUserData[scoId][counterElement])) {
                            this.currentUserData[scoId][counterElement] = parseInt(this.currentUserData[scoId][counterElement]) + 1;
                        }
                        if (parseInt(currentCounterIndex) > parseInt(this.currentUserData[scoId][counterElement])) {
                            this.currentUserData[scoId][counterElement] = parseInt(currentCounterIndex) - 1;
                        }
                    }
                }
            }
            // Set default status.
            if (this.currentUserData[scoId]['cmi.core.lesson_status'] === '') {
                this.currentUserData[scoId]['cmi.core.lesson_status'] = 'not attempted';
            }
            // Define mode and credit.
            this.currentUserData[scoId]['cmi.core.credit'] = this.mode == __WEBPACK_IMPORTED_MODULE_0__providers_scorm__["a" /* AddonModScormProvider */].MODENORMAL ? 'credit' : 'no-credit';
            this.currentUserData[scoId]['cmi.core.lesson_mode'] = this.mode;
        }
    };
    /**
     * Commit the changes.
     *
     * @param {string} param Param.
     * @return {string} "true" if success, "false" otherwise.
     */
    AddonModScormDataModel12.prototype.LMSCommit = function (param) {
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
        this.errorCode = '0';
        if (param == '') {
            if (this.initialized) {
                var result = this.storeData(false);
                // Trigger TOC update.
                this.triggerEvent(__WEBPACK_IMPORTED_MODULE_0__providers_scorm__["a" /* AddonModScormProvider */].UPDATE_TOC_EVENT);
                this.errorCode = result ? '0' : '101';
                // Conver to string representing a boolean.
                return result ? 'true' : 'false';
            }
            else {
                this.errorCode = '301';
            }
        }
        else {
            this.errorCode = '201';
        }
        return 'false';
    };
    /**
     * Finish the data model.
     *
     * @param {string} param Param.
     * @return {string} "true" if success, "false" otherwise.
     */
    AddonModScormDataModel12.prototype.LMSFinish = function (param) {
        this.errorCode = '0';
        if (param == '') {
            if (this.initialized) {
                this.initialized = false;
                var result = this.storeData(true);
                if (this.getEl('nav.event') != '') {
                    if (this.getEl('nav.event') == 'continue') {
                        this.triggerEvent(__WEBPACK_IMPORTED_MODULE_0__providers_scorm__["a" /* AddonModScormProvider */].LAUNCH_NEXT_SCO_EVENT);
                    }
                    else {
                        this.triggerEvent(__WEBPACK_IMPORTED_MODULE_0__providers_scorm__["a" /* AddonModScormProvider */].LAUNCH_PREV_SCO_EVENT);
                    }
                }
                else {
                    if (this.scorm.auto == '1') {
                        this.triggerEvent(__WEBPACK_IMPORTED_MODULE_0__providers_scorm__["a" /* AddonModScormProvider */].LAUNCH_NEXT_SCO_EVENT);
                    }
                }
                this.errorCode = result ? '0' : '101';
                // Trigger TOC update.
                this.triggerEvent(__WEBPACK_IMPORTED_MODULE_0__providers_scorm__["a" /* AddonModScormProvider */].UPDATE_TOC_EVENT);
                // Conver to string representing a boolean.
                return result ? 'true' : 'false';
            }
            else {
                this.errorCode = '301';
            }
        }
        else {
            this.errorCode = '201';
        }
        return 'false';
    };
    /**
     * Get diagnostic.
     *
     * @param  {string} param Param.
     * @return {string} Result.
     */
    AddonModScormDataModel12.prototype.LMSGetDiagnostic = function (param) {
        if (param == '') {
            param = this.errorCode;
        }
        return param;
    };
    /**
     * Get the error message for a certain code.
     *
     * @param {string} param Error code.
     * @return {string} Error message.
     */
    AddonModScormDataModel12.prototype.LMSGetErrorString = function (param) {
        if (param != '') {
            return this.ERROR_STRINGS[param];
        }
        else {
            return '';
        }
    };
    /**
     * Get the last error code.
     *
     * @return {string} Last error code.
     */
    AddonModScormDataModel12.prototype.LMSGetLastError = function () {
        return this.errorCode;
    };
    /**
     * Get the value of a certain element.
     *
     * @param {string} element Name of the element to get.
     * @return {string} Value.
     */
    AddonModScormDataModel12.prototype.LMSGetValue = function (element) {
        this.errorCode = '0';
        if (this.initialized) {
            if (element != '') {
                var expression = new RegExp(this.CMI_INDEX, 'g'), elementModel = String(element).replace(expression, '.n.');
                if (typeof this.dataModel[this.scoId][elementModel] != 'undefined') {
                    if (this.dataModel[this.scoId][elementModel].mod != 'w') {
                        this.errorCode = '0';
                        return this.getEl(element);
                    }
                    else {
                        this.errorCode = this.dataModel[this.scoId][elementModel].readerror;
                    }
                }
                else {
                    var childrenStr = '._children', countStr = '._count';
                    if (elementModel.substr(elementModel.length - childrenStr.length, elementModel.length) == childrenStr) {
                        var parentModel = elementModel.substr(0, elementModel.length - childrenStr.length);
                        if (typeof this.dataModel[this.scoId][parentModel] != 'undefined') {
                            this.errorCode = '202';
                        }
                        else {
                            this.errorCode = '201';
                        }
                    }
                    else if (elementModel.substr(elementModel.length - countStr.length, elementModel.length) == countStr) {
                        var parentModel = elementModel.substr(0, elementModel.length - countStr.length);
                        if (typeof this.dataModel[this.scoId][parentModel] != 'undefined') {
                            this.errorCode = '203';
                        }
                        else {
                            this.errorCode = '201';
                        }
                    }
                    else {
                        this.errorCode = '201';
                    }
                }
            }
            else {
                this.errorCode = '201';
            }
        }
        else {
            this.errorCode = '301';
        }
        return '';
    };
    /**
     * Initialize the data model.
     *
     * @param {string} param Param.
     * @return {string} "true" if initialized, "false" otherwise.
     */
    AddonModScormDataModel12.prototype.LMSInitialize = function (param) {
        this.errorCode = '0';
        if (param == '') {
            if (!this.initialized) {
                this.initialized = true;
                this.errorCode = '0';
                return 'true';
            }
            else {
                this.errorCode = '101';
            }
        }
        else {
            this.errorCode = '201';
        }
        return 'false';
    };
    /**
     * Set the value of a certain element.
     *
     * @param {string} element Name of the element to set.
     * @param {any} value Value to set.
     * @return {string} "true" if success, "false" otherwise.
     */
    AddonModScormDataModel12.prototype.LMSSetValue = function (element, value) {
        this.errorCode = '0';
        if (this.initialized) {
            if (element != '') {
                var expression = new RegExp(this.CMI_INDEX, 'g');
                var elementModel = String(element).replace(expression, '.n.');
                if (typeof this.dataModel[this.scoId][elementModel] != 'undefined') {
                    if (this.dataModel[this.scoId][elementModel].mod != 'r') {
                        expression = new RegExp(this.dataModel[this.scoId][elementModel].format);
                        value = value + '';
                        var matches = value.match(expression);
                        if (matches != null) {
                            // Create dynamic data model element.
                            if (element != elementModel) {
                                // Init default counters and values.
                                if (element.indexOf('cmi.objectives') === 0) {
                                    var currentN = element.match(/cmi.objectives.(\d+)./)[1], counterElement = 'cmi.objectives.' + currentN + '.score';
                                    if (typeof this.currentUserData[this.scoId][counterElement + '._children'] == 'undefined') {
                                        this.setEl(this.currentUserData[this.scoId][counterElement + '._children'], this.SCORE_CHILDREN);
                                        this.setEl(this.currentUserData[this.scoId][counterElement + '.raw'], '');
                                        this.setEl(this.currentUserData[this.scoId][counterElement + '.min'], '');
                                        this.setEl(this.currentUserData[this.scoId][counterElement + '.max'], '');
                                    }
                                }
                                else if (element.indexOf('cmi.interactions') === 0) {
                                    var currentN = element.match(/cmi.interactions.(\d+)./)[1];
                                    var counterElement = 'cmi.interactions.' + currentN + '.objectives._count';
                                    if (typeof this.currentUserData[this.scoId][counterElement] == 'undefined') {
                                        this.setEl(counterElement, 0);
                                    }
                                    counterElement = 'cmi.interactions.' + currentN + '.correct_responses._count';
                                    if (typeof this.currentUserData[this.scoId][counterElement] == 'undefined') {
                                        this.setEl(counterElement, 0);
                                    }
                                }
                                var elementIndexes = element.split('.');
                                var subElement = 'cmi';
                                for (var i = 1; i < elementIndexes.length - 1; i++) {
                                    var elementIndex = elementIndexes[i];
                                    if (elementIndexes[i + 1].match(/^\d+$/)) {
                                        var counterElement = subElement + '.' + elementIndex + '._count';
                                        if (typeof this.currentUserData[this.scoId][counterElement] == 'undefined') {
                                            this.setEl(counterElement, 0);
                                        }
                                        if (elementIndexes[i + 1] == this.getEl(counterElement)) {
                                            var count = this.getEl(counterElement);
                                            this.setEl(counterElement, parseInt(count, 10) + 1);
                                        }
                                        if (elementIndexes[i + 1] > this.getEl(counterElement)) {
                                            this.errorCode = '201';
                                        }
                                        subElement = subElement.concat('.' + elementIndex + '.' + elementIndexes[i + 1]);
                                        i++;
                                    }
                                    else {
                                        subElement = subElement.concat('.' + elementIndex);
                                    }
                                }
                                element = subElement.concat('.' + elementIndexes[elementIndexes.length - 1]);
                            }
                            // Store data.
                            if (this.errorCode == '0') {
                                if (this.scorm.autocommit && !(this.timeout)) {
                                    this.timeout = setTimeout(this.LMSCommit.bind(this), 60000, ['']);
                                }
                                if (typeof this.dataModel[this.scoId][elementModel].range != 'undefined') {
                                    var range = this.dataModel[this.scoId][elementModel].range, ranges = range.split('#');
                                    value = value * 1.0;
                                    if ((value >= ranges[0]) && (value <= ranges[1])) {
                                        this.setEl(element, value);
                                        this.errorCode = '0';
                                        return 'true';
                                    }
                                    else {
                                        this.errorCode = this.dataModel[this.scoId][elementModel].writeerror;
                                    }
                                }
                                else {
                                    if (element == 'cmi.comments') {
                                        this.setEl('cmi.comments', this.getEl('cmi.comments') + value);
                                    }
                                    else {
                                        this.setEl(element, value);
                                    }
                                    this.errorCode = '0';
                                    return 'true';
                                }
                            }
                        }
                        else {
                            this.errorCode = this.dataModel[this.scoId][elementModel].writeerror;
                        }
                    }
                    else {
                        this.errorCode = this.dataModel[this.scoId][elementModel].writeerror;
                    }
                }
                else {
                    this.errorCode = '201';
                }
            }
            else {
                this.errorCode = '201';
            }
        }
        else {
            this.errorCode = '301';
        }
        return 'false';
    };
    /**
     * Set a SCO ID.
     * The scoId is like a pointer to be able to retrieve the SCO default values and set the new ones in the overall SCORM
     * data structure.
     *
     * @param {number} scoId The new SCO id.
     */
    AddonModScormDataModel12.prototype.loadSco = function (scoId) {
        this.scoId = scoId;
    };
    /**
     * Set the value of the given element in the non-persistent (current) user data.
     *
     * @param {string} el The element.
     * @param {any} value The value.
     */
    AddonModScormDataModel12.prototype.setEl = function (el, value) {
        if (typeof this.currentUserData[this.scoId] == 'undefined') {
            this.currentUserData[this.scoId] = {};
        }
        this.currentUserData[this.scoId][el] = value;
    };
    /**
     * Set offline mode to true or false.
     *
     * @param {boolean} offline True if offline, false otherwise.
     */
    AddonModScormDataModel12.prototype.setOffline = function (offline) {
        this.offline = offline;
    };
    /**
     * Persist the current user data (this is usually called by LMSCommit).
     *
     * @param {boolean} storeTotalTime If true, we need to calculate the total time too.
     * @return {boolean} True if success, false otherwise.
     */
    AddonModScormDataModel12.prototype.storeData = function (storeTotalTime) {
        var tracks;
        if (storeTotalTime) {
            if (this.getEl('cmi.core.lesson_status') == 'not attempted') {
                this.setEl('cmi.core.lesson_status', 'completed');
            }
            if (this.getEl('cmi.core.lesson_mode') == __WEBPACK_IMPORTED_MODULE_0__providers_scorm__["a" /* AddonModScormProvider */].MODENORMAL) {
                if (this.getEl('cmi.core.credit') == 'credit') {
                    if (this.getEl('cmi.student_data.mastery_score') !== '' && this.getEl('cmi.core.score.raw') !== '') {
                        if (parseFloat(this.getEl('cmi.core.score.raw')) >=
                            parseFloat(this.getEl('cmi.student_data.mastery_score'))) {
                            this.setEl('cmi.core.lesson_status', 'passed');
                        }
                        else {
                            this.setEl('cmi.core.lesson_status', 'failed');
                        }
                    }
                }
            }
            if (this.getEl('cmi.core.lesson_mode') == __WEBPACK_IMPORTED_MODULE_0__providers_scorm__["a" /* AddonModScormProvider */].MODEBROWSE) {
                if (this.dataModel[this.scoId]['cmi.core.lesson_status'].defaultvalue == '' &&
                    this.getEl('cmi.core.lesson_status') == 'not attempted') {
                    this.setEl('cmi.core.lesson_status', 'browsed');
                }
            }
            tracks = this.collectData();
            tracks.push(this.totalTime());
        }
        else {
            tracks = this.collectData();
        }
        var success = this.scormProvider.saveTracksSync(this.scoId, this.attempt, tracks, this.scorm, this.offline, this.currentUserData);
        if (!this.offline && !success) {
            // Failure storing data in online. Go offline.
            this.offline = true;
            this.triggerEvent(__WEBPACK_IMPORTED_MODULE_0__providers_scorm__["a" /* AddonModScormProvider */].GO_OFFLINE_EVENT);
            return this.scormProvider.saveTracksSync(this.scoId, this.attempt, tracks, this.scorm, this.offline, this.currentUserData);
        }
        return success;
    };
    /**
     * Utility function for calculating the total time spent in the SCO.
     *
     * @return {any} Total time element.
     */
    AddonModScormDataModel12.prototype.totalTime = function () {
        var totalTime = this.addTime(this.getEl('cmi.core.total_time'), this.getEl('cmi.core.session_time'));
        return { element: 'cmi.core.total_time', value: totalTime };
    };
    /**
     * Convenience function to trigger events.
     *
     * @param {string} name Name of the event to trigger.
     */
    AddonModScormDataModel12.prototype.triggerEvent = function (name) {
        this.eventsProvider.trigger(name, {
            scormId: this.scorm.id,
            scoId: this.scoId,
            attempt: this.attempt
        }, this.siteId);
    };
    return AddonModScormDataModel12;
}());

//# sourceMappingURL=data-model-12.js.map
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d

/***/ })

});
//# sourceMappingURL=6.js.map