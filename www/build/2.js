webpackJsonp([2],{

/***/ 1803:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessagesSearchPageModule", function() { return AddonMessagesSearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search__ = __webpack_require__(1935);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_components_module__ = __webpack_require__(1909);
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








var AddonMessagesSearchPageModule = /** @class */ (function () {
    function AddonMessagesSearchPageModule() {
    }
    AddonMessagesSearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__search__["a" /* AddonMessagesSearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__["a" /* CorePipesModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_components_module__["a" /* AddonMessagesComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__search__["a" /* AddonMessagesSearchPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonMessagesSearchPageModule);
    return AddonMessagesSearchPageModule;
}());

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 1909:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonMessagesComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_discussions_discussions__ = __webpack_require__(1910);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_contacts_contacts__ = __webpack_require__(1911);
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









var AddonMessagesComponentsModule = /** @class */ (function () {
    function AddonMessagesComponentsModule() {
    }
    AddonMessagesComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__components_discussions_discussions__["a" /* AddonMessagesDiscussionsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_contacts_contacts__["a" /* AddonMessagesContactsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__["a" /* CorePipesModule */]
            ],
            providers: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_7__components_discussions_discussions__["a" /* AddonMessagesDiscussionsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_contacts_contacts__["a" /* AddonMessagesContactsComponent */]
            ]
        })
    ], AddonMessagesComponentsModule);
    return AddonMessagesComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 1910:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonMessagesDiscussionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_events__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_messages__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_utils_utils__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__addon_pushnotifications_providers_delegate__ = __webpack_require__(133);
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










/**
 * Component that displays the list of discussions.
 */
var AddonMessagesDiscussionsComponent = /** @class */ (function () {
    function AddonMessagesDiscussionsComponent(eventsProvider, sitesProvider, translate, messagesProvider, domUtils, navParams, appProvider, platform, utils, pushNotificationsDelegate) {
        var _this = this;
        this.eventsProvider = eventsProvider;
        this.messagesProvider = messagesProvider;
        this.domUtils = domUtils;
        this.appProvider = appProvider;
        this.loaded = false;
        this.search = {
            enabled: false,
            showResults: false,
            results: [],
            loading: '',
            text: ''
        };
        this.search.loading = translate.instant('core.searching');
        this.loadingMessages = translate.instant('core.loading');
        this.siteId = sitesProvider.getCurrentSiteId();
        // Update discussions when new message is received.
        this.newMessagesObserver = eventsProvider.on(__WEBPACK_IMPORTED_MODULE_5__providers_messages__["a" /* AddonMessagesProvider */].NEW_MESSAGE_EVENT, function (data) {
            if (data.userId) {
                var discussion = _this.discussions.find(function (disc) {
                    return disc.message.user == data.userId;
                });
                if (typeof discussion == 'undefined') {
                    _this.loaded = false;
                    _this.refreshData().finally(function () {
                        _this.loaded = true;
                    });
                }
                else {
                    // An existing discussion has a new message, update the last message.
                    discussion.message.message = data.message;
                    discussion.message.timecreated = data.timecreated;
                }
            }
        }, this.siteId);
        // Update discussions when a message is read.
        this.readChangedObserver = eventsProvider.on(__WEBPACK_IMPORTED_MODULE_5__providers_messages__["a" /* AddonMessagesProvider */].READ_CHANGED_EVENT, function (data) {
            if (data.userId) {
                var discussion = _this.discussions.find(function (disc) {
                    return disc.message.user == data.userId;
                });
                if (typeof discussion != 'undefined') {
                    // A discussion has been read reset counter.
                    discussion.unread = false;
                    // Discussions changed, invalidate them.
                    _this.messagesProvider.invalidateDiscussionsCache();
                }
            }
        }, this.siteId);
        // Update discussions when cron read is executed.
        this.cronObserver = eventsProvider.on(__WEBPACK_IMPORTED_MODULE_5__providers_messages__["a" /* AddonMessagesProvider */].READ_CRON_EVENT, function (data) {
            _this.refreshData();
        }, this.siteId);
        // Refresh the view when the app is resumed.
        this.appResumeSubscription = platform.resume.subscribe(function () {
            if (!_this.loaded) {
                return;
            }
            _this.loaded = false;
            _this.refreshData();
        });
        this.discussionUserId = navParams.get('discussionUserId') || false;
        // If a message push notification is received, refresh the view.
        this.pushObserver = pushNotificationsDelegate.on('receive').subscribe(function (notification) {
            // New message received. If it's from current site, refresh the data.
            if (utils.isFalseOrZero(notification.notif) && notification.site == _this.siteId) {
                _this.refreshData();
            }
        });
    }
    /**
     * Component loaded.
     */
    AddonMessagesDiscussionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.discussionUserId) {
            // There is a discussion to load, open the discussion in a new state.
            this.gotoDiscussion(this.discussionUserId);
        }
        this.fetchData().then(function () {
            if (!_this.discussionUserId && _this.discussions.length > 0) {
                // Take first and load it.
                _this.gotoDiscussion(_this.discussions[0].message.user, undefined, true);
            }
        });
    };
    /**
     * Refresh the data.
     *
     * @param {any} [refresher] Refresher.
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonMessagesDiscussionsComponent.prototype.refreshData = function (refresher) {
        var _this = this;
        return this.messagesProvider.invalidateDiscussionsCache().then(function () {
            return _this.fetchData().finally(function () {
                if (refresher) {
                    // Actions to take if refresh comes from the user.
                    _this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_5__providers_messages__["a" /* AddonMessagesProvider */].READ_CHANGED_EVENT, undefined, _this.siteId);
                    refresher.complete();
                }
            });
        });
    };
    /**
     * Fetch discussions.
     *
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonMessagesDiscussionsComponent.prototype.fetchData = function () {
        var _this = this;
        this.loadingMessage = this.loadingMessages;
        this.search.enabled = this.messagesProvider.isSearchMessagesEnabled();
        return this.messagesProvider.getDiscussions().then(function (discussions) {
            // Convert to an array for sorting.
            var discussionsSorted = [];
            for (var userId in discussions) {
                discussions[userId].unread = !!discussions[userId].unread;
                discussionsSorted.push(discussions[userId]);
            }
            _this.discussions = discussionsSorted.sort(function (a, b) {
                return b.message.timecreated - a.message.timecreated;
            });
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'addon.messages.errorwhileretrievingdiscussions', true);
        }).finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Clear search and show discussions again.
     */
    AddonMessagesDiscussionsComponent.prototype.clearSearch = function () {
        var _this = this;
        this.loaded = false;
        this.search.showResults = false;
        this.search.text = ''; // Reset searched string.
        this.fetchData().finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Search messages cotaining text.
     *
     * @param  {string}       query Text to search for.
     * @return {Promise<any>}       Resolved when done.
     */
    AddonMessagesDiscussionsComponent.prototype.searchMessage = function (query) {
        var _this = this;
        this.appProvider.closeKeyboard();
        this.loaded = false;
        this.loadingMessage = this.search.loading;
        return this.messagesProvider.searchMessages(query).then(function (searchResults) {
            _this.search.showResults = true;
            _this.search.results = searchResults;
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'addon.messages.errorwhileretrievingmessages', true);
        }).finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Navigate to a particular discussion.
     *
     * @param {number} discussionUserId Discussion Id to load.
     * @param {number} [messageId]      Message to scroll after loading the discussion. Used when searching.
     * @param {boolean} [onlyWithSplitView=false]  Only go to Discussion if split view is on.
     */
    AddonMessagesDiscussionsComponent.prototype.gotoDiscussion = function (discussionUserId, messageId, onlyWithSplitView) {
        if (onlyWithSplitView === void 0) { onlyWithSplitView = false; }
        this.discussionUserId = discussionUserId;
        var params = {
            discussion: discussionUserId,
            onlyWithSplitView: onlyWithSplitView
        };
        if (messageId) {
            params['message'] = messageId;
        }
        this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_5__providers_messages__["a" /* AddonMessagesProvider */].SPLIT_VIEW_LOAD_EVENT, params, this.siteId);
    };
    /**
     * Component destroyed.
     */
    AddonMessagesDiscussionsComponent.prototype.ngOnDestroy = function () {
        this.newMessagesObserver && this.newMessagesObserver.off();
        this.readChangedObserver && this.readChangedObserver.off();
        this.cronObserver && this.cronObserver.off();
        this.appResumeSubscription && this.appResumeSubscription.unsubscribe();
        this.pushObserver && this.pushObserver.unsubscribe();
    };
    AddonMessagesDiscussionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'addon-messages-discussions',template:/*ion-inline-start:"C:\wamp\www\AX-LT_2019\mma_lt2\src\addon\messages\components\discussions\addon-messages-discussions.html"*/'<ion-content>\n\n    <ion-refresher [enabled]="loaded" (ionRefresh)="refreshData($event)">\n\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n    </ion-refresher>\n\n\n\n    <core-search-box *ngIf="search.enabled" (onSubmit)="searchMessage($event)" (onClear)="clearSearch($event)" [placeholder]=" \'addon.messages.message\' | translate" autocorrect="off" spellcheck="false" lengthCheck="2" [disabled]="!loaded"></core-search-box>\n\n\n\n    <core-loading [hideUntil]="loaded" [message]="loadingMessage">\n\n\n\n        <core-empty-box *ngIf="(!discussions || discussions.length <= 0) && !search.showResults" icon="chatbubbles" [message]="\'addon.messages.nomessages\' | translate"></core-empty-box>\n\n\n\n        <core-empty-box *ngIf="(!search.results || search.results.length <= 0) && search.showResults" icon="search" [message]="\'core.noresults\' | translate"></core-empty-box>\n\n\n\n        <ion-list *ngIf="search.showResults" no-margin>\n\n            <ion-item-divider color="light">\n\n                <h2>{{ \'core.searchresults\' | translate }}</h2>\n\n                <ion-note item-end>{{ search.results.length }}</ion-note>\n\n            </ion-item-divider>\n\n            <a ion-item text-wrap *ngFor="let result of search.results" [title]="result.fullname" (click)="gotoDiscussion(result.userid, result.messageid)" [class.core-split-item-selected]="result.userid == discussionUserId" detail-none>\n\n                <ion-avatar item-start>\n\n                    <img src="{{result.profileimageurl}}" [alt]="\'core.pictureof\' | translate:{$a: result.fullname}" core-external-content onError="this.src=\'assets/img/user-avatar.png\'">\n\n                </ion-avatar>\n\n                <h2><core-format-text [text]="result.fullname"></core-format-text></h2>\n\n                <p><core-format-text clean="true" singleLine="true" [text]="result.lastmessage"></core-format-text></p>\n\n            </a>\n\n        </ion-list>\n\n\n\n        <ion-list *ngIf="!search.showResults" no-margin>\n\n            <a ion-item text-wrap *ngFor="let discussion of discussions" [title]="discussion.fullname" (click)="gotoDiscussion(discussion.message.user)" [class.core-split-item-selected]="discussion.message.user == discussionUserId" detail-none>\n\n                <ion-avatar item-start>\n\n                    <img src="{{discussion.profileimageurl}}" [alt]="\'core.pictureof\' | translate:{$a: discussion.fullname}" core-external-content onError="this.src=\'assets/img/user-avatar.png\'">\n\n                </ion-avatar>\n\n                <h2>\n\n                    <core-format-text [text]="discussion.fullname"></core-format-text>\n\n                    <ion-note *ngIf="discussion.message.timecreated > 0 || discussion.unread">\n\n                        <span *ngIf="discussion.unread" class="core-primary-circle"></span>\n\n                        <span *ngIf="discussion.message.timecreated > 0">{{discussion.message.timecreated / 1000 | coreDateDayOrTime}}</span>\n\n                    </ion-note>\n\n                </h2>\n\n                <p><core-format-text clean="true" singleLine="true" [text]="discussion.message.message"></core-format-text></p>\n\n            </a>\n\n        </ion-list>\n\n    </core-loading>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp\www\AX-LT_2019\mma_lt2\src\addon\messages\components\discussions\addon-messages-discussions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_events__["a" /* CoreEventsProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_sites__["a" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_messages__["a" /* AddonMessagesProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__["a" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_8__providers_app__["a" /* CoreAppProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */], __WEBPACK_IMPORTED_MODULE_7__providers_utils_utils__["a" /* CoreUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_9__addon_pushnotifications_providers_delegate__["a" /* AddonPushNotificationsDelegate */]])
    ], AddonMessagesDiscussionsComponent);
    return AddonMessagesDiscussionsComponent;
}());

