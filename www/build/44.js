webpackJsonp([44],{

<<<<<<< HEAD
/***/ 1865:
=======
/***/ 1934:
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCoursesCoursePreviewPageModule", function() { return CoreCoursesCoursePreviewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__course_preview__ = __webpack_require__(1993);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__ = __webpack_require__(67);
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCoursesDashboardPageModule", function() { return CoreCoursesDashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard__ = __webpack_require__(2066);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_components_module__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_sitehome_components_components_module__ = __webpack_require__(950);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_block_components_components_module__ = __webpack_require__(412);
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
var CoreCoursesCoursePreviewPageModule = /** @class */ (function () {
    function CoreCoursesCoursePreviewPageModule() {
    }
    CoreCoursesCoursePreviewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__course_preview__["a" /* CoreCoursesCoursePreviewPage */],
=======


var CoreCoursesDashboardPageModule = /** @class */ (function () {
    function CoreCoursesDashboardPageModule() {
    }
    CoreCoursesDashboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__dashboard__["a" /* CoreCoursesDashboardPage */],
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
<<<<<<< HEAD
                __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__["a" /* CorePipesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__course_preview__["a" /* CoreCoursesCoursePreviewPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], CoreCoursesCoursePreviewPageModule);
    return CoreCoursesCoursePreviewPageModule;
}());

//# sourceMappingURL=course-preview.module.js.map

/***/ }),

/***/ 1993:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreCoursesCoursePreviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_events__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_utils_text__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_courses__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_course_providers_options_delegate__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_course_providers_course__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__core_course_providers_helper__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__core_course_providers_format_delegate__ = __webpack_require__(98);
=======
                __WEBPACK_IMPORTED_MODULE_6__components_components_module__["a" /* CoreCoursesComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_7__core_sitehome_components_components_module__["a" /* CoreSiteHomeComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_8__core_block_components_components_module__["a" /* CoreBlockComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__dashboard__["a" /* CoreCoursesDashboardPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], CoreCoursesDashboardPageModule);
    return CoreCoursesDashboardPageModule;
}());

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 2066:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreCoursesDashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_events__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_tabs_tabs__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_block_providers_delegate__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_block_components_block_block__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_sitehome_providers_sitehome__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_sitehome_components_index_index__ = __webpack_require__(951);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_courses__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_dashboard__ = __webpack_require__(409);
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
 * Page that allows "previewing" a course and enrolling in it if enabled and not enrolled.
 */
var CoreCoursesCoursePreviewPage = /** @class */ (function () {
    function CoreCoursesCoursePreviewPage(navCtrl, navParams, sitesProvider, domUtils, textUtils, appProvider, coursesProvider, platform, modalCtrl, translate, eventsProvider, courseOptionsDelegate, courseHelper, courseProvider, courseFormatDelegate, zone) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.sitesProvider = sitesProvider;
        this.domUtils = domUtils;
        this.textUtils = textUtils;
        this.coursesProvider = coursesProvider;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.translate = translate;
        this.eventsProvider = eventsProvider;
        this.courseOptionsDelegate = courseOptionsDelegate;
        this.courseHelper = courseHelper;
        this.courseProvider = courseProvider;
        this.courseFormatDelegate = courseFormatDelegate;
        this.zone = zone;
        this.canAccessCourse = true;
        this.component = 'CoreCoursesCoursePreview';
        this.selfEnrolInstances = [];
        this.avoidOpenCourse = false;
        this.prefetchCourseData = {
            prefetchCourseIcon: 'spinner',
            title: 'core.course.downloadcourse'
        };
        this.isGuestEnabled = false;
        this.waitStart = 0;
        this.pageDestroyed = false;
        this.course = navParams.get('course');
        this.avoidOpenCourse = navParams.get('avoidOpenCourse');
        this.isMobile = appProvider.isMobile();
        this.isDesktop = appProvider.isDesktop();
        this.downloadCourseEnabled = !this.coursesProvider.isDownloadCourseDisabledInSite();
        if (this.downloadCourseEnabled) {
            // Listen for status change in course.
            this.courseStatusObserver = this.eventsProvider.on(__WEBPACK_IMPORTED_MODULE_4__providers_events__["a" /* CoreEventsProvider */].COURSE_STATUS_CHANGED, function (data) {
                if (data.courseId == _this.course.id) {
                    _this.updateCourseStatus(data.status);
                }
            }, this.sitesProvider.getCurrentSiteId());
        }
=======
/**
 * Page that displays the dashboard.
 */
var CoreCoursesDashboardPage = /** @class */ (function () {
    function CoreCoursesDashboardPage(navCtrl, coursesProvider, sitesProvider, siteHomeProvider, eventsProvider, dashboardProvider, domUtils, blockDelegate) {
        this.navCtrl = navCtrl;
        this.coursesProvider = coursesProvider;
        this.sitesProvider = sitesProvider;
        this.siteHomeProvider = siteHomeProvider;
        this.eventsProvider = eventsProvider;
        this.dashboardProvider = dashboardProvider;
        this.domUtils = domUtils;
        this.blockDelegate = blockDelegate;
        this.siteHomeEnabled = false;
        this.tabsReady = false;
        this.tabs = [];
        this.dashboardEnabled = false;
        this.dashboardLoaded = false;
        this.downloadEnabledIcon = 'square-outline'; // Disabled by default.
        this.loadSiteName();
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
    }
    /**
     * View loaded.
     */
<<<<<<< HEAD
    CoreCoursesCoursePreviewPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var currentSite = this.sitesProvider.getCurrentSite(), currentSiteUrl = currentSite && currentSite.getURL();
        this.paypalEnabled = this.course.enrollmentmethods && this.course.enrollmentmethods.indexOf('paypal') > -1;
        this.guestWSAvailable = this.coursesProvider.isGuestWSAvailable();
        this.enrolUrl = this.textUtils.concatenatePaths(currentSiteUrl, 'enrol/index.php?id=' + this.course.id);
        this.courseUrl = this.textUtils.concatenatePaths(currentSiteUrl, 'course/view.php?id=' + this.course.id);
        this.paypalReturnUrl = this.textUtils.concatenatePaths(currentSiteUrl, 'enrol/paypal/return.php');
        if (this.course.overviewfiles && this.course.overviewfiles.length > 0) {
            this.course.imageThumb = this.course.overviewfiles[0].fileurl;
        }
        // Initialize the self enrol modal.
        this.selfEnrolModal = this.modalCtrl.create('CoreCoursesSelfEnrolPasswordPage');
        this.selfEnrolModal.onDidDismiss(function (password) {
            if (typeof password != 'undefined') {
                _this.selfEnrolInCourse(password, _this.currentInstanceId);
            }
        });
        this.getCourse().finally(function () {
            if (!_this.downloadCourseEnabled) {
                // Cannot download the whole course, stop.
                return;
            }
            // Determine course prefetch icon.
            _this.courseHelper.getCourseStatusIconAndTitle(_this.course.id).then(function (data) {
                _this.prefetchCourseData.prefetchCourseIcon = data.icon;
                _this.prefetchCourseData.title = data.title;
                if (data.icon == 'spinner') {
                    // Course is being downloaded. Get the download promise.
                    var promise = _this.courseHelper.getCourseDownloadPromise(_this.course.id);
                    if (promise) {
                        // There is a download promise. If it fails, show an error.
                        promise.catch(function (error) {
                            if (!_this.pageDestroyed) {
                                _this.domUtils.showErrorModalDefault(error, 'core.course.errordownloadingcourse', true);
                            }
                        });
                    }
                    else {
                        // No download, this probably means that the app was closed while downloading. Set previous status.
                        _this.courseProvider.setCoursePreviousStatus(_this.course.id);
                    }
                }
            });
        });
    };
    /**
     * Page destroyed.
     */
    CoreCoursesCoursePreviewPage.prototype.ngOnDestroy = function () {
        this.pageDestroyed = true;
        if (this.courseStatusObserver) {
            this.courseStatusObserver.off();
        }
    };
    /**
     * Check if the user can access as guest.
     *
     * @return {Promise<boolean>} Promise resolved if can access as guest, rejected otherwise. Resolve param indicates if
     *                            password is required for guest access.
     */
    CoreCoursesCoursePreviewPage.prototype.canAccessAsGuest = function () {
        if (!this.isGuestEnabled) {
            return Promise.reject(null);
        }
        // Search instance ID of guest enrolment method.
        this.guestInstanceId = undefined;
        for (var i = 0; i < this.enrollmentMethods.length; i++) {
            var method = this.enrollmentMethods[i];
            if (method.type == 'guest') {
                this.guestInstanceId = method.id;
                break;
            }
        }
        if (this.guestInstanceId) {
            return this.coursesProvider.getCourseGuestEnrolmentInfo(this.guestInstanceId).then(function (info) {
                if (!info.status) {
                    // Not active, reject.
                    return Promise.reject(null);
                }
                return info.passwordrequired;
            });
        }
        return Promise.reject(null);
    };
    /**
     * Convenience function to get course. We use this to determine if a user can see the course or not.
     *
     * @param {boolean} refresh Whether the user is refreshing the data.
     */
    CoreCoursesCoursePreviewPage.prototype.getCourse = function (refresh) {
        var _this = this;
        // Get course enrolment methods.
        this.selfEnrolInstances = [];
        return this.coursesProvider.getCourseEnrolmentMethods(this.course.id).then(function (methods) {
            _this.enrollmentMethods = methods;
            _this.enrollmentMethods.forEach(function (method) {
                if (method.type === 'self') {
                    _this.selfEnrolInstances.push(method);
                }
                else if (_this.guestWSAvailable && method.type === 'guest') {
                    _this.isGuestEnabled = true;
                }
            });
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'Error getting enrolment data');
        }).then(function () {
            // Check if user is enrolled in the course.
            return _this.coursesProvider.getUserCourse(_this.course.id).then(function (course) {
                _this.isEnrolled = true;
                return course;
            }).catch(function () {
                // The user is not enrolled in the course. Use getCourses to see if it's an admin/manager and can see the course.
                _this.isEnrolled = false;
                return _this.coursesProvider.getCourse(_this.course.id);
            }).then(function (course) {
                // Success retrieving the course, we can assume the user has permissions to view it.
                _this.course.fullname = course.fullname || _this.course.fullname;
                _this.course.summary = course.summary || _this.course.summary;
                _this.canAccessCourse = true;
            }).catch(function () {
                // The user is not an admin/manager. Check if we can provide guest access to the course.
                return _this.canAccessAsGuest().then(function (passwordRequired) {
                    _this.canAccessCourse = !passwordRequired;
                }).catch(function () {
                    _this.canAccessCourse = false;
                });
            });
        }).finally(function () {
            _this.dataLoaded = true;
        });
    };
    /**
     * Open the course.
     */
    CoreCoursesCoursePreviewPage.prototype.openCourse = function () {
        if (!this.canAccessCourse || this.avoidOpenCourse) {
            // Course cannot be opened or we are avoiding opening because we accessed from inside a course.
            return;
        }
        this.courseFormatDelegate.openCourse(this.navCtrl, this.course);
    };
    /**
     * Enrol using PayPal.
     */
    CoreCoursesCoursePreviewPage.prototype.paypalEnrol = function () {
        var _this = this;
        var window, hasReturnedFromPaypal = false, inAppLoadSubscription, inAppFinishSubscription, inAppExitSubscription, appResumeSubscription;
        var urlLoaded = function (event) {
            if (event.url.indexOf(_this.paypalReturnUrl) != -1) {
                hasReturnedFromPaypal = true;
            }
            else if (event.url.indexOf(_this.courseUrl) != -1 && hasReturnedFromPaypal) {
                // User reached the course index page after returning from PayPal, close the InAppBrowser.
                inAppClosed();
                window.close();
            }
        }, inAppClosed = function () {
            // InAppBrowser closed, refresh data.
            unsubscribeAll();
            if (!_this.dataLoaded) {
                return;
            }
            _this.dataLoaded = false;
            _this.refreshData();
        }, unsubscribeAll = function () {
            inAppLoadSubscription && inAppLoadSubscription.unsubscribe();
            inAppFinishSubscription && inAppFinishSubscription.unsubscribe();
            inAppExitSubscription && inAppExitSubscription.unsubscribe();
            appResumeSubscription && appResumeSubscription.unsubscribe();
        };
        // Open the enrolment page in InAppBrowser.
        this.sitesProvider.getCurrentSite().openInAppWithAutoLogin(this.enrolUrl).then(function (w) {
            window = w;
            if (_this.isDesktop || _this.isMobile) {
                // Observe loaded pages in the InAppBrowser to check if the enrol process has ended.
                inAppLoadSubscription = window.on('loadstart').subscribe(function (event) {
                    // Execute the callback in the Angular zone, so change detection doesn't stop working.
                    _this.zone.run(function () { return urlLoaded(event); });
                });
                // Observe window closed.
                inAppExitSubscription = window.on('exit').subscribe(function () {
                    // Execute the callback in the Angular zone, so change detection doesn't stop working.
                    _this.zone.run(inAppClosed);
                });
            }
            if (_this.isDesktop) {
                // In desktop, also observe stop loading since some pages don't throw the loadstart event.
                inAppFinishSubscription = window.on('loadstop').subscribe(urlLoaded);
                // Since the user can switch windows, reload the data if he comes back to the app.
                appResumeSubscription = _this.platform.resume.subscribe(function () {
                    if (!_this.dataLoaded) {
                        return;
                    }
                    _this.dataLoaded = false;
                    _this.refreshData();
                });
            }
        });
    };
    /**
     * User clicked in a self enrol button.
     *
     * @param {number} instanceId The instance ID of the enrolment method.
     */
    CoreCoursesCoursePreviewPage.prototype.selfEnrolClicked = function (instanceId) {
        var _this = this;
        this.domUtils.showConfirm(this.translate.instant('core.courses.confirmselfenrol')).then(function () {
            _this.selfEnrolInCourse('', instanceId);
        }).catch(function () {
            // User cancelled.
        });
    };
    /**
     * Self enrol in a course.
     *
     * @param {string} password Password to use.
     * @param {number} instanceId The instance ID.
     * @return {Promise<any>} Promise resolved when self enrolled.
     */
    CoreCoursesCoursePreviewPage.prototype.selfEnrolInCourse = function (password, instanceId) {
        var _this = this;
        var modal = this.domUtils.showModalLoading('core.loading', true);
        return this.coursesProvider.selfEnrol(this.course.id, password, instanceId).then(function () {
            // Close modal and refresh data.
            _this.isEnrolled = true;
            _this.dataLoaded = false;
            // Sometimes the list of enrolled courses takes a while to be updated. Wait for it.
            _this.waitForEnrolled(true).then(function () {
                _this.refreshData().finally(function () {
                    // My courses have been updated, trigger event.
                    _this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_8__providers_courses__["a" /* CoreCoursesProvider */].EVENT_MY_COURSES_UPDATED, {}, _this.sitesProvider.getCurrentSiteId());
                });
            });
        }).catch(function (error) {
            if (error && error.code === __WEBPACK_IMPORTED_MODULE_8__providers_courses__["a" /* CoreCoursesProvider */].ENROL_INVALID_KEY) {
                // Invalid password, show the modal to enter the password.
                _this.selfEnrolModal.present();
                _this.currentInstanceId = instanceId;
                if (!password) {
                    // No password entered, don't show error.
                    return;
                }
            }
            _this.domUtils.showErrorModalDefault(error, 'core.courses.errorselfenrol', true);
        }).finally(function () {
            modal.dismiss();
        });
    };
    /**
     * Refresh the data.
     *
     * @param {any} [refresher] The refresher if this was triggered by a Pull To Refresh.
     */
    CoreCoursesCoursePreviewPage.prototype.refreshData = function (refresher) {
        var _this = this;
        var promises = [];
        promises.push(this.coursesProvider.invalidateUserCourses());
        promises.push(this.coursesProvider.invalidateCourse(this.course.id));
        promises.push(this.coursesProvider.invalidateCourseEnrolmentMethods(this.course.id));
        promises.push(this.courseOptionsDelegate.clearAndInvalidateCoursesOptions(this.course.id));
        if (this.guestInstanceId) {
            promises.push(this.coursesProvider.invalidateCourseGuestEnrolmentInfo(this.guestInstanceId));
        }
        return Promise.all(promises).finally(function () {
            return _this.getCourse(true);
        }).finally(function () {
            if (refresher) {
                refresher.complete();
            }
        });
    };
    /**
     * Update the course status icon and title.
     *
     * @param {string} status Status to show.
     */
    CoreCoursesCoursePreviewPage.prototype.updateCourseStatus = function (status) {
        var statusData = this.courseHelper.getCourseStatusIconAndTitleFromStatus(status);
        this.prefetchCourseData.prefetchCourseIcon = statusData.icon;
        this.prefetchCourseData.title = statusData.title;
    };
    /**
     * Wait for the user to be enrolled in the course.
     *
     * @param {boolean} first If it's the first call (true) or it's a recursive call (false).
     * @return {Promise<any>} Promise resolved when enrolled or timeout.
     */
    CoreCoursesCoursePreviewPage.prototype.waitForEnrolled = function (first) {
        var _this = this;
        if (first) {
            this.waitStart = Date.now();
        }
        // Check if user is enrolled in the course.
        return this.coursesProvider.invalidateUserCourses().catch(function () {
            // Ignore errors.
        }).then(function () {
            return _this.coursesProvider.getUserCourse(_this.course.id);
        }).catch(function () {
            // Not enrolled, wait a bit and try again.
            if (_this.pageDestroyed || (Date.now() - _this.waitStart > 60000)) {
                // Max time reached or the user left the view, stop.
                return;
            }
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    if (!_this.pageDestroyed) {
                        // Wait again.
                        _this.waitForEnrolled().then(resolve);
                    }
                    else {
                        resolve();
                    }
                }, 5000);
            });
        });
    };
    /**
     * Prefetch the course.
     */
    CoreCoursesCoursePreviewPage.prototype.prefetchCourse = function () {
        var _this = this;
        this.courseHelper.confirmAndPrefetchCourse(this.prefetchCourseData, this.course).catch(function (error) {
            if (!_this.pageDestroyed) {
                _this.domUtils.showErrorModalDefault(error, 'core.course.errordownloadingcourse', true);
            }
        });
    };
    CoreCoursesCoursePreviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-courses-course-preview',template:/*ion-inline-start:"C:\wamp\www\BCC_mobapp\bcc_custom_mma\src\core\courses\pages\course-preview\course-preview.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title><core-format-text [text]="course.fullname"></core-format-text></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-refresher [enabled]="dataLoaded" (ionRefresh)="refreshData($event)">\n\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n    </ion-refresher>\n\n    <core-loading [hideUntil]="dataLoaded">\n\n\n\n        <ion-list *ngIf="course">\n\n            <div *ngIf="course.imageThumb" (click)="openCourse()" class="core-course-thumb">\n\n                <img [src]="course.imageThumb" core-external-content alt=""/>\n\n            </div>\n\n            <a ion-item text-wrap (click)="openCourse()" [title]="course.fullname" [attr.detail-none]=" avoidOpenCourse || !canAccessCourse">\n\n                <core-icon name="fa-graduation-cap" fixed-width item-start></core-icon>\n\n                <h2><core-format-text [text]="course.fullname"></core-format-text></h2>\n\n                <p *ngIf="course.categoryname"><core-format-text [text]="course.categoryname"></core-format-text></p>\n\n                <p *ngIf="course.startdate">{{course.startdate * 1000 | coreFormatDate:"dfdaymonthyear"}} <span *ngIf="course.enddate"> - {{course.enddate * 1000 | coreFormatDate:"dfdaymonthyear"}}</span></p>\n\n            </a>\n\n\n\n            <ion-item text-wrap *ngIf="course.summary" detail-none>\n\n                <core-format-text [text]="course.summary" maxHeight="120"></core-format-text>\n\n            </ion-item>\n\n\n\n            <ng-container text-wrap *ngIf="course.contacts && course.contacts.length">\n\n                <ion-item-divider color="light">{{ \'core.teachers\' | translate }}</ion-item-divider>\n\n                <a ion-item text-wrap *ngFor="let contact of course.contacts" core-user-link userId="{{contact.id}}" courseId="{{isEnrolled ? course.id : null}}" [attr.aria-label]="\'core.viewprofile\' | translate">\n\n                    <ion-avatar item-start>\n\n                        <img [src]="contact.userpictureurl" onError="this.src=\'assets/img/user-avatar.png\'" core-external-content [alt]="\'core.pictureof\' | translate:{$a: contact.userfullname}" role="presentation">\n\n                    </ion-avatar>\n\n                    <h2>{{contact.fullname}}</h2>\n\n                </a>\n\n                <ion-item-divider color="light"></ion-item-divider>\n\n            </ng-container>\n\n            <core-file *ngFor="let file of course.overviewfiles" [file]="file" [component]="component" [componentId]="course.id"></core-file>\n\n            <div *ngIf="!isEnrolled" detail-none>\n\n                <ion-item text-wrap *ngFor="let instance of selfEnrolInstances">\n\n                    <h2>{{ instance.name }}</h2>\n\n                    <button ion-button block margin-top (click)="selfEnrolClicked(instance.id)">{{ \'core.courses.enrolme\' | translate }}</button>\n\n                </ion-item>\n\n            </div>\n\n            <ion-item text-wrap *ngIf="!isEnrolled && paypalEnabled" detail-none>\n\n                <h2>{{ \'core.courses.paypalaccepted\' | translate }}</h2>\n\n                <p>{{ \'core.paymentinstant\' | translate }}</p>\n\n                <button ion-button block margin-top (click)="paypalEnrol()">{{ \'core.courses.sendpaymentbutton\' | translate }}</button>\n\n            </ion-item>\n\n            <ion-item *ngIf="!isEnrolled && !selfEnrolInstances.length && !paypalEnabled">\n\n                <p>{{ \'core.courses.notenrollable\' | translate }}</p>\n\n            </ion-item>\n\n            <a ion-item *ngIf="canAccessCourse && downloadCourseEnabled" (click)="prefetchCourse()" detail-none [attr.aria-label]="prefetchCourseData.title | translate">\n\n                <core-icon *ngIf="prefetchCourseData.prefetchCourseIcon != \'spinner\'" [name]="prefetchCourseData.prefetchCourseIcon" item-start></core-icon>\n\n                <ion-spinner *ngIf="prefetchCourseData.prefetchCourseIcon == \'spinner\'" item-start></ion-spinner>\n\n                <h2>{{ \'core.course.downloadcourse\' | translate }}</h2>\n\n            </a>\n\n            <a ion-item (click)="openCourse()" [title]="course.fullname" *ngIf="!avoidOpenCourse && canAccessCourse">\n\n                <ion-icon name="briefcase" item-start></ion-icon>\n\n                <h2>{{ \'core.course.contents\' | translate }}</h2>\n\n            </a>\n\n        </ion-list>\n\n    </core-loading>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp\www\BCC_mobapp\bcc_custom_mma\src\core\courses\pages\course-preview\course-preview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_sites__["a" /* CoreSitesProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__["a" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_utils_text__["a" /* CoreTextUtilsProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_app__["a" /* CoreAppProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_courses__["a" /* CoreCoursesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4__providers_events__["a" /* CoreEventsProvider */],
            __WEBPACK_IMPORTED_MODULE_9__core_course_providers_options_delegate__["a" /* CoreCourseOptionsDelegate */], __WEBPACK_IMPORTED_MODULE_11__core_course_providers_helper__["a" /* CoreCourseHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_10__core_course_providers_course__["a" /* CoreCourseProvider */], __WEBPACK_IMPORTED_MODULE_12__core_course_providers_format_delegate__["a" /* CoreCourseFormatDelegate */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]])
    ], CoreCoursesCoursePreviewPage);
    return CoreCoursesCoursePreviewPage;
}());

