webpackJsonp([34],{

<<<<<<< HEAD
/***/ 1874:
=======
/***/ 1945:
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginCredentialsPageModule", function() { return CoreLoginCredentialsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__credentials__ = __webpack_require__(2002);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__ = __webpack_require__(14);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email_signup__ = __webpack_require__(2077);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_user_components_components_module__ = __webpack_require__(397);
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
=======

>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
var CoreLoginCredentialsPageModule = /** @class */ (function () {
    function CoreLoginCredentialsPageModule() {
    }
    CoreLoginCredentialsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
<<<<<<< HEAD
                __WEBPACK_IMPORTED_MODULE_2__credentials__["a" /* CoreLoginCredentialsPage */]
=======
                __WEBPACK_IMPORTED_MODULE_2__email_signup__["a" /* CoreLoginEmailSignupPage */]
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
<<<<<<< HEAD
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__credentials__["a" /* CoreLoginCredentialsPage */]),
=======
                __WEBPACK_IMPORTED_MODULE_6__core_user_components_components_module__["a" /* CoreUserComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__email_signup__["a" /* CoreLoginEmailSignupPage */]),
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ]
        })
    ], CoreLoginCredentialsPageModule);
    return CoreLoginCredentialsPageModule;
}());

<<<<<<< HEAD
//# sourceMappingURL=credentials.module.js.map

/***/ }),

/***/ 2002:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreLoginCredentialsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_events__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_utils_utils__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_helper__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_contentlinks_providers_delegate__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_contentlinks_providers_helper__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__(20);
=======
//# sourceMappingURL=email-signup.module.js.map

/***/ }),

/***/ 2077:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreLoginEmailSignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utils_text__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_utils_utils__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_ws__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_helper__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_user_providers_user_profile_field_delegate__ = __webpack_require__(122);
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
 * Page to enter the user credentials.
 */
