webpackJsonp([101],{

<<<<<<< HEAD
/***/ 1803:
=======
/***/ 1872:
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModAssignEditPageModule", function() { return AddonModAssignEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module__ = __webpack_require__(925);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit__ = __webpack_require__(1927);
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModAssignSubmissionListPageModule", function() { return AddonModAssignSubmissionListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__submission_list__ = __webpack_require__(2000);
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

var AddonModAssignEditPageModule = /** @class */ (function () {
    function AddonModAssignEditPageModule() {
    }
    AddonModAssignEditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__edit__["a" /* AddonModAssignEditPage */],
=======
var AddonModAssignSubmissionListPageModule = /** @class */ (function () {
    function AddonModAssignSubmissionListPageModule() {
    }
    AddonModAssignSubmissionListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__submission_list__["a" /* AddonModAssignSubmissionListPage */],
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
<<<<<<< HEAD
                __WEBPACK_IMPORTED_MODULE_5__components_components_module__["a" /* AddonModAssignComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__edit__["a" /* AddonModAssignEditPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonModAssignEditPageModule);
    return AddonModAssignEditPageModule;
}());

//# sourceMappingURL=edit.module.js.map

/***/ }),

/***/ 1927:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonModAssignEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_events__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_sync__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_fileuploader_providers_helper__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_assign__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_assign_offline__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_assign_sync__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_helper__ = __webpack_require__(111);
=======
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__submission_list__["a" /* AddonModAssignSubmissionListPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonModAssignSubmissionListPageModule);
    return AddonModAssignSubmissionListPageModule;
}());

//# sourceMappingURL=submission-list.module.js.map

/***/ }),

/***/ 2000:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonModAssignSubmissionListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_events__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utils_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_assign__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_assign_offline__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_helper__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_split_view_split_view__ = __webpack_require__(108);
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
 * Page that allows adding or editing an assigment submission.
 */
var AddonModAssignEditPage = /** @class */ (function () {
    function AddonModAssignEditPage(navParams, navCtrl, sitesProvider, syncProvider, domUtils, translate, fileUploaderHelper, eventsProvider, assignProvider, assignOfflineProvider, assignHelper, assignSyncProvider) {
        this.navCtrl = navCtrl;
        this.sitesProvider = sitesProvider;
        this.syncProvider = syncProvider;
        this.domUtils = domUtils;
        this.translate = translate;
        this.fileUploaderHelper = fileUploaderHelper;
        this.eventsProvider = eventsProvider;
        this.assignProvider = assignProvider;
        this.assignOfflineProvider = assignOfflineProvider;
        this.assignHelper = assignHelper;
        this.assignSyncProvider = assignSyncProvider;
        this.saveOffline = false; // Whether to save data in offline.
        this.hasOffline = false; // Whether the assignment has offline data.
        this.isDestroyed = false; // Whether the component has been destroyed.
        this.forceLeave = false; // To allow leaving the page without checking for changes.
        this.moduleId = navParams.get('moduleId');
        this.courseId = navParams.get('courseId');
        this.userId = sitesProvider.getCurrentSiteUserId(); // Right now we can only edit current user's submissions.
        this.isBlind = !!navParams.get('blindId');
        this.editText = translate.instant('addon.mod_assign.editsubmission');
        this.title = this.editText;
=======
/**
 * Page that displays a list of submissions of an assignment.
 */
var AddonModAssignSubmissionListPage = /** @class */ (function () {
    function AddonModAssignSubmissionListPage(navParams, sitesProvider, eventsProvider, domUtils, translate, assignProvider, assignOfflineProvider, assignHelper) {
        var _this = this;
        this.domUtils = domUtils;
        this.translate = translate;
        this.assignProvider = assignProvider;
        this.assignOfflineProvider = assignOfflineProvider;
        this.assignHelper = assignHelper;
        this.moduleId = navParams.get('moduleId');
        this.courseId = navParams.get('courseId');
        this.selectedStatus = navParams.get('status');
        if (this.selectedStatus) {
            if (this.selectedStatus == __WEBPACK_IMPORTED_MODULE_6__providers_assign__["a" /* AddonModAssignProvider */].NEED_GRADING) {
                this.title = this.translate.instant('addon.mod_assign.numberofsubmissionsneedgrading');
            }
            else {
                this.title = this.translate.instant('addon.mod_assign.submissionstatus_' + this.selectedStatus);
            }
        }
        else {
            this.title = this.translate.instant('addon.mod_assign.numberofparticipants');
        }
        // Update data if some grade changes.
        this.gradedObserver = eventsProvider.on(__WEBPACK_IMPORTED_MODULE_6__providers_assign__["a" /* AddonModAssignProvider */].GRADED_EVENT, function (data) {
            if (_this.assign && data.assignmentId == _this.assign.id && data.userId == sitesProvider.getCurrentSiteUserId()) {
                // Grade changed, refresh the data.
                _this.loaded = false;
                _this.refreshAllData().finally(function () {
                    _this.loaded = true;
                });
            }
        }, sitesProvider.getCurrentSiteId());
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
    }
    /**
     * Component being initialized.
     */
<<<<<<< HEAD
    AddonModAssignEditPage.prototype.ngOnInit = function () {
        var _this = this;
        this.fetchAssignment().finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Check if we can leave the page or not.
     *
     * @return {boolean|Promise<void>} Resolved if we can leave it, rejected if not.
     */
    AddonModAssignEditPage.prototype.ionViewCanLeave = function () {
        var _this = this;
        if (this.forceLeave) {
            return true;
        }
        // Check if data has changed.
        return this.hasDataChanged().then(function (changed) {
            if (changed) {
                return _this.domUtils.showConfirm(_this.translate.instant('core.confirmcanceledit'));
            }
        }).then(function () {
            // Nothing has changed or user confirmed to leave. Clear temporary data from plugins.
            _this.assignHelper.clearSubmissionPluginTmpData(_this.assign, _this.userSubmission, _this.getInputData());
=======
    AddonModAssignSubmissionListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.fetchAssignment().finally(function () {
            if (!_this.selectedSubmissionId && _this.splitviewCtrl.isOn() && _this.submissions.length > 0) {
                // Take first and load it.
                _this.loadSubmission(_this.submissions[0]);
            }
            _this.loaded = true;
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
        });
    };
    /**
     * Fetch assignment data.
     *
     * @return {Promise<any>} Promise resolved when done.
     */
<<<<<<< HEAD
    AddonModAssignEditPage.prototype.fetchAssignment = function () {
        var _this = this;
        var currentUserId = this.sitesProvider.getCurrentSiteUserId();
        // Get assignment data.
        return this.assignProvider.getAssignment(this.courseId, this.moduleId).then(function (assign) {
            _this.assign = assign;
            _this.title = assign.name || _this.title;
            if (!_this.isDestroyed) {
                // Block the assignment.
                _this.syncProvider.blockOperation(__WEBPACK_IMPORTED_MODULE_8__providers_assign__["a" /* AddonModAssignProvider */].COMPONENT, assign.id);
            }
            // Wait for sync to be over (if any).
            return _this.assignSyncProvider.waitForSync(assign.id);
        }).then(function () {
            // Get submission status. Ignore cache to get the latest data.
            return _this.assignProvider.getSubmissionStatus(_this.assign.id, _this.userId, _this.isBlind, false, true).catch(function (err) {
                // Cannot connect. Get cached data.
                return _this.assignProvider.getSubmissionStatus(_this.assign.id, _this.userId, _this.isBlind).then(function (response) {
                    var userSubmission = _this.assignProvider.getSubmissionObjectFromAttempt(_this.assign, response.lastattempt);
                    // Check if the user can edit it in offline.
                    return _this.assignHelper.canEditSubmissionOffline(_this.assign, userSubmission).then(function (canEditOffline) {
                        if (canEditOffline) {
                            return response;
                        }
                        // Submission cannot be edited in offline, reject.
                        _this.allowOffline = false;
                        return Promise.reject(err);
                    });
                });
            }).then(function (response) {
                if (!response.lastattempt.canedit) {
                    // Can't edit. Reject.
                    return Promise.reject(_this.translate.instant('core.nopermissions', { $a: _this.editText }));
                }
                _this.userSubmission = _this.assignProvider.getSubmissionObjectFromAttempt(_this.assign, response.lastattempt);
                _this.allowOffline = true; // If offline isn't allowed we shouldn't have reached this point.
                // Only show submission statement if we are editing our own submission.
                if (_this.assign.requiresubmissionstatement && !_this.assign.submissiondrafts && _this.userId == currentUserId) {
                    _this.submissionStatement = _this.assign.submissionstatement;
                }
                else {
                    _this.submissionStatement = undefined;
                }
                // Check if there's any offline data for this submission.
                return _this.assignOfflineProvider.getSubmission(_this.assign.id, _this.userId).then(function (data) {
                    _this.hasOffline = data && data.plugindata && Object.keys(data.plugindata).length > 0;
                }).catch(function () {
                    // No offline data found.
                    _this.hasOffline = false;
                });
            });
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'Error getting assigment data.');
            // Leave the player.
            _this.leaveWithoutCheck();
        });
    };
    /**
     * Get the input data.
     *
     * @return {any} Input data.
     */
    AddonModAssignEditPage.prototype.getInputData = function () {
        return this.domUtils.getDataFromForm(document.forms['addon-mod_assign-edit-form']);
    };
    /**
     * Check if data has changed.
     *
     * @return {Promise<boolean>} Promise resolved with boolean: whether data has changed.
     */
    AddonModAssignEditPage.prototype.hasDataChanged = function () {
        var _this = this;
        // Usually the hasSubmissionDataChanged call will be resolved inmediately, causing the modal to be shown just an instant.
        // We'll wait a bit before showing it to prevent this "blink".
        var modal, showModal = true;
        setTimeout(function () {
            if (showModal) {
                modal = _this.domUtils.showModalLoading();
            }
        }, 100);
        var data = this.getInputData();
        return this.assignHelper.hasSubmissionDataChanged(this.assign, this.userSubmission, data).finally(function () {
            if (modal) {
                modal.dismiss();
            }
            else {
                showModal = false;
            }
        });
    };
    /**
     * Leave the view without checking for changes.
     */
    AddonModAssignEditPage.prototype.leaveWithoutCheck = function () {
        this.forceLeave = true;
        this.navCtrl.pop();
    };
    /**
     * Get data to submit based on the input data.
     *
     * @param {any} inputData The input data.
     * @return {Promise<any>} Promise resolved with the data to submit.
     */
    AddonModAssignEditPage.prototype.prepareSubmissionData = function (inputData) {
        var _this = this;
        // If there's offline data, always save it in offline.
        this.saveOffline = this.hasOffline;
        return this.assignHelper.prepareSubmissionPluginData(this.assign, this.userSubmission, inputData, this.hasOffline)
            .catch(function (error) {
            if (_this.allowOffline && !_this.saveOffline) {
                // Cannot submit in online, prepare for offline usage.
                _this.saveOffline = true;
                return _this.assignHelper.prepareSubmissionPluginData(_this.assign, _this.userSubmission, inputData, true);
            }
            return Promise.reject(error);
        });
    };
    /**
     * Save the submission.
     */
    AddonModAssignEditPage.prototype.save = function () {
        var _this = this;
        // Check if data has changed.
        this.hasDataChanged().then(function (changed) {
            if (changed) {
                _this.saveSubmission().then(function () {
                    _this.leaveWithoutCheck();
                }).catch(function (error) {
                    _this.domUtils.showErrorModalDefault(error, 'Error saving submission.');
                });
            }
            else {
                // Nothing to save, just go back.
                _this.leaveWithoutCheck();
            }
        });
    };
    /**
     * Save the submission.
     *
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonModAssignEditPage.prototype.saveSubmission = function () {
        var _this = this;
        var inputData = this.getInputData();
        if (this.submissionStatement && (!inputData.submissionstatement || inputData.submissionstatement === 'false')) {
            return Promise.reject(this.translate.instant('addon.mod_assign.acceptsubmissionstatement'));
        }
        var modal = this.domUtils.showModalLoading();
        // Get size to ask for confirmation.
        return this.assignHelper.getSubmissionSizeForEdit(this.assign, this.userSubmission, inputData).catch(function () {
            // Error calculating size, return -1.
            return -1;
        }).then(function (size) {
            modal.dismiss();
            // Confirm action.
            return _this.fileUploaderHelper.confirmUploadFile(size, true, _this.allowOffline);
        }).then(function () {
            modal = _this.domUtils.showModalLoading('core.sending', true);
            return _this.prepareSubmissionData(inputData).then(function (pluginData) {
                if (!Object.keys(pluginData).length) {
                    // Nothing to save.
                    return;
                }
                var promise;
                if (_this.saveOffline) {
                    // Save submission in offline.
                    promise = _this.assignOfflineProvider.saveSubmission(_this.assign.id, _this.courseId, pluginData, _this.userSubmission.timemodified, !_this.assign.submissiondrafts, _this.userId);
                }
                else {
                    // Try to send it to server.
                    promise = _this.assignProvider.saveSubmission(_this.assign.id, _this.courseId, pluginData, _this.allowOffline, _this.userSubmission.timemodified, _this.assign.submissiondrafts, _this.userId);
                }
                return promise.then(function () {
                    // Submission saved, trigger event.
                    var params = {
                        assignmentId: _this.assign.id,
                        submissionId: _this.userSubmission.id,
                        userId: _this.userId,
                    };
                    _this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_8__providers_assign__["a" /* AddonModAssignProvider */].SUBMISSION_SAVED_EVENT, params, _this.sitesProvider.getCurrentSiteId());
                    if (!_this.assign.submissiondrafts) {
                        // No drafts allowed, so it was submitted. Trigger event.
                        _this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_8__providers_assign__["a" /* AddonModAssignProvider */].SUBMITTED_FOR_GRADING_EVENT, params, _this.sitesProvider.getCurrentSiteId());
                    }
                });
            });
        }).finally(function () {
            modal.dismiss();
=======
    AddonModAssignSubmissionListPage.prototype.fetchAssignment = function () {
        var _this = this;
        var participants, submissionsData, grades;
        // Get assignment data.
        return this.assignProvider.getAssignment(this.courseId, this.moduleId).then(function (assign) {
            _this.title = assign.name || _this.title;
            _this.assign = assign;
            _this.haveAllParticipants = true;
            // Get assignment submissions.
            return _this.assignProvider.getSubmissions(assign.id);
        }).then(function (data) {
            if (!data.canviewsubmissions) {
                // User shouldn't be able to reach here.
                return Promise.reject(null);
            }
            submissionsData = data;
            // Get the participants.
            return _this.assignHelper.getParticipants(_this.assign).then(function (parts) {
                _this.haveAllParticipants = true;
                participants = parts;
            }).catch(function () {
                _this.haveAllParticipants = false;
            });
        }).then(function () {
            if (!_this.assign.markingworkflow) {
                // Get assignment grades only if workflow is not enabled to check grading date.
                return _this.assignProvider.getAssignmentGrades(_this.assign.id).then(function (assignmentGrades) {
                    grades = assignmentGrades;
                });
            }
        }).then(function () {
            // We want to show the user data on each submission.
            return _this.assignProvider.getSubmissionsUserData(submissionsData.submissions, _this.courseId, _this.assign.id, _this.assign.blindmarking && !_this.assign.revealidentities, participants);
        }).then(function (submissions) {
            // Filter the submissions to get only the ones with the right status and add some extra data.
            var getNeedGrading = _this.selectedStatus == __WEBPACK_IMPORTED_MODULE_6__providers_assign__["a" /* AddonModAssignProvider */].NEED_GRADING, searchStatus = getNeedGrading ? __WEBPACK_IMPORTED_MODULE_6__providers_assign__["a" /* AddonModAssignProvider */].SUBMISSION_STATUS_SUBMITTED : _this.selectedStatus, promises = [];
            _this.submissions = [];
            submissions.forEach(function (submission) {
                if (!searchStatus || searchStatus == submission.status) {
                    promises.push(_this.assignOfflineProvider.getSubmissionGrade(_this.assign.id, submission.userid).catch(function () {
                        // Ignore errors.
                    }).then(function (data) {
                        var promise, notSynced = false;
                        // Load offline grades.
                        if (data && submission.timemodified < data.timemodified) {
                            notSynced = true;
                        }
                        if (getNeedGrading) {
                            // Only show the submissions that need to be graded.
                            promise = _this.assignProvider.needsSubmissionToBeGraded(submission, _this.assign.id);
                        }
                        else {
                            promise = Promise.resolve(true);
                        }
                        return promise.then(function (add) {
                            if (!add) {
                                return;
                            }
                            if (submission.gradingstatus == 'graded' && !_this.assign.markingworkflow) {
                                // Get the last grade of the submission.
                                var grade = grades.filter(function (grade) {
                                    return grade.userid == submission.userid;
                                }).reduce(function (a, b) {
                                    return (a.timemodified > b.timemodified ? a : b);
                                });
                                if (grade && grade.timemodified < submission.timemodified) {
                                    submission.gradingstatus = __WEBPACK_IMPORTED_MODULE_6__providers_assign__["a" /* AddonModAssignProvider */].GRADED_FOLLOWUP_SUBMIT;
                                }
                            }
                            submission.statusColor = _this.assignProvider.getSubmissionStatusColor(submission.status);
                            submission.gradingColor = _this.assignProvider.getSubmissionGradingStatusColor(submission.gradingstatus);
                            // Show submission status if not submitted for grading.
                            if (submission.statusColor != 'success' || !submission.gradingstatus) {
                                submission.statusTranslated = _this.translate.instant('addon.mod_assign.submissionstatus_' +
                                    submission.status);
                            }
                            else {
                                submission.statusTranslated = false;
                            }
                            if (notSynced) {
                                submission.gradingStatusTranslationId = 'addon.mod_assign.gradenotsynced';
                                submission.gradingColor = '';
                            }
                            else if (submission.statusColor != 'danger' || submission.gradingColor != 'danger') {
                                // Show grading status if one of the statuses is not done.
                                submission.gradingStatusTranslationId =
                                    _this.assignProvider.getSubmissionGradingStatusTranslationId(submission.gradingstatus);
                            }
                            else {
                                submission.gradingStatusTranslationId = false;
                            }
                            _this.submissions.push(submission);
                        });
                    }));
                }
            });
            return Promise.all(promises);
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'Error getting assigment data.');
        });
    };
    /**
     * Load a certain submission.
     *
     * @param {any} submission The submission to load.
     */
    AddonModAssignSubmissionListPage.prototype.loadSubmission = function (submission) {
        if (this.selectedSubmissionId === submission.id && this.splitviewCtrl.isOn()) {
            // Already selected.
            return;
        }
        this.selectedSubmissionId = submission.id;
        this.splitviewCtrl.push('AddonModAssignSubmissionReviewPage', {
            courseId: this.courseId,
            moduleId: this.moduleId,
            submitId: submission.submitid,
            blindId: submission.blindid
        });
    };
    /**
     * Refresh all the data.
     *
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonModAssignSubmissionListPage.prototype.refreshAllData = function () {
        var _this = this;
        var promises = [];
        promises.push(this.assignProvider.invalidateAssignmentData(this.courseId));
        if (this.assign) {
            promises.push(this.assignProvider.invalidateAllSubmissionData(this.assign.id));
            promises.push(this.assignProvider.invalidateAssignmentUserMappingsData(this.assign.id));
            promises.push(this.assignProvider.invalidateAssignmentGradesData(this.assign.id));
            promises.push(this.assignProvider.invalidateListParticipantsData(this.assign.id));
        }
        return Promise.all(promises).finally(function () {
            return _this.fetchAssignment();
        });
    };
    /**
     * Refresh the list.
     *
     * @param {any} refresher Refresher.
     */
    AddonModAssignSubmissionListPage.prototype.refreshList = function (refresher) {
        this.refreshAllData().finally(function () {
            refresher.complete();
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
        });
    };
    /**
     * Component being destroyed.
     */
<<<<<<< HEAD
    AddonModAssignEditPage.prototype.ngOnDestroy = function () {
        this.isDestroyed = true;
        // Unblock the assignment.
        if (this.assign) {
            this.syncProvider.unblockOperation(__WEBPACK_IMPORTED_MODULE_8__providers_assign__["a" /* AddonModAssignProvider */].COMPONENT, this.assign.id);
        }
    };
    AddonModAssignEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-mod-assign-edit',template:/*ion-inline-start:"C:\wamp\www\BCC_mobapp\bcc_custom_mma\src\addon\mod\assign\pages\edit\edit.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title><core-format-text [text]="title"></core-format-text></ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button clear (click)="save()" [attr.aria-label]="\'core.save\' | translate">\n\n                {{ \'core.save\' | translate }}\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <core-loading [hideUntil]="loaded">\n\n        <ion-list>\n\n            <!-- @todo: plagiarism_print_disclosure -->\n\n            <form name="addon-mod_assign-edit-form" *ngIf="userSubmission && userSubmission.plugins && userSubmission.plugins.length">\n\n                <!-- Submission statement. -->\n\n                <ion-item text-wrap *ngIf="submissionStatement">\n\n                    <ion-label><core-format-text [text]="submissionStatement"></core-format-text></ion-label>\n\n                    <ion-checkbox item-end name="submissionstatement" [(ngModel)]="submissionStatementAccepted"></ion-checkbox>\n\n\n\n                    <!-- ion-checkbox doesn\'t use an input. Create a hidden input to hold the value. -->\n\n                    <input item-content type="hidden" [ngModel]="submissionStatementAccepted" name="submissionstatement">\n\n                </ion-item>\n\n\n\n                <addon-mod-assign-submission-plugin *ngFor="let plugin of userSubmission.plugins" [assign]="assign" [submission]="userSubmission" [plugin]="plugin" [edit]="true" [allowOffline]="allowOffline"></addon-mod-assign-submission-plugin>\n\n            </form>\n\n        </ion-list>\n\n    </core-loading>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp\www\BCC_mobapp\bcc_custom_mma\src\addon\mod\assign\pages\edit\edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_sites__["a" /* CoreSitesProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_sync__["a" /* CoreSyncProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__["a" /* CoreDomUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_7__core_fileuploader_providers_helper__["a" /* CoreFileUploaderHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_events__["a" /* CoreEventsProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_assign__["a" /* AddonModAssignProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_assign_offline__["a" /* AddonModAssignOfflineProvider */], __WEBPACK_IMPORTED_MODULE_11__providers_helper__["a" /* AddonModAssignHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_assign_sync__["a" /* AddonModAssignSyncProvider */]])
    ], AddonModAssignEditPage);
    return AddonModAssignEditPage;
}());