//# sourceMappingURL=discussions.js.map

/***/ }),

/***/ 1911:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonMessagesContactsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_messages__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utils_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_events__ = __webpack_require__(12);
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








/**
 * Component that displays the list of contacts.
 */
var AddonMessagesContactsComponent = /** @class */ (function () {
    function AddonMessagesContactsComponent(sitesProvider, translate, appProvider, messagesProvider, domUtils, navParams, eventsProvider) {
        this.appProvider = appProvider;
        this.messagesProvider = messagesProvider;
        this.domUtils = domUtils;
        this.eventsProvider = eventsProvider;
        this.noSearchTypes = ['online', 'offline', 'blocked', 'strangers'];
        this.loaded = false;
        this.contactTypes = this.noSearchTypes;
        this.searchType = 'search';
        this.loadingMessage = '';
        this.hasContacts = false;
        this.contacts = {
            search: []
        };
        this.searchString = '';
        this.currentUserId = sitesProvider.getCurrentSiteUserId();
        this.siteId = sitesProvider.getCurrentSiteId();
        this.searchingMessages = translate.instant('core.searching');
        this.loadingMessages = translate.instant('core.loading');
        this.loadingMessage = this.loadingMessages;
        this.discussionUserId = navParams.get('discussionUserId') || false;
    }
    /**
     * Component loaded.
     */
    AddonMessagesContactsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.discussionUserId) {
            // There is a discussion to load, open the discussion in a new state.
            this.gotoDiscussion(this.discussionUserId);
        }
        this.fetchData().then(function () {
            if (!_this.discussionUserId && _this.hasContacts) {
                var contact = void 0;
                for (var x in _this.contacts) {
                    if (_this.contacts[x].length > 0) {
                        contact = _this.contacts[x][0];
                        break;
                    }
                }
                if (contact) {
                    // Take first and load it.
                    _this.gotoDiscussion(contact.id, true);
                }
            }
        }).finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Refresh the data.
     *
     * @param {any} [refresher] Refresher.
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonMessagesContactsComponent.prototype.refreshData = function (refresher) {
        var _this = this;
        var promise;
        if (this.searchString) {
            // User has searched, update the search.
            promise = this.performSearch(this.searchString);
        }
        else {
            // Update contacts.
            promise = this.messagesProvider.invalidateAllContactsCache(this.currentUserId).then(function () {
                return _this.fetchData();
            });
        }
        return promise.finally(function () {
            refresher.complete();
        });
    };
    /**
     * Fetch contacts.
     *
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonMessagesContactsComponent.prototype.fetchData = function () {
        var _this = this;
        this.loadingMessage = this.loadingMessages;
        return this.messagesProvider.getAllContacts().then(function (contacts) {
            for (var x in contacts) {
                if (contacts[x].length > 0) {
                    _this.contacts[x] = _this.sortUsers(contacts[x]);
                }
                else {
                    _this.contacts[x] = [];
                }
            }
            _this.clearSearch();
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'addon.messages.errorwhileretrievingcontacts', true);
        });
    };
    /**
     * Sort user list by fullname
     * @param  {any[]} list List to sort.
     * @return {any[]}      Sorted list.
     */
    AddonMessagesContactsComponent.prototype.sortUsers = function (list) {
        return list.sort(function (a, b) {
            var compareA = a.fullname.toLowerCase(), compareB = b.fullname.toLowerCase();
            return compareA.localeCompare(compareB);
        });
    };
    /**
     * Clear search and show all contacts again.
     */
    AddonMessagesContactsComponent.prototype.clearSearch = function () {
        this.searchString = ''; // Reset searched string.
        this.contactTypes = this.noSearchTypes;
        this.hasContacts = false;
        for (var x in this.contacts) {
            if (this.contacts[x].length > 0) {
                this.hasContacts = true;
                return;
            }
        }
    };
    /**
     * Search users from the UI.
     *
     * @param  {string}       query Text to search for.
     * @return {Promise<any>}       Resolved when done.
     */
    AddonMessagesContactsComponent.prototype.search = function (query) {
        var _this = this;
        this.appProvider.closeKeyboard();
        this.loaded = false;
        this.loadingMessage = this.searchingMessages;
        return this.performSearch(query).finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Perform the search of users.
     *
     * @param  {string}       query Text to search for.
     * @return {Promise<any>}       Resolved when done.
     */
    AddonMessagesContactsComponent.prototype.performSearch = function (query) {
        var _this = this;
        return this.messagesProvider.searchContacts(query).then(function (result) {
            _this.hasContacts = result.length > 0;
            _this.searchString = query;
            _this.contactTypes = ['search'];
            _this.contacts['search'] = _this.sortUsers(result);
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'addon.messages.errorwhileretrievingcontacts', true);
        });
    };
    /**
     * Navigate to a particular discussion.
     *
     * @param {number} discussionUserId Discussion Id to load.
     * @param {boolean} [onlyWithSplitView=false]  Only go to Discussion if split view is on.
     */
    AddonMessagesContactsComponent.prototype.gotoDiscussion = function (discussionUserId, onlyWithSplitView) {
        if (onlyWithSplitView === void 0) { onlyWithSplitView = false; }
        this.discussionUserId = discussionUserId;
        var params = {
            discussion: discussionUserId,
            onlyWithSplitView: onlyWithSplitView
        };
        this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_4__providers_messages__["a" /* AddonMessagesProvider */].SPLIT_VIEW_LOAD_EVENT, params, this.siteId);
    };
    AddonMessagesContactsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'addon-messages-contacts',template:/*ion-inline-start:"C:\wamp\www\AX-LT_2019\mma_lt2\src\addon\messages\components\contacts\addon-messages-contacts.html"*/'<ion-content>\n\n    <ion-refresher [enabled]="loaded" (ionRefresh)="refreshData($event)">\n\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n    </ion-refresher>\n\n\n\n    <core-search-box (onSubmit)="search($event)" (onClear)="clearSearch($event)" [placeholder]=" \'addon.messages.contactname\' | translate" autocorrect="off" spellcheck="false" lengthCheck="2" [disabled]="!loaded"></core-search-box>\n\n\n\n    <core-loading [hideUntil]="loaded" [message]="loadingMessage">\n\n        <core-empty-box *ngIf="!hasContacts && searchString == \'\'" icon="person" [message]="\'addon.messages.contactlistempty\' | translate"></core-empty-box>\n\n\n\n        <core-empty-box *ngIf="!hasContacts && searchString != \'\'" icon="person" [message]="\'addon.messages.nousersfound\' | translate"></core-empty-box>\n\n\n\n        <ion-list *ngFor="let contactType of contactTypes" no-margin>\n\n            <ng-container *ngIf="contacts[contactType] && (contacts[contactType].length > 0 || contactType === searchType)">\n\n                <ion-item-divider color="light">\n\n                    <h2>{{ \'addon.messages.type_\' + contactType | translate }}</h2>\n\n                    <ion-note item-end>{{ contacts[contactType].length }}</ion-note>\n\n                </ion-item-divider>\n\n                <ng-container *ngFor="let contact of contacts[contactType]">\n\n                    <!-- Don\'t show deleted users -->\n\n                    <a ion-item text-wrap *ngIf="contact.profileimageurl || contact.profileimageurlsmall"  [title]="contact.fullname" (click)="gotoDiscussion(contact.id)" [class.core-split-item-selected]="contact.id == discussionUserId" detail-none>\n\n                        <ion-avatar item-start>\n\n                            <img src="{{contact.profileimageurl || contact.profileimageurlsmall}}" [alt]="\'core.pictureof\' | translate:{$a: contact.fullname}" core-external-content onError="this.src=\'assets/img/user-avatar.png\'">\n\n                        </ion-avatar>\n\n                        <h2><core-format-text [text]="contact.fullname"></core-format-text></h2>\n\n                    </a>\n\n                </ng-container>\n\n            </ng-container>\n\n        </ion-list>\n\n    </core-loading>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp\www\AX-LT_2019\mma_lt2\src\addon\messages\components\contacts\addon-messages-contacts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_sites__["a" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_6__providers_app__["a" /* CoreAppProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_messages__["a" /* AddonMessagesProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_utils_dom__["a" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_7__providers_events__["a" /* CoreEventsProvider */]])
    ], AddonMessagesContactsComponent);
    return AddonMessagesContactsComponent;
}());