var CoreLoginCredentialsPage = /** @class */ (function () {
    function CoreLoginCredentialsPage(navCtrl, navParams, fb, appProvider, sitesProvider, loginHelper, domUtils, translate, utils, eventsProvider, contentLinksDelegate, contentLinksHelper) {
        this.navCtrl = navCtrl;
        this.appProvider = appProvider;
=======
/**
 * Page to signup using email.
 */
var CoreLoginEmailSignupPage = /** @class */ (function () {
    function CoreLoginEmailSignupPage(navCtrl, navParams, fb, wsProvider, sitesProvider, loginHelper, domUtils, translate, utils, textUtils, userProfileFieldDelegate) {
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.wsProvider = wsProvider;
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
        this.sitesProvider = sitesProvider;
        this.loginHelper = loginHelper;
        this.domUtils = domUtils;
        this.translate = translate;
        this.utils = utils;
<<<<<<< HEAD
        this.eventsProvider = eventsProvider;
        this.contentLinksDelegate = contentLinksDelegate;
        this.contentLinksHelper = contentLinksHelper;
        this.siteChecked = false;
        this.pageLoaded = false;
        this.isBrowserSSO = false;
        this.eventThrown = false;
        this.viewLeft = false;
        this.siteUrl = navParams.get('siteUrl');
        this.siteConfig = navParams.get('siteConfig');
        this.urlToOpen = navParams.get('urlToOpen');
        this.credForm = fb.group({
            username: [navParams.get('username') || '', __WEBPACK_IMPORTED_MODULE_11__angular_forms__["h" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_11__angular_forms__["h" /* Validators */].required]
        });
=======
        this.textUtils = textUtils;
        this.userProfileFieldDelegate = userProfileFieldDelegate;
        this.settingsLoaded = false;
        this.captcha = {
            recaptcharesponse: ''
        };
        this.isMinor = false; // Whether the user is minor age.
        this.siteUrl = navParams.get('siteUrl');
        // Create the ageVerificationForm.
        this.ageVerificationForm = this.fb.group({
            age: ['', __WEBPACK_IMPORTED_MODULE_9__angular_forms__["h" /* Validators */].required]
        });
        this.countryControl = this.fb.control('', __WEBPACK_IMPORTED_MODULE_9__angular_forms__["h" /* Validators */].required);
        this.ageVerificationForm.addControl('country', this.countryControl);
        // Create the signupForm with the basic controls. More controls will be added later.
        this.signupForm = this.fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_9__angular_forms__["h" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_9__angular_forms__["h" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_9__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_9__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_9__angular_forms__["h" /* Validators */].email])],
            email2: ['', __WEBPACK_IMPORTED_MODULE_9__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_9__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_9__angular_forms__["h" /* Validators */].email])]
        });
        // Setup validation errors.
        this.usernameErrors = this.loginHelper.getErrorMessages('core.login.usernamerequired');
        this.passwordErrors = this.loginHelper.getErrorMessages('core.login.passwordrequired');
        this.emailErrors = this.loginHelper.getErrorMessages('core.login.missingemail');
        this.email2Errors = this.loginHelper.getErrorMessages('core.login.missingemail', undefined, 'core.login.emailnotmatch');
        this.policyErrors = this.loginHelper.getErrorMessages('core.login.policyagree');
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
    }
    /**
     * View loaded.
     */
<<<<<<< HEAD
    CoreLoginCredentialsPage.prototype.ionViewDidLoad = function () {
        this.treatSiteConfig();
        if (this.loginHelper.isFixedUrlSet()) {
            // Fixed URL, we need to check if it uses browser SSO login.
            this.checkSite(this.siteUrl);
        }
        else {
            this.siteChecked = true;
            this.pageLoaded = true;
        }
    };
    /**
     * View left.
     */
    CoreLoginCredentialsPage.prototype.ionViewDidLeave = function () {
        this.viewLeft = true;
        this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_4__providers_events__["a" /* CoreEventsProvider */].LOGIN_SITE_UNCHECKED, { config: this.siteConfig }, this.siteId);
    };
    /**
     * Check if a site uses local_mobile, requires SSO login, etc.
     * This should be used only if a fixed URL is set, otherwise this check is already performed in CoreLoginSitePage.
     *
     * @param {string} siteUrl Site URL to check.
     * @return {Promise<any>} Promise resolved when done.
     */
    CoreLoginCredentialsPage.prototype.checkSite = function (siteUrl) {
        var _this = this;
        this.pageLoaded = false;
        // If the site is configured with http:// protocol we force that one, otherwise we use default mode.
        var protocol = siteUrl.indexOf('http://') === 0 ? 'http://' : undefined;
        return this.sitesProvider.checkSite(siteUrl, protocol).then(function (result) {
            _this.siteChecked = true;
            _this.siteUrl = result.siteUrl;
            _this.siteConfig = result.config;
            _this.treatSiteConfig();
            if (result && result.warning) {
                _this.domUtils.showErrorModal(result.warning, true, 4000);
            }
            if (_this.loginHelper.isSSOLoginNeeded(result.code)) {
                // SSO. User needs to authenticate in a browser.
                _this.isBrowserSSO = true;
                // Check that there's no SSO authentication ongoing and the view hasn't changed.
                if (!_this.appProvider.isSSOAuthenticationOngoing() && !_this.viewLeft) {
                    _this.loginHelper.confirmAndOpenBrowserForSSOLogin(result.siteUrl, result.code, result.service, result.config && result.config.launchurl);
                }
            }
            else {
                _this.isBrowserSSO = false;
            }
        }).catch(function (error) {
            _this.domUtils.showErrorModal(error);
        }).finally(function () {
            _this.pageLoaded = true;
        });
    };
    /**
     * Treat the site configuration (if it exists).
     */
    CoreLoginCredentialsPage.prototype.treatSiteConfig = function () {
        if (this.siteConfig) {
            this.siteName = this.siteConfig.sitename;
            this.logoUrl = this.siteConfig.logourl || this.siteConfig.compactlogourl;
            this.authInstructions = this.siteConfig.authinstructions || this.translate.instant('core.login.loginsteps');
            this.canSignup = this.siteConfig.registerauth == 'email' && !this.loginHelper.isEmailSignupDisabled(this.siteConfig);
            this.identityProviders = this.loginHelper.getValidIdentityProviders(this.siteConfig);
            if (!this.eventThrown && !this.viewLeft) {
                this.eventThrown = true;
                this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_4__providers_events__["a" /* CoreEventsProvider */].LOGIN_SITE_CHECKED, { config: this.siteConfig });
            }
        }
        else {
            this.siteName = null;
            this.logoUrl = null;
            this.authInstructions = null;
            this.canSignup = false;
            this.identityProviders = [];
        }
    };
    /**
     * Tries to authenticate the user.
     */
    CoreLoginCredentialsPage.prototype.login = function () {
        var _this = this;
        this.appProvider.closeKeyboard();
        // Get input data.
        var siteUrl = this.siteUrl, username = this.credForm.value.username, password = this.credForm.value.password;
        if (!this.siteChecked || this.isBrowserSSO) {
            // Site wasn't checked (it failed) or a previous check determined it was SSO. Let's check again.
            this.checkSite(siteUrl).then(function () {
                if (!_this.isBrowserSSO) {
                    // Site doesn't use browser SSO, throw app's login again.
                    return _this.login();
                }
            });
            return;
        }
        if (!username) {
            this.domUtils.showErrorModal('core.login.usernamerequired', true);
            return;
        }
        if (!password) {
            this.domUtils.showErrorModal('core.login.passwordrequired', true);
            return;
        }
        if (!this.appProvider.isOnline()) {
            this.domUtils.showErrorModal('core.networkerrormsg', true);
            return;
        }
        var modal = this.domUtils.showModalLoading();
        // Start the authentication process.
        this.sitesProvider.getUserToken(siteUrl, username, password).then(function (data) {
            return _this.sitesProvider.newSite(data.siteUrl, data.token, data.privateToken).then(function (id) {
                // Reset fields so the data is not in the view anymore.
                _this.credForm.controls['username'].reset();
                _this.credForm.controls['password'].reset();
                _this.siteId = id;
                if (_this.urlToOpen) {
                    // There's a content link to open.
                    return _this.contentLinksDelegate.getActionsFor(_this.urlToOpen, undefined, username).then(function (actions) {
                        var action = _this.contentLinksHelper.getFirstValidAction(actions);
                        if (action && action.sites.length) {
                            // Action should only have 1 site because we're filtering by username.
                            action.action(action.sites[0]);
                        }
                        else {
                            return _this.loginHelper.goToSiteInitialPage();
                        }
                    });
                }
                else {
                    return _this.loginHelper.goToSiteInitialPage();
                }
            });
        }).catch(function (error) {
            _this.loginHelper.treatUserTokenError(siteUrl, error);
        }).finally(function () {
            modal.dismiss();
        });
    };
    /**
     * Forgotten password button clicked.
     */
    CoreLoginCredentialsPage.prototype.forgottenPassword = function () {
        var _this = this;
        if (this.siteConfig && this.siteConfig.forgottenpasswordurl) {
            // URL set, open it.
            this.utils.openInApp(this.siteConfig.forgottenpasswordurl);
            return;
        }
        // Check if password reset can be done through the app.
        var modal = this.domUtils.showModalLoading();
        this.loginHelper.canRequestPasswordReset(this.siteUrl).then(function (canReset) {
            if (canReset) {
                _this.navCtrl.push('CoreLoginForgottenPasswordPage', {
                    siteUrl: _this.siteUrl, username: _this.credForm.value.username
                });
            }
            else {
                _this.loginHelper.openForgottenPassword(_this.siteUrl);
            }
=======
    CoreLoginEmailSignupPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // Fetch the data.
        this.fetchData().finally(function () {
            _this.settingsLoaded = true;
        });
    };
    /**
     * Complete the FormGroup using the settings received from server.
     */
    CoreLoginEmailSignupPage.prototype.completeFormGroup = function () {
        this.signupForm.addControl('city', this.fb.control(this.settings.defaultcity || ''));
        this.signupForm.addControl('country', this.fb.control(this.settings.country || ''));
        // Add the name fields.
        for (var i in this.settings.namefields) {
            this.signupForm.addControl(this.settings.namefields[i], this.fb.control('', __WEBPACK_IMPORTED_MODULE_9__angular_forms__["h" /* Validators */].required));
        }
        if (this.settings.sitepolicy) {
            this.signupForm.addControl('policyagreed', this.fb.control(false, __WEBPACK_IMPORTED_MODULE_9__angular_forms__["h" /* Validators */].requiredTrue));
        }
    };
    /**
     * Fetch the required data from the server-
     */
    CoreLoginEmailSignupPage.prototype.fetchData = function () {
        var _this = this;
        // Get site config.
        return this.sitesProvider.getSitePublicConfig(this.siteUrl).then(function (config) {
            _this.siteConfig = config;
            if (_this.treatSiteConfig(config)) {
                // Check content verification.
                if (typeof _this.ageDigitalConsentVerification == 'undefined') {
                    return _this.wsProvider.callAjax('core_auth_is_age_digital_consent_verification_enabled', {}, { siteUrl: _this.siteUrl }).then(function (result) {
                        _this.ageDigitalConsentVerification = result.status;
                    }).catch(function (e) {
                        // Capture exceptions, fail silently.
                    }).then(function () {
                        return _this.getSignupSettings();
                    });
                }
                else {
                    return _this.getSignupSettings();
                }
            }
        }).then(function () {
            _this.completeFormGroup();
        }).catch(function (err) {
            _this.domUtils.showErrorModal(err);
        });
    };
    /**
     * Get signup settings from server.
     */
    CoreLoginEmailSignupPage.prototype.getSignupSettings = function () {
        var _this = this;
        return this.wsProvider.callAjax('auth_email_get_signup_settings', {}, { siteUrl: this.siteUrl }).then(function (settings) {
            _this.settings = settings;
            _this.categories = _this.loginHelper.formatProfileFieldsForSignup(settings.profilefields);
            if (_this.settings.recaptchapublickey) {
                _this.captcha.recaptcharesponse = ''; // Reset captcha.
            }
            if (!_this.countryControl.value) {
                _this.countryControl.setValue(settings.country || '');
            }
            _this.namefieldsErrors = {};
            if (settings.namefields) {
                settings.namefields.forEach(function (field) {
                    _this.namefieldsErrors[field] = _this.loginHelper.getErrorMessages('core.login.missing' + field);
                });
            }
            return _this.utils.getCountryList().then(function (countries) {
                _this.countries = countries;
                _this.countriesKeys = Object.keys(countries);
            });
        });
    };
    /**
     * Treat the site config, checking if it's valid and extracting the data we're interested in.
     *
     * @param {any} siteConfig Site config to treat.
     * @return {boolean} True if success.
     */
    CoreLoginEmailSignupPage.prototype.treatSiteConfig = function (siteConfig) {
        if (siteConfig && siteConfig.registerauth == 'email' && !this.loginHelper.isEmailSignupDisabled(siteConfig)) {
            this.siteName = siteConfig.sitename;
            this.authInstructions = siteConfig.authinstructions;
            this.ageDigitalConsentVerification = siteConfig.agedigitalconsentverification;
            this.supportName = siteConfig.supportname;
            this.supportEmail = siteConfig.supportemail;
            this.countryControl.setValue(siteConfig.country || '');
            return true;
        }
        else {
            this.domUtils.showErrorModal(this.translate.instant('core.login.signupplugindisabled', { $a: this.translate.instant('core.login.auth_email') }));
            this.navCtrl.pop();
            return false;
        }
    };
    /**
     * Pull to refresh.
     *
     * @param {any} refresher Refresher.
     */
    CoreLoginEmailSignupPage.prototype.refreshSettings = function (refresher) {
        this.fetchData().finally(function () {
            refresher.complete();
        });
    };
    /**
     * Create account.
     *
     * @param {Event} e Event.
     */
    CoreLoginEmailSignupPage.prototype.create = function (e) {
        var _this = this;
        e.preventDefault();
        e.stopPropagation();
        if (!this.signupForm.valid || (this.settings.recaptchapublickey && !this.captcha.recaptcharesponse)) {
            // Form not valid. Scroll to the first element with errors.
            if (!this.domUtils.scrollToInputError(this.content)) {
                // Input not found, show an error modal.
                this.domUtils.showErrorModal('core.errorinvalidform', true);
            }
        }
        else {
            var params_1 = {
                username: this.signupForm.value.username.trim().toLowerCase(),
                password: this.signupForm.value.password,
                firstname: this.textUtils.cleanTags(this.signupForm.value.firstname),
                lastname: this.textUtils.cleanTags(this.signupForm.value.lastname),
                email: this.signupForm.value.email.trim(),
                city: this.textUtils.cleanTags(this.signupForm.value.city),
                country: this.signupForm.value.country
            }, modal_1 = this.domUtils.showModalLoading('core.sending', true);
            if (this.siteConfig.launchurl) {
                var service = this.sitesProvider.determineService(this.siteUrl);
                params_1.redirect = this.loginHelper.prepareForSSOLogin(this.siteUrl, service, this.siteConfig.launchurl);
            }
            // Get the recaptcha response (if needed).
            if (this.settings.recaptchapublickey && this.captcha.recaptcharesponse) {
                params_1.recaptcharesponse = this.captcha.recaptcharesponse;
            }
            // Get the data for the custom profile fields.
            this.userProfileFieldDelegate.getDataForFields(this.settings.profilefields, true, 'email', this.signupForm.value).then(function (fieldsData) {
                params_1.customprofilefields = fieldsData;
                _this.wsProvider.callAjax('auth_email_signup_user', params_1, { siteUrl: _this.siteUrl }).then(function (result) {
                    if (result.success) {
                        // Show alert and ho back.
                        var message = _this.translate.instant('core.login.emailconfirmsent', { $a: params_1.email });
                        _this.domUtils.showAlert(_this.translate.instant('core.success'), message);
                        _this.navCtrl.pop();
                    }
                    else {
                        if (result.warnings && result.warnings.length) {
                            var error = result.warnings[0].message;
                            if (error == 'incorrect-captcha-sol') {
                                error = _this.translate.instant('core.login.recaptchaincorrect');
                            }
                            _this.domUtils.showErrorModal(error);
                        }
                        else {
                            _this.domUtils.showErrorModal('core.login.usernotaddederror', true);
                        }
                    }
                });
            }).catch(function (error) {
                _this.domUtils.showErrorModalDefault(error, 'core.login.usernotaddederror', true);
            }).finally(function () {
                modal_1.dismiss();
            });
        }
    };
    /**
     * Escape mail to avoid special characters to be treated as a RegExp.
     *
     * @param  {string} text Initial mail.
     * @return {string}      Escaped mail.
     */
    CoreLoginEmailSignupPage.prototype.escapeMail = function (text) {
        return this.textUtils.escapeForRegex(text);
    };
    /**
     * Show authentication instructions.
     */
    CoreLoginEmailSignupPage.prototype.showAuthInstructions = function () {
        this.textUtils.expandText(this.translate.instant('core.login.instructions'), this.authInstructions);
    };
    /**
     * Show contact information on site (we have to display again the age verification form).
     */
    CoreLoginEmailSignupPage.prototype.showContactOnSite = function () {
        this.utils.openInBrowser(this.siteUrl + '/login/verify_age_location.php');
    };
    /**
     * Verify Age.
     *
     * @param {Event} e Event.
     */
    CoreLoginEmailSignupPage.prototype.verifyAge = function (e) {
        var _this = this;
        e.preventDefault();
        e.stopPropagation();
        if (!this.ageVerificationForm.valid) {
            this.domUtils.showErrorModal('core.errorinvalidform', true);
            return;
        }
        var modal = this.domUtils.showModalLoading('core.sending', true), params = this.ageVerificationForm.value;
        params.age = parseInt(params.age, 10); // Use just the integer part.
        this.wsProvider.callAjax('core_auth_is_minor', params, { siteUrl: this.siteUrl }).then(function (result) {
            if (!result.status) {
                // Not a minor, go ahead!
                _this.ageDigitalConsentVerification = false;
            }
            else {
                // Is a minor!!
                _this.isMinor = true;
            }
        }).catch(function () {
            // Something wrong, redirect to the site.
            _this.domUtils.showErrorModal('There was an error verifying your age, please try again using the browser.');
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
        }).finally(function () {
            modal.dismiss();
        });
    };
<<<<<<< HEAD
    /**
     * An OAuth button was clicked.
     *
     * @param {any} provider The provider that was clicked.
     */
    CoreLoginCredentialsPage.prototype.oauthClicked = function (provider) {
        if (!this.loginHelper.openBrowserForOAuthLogin(this.siteUrl, provider, this.siteConfig.launchurl)) {
            this.domUtils.showErrorModal('Invalid data.');
        }
    };
    /**
     * Signup button was clicked.
     */
    CoreLoginCredentialsPage.prototype.signup = function () {
        this.navCtrl.push('CoreLoginEmailSignupPage', { siteUrl: this.siteUrl });
    };
    CoreLoginCredentialsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-login-credentials',template:/*ion-inline-start:"C:\wamp\www\BCC_mobapp\bcc_custom_mma\src\core\login\pages\credentials\credentials.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'core.login.login\' | translate }}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content class="core-center-view">\n\n    <core-loading [hideUntil]="pageLoaded">\n\n        <div class="box">\n\n            <div text-wrap text-center margin-bottom>\n\n                <!-- Show site logo or a default image. -->\n\n                <img *ngIf="logoUrl" [src]="logoUrl" role="presentation">\n\n                <img *ngIf="!logoUrl" src="assets/img/login_logo.png" class="login-logo" role="presentation">\n\n\n\n                <!-- If no sitename show big siteurl. -->\n\n                <p *ngIf="!siteName" padding class="item-heading core-siteurl">{{siteUrl}}</p>\n\n                <!-- If sitename, show big sitename and small siteurl. -->\n\n                <p *ngIf="siteName" padding class="item-heading core-sitename"><core-format-text [text]="siteName"></core-format-text></p>\n\n                <p *ngIf="siteName" class="core-siteurl">{{siteUrl}}</p>\n\n            </div>\n\n            <form ion-list [formGroup]="credForm" (ngSubmit)="login()">\n\n                <ion-item *ngIf="siteChecked && !isBrowserSSO">\n\n                    <ion-input type="text" name="username" placeholder="{{ \'core.login.username\' | translate }}" formControlName="username" autocapitalize="none" autocorrect="off"></ion-input>\n\n                </ion-item>\n\n                <ion-item *ngIf="siteChecked && !isBrowserSSO" margin-bottom>\n\n                    <core-show-password item-content [name]="\'password\'">\n\n                        <ion-input class="core-ioninput-password" name="password" type="password" placeholder="{{ \'core.login.password\' | translate }}" formControlName="password" core-show-password [clearOnEdit]="false"></ion-input>\n\n                    </core-show-password>\n\n                </ion-item>\n\n                <button ion-button block [disabled]="siteChecked && !isBrowserSSO && !credForm.valid">{{ \'core.login.loginbutton\' | translate }}</button>\n\n            </form>\n\n\n\n            <!-- Forgotten password button. -->\n\n            <div padding-top>\n\n                <button ion-button block text-wrap color="light" (click)="forgottenPassword()">{{ \'core.login.forgotten\' | translate }}</button>\n\n            </div>\n\n\n\n            <ion-list *ngIf="identityProviders && identityProviders.length" padding-top>\n\n                <ion-list-header text-wrap>{{ \'core.login.potentialidps\' | translate }}</ion-list-header>\n\n                <button ion-item *ngFor="let provider of identityProviders" text-wrap class="core-oauth-icon" (click)="oauthClicked(provider)" title="{{provider.name}}">\n\n                    <img [src]="provider.iconurl" alt="{{provider.name}}" item-start>\n\n                    {{provider.name}}\n\n                </button>\n\n            </ion-list>\n\n\n\n            <ion-list *ngIf="canSignup" padding-top>\n\n                <ion-list-header text-wrap>{{ \'core.login.firsttime\' | translate }}</ion-list-header>\n\n                <ion-item no-lines text-wrap *ngIf="authInstructions">\n\n                    <p><core-format-text [text]="authInstructions"></core-format-text></p>\n\n                </ion-item>\n\n                <button ion-button block (click)="signup()">{{ \'core.login.startsignup\' | translate }}</button>\n\n            </ion-list>\n\n        </div>\n\n    </core-loading>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp\www\BCC_mobapp\bcc_custom_mma\src\core\login\pages\credentials\credentials.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_11__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_app__["a" /* CoreAppProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_sites__["a" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_helper__["a" /* CoreLoginHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__["a" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_7__providers_utils_utils__["a" /* CoreUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_events__["a" /* CoreEventsProvider */], __WEBPACK_IMPORTED_MODULE_9__core_contentlinks_providers_delegate__["a" /* CoreContentLinksDelegate */],
            __WEBPACK_IMPORTED_MODULE_10__core_contentlinks_providers_helper__["a" /* CoreContentLinksHelperProvider */]])
    ], CoreLoginCredentialsPage);
    return CoreLoginCredentialsPage;
}());