//# sourceMappingURL=course-preview.js.map
=======
    CoreCoursesDashboardPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.searchEnabled = !this.coursesProvider.isSearchCoursesDisabledInSite();
        this.downloadCourseEnabled = !this.coursesProvider.isDownloadCourseDisabledInSite();
        this.downloadCoursesEnabled = !this.coursesProvider.isDownloadCoursesDisabledInSite();
        // Refresh the enabled flags if site is updated.
        this.updateSiteObserver = this.eventsProvider.on(__WEBPACK_IMPORTED_MODULE_2__providers_events__["a" /* CoreEventsProvider */].SITE_UPDATED, function () {
            _this.searchEnabled = !_this.coursesProvider.isSearchCoursesDisabledInSite();
            _this.downloadCourseEnabled = !_this.coursesProvider.isDownloadCourseDisabledInSite();
            _this.downloadCoursesEnabled = !_this.coursesProvider.isDownloadCoursesDisabledInSite();
            _this.switchDownload(_this.downloadEnabled);
            _this.loadSiteName();
        }, this.sitesProvider.getCurrentSiteId());
        var promises = [];
        promises.push(this.siteHomeProvider.isAvailable().then(function (enabled) {
            _this.siteHomeEnabled = enabled;
        }));
        promises.push(this.loadDashboardContent());
        // Decide which tab to load first.
        Promise.all(promises).finally(function () {
            if (_this.siteHomeEnabled && _this.dashboardEnabled) {
                var site = _this.sitesProvider.getCurrentSite(), displaySiteHome = site.getInfo() && site.getInfo().userhomepage === 0;
                _this.firstSelectedTab = displaySiteHome ? 0 : 1;
            }
            else {
                _this.firstSelectedTab = 0;
            }
            _this.tabsReady = true;
        });
    };
    /**
     * User entered the page.
     */
    CoreCoursesDashboardPage.prototype.ionViewDidEnter = function () {
        this.tabsComponent && this.tabsComponent.ionViewDidEnter();
    };
    /**
     * User left the page.
     */
    CoreCoursesDashboardPage.prototype.ionViewDidLeave = function () {
        this.tabsComponent && this.tabsComponent.ionViewDidLeave();
    };
    /**
     * Go to search courses.
     */
    CoreCoursesDashboardPage.prototype.openSearch = function () {
        this.navCtrl.push('CoreCoursesSearchPage');
    };
    /**
     * Load the site name.
     */
    CoreCoursesDashboardPage.prototype.loadSiteName = function () {
        this.siteName = this.sitesProvider.getCurrentSite().getInfo().sitename;
    };
    /**
     * Convenience function to fetch the dashboard data.
     *
     * @return {Promise<any>} Promise resolved when done.
     */
    CoreCoursesDashboardPage.prototype.loadDashboardContent = function () {
        var _this = this;
        return this.dashboardProvider.isAvailable().then(function (enabled) {
            if (enabled) {
                _this.userId = _this.sitesProvider.getCurrentSiteUserId();
                return _this.dashboardProvider.getDashboardBlocks().then(function (blocks) {
                    _this.blocks = blocks;
                }).catch(function (error) {
                    _this.domUtils.showErrorModal(error);
                    // Cannot get the blocks, just show dashboard if needed.
                    _this.loadFallbackBlocks();
                });
            }
            // Not enabled, check separated tabs.
            _this.loadFallbackBlocks();
        }).finally(function () {
            _this.dashboardEnabled = _this.blockDelegate.hasSupportedBlock(_this.blocks);
            _this.dashboardLoaded = true;
        });
    };
    /**
     * Refresh the dashboard data.
     *
     * @param {any} refresher Refresher.
     */
    CoreCoursesDashboardPage.prototype.refreshDashboard = function (refresher) {
        var _this = this;
        var promises = [];
        promises.push(this.dashboardProvider.invalidateDashboardBlocks());
        // Invalidate the blocks.
        this.blocksComponents.forEach(function (blockComponent) {
            promises.push(blockComponent.invalidate().catch(function () {
                // Ignore errors.
            }));
        });
        Promise.all(promises).finally(function () {
            _this.loadDashboardContent().finally(function () {
                refresher.complete();
            });
        });
    };
    /**
     * Toggle download enabled.
     */
    CoreCoursesDashboardPage.prototype.toggleDownload = function () {
        this.switchDownload(!this.downloadEnabled);
    };
    /**
     * Convenience function to switch download enabled.
     *
     * @param {boolean} enable If enable or disable.
     */
    CoreCoursesDashboardPage.prototype.switchDownload = function (enable) {
        this.downloadEnabled = (this.downloadCourseEnabled || this.downloadCoursesEnabled) && enable;
        this.downloadEnabledIcon = this.downloadEnabled ? 'checkbox-outline' : 'square-outline';
        this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_10__providers_courses__["a" /* CoreCoursesProvider */].EVENT_DASHBOARD_DOWNLOAD_ENABLED_CHANGED, { enabled: this.downloadEnabled });
    };
    /**
     * Load fallback blocks to shown before 3.6 when dashboard blocks are not supported.
     */
    CoreCoursesDashboardPage.prototype.loadFallbackBlocks = function () {
        this.blocks = [
            {
                name: 'myoverview'
            },
            {
                name: 'timeline'
            }
        ];
    };
    /**
     * Component being destroyed.
     */
    CoreCoursesDashboardPage.prototype.ngOnDestroy = function () {
        this.isDestroyed = true;
        this.updateSiteObserver && this.updateSiteObserver.off();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5__components_tabs_tabs__["a" /* CoreTabsComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__components_tabs_tabs__["a" /* CoreTabsComponent */])
    ], CoreCoursesDashboardPage.prototype, "tabsComponent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_9__core_sitehome_components_index_index__["a" /* CoreSiteHomeIndexComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_9__core_sitehome_components_index_index__["a" /* CoreSiteHomeIndexComponent */])
    ], CoreCoursesDashboardPage.prototype, "siteHomeComponent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_7__core_block_components_block_block__["a" /* CoreBlockComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* QueryList */])
    ], CoreCoursesDashboardPage.prototype, "blocksComponents", void 0);
    CoreCoursesDashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-courses-dashboard',template:/*ion-inline-start:"C:\wamp\www\AX-LT_2019\mma_lt\src\core\courses\pages\dashboard\dashboard.html"*/'    <ion-header>\n    <ion-navbar core-back-button>\n        <ion-title><core-format-text [text]="siteName"></core-format-text></ion-title>\n\n        <ion-buttons end>\n            <button *ngIf="searchEnabled" ion-button icon-only (click)="openSearch()" [attr.aria-label]="\'core.courses.searchcourses\' | translate">\n                <ion-icon name="search"></ion-icon>\n            </button>\n            <core-context-menu>\n                <core-context-menu-item *ngIf="downloadCourseEnabled || downloadCoursesEnabled" [priority]="1000" [content]="\'core.settings.showdownloadoptions\' | translate" (action)="toggleDownload()" [iconAction]="downloadEnabledIcon"></core-context-menu-item>\n            </core-context-menu>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <core-tabs [selectedIndex]="firstSelectedTab" [hideUntil]="tabsReady">\n        <!-- Site home tab. -->\n        <core-tab [show]="siteHomeEnabled" [title]="\'core.sitehome.sitehome\' | translate">\n            <ng-template>\n                <ion-content>\n                    <ion-refresher [enabled]="!!siteHomeComponent && siteHomeComponent.dataLoaded" (ionRefresh)="siteHomeComponent.doRefresh($event)">\n                        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n                    </ion-refresher>\n                    <core-sitehome-index></core-sitehome-index>\n                </ion-content>\n            </ng-template>\n        </core-tab>\n\n        <!-- Dashboard tab. -->\n        <core-tab [show]="dashboardEnabled" [title]="\'core.courses.mymoodle\' | translate">\n            <ng-template>\n                <ion-content>\n                    <ion-refresher [enabled]="dashboardLoaded" (ionRefresh)="refreshDashboard($event)">\n                        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n                    </ion-refresher>\n                    <core-loading [hideUntil]="dashboardLoaded" class="core-loading-center">\n                        <ion-list>\n                            <!-- Dashboard blocks. -->\n                            <ng-container *ngFor="let block of blocks">\n                                <core-block [block]="block" contextLevel="user" [instanceId]="userId" [extraData]="{\'downloadEnabled\': downloadEnabled}"></core-block>\n                            </ng-container>\n                        </ion-list>\n\n                        <core-empty-box *ngIf="blocks.length == 0" icon="qr-scanner" [message]="\'core.course.nocontentavailable\' | translate"></core-empty-box>\n                    </core-loading>\n                </ion-content>\n            </ng-template>\n        </core-tab>\n    </core-tabs>\n</ion-content>'/*ion-inline-end:"C:\wamp\www\AX-LT_2019\mma_lt\src\core\courses\pages\dashboard\dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_10__providers_courses__["a" /* CoreCoursesProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_sites__["a" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_8__core_sitehome_providers_sitehome__["a" /* CoreSiteHomeProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_events__["a" /* CoreEventsProvider */], __WEBPACK_IMPORTED_MODULE_11__providers_dashboard__["a" /* CoreCoursesDashboardProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__["a" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_6__core_block_providers_delegate__["a" /* CoreBlockDelegate */]])
    ], CoreCoursesDashboardPage);
    return CoreCoursesDashboardPage;
}());

//# sourceMappingURL=dashboard.js.map
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d

/***/ })

});
//# sourceMappingURL=44.js.map