//# sourceMappingURL=edit.js.map
=======
    AddonModAssignSubmissionListPage.prototype.ngOnDestroy = function () {
        this.gradedObserver && this.gradedObserver.off();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_9__components_split_view_split_view__["a" /* CoreSplitViewComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_9__components_split_view_split_view__["a" /* CoreSplitViewComponent */])
    ], AddonModAssignSubmissionListPage.prototype, "splitviewCtrl", void 0);
    AddonModAssignSubmissionListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-mod-assign-submission-list',template:/*ion-inline-start:"C:\wamp\www\AX-LT_2019\mma_lt\src\addon\mod\assign\pages\submission-list\submission-list.html"*/'<ion-header>\n    <ion-navbar core-back-button>\n        <ion-title><core-format-text [text]="title"></core-format-text></ion-title>\n\n        <ion-buttons end></ion-buttons>\n    </ion-navbar>\n</ion-header>\n<core-split-view>\n    <ion-content>\n        <ion-refresher [enabled]="loaded" (ionRefresh)="refreshList($event)">\n            <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n        </ion-refresher>\n        <core-loading [hideUntil]="loaded">\n            <core-empty-box *ngIf="!submissions || submissions.length == 0" icon="paper" [message]="\'addon.mod_assign.submissionstatus_\' | translate">\n            </core-empty-box>\n\n            <ion-list>\n                <!-- List of submissions. -->\n                <ng-container *ngFor="let submission of submissions">\n                    <a ion-item text-wrap (click)="loadSubmission(submission)" [class.core-split-item-selected]="submission.id == selectedSubmissionId">\n                        <ion-avatar core-user-avatar [user]="submission" item-start></ion-avatar>\n                        <h2 *ngIf="submission.userfullname">{{submission.userfullname}}</h2>\n                        <h2 *ngIf="!submission.userfullname">{{ \'addon.mod_assign.hiddenuser\' | translate }}{{submission.blindid}}</h2>\n                        <p *ngIf="assign.teamsubmission">\n                            <span *ngIf="submission.groupname">{{submission.groupname}}</span>\n                            <span *ngIf="assign.preventsubmissionnotingroup && !submission.groupname && !submission.manyGroups && !submission.blindid">{{ \'addon.mod_assign.noteam\' | translate }}</span>\n                            <span *ngIf="assign.preventsubmissionnotingroup && !submission.groupname && submission.manyGroups && !submission.blindid">{{ \'addon.mod_assign.multipleteams\' | translate }}</span>\n                            <span *ngIf="!assign.preventsubmissionnotingroup && !submission.groupname">{{ \'addon.mod_assign.defaultteam\' | translate }}</span>\n                        </p>\n                        <ion-badge text-center text-wrap [color]="submission.statusColor" *ngIf="submission.statusTranslated">\n                            {{ submission.statusTranslated }}\n                        </ion-badge>\n                        <ion-badge text-center text-wrap [color]="submission.gradingColor" *ngIf="submission.gradingStatusTranslationId">\n                            {{ submission.gradingStatusTranslationId | translate }}\n                        </ion-badge>\n                    </a>\n                </ng-container>\n\n                <ion-item text-wrap class="core-warning-card" *ngIf="!haveAllParticipants" icon-start>\n                    <ion-icon name="warning"></ion-icon>\n                    {{ \'addon.mod_assign.notallparticipantsareshown\' | translate }}\n                </ion-item>\n            </ion-list>\n        </core-loading>\n    </ion-content>\n</core-split-view>\n'/*ion-inline-end:"C:\wamp\www\AX-LT_2019\mma_lt\src\addon\mod\assign\pages\submission-list\submission-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_sites__["a" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_events__["a" /* CoreEventsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_utils_dom__["a" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_assign__["a" /* AddonModAssignProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_assign_offline__["a" /* AddonModAssignOfflineProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_helper__["a" /* AddonModAssignHelperProvider */]])
    ], AddonModAssignSubmissionListPage);
    return AddonModAssignSubmissionListPage;
}());

//# sourceMappingURL=submission-list.js.map
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d

/***/ })

});
//# sourceMappingURL=101.js.map