//# sourceMappingURL=credentials.js.map
=======
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], CoreLoginEmailSignupPage.prototype, "content", void 0);
    CoreLoginEmailSignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-login-email-signup',template:/*ion-inline-start:"C:\wamp\www\AX-LT_2019\mma_lt\src\core\login\pages\email-signup\email-signup.html"*/'<ion-header>\n    <ion-navbar core-back-button>\n        <ion-title>{{ \'core.login.newaccount\' | translate }}</ion-title>\n\n        <ion-buttons end>\n            <button ion-button icon-only *ngIf="authInstructions" (click)="showAuthInstructions()" [attr.aria-label]="\'core.login.instructions\' | translate">\n                <ion-icon name="help-circle"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-refresher [enabled]="settingsLoaded && !isMinor" (ionRefresh)="refreshSettings($event)">\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n    </ion-refresher>\n\n    <core-loading [hideUntil]="settingsLoaded" *ngIf="!isMinor">\n\n        <!-- Age verification. -->\n        <form ion-list *ngIf="settingsLoaded && settings && ageDigitalConsentVerification" [formGroup]="ageVerificationForm" (ngSubmit)="verifyAge($event)">\n            <ion-item-divider text-wrap>\n                <p class="item-heading">{{ \'core.agelocationverification\' | translate }}</p>\n            </ion-item-divider>\n\n            <ion-item text-wrap>\n                <ion-label stacked core-mark-required="true">{{ \'core.whatisyourage\' | translate }}</ion-label>\n                <ion-input type="number" name="age" placeholder="0" formControlName="age" autocapitalize="none" autocorrect="off"></ion-input>\n            </ion-item>\n\n            <ion-item text-wrap>\n                <ion-label stacked core-mark-required="true">{{ \'core.wheredoyoulive\' | translate }}</ion-label>\n                <ion-select name="country" formControlName="country" [placeholder]="\'core.login.selectacountry\' | translate">\n                    <ion-option value="">{{ \'core.login.selectacountry\' | translate }}</ion-option>\n                    <ion-option *ngFor="let key of countriesKeys" [value]="key">{{countries[key]}}</ion-option>\n                </ion-select>\n            </ion-item>\n\n            <!-- Submit button. -->\n            <ion-item padding>\n                <button ion-button block type="submit" [disabled]="!ageVerificationForm.valid">{{ \'core.proceed\' | translate }}</button>\n            </ion-item>\n\n            <ion-item text-wrap>\n                <p class="item-heading">{{ \'core.whyisthisrequired\' | translate }}</p>\n                <p>{{ \'core.explanationdigitalminor\' | translate }}</p>\n            </ion-item>\n        </form>\n\n        <!-- Signup form. -->\n        <form ion-list *ngIf="settingsLoaded && settings && !ageDigitalConsentVerification" [formGroup]="signupForm" (ngSubmit)="create($event)">\n            <ion-item text-wrap text-center>\n                <!-- If no sitename show big siteurl. -->\n                <p *ngIf="!siteName" padding class="item-heading">{{siteUrl}}</p>\n                <!-- If sitename, show big sitename and small siteurl. -->\n                <p *ngIf="siteName" padding class="item-heading"><core-format-text [text]="siteName"></core-format-text></p>\n                <p *ngIf="siteName">{{siteUrl}}</p>\n            </ion-item>\n\n            <!-- Username and password. -->\n            <ion-item-divider text-wrap>\n                {{ \'core.login.createuserandpass\' | translate }}\n            </ion-item-divider>\n            <ion-item text-wrap>\n                <ion-label stacked core-mark-required="true">{{ \'core.login.username\' | translate }}</ion-label>\n                <ion-input type="text" name="username" placeholder="{{ \'core.login.username\' | translate }}" formControlName="username" autocapitalize="none" autocorrect="off"></ion-input>\n                <core-input-errors item-content [control]="signupForm.controls.username" [errorMessages]="usernameErrors"></core-input-errors>\n            </ion-item>\n            <ion-item text-wrap>\n                <ion-label stacked core-mark-required="true">{{ \'core.login.password\' | translate }}</ion-label>\n                <core-show-password item-content [name]="\'password\'">\n                    <ion-input type="password" name="password" placeholder="{{ \'core.login.password\' | translate }}" formControlName="password" [clearOnEdit]="false"></ion-input>\n                </core-show-password>\n                <p *ngIf="settings.passwordpolicy" item-content class="core-input-footnote">\n                    {{settings.passwordpolicy}}\n                </p>\n                <core-input-errors item-content [control]="signupForm.controls.password" [errorMessages]="passwordErrors"></core-input-errors>\n            </ion-item>\n\n            <!-- More details. -->\n            <ion-item-divider text-wrap>\n                {{ \'core.login.supplyinfo\' | translate }}\n            </ion-item-divider>\n            <ion-item text-wrap>\n                <ion-label stacked core-mark-required="true">{{ \'core.user.email\' | translate }}</ion-label>\n                <ion-input type="email" name="email" placeholder="{{ \'core.user.email\' | translate }}" formControlName="email" autocapitalize="none" autocorrect="off"></ion-input>\n                <core-input-errors item-content [control]="signupForm.controls.email" [errorMessages]="emailErrors"></core-input-errors>\n            </ion-item>\n            <ion-item text-wrap>\n                <ion-label stacked core-mark-required="true">{{ \'core.user.emailagain\' | translate }}</ion-label>\n                <ion-input type="email" name="email2" placeholder="{{ \'core.user.emailagain\' | translate }}" formControlName="email2" autocapitalize="none" autocorrect="off" [pattern]="escapeMail(signupForm.controls.email.value)"></ion-input>\n                <core-input-errors item-content [control]="signupForm.controls.email2" [errorMessages]="email2Errors"></core-input-errors>\n            </ion-item>\n            <ion-item *ngFor="let nameField of settings.namefields" text-wrap>\n                <ion-label stacked core-mark-required="true">{{ \'core.user.\' + nameField | translate }}</ion-label>\n                <ion-input type="text" name="nameField" placeholder="{{ \'core.user.\' + nameField | translate }}" formControlName="{{nameField}}" autocorrect="off"></ion-input>\n                <core-input-errors item-content [control]="signupForm.controls[nameField]" [errorMessages]="namefieldsErrors[nameField]"></core-input-errors>\n            </ion-item>\n            <ion-item text-wrap>\n                <ion-label stacked>{{ \'core.user.city\' | translate }}</ion-label>\n                <ion-input type="text" name="city" placeholder="{{ \'core.user.city\' | translate }}" formControlName="city" autocorrect="off"></ion-input>\n            </ion-item>\n            <ion-item text-wrap>\n                <ion-label stacked id="core-login-signup-country">{{ \'core.user.country\' | translate }}</ion-label>\n                <ion-select name="country" formControlName="country" aria-labelledby="core-login-signup-country" [placeholder]="\'core.login.selectacountry\' | translate">\n                    <ion-option value="">{{ \'core.login.selectacountry\' | translate }}</ion-option>\n                    <ion-option *ngFor="let key of countriesKeys" [value]="key">{{countries[key]}}</ion-option>\n                </ion-select>\n            </ion-item>\n\n            <!-- Other categories. -->\n            <ng-container *ngFor="let category of categories">\n                <ion-item-divider text-wrap>{{ category.name }}</ion-item-divider>\n                <core-user-profile-field *ngFor="let field of category.fields" [field]="field" edit="true" signup="true" registerAuth="email" [form]="signupForm"></core-user-profile-field>\n            </ng-container>\n\n            <!-- ReCAPTCHA -->\n            <ng-container *ngIf="settings.recaptchapublickey">\n                <ion-item-divider text-wrap>{{ \'core.login.security_question\' | translate }}</ion-item-divider>\n                <ion-item text-wrap>\n                    <core-recaptcha [publicKey]="settings.recaptchapublickey" [model]="captcha" [siteUrl]="siteUrl"></core-recaptcha>\n                </ion-item>\n            </ng-container>\n\n            <!-- Site policy (if any). -->\n            <ng-container *ngIf="settings.sitepolicy">\n                <ion-item-divider text-wrap>{{ \'core.login.policyagreement\' | translate }}</ion-item-divider>\n                <ion-item text-wrap>\n                    <p><a [href]="settings.sitepolicy" core-link capture="false">{{ \'core.login.policyagreementclick\' | translate }}</a></p>\n                </ion-item>\n                <ion-item text-wrap>\n                    <ion-label>\n                        <span [core-mark-required]="true">{{ \'core.login.policyaccept\' | translate }}</span>\n                        <core-input-errors [control]="signupForm.controls.policyagreed" [errorMessages]="policyErrors"></core-input-errors>\n                    </ion-label>\n                    <ion-checkbox item-end name="policyagreed" formControlName="policyagreed"></ion-checkbox>\n                </ion-item>\n            </ng-container>\n\n            <!-- Submit button. -->\n            <ion-item padding>\n                <button ion-button block color="primary" type="submit">{{ \'core.login.createaccount\' | translate }}</button>\n            </ion-item>\n        </form>\n    </core-loading>\n\n    <ion-list *ngIf="isMinor">\n        <ion-item-divider text-wrap>\n            <p *ngIf="siteName" class="item-heading padding"><core-format-text [text]="siteName"></core-format-text></p>\n        </ion-item-divider>\n        <ion-item text-wrap>\n            <p class="item-heading">{{ \'core.considereddigitalminor\' | translate }}</p>\n            <p>{{ \'core.digitalminor_desc\' | translate }}</p>\n            <p *ngIf="supportName">{{ supportName }}</p>\n            <p *ngIf="supportEmail">{{ supportEmail }}</p>\n            <div padding *ngIf="!supportName && !supportEmail">\n                <button ion-button block (click)="showContactOnSite()">\n                    {{ \'core.openinbrowser\' | translate }}\n                </button>\n            </div>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\wamp\www\AX-LT_2019\mma_lt\src\core\login\pages\email-signup\email-signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_7__providers_ws__["a" /* CoreWSProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_sites__["a" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_helper__["a" /* CoreLoginHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__["a" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_6__providers_utils_utils__["a" /* CoreUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_utils_text__["a" /* CoreTextUtilsProvider */], __WEBPACK_IMPORTED_MODULE_10__core_user_providers_user_profile_field_delegate__["a" /* CoreUserProfileFieldDelegate */]])
    ], CoreLoginEmailSignupPage);
    return CoreLoginEmailSignupPage;
}());

//# sourceMappingURL=email-signup.js.map
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d

/***/ })

});
//# sourceMappingURL=34.js.map