//# sourceMappingURL=contacts.js.map

/***/ }),

/***/ 1935:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonMessagesSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_events__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_messages__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_split_view_split_view__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utils_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_app__ = __webpack_require__(9);
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







/**
 * Page for searching users.
 */
var AddonMessagesSearchPage = /** @class */ (function () {
    function AddonMessagesSearchPage(appProvider, domUtils, eventsProvider, sitesProvider, messagesProvider) {
        var _this = this;
        this.appProvider = appProvider;
        this.domUtils = domUtils;
        this.messagesProvider = messagesProvider;
        this.disableSearch = false;
        this.displaySearching = false;
        this.displayResults = false;
        this.query = '';
        this.contacts = {
            type: 'contacts',
            titleString: 'addon.messages.contacts',
            emptyString: 'addon.messages.searchnocontactsfound',
            results: [],
            canLoadMore: false,
            loadingMore: false
        };
        this.nonContacts = {
            type: 'noncontacts',
            titleString: 'addon.messages.noncontacts',
            emptyString: 'addon.messages.searchnononcontactsfound',
            results: [],
            canLoadMore: false,
            loadingMore: false
        };
        this.messages = {
            type: 'messages',
            titleString: 'addon.messages.messages',
            emptyString: 'addon.messages.searchnomessagesfound',
            results: [],
            canLoadMore: false,
            loadingMore: false,
            loadMoreError: false
        };
        this.selectedResult = null;
        // Update block status of a user.
        this.memberInfoObserver = eventsProvider.on(__WEBPACK_IMPORTED_MODULE_3__providers_messages__["a" /* AddonMessagesProvider */].MEMBER_INFO_CHANGED_EVENT, function (data) {
            if (!data.userBlocked && !data.userUnblocked) {
                // The block status has not changed, ignore.
                return;
            }
            var contact = _this.contacts.results.find(function (user) { return user.id == data.userId; });
            if (contact) {
                contact.isblocked = data.userBlocked;
            }
            else {
                var nonContact = _this.nonContacts.results.find(function (user) { return user.id == data.userId; });
                if (nonContact) {
                    nonContact.isblocked = data.userBlocked;
                }
            }
            _this.messages.results.forEach(function (message) {
                if (message.userid == data.userId) {
                    message.isblocked = data.userBlocked;
                }
            });
        }, sitesProvider.getCurrentSiteId());
    }
    /**
     * Clear search.
     */
    AddonMessagesSearchPage.prototype.clearSearch = function () {
        this.query = '';
        this.displayResults = false;
        this.splitviewCtrl.emptyDetails();
    };
    /**
     * Start a new search or load more results.
     *
     * @param {string} query Text to search for.
     * @param {strings} loadMore Load more contacts, noncontacts or messages. If undefined, start a new search.
     * @param {any} [infiniteComplete] Infinite scroll complete function. Only used from core-infinite-loading.
     * @return {Promise<any>} Resolved when done.
     */
    AddonMessagesSearchPage.prototype.search = function (query, loadMore, infiniteComplete) {
        var _this = this;
        this.appProvider.closeKeyboard();
        this.query = query;
        this.disableSearch = true;
        this.displaySearching = !loadMore;
        var promises = [];
        var newContacts = [];
        var newNonContacts = [];
        var newMessages = [];
        var canLoadMoreContacts = false;
        var canLoadMoreNonContacts = false;
        var canLoadMoreMessages = false;
        if (!loadMore || loadMore == 'contacts' || loadMore == 'noncontacts') {
            var limitNum = loadMore ? __WEBPACK_IMPORTED_MODULE_3__providers_messages__["a" /* AddonMessagesProvider */].LIMIT_SEARCH : __WEBPACK_IMPORTED_MODULE_3__providers_messages__["a" /* AddonMessagesProvider */].LIMIT_INITIAL_USER_SEARCH;
            var limitFrom = 0;
            if (loadMore == 'contacts') {
                limitFrom = this.contacts.results.length;
                this.contacts.loadingMore = true;
            }
            else if (loadMore == 'noncontacts') {
                limitFrom = this.nonContacts.results.length;
                this.nonContacts.loadingMore = true;
            }
            promises.push(this.messagesProvider.searchUsers(query, limitFrom, limitNum).then(function (result) {
                if (!loadMore || loadMore == 'contacts') {
                    newContacts = result.contacts;
                    canLoadMoreContacts = result.canLoadMoreContacts;
                }
                if (!loadMore || loadMore == 'noncontacts') {
                    newNonContacts = result.nonContacts;
                    canLoadMoreNonContacts = result.canLoadMoreNonContacts;
                }
            }));
        }
        if (!loadMore || loadMore == 'messages') {
            var limitFrom = 0;
            if (loadMore == 'messages') {
                limitFrom = this.messages.results.length;
                this.messages.loadingMore = true;
            }
            promises.push(this.messagesProvider.searchMessages(query, undefined, limitFrom).then(function (result) {
                newMessages = result.messages;
                canLoadMoreMessages = result.canLoadMore;
            }));
        }
        return Promise.all(promises).then(function () {
            if (!loadMore) {
                _this.contacts.results = [];
                _this.nonContacts.results = [];
                _this.messages.results = [];
            }
            _this.displayResults = true;
            if (!loadMore || loadMore == 'contacts') {
                (_a = _this.contacts.results).push.apply(_a, newContacts);
                _this.contacts.canLoadMore = canLoadMoreContacts;
            }
            if (!loadMore || loadMore == 'noncontacts') {
                (_b = _this.nonContacts.results).push.apply(_b, newNonContacts);
                _this.nonContacts.canLoadMore = canLoadMoreNonContacts;
            }
            if (!loadMore || loadMore == 'messages') {
                (_c = _this.messages.results).push.apply(_c, newMessages);
                _this.messages.canLoadMore = canLoadMoreMessages;
                _this.messages.loadMoreError = false;
            }
            if (!loadMore) {
                if (_this.contacts.results.length > 0) {
                    _this.openConversation(_this.contacts.results[0], true);
                }
                else if (_this.nonContacts.results.length > 0) {
                    _this.openConversation(_this.nonContacts.results[0], true);
                }
                else if (_this.messages.results.length > 0) {
                    _this.openConversation(_this.messages.results[0], true);
                }
            }
            var _a, _b, _c;
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'addon.messages.errorwhileretrievingusers', true);
            if (loadMore == 'messages') {
                _this.messages.loadMoreError = true;
            }
        }).finally(function () {
            _this.disableSearch = false;
            _this.displaySearching = false;
            if (loadMore == 'contacts') {
                _this.contacts.loadingMore = false;
            }
            else if (loadMore == 'noncontacts') {
                _this.nonContacts.loadingMore = false;
            }
            else if (loadMore == 'messages') {
                _this.messages.loadingMore = false;
            }
            infiniteComplete && infiniteComplete();
        });
    };
    /**
     * Open a conversation in the split view.
     *
     * @param {any} result User or message.
     * @param {boolean} [onInit=false] Whether the tser was selected on initial load.
     */
    AddonMessagesSearchPage.prototype.openConversation = function (result, onInit) {
        if (onInit === void 0) { onInit = false; }
        if (!onInit || this.splitviewCtrl.isOn()) {
            this.selectedResult = result;
            var params = {};
            if (result.conversationid) {
                params.conversationId = result.conversationid;
            }
            else {
                params.userId = result.id;
            }
            this.splitviewCtrl.push('AddonMessagesDiscussionPage', params);
        }
    };
    /**
     * Component destroyed.
     */
    AddonMessagesSearchPage.prototype.ngOnDestroy = function () {
        this.memberInfoObserver && this.memberInfoObserver.off();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__components_split_view_split_view__["a" /* CoreSplitViewComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__components_split_view_split_view__["a" /* CoreSplitViewComponent */])
    ], AddonMessagesSearchPage.prototype, "splitviewCtrl", void 0);
    AddonMessagesSearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-messages-search',template:/*ion-inline-start:"C:\wamp\www\AX-LT_2019\mma_lt2\src\addon\messages\pages\search\search.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'addon.messages.searchcombined\' | translate }}</ion-title>\n\n        <ion-buttons end>\n\n            <!-- Add an empty context menu so discussion page can add items in split view, otherwise the menu disappears in some cases. -->\n\n            <core-context-menu></core-context-menu>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<core-split-view>\n\n    <ion-content>\n\n        <core-search-box (onSubmit)="search($event)" (onClear)="clearSearch($event)" [disabled]="disableSearch" autocorrect="off" [spellcheck]="false" [autoFocus]="true" [lengthCheck]="1"></core-search-box>\n\n        <core-loading [hideUntil]="!displaySearching" [message]="\'core.searching\' | translate">\n\n            <ion-list *ngIf="displayResults">\n\n                <ng-container *ngTemplateOutlet="resultsTemplate; context: {item: contacts}"></ng-container>\n\n                <ng-container *ngTemplateOutlet="resultsTemplate; context: {item: nonContacts}"></ng-container>\n\n                <ng-container *ngTemplateOutlet="resultsTemplate; context: {item: messages}"></ng-container>\n\n                <!-- The infinite loading cannot be inside the ng-template, it fails because it doesn\'t find ion-content. -->\n\n                <core-infinite-loading [enabled]="messages.canLoadMore" (action)="search(query, \'messages\', $event)" [error]="messages.loadMoreError"></core-infinite-loading>\n\n            </ion-list>\n\n        </core-loading>\n\n    </ion-content>\n\n</core-split-view>\n\n\n\n<!-- Template to render a list of results -->\n\n<ng-template #resultsTemplate let-item="item">\n\n    <ion-item-divider text-wrap>{{ item.titleString | translate }}</ion-item-divider>\n\n    <ion-item text-wrap *ngIf="item.results.length == 0">\n\n        {{ item.emptyString | translate }}\n\n    </ion-item>\n\n\n\n    <!-- List of results -->\n\n    <a ion-item text-wrap *ngFor="let result of item.results" [title]="result.fullname" (click)="openConversation(result)" [class.core-split-item-selected]="result == selectedResult" class="addon-message-discussion">\n\n        <ion-avatar item-start core-user-avatar [user]="result" [checkOnline]="true" [linkProfile]="false"></ion-avatar>\n\n        <h2>\n\n            <core-format-text [text]="result.fullname"></core-format-text>\n\n            <core-icon name="fa-ban" *ngIf="result.isblocked" [attr.aria-label]="\'addon.messages.contactblocked\' | translate"></core-icon>\n\n        </h2>\n\n        <ion-note *ngIf="result.lastmessagedate > 0">\n\n            {{result.lastmessagedate | coreDateDayOrTime}}\n\n        </ion-note>\n\n        <p class="addon-message-last-message">\n\n            <span *ngIf="result.sentfromcurrentuser" class="addon-message-last-message-user">{{ \'addon.messages.you\' | translate }}</span>\n\n            <core-format-text clean="true" singleLine="true" [text]="result.lastmessage" class="addon-message-last-message-text"></core-format-text>\n\n        </p>\n\n    </a>\n\n\n\n    <!-- Load more button for contacts and non-contacts -->\n\n    <ng-container *ngIf="item.type != \'messages\'">\n\n        <div padding-horizontal *ngIf="item.canLoadMore && !item.loadingMore">\n\n            <button ion-button block color="light" (click)="search(query, item.type)">\n\n                {{ \'core.loadmore\' | translate }}\n\n            </button>\n\n        </div>\n\n        <div *ngIf="item.loadingMore" padding text-center>\n\n            <ion-spinner></ion-spinner>\n\n        </div>\n\n    </ng-container>\n\n</ng-template>'/*ion-inline-end:"C:\wamp\www\AX-LT_2019\mma_lt2\src\addon\messages\pages\search\search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_app__["a" /* CoreAppProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_utils_dom__["a" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_1__providers_events__["a" /* CoreEventsProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_sites__["a" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_messages__["a" /* AddonMessagesProvider */]])
    ], AddonMessagesSearchPage);
    return AddonMessagesSearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ })

});
//# sourceMappingURL=2.js.map