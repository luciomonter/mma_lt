webpackJsonp([82],{

<<<<<<< HEAD
/***/ 1822:
=======
/***/ 1892:
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModForumDiscussionPageModule", function() { return AddonModForumDiscussionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module__ = __webpack_require__(934);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__discussion__ = __webpack_require__(1946);
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModForumNewDiscussionPageModule", function() { return AddonModForumNewDiscussionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__new_discussion__ = __webpack_require__(2020);
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

var AddonModForumDiscussionPageModule = /** @class */ (function () {
    function AddonModForumDiscussionPageModule() {
    }
    AddonModForumDiscussionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__discussion__["a" /* AddonModForumDiscussionPage */],
=======
var AddonModForumNewDiscussionPageModule = /** @class */ (function () {
    function AddonModForumNewDiscussionPageModule() {
    }
    AddonModForumNewDiscussionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__new_discussion__["a" /* AddonModForumNewDiscussionPage */],
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
<<<<<<< HEAD
                __WEBPACK_IMPORTED_MODULE_5__components_components_module__["a" /* AddonModForumComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__discussion__["a" /* AddonModForumDiscussionPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonModForumDiscussionPageModule);
    return AddonModForumDiscussionPageModule;
}());

//# sourceMappingURL=discussion.module.js.map

/***/ }),

/***/ 1946:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonModForumDiscussionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_events__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_utils_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_utils_utils__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_fileuploader_providers_fileuploader__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_split_view_split_view__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_forum__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_offline__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_helper__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_sync__ = __webpack_require__(195);
=======
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__new_discussion__["a" /* AddonModForumNewDiscussionPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonModForumNewDiscussionPageModule);
    return AddonModForumNewDiscussionPageModule;
}());

//# sourceMappingURL=new-discussion.module.js.map

/***/ }),

/***/ 2020:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonModForumNewDiscussionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_events__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_groups__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_sync__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_utils_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_utils_text__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_utils_utils__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__core_fileuploader_providers_fileuploader__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_split_view_split_view__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_rich_text_editor_rich_text_editor_ts__ = __webpack_require__(959);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_forum__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_offline__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_helper__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_sync__ = __webpack_require__(205);
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};















<<<<<<< HEAD
/**
 * Page that displays a forum discussion.
 */
var AddonModForumDiscussionPage = /** @class */ (function () {
    function AddonModForumDiscussionPage(navParams, network, zone, appProvider, eventsProvider, sitesProvider, domUtils, utils, translate, uploaderProvider, forumProvider, forumOffline, forumHelper, forumSync, svComponent) {
        var _this = this;
        this.appProvider = appProvider;
        this.eventsProvider = eventsProvider;
        this.sitesProvider = sitesProvider;
        this.domUtils = domUtils;
        this.utils = utils;
        this.translate = translate;
        this.uploaderProvider = uploaderProvider;
        this.forumProvider = forumProvider;
        this.forumOffline = forumOffline;
        this.forumHelper = forumHelper;
        this.forumSync = forumSync;
        this.svComponent = svComponent;
        this.discussionLoaded = false;
        this.sort = 'flat-oldest';
        this.replyData = {
            replyingTo: 0,
            isEditing: false,
            subject: '',
            message: null,
            files: [],
        };
        this.originalData = {
            subject: null,
            message: null,
            files: [],
        };
        this.refreshIcon = 'spinner';
        this.syncIcon = 'spinner';
        this.discussionStr = '';
        this.component = __WEBPACK_IMPORTED_MODULE_11__providers_forum__["a" /* AddonModForumProvider */].COMPONENT;
        this.courseId = navParams.get('courseId');
        this.cmId = navParams.get('cmId');
        this.forumId = navParams.get('forumId');
        this.discussionId = navParams.get('discussionId');
        this.trackPosts = navParams.get('trackPosts');
        this.locked = navParams.get('locked');
        this.isOnline = this.appProvider.isOnline();
        this.onlineObserver = network.onchange().subscribe(function (online) {
            // Execute the callback in the Angular zone, so change detection doesn't stop working.
            zone.run(function () {
                _this.isOnline = _this.appProvider.isOnline();
            });
        });
        this.isSplitViewOn = this.svComponent && this.svComponent.isOn();
        this.discussionStr = translate.instant('addon.mod_forum.discussion');
    }
    /**
     * View loaded.
     */
    AddonModForumDiscussionPage.prototype.ionViewDidLoad = function () {
        this.fetchPosts(true, false, true);
=======



/**
 * Page that displays the new discussion form.
 */
var AddonModForumNewDiscussionPage = /** @class */ (function () {
    function AddonModForumNewDiscussionPage(navParams, navCtrl, translate, domUtils, eventsProvider, groupsProvider, sitesProvider, syncProvider, uploaderProvider, textUtils, utils, forumProvider, forumOffline, forumSync, forumHelper, svComponent) {
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.domUtils = domUtils;
        this.eventsProvider = eventsProvider;
        this.groupsProvider = groupsProvider;
        this.sitesProvider = sitesProvider;
        this.syncProvider = syncProvider;
        this.uploaderProvider = uploaderProvider;
        this.textUtils = textUtils;
        this.utils = utils;
        this.forumProvider = forumProvider;
        this.forumOffline = forumOffline;
        this.forumSync = forumSync;
        this.forumHelper = forumHelper;
        this.svComponent = svComponent;
        this.component = __WEBPACK_IMPORTED_MODULE_14__providers_forum__["a" /* AddonModForumProvider */].COMPONENT;
        this.messageControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.groupsLoaded = false;
        this.showGroups = false;
        this.hasOffline = false;
        this.canCreateAttachments = true; // Assume we can by default.
        this.canPin = false;
        this.showForm = false;
        this.groups = [];
        this.newDiscussion = {
            subject: '',
            message: null,
            groupId: 0,
            subscribe: true,
            pin: false,
            files: []
        };
        this.isDestroyed = false;
        this.courseId = navParams.get('courseId');
        this.cmId = navParams.get('cmId');
        this.forumId = navParams.get('forumId');
        this.timeCreated = navParams.get('timeCreated');
    }
    /**
     * Component being initialized.
     */
    AddonModForumNewDiscussionPage.prototype.ngOnInit = function () {
        var _this = this;
        this.fetchDiscussionData().finally(function () {
            _this.groupsLoaded = true;
        });
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
    };
    /**
     * User entered the page that contains the component.
     */
<<<<<<< HEAD
    AddonModForumDiscussionPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        // Refresh data if this discussion is synchronized automatically.
        this.syncObserver = this.eventsProvider.on(__WEBPACK_IMPORTED_MODULE_14__providers_sync__["a" /* AddonModForumSyncProvider */].AUTO_SYNCED, function (data) {
            if (data.forumId == _this.forumId && _this.discussionId == data.discussionId
                && data.userId == _this.sitesProvider.getCurrentSiteUserId()) {
                // Refresh the data.
                _this.discussionLoaded = false;
                _this.refreshPosts();
            }
        }, this.sitesProvider.getCurrentSiteId());
        // Refresh data if this forum discussion is synchronized from discussions list.
        this.syncManualObserver = this.eventsProvider.on(__WEBPACK_IMPORTED_MODULE_14__providers_sync__["a" /* AddonModForumSyncProvider */].MANUAL_SYNCED, function (data) {
            if (data.source != 'discussion' && data.forumId == _this.forumId &&
                data.userId == _this.sitesProvider.getCurrentSiteUserId()) {
                // Refresh the data.
                _this.discussionLoaded = false;
                _this.refreshPosts();
            }
        }, this.sitesProvider.getCurrentSiteId());
        // Trigger view event, to highlight the current opened discussion in the split view.
        this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_11__providers_forum__["a" /* AddonModForumProvider */].VIEW_DISCUSSION_EVENT, {
            forumId: this.forumId,
            discussion: this.discussionId
        }, this.sitesProvider.getCurrentSiteId());
    };
    /**
     * Check if we can leave the page or not.
     *
     * @return {boolean|Promise<void>} Resolved if we can leave it, rejected if not.
     */
    AddonModForumDiscussionPage.prototype.ionViewCanLeave = function () {
        var _this = this;
        var promise;
        if (this.forumHelper.hasPostDataChanged(this.replyData, this.originalData)) {
            // Show confirmation if some data has been modified.
            promise = this.domUtils.showConfirm(this.translate.instant('core.confirmcanceledit'));
        }
        else {
            promise = Promise.resolve();
        }
        return promise.then(function () {
            // Delete the local files from the tmp folder.
            _this.uploaderProvider.clearTmpFiles(_this.replyData.files);
        });
    };
    /**
     * Convenience function to get the forum.
     *
     * @return {Promise<any>} Promise resolved with the forum.
     */
    AddonModForumDiscussionPage.prototype.fetchForum = function () {
        if (this.courseId && this.cmId) {
            return this.forumProvider.getForum(this.courseId, this.cmId);
        }
        else if (this.courseId && this.forumId) {
            return this.forumProvider.getForumById(this.courseId, this.forumId);
        }
        else {
            // Cannot get the forum.
            return Promise.reject(null);
        }
    };
    /**
     * Convenience function to get forum discussions.
     *
     * @param  {boolean} [sync]            Whether to try to synchronize the discussion.
     * @param  {boolean} [showErrors]      Whether to show errors in a modal.
     * @param  {boolean} [forceMarkAsRead] Whether to mark all posts as read.
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonModForumDiscussionPage.prototype.fetchPosts = function (sync, showErrors, forceMarkAsRead) {
        var _this = this;
        var syncPromise;
        if (sync) {
            // Try to synchronize the forum.
            syncPromise = this.syncDiscussion(showErrors).catch(function () {
                // Ignore errors.
            });
        }
        else {
            syncPromise = Promise.resolve();
        }
        var onlinePosts = [];
        var offlineReplies = [];
        var hasUnreadPosts = false;
        return syncPromise.then(function () {
            return _this.forumProvider.getDiscussionPosts(_this.discussionId).then(function (posts) {
                onlinePosts = posts;
            }).then(function () {
                // Check if there are responses stored in offline.
                return _this.forumOffline.getDiscussionReplies(_this.discussionId).then(function (replies) {
                    _this.postHasOffline = !!replies.length;
                    var convertPromises = [];
                    // Index posts to allow quick access. Also check unread field.
                    var posts = {};
                    onlinePosts.forEach(function (post) {
                        posts[post.id] = post;
                        hasUnreadPosts = hasUnreadPosts || !post.postread;
                    });
                    replies.forEach(function (offlineReply) {
                        // If we don't have forumId and courseId, get it from the post.
                        if (!_this.forumId) {
                            _this.forumId = offlineReply.forumid;
                        }
                        if (!_this.courseId) {
                            _this.courseId = offlineReply.courseid;
                        }
                        convertPromises.push(_this.forumHelper.convertOfflineReplyToOnline(offlineReply).then(function (reply) {
                            offlineReplies.push(reply);
                            // Disable reply of the parent. Reply in offline to the same post is not allowed, edit instead.
                            posts[reply.parent].canreply = false;
                        }));
                    });
                    return Promise.all(convertPromises).then(function () {
                        // Convert back to array.
                        onlinePosts = _this.utils.objectToArray(posts);
                    });
                });
            });
        }).then(function () {
            var posts = offlineReplies.concat(onlinePosts);
            _this.discussion = _this.forumProvider.extractStartingPost(posts);
            // If sort type is nested, normal sorting is disabled and nested posts will be displayed.
            if (_this.sort == 'nested') {
                // Sort first by creation date to make format tree work.
                _this.forumProvider.sortDiscussionPosts(posts, 'ASC');
                _this.posts = _this.utils.formatTree(posts, 'parent', 'id', _this.discussion.id);
            }
            else {
                // Set default reply subject.
                var direction = _this.sort == 'flat-newest' ? 'DESC' : 'ASC';
                _this.forumProvider.sortDiscussionPosts(posts, direction);
                _this.posts = posts;
            }
            _this.defaultSubject = _this.translate.instant('addon.mod_forum.re') + ' ' + _this.discussion.subject;
            _this.replyData.subject = _this.defaultSubject;
            // Now try to get the forum.
            return _this.fetchForum().then(function (forum) {
                if (_this.discussion.userfullname && _this.discussion.parent == 0 && forum.type == 'single') {
                    // Hide author for first post and type single.
                    _this.discussion.userfullname = null;
                }
                // "forum.istracked" is more reliable than "trackPosts".
                if (typeof forum.istracked != 'undefined') {
                    _this.trackPosts = forum.istracked;
                }
                _this.forumId = forum.id;
                _this.cmId = forum.cmid;
                _this.forum = forum;
            }).catch(function () {
                // Ignore errors.
                _this.forum = {};
            });
        }).catch(function (message) {
            _this.domUtils.showErrorModal(message);
        }).finally(function () {
            _this.discussionLoaded = true;
            _this.refreshIcon = 'refresh';
            _this.syncIcon = 'sync';
            if (forceMarkAsRead || (hasUnreadPosts && _this.trackPosts)) {
                // // Add log in Moodle and mark unread posts as readed.
                _this.forumProvider.logDiscussionView(_this.discussionId).catch(function () {
                    // Ignore errors.
                }).finally(function () {
                    // Trigger mark read posts.
                    _this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_11__providers_forum__["a" /* AddonModForumProvider */].MARK_READ_EVENT, {
                        courseId: _this.courseId,
                        moduleId: _this.cmId
                    }, _this.sitesProvider.getCurrentSiteId());
                });
            }
        });
    };
    /**
     * Tries to synchronize the posts discussion.
     *
     * @param  {boolean} showErrors Whether to show errors in a modal.
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonModForumDiscussionPage.prototype.syncDiscussion = function (showErrors) {
        var _this = this;
        return this.forumSync.syncDiscussionReplies(this.discussionId).then(function (result) {
            if (result.warnings && result.warnings.length) {
                _this.domUtils.showErrorModal(result.warnings[0]);
            }
            if (result && result.updated) {
                // Sync successful, send event.
                _this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_14__providers_sync__["a" /* AddonModForumSyncProvider */].MANUAL_SYNCED, {
                    forumId: _this.forumId,
                    userId: _this.sitesProvider.getCurrentSiteUserId(),
                    source: 'discussion'
                }, _this.sitesProvider.getCurrentSiteId());
            }
            return result.updated;
        }).catch(function (error) {
            if (showErrors) {
                _this.domUtils.showErrorModalDefault(error, 'core.errorsync', true);
            }
            return Promise.reject(null);
        });
    };
    /**
     * Refresh the data.
     *
     * @param {any}       [refresher] Refresher.
     * @param {Function}  [done] Function to call when done.
     * @param {boolean}   [showErrors=false] If show errors to the user of hide them.
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonModForumDiscussionPage.prototype.doRefresh = function (refresher, done, showErrors) {
        if (showErrors === void 0) { showErrors = false; }
        if (this.discussionLoaded) {
            return this.refreshPosts(true, showErrors).finally(function () {
                refresher && refresher.complete();
                done && done();
            });
        }
        return Promise.resolve();
    };
    /**
     * Refresh posts.
     *
     * @param  {boolean} [sync]       Whether to try to synchronize the discussion.
     * @param  {boolean} [showErrors] Whether to show errors in a modal.
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonModForumDiscussionPage.prototype.refreshPosts = function (sync, showErrors) {
        var _this = this;
        this.domUtils.scrollToTop(this.content);
        this.refreshIcon = 'spinner';
        this.syncIcon = 'spinner';
        return this.forumProvider.invalidateDiscussionPosts(this.discussionId).catch(function () {
            // Ignore errors.
        }).then(function () {
            return _this.fetchPosts(sync, showErrors);
        });
    };
    /**
     * Function to change posts sorting
     *
     * @param  {SortType} type Sort type.
     * @return {Promise<any>} Promised resolved when done.
     */
    AddonModForumDiscussionPage.prototype.changeSort = function (type) {
        this.discussionLoaded = false;
        this.sort = type;
        this.domUtils.scrollToTop(this.content);
        return this.fetchPosts();
    };
    /**
     * New post added.
     */
    AddonModForumDiscussionPage.prototype.postListChanged = function () {
        var _this = this;
        // Trigger an event to notify a new reply.
        var data = {
            forumId: this.forumId,
            discussionId: this.discussionId,
            cmId: this.cmId
        };
        this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_11__providers_forum__["a" /* AddonModForumProvider */].REPLY_DISCUSSION_EVENT, data, this.sitesProvider.getCurrentSiteId());
        this.discussionLoaded = false;
        this.refreshPosts().finally(function () {
            _this.discussionLoaded = true;
=======
    AddonModForumNewDiscussionPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        // Refresh data if this discussion is synchronized automatically.
        this.syncObserver = this.eventsProvider.on(__WEBPACK_IMPORTED_MODULE_17__providers_sync__["a" /* AddonModForumSyncProvider */].AUTO_SYNCED, function (data) {
            if (data.forumId == _this.forumId && data.userId == _this.sitesProvider.getCurrentSiteUserId()) {
                _this.domUtils.showAlertTranslated('core.notice', 'core.contenteditingsynced');
                _this.returnToDiscussions();
            }
        }, this.sitesProvider.getCurrentSiteId());
        // Trigger view event, to highlight the current opened discussion in the split view.
        this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_14__providers_forum__["a" /* AddonModForumProvider */].VIEW_DISCUSSION_EVENT, {
            forumId: this.forumId,
            discussion: -this.timeCreated
        }, this.sitesProvider.getCurrentSiteId());
    };
    /**
     * Fetch if forum uses groups and the groups it uses.
     *
     * @param  {boolean} [refresh] Whether we're refreshing data.
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonModForumNewDiscussionPage.prototype.fetchDiscussionData = function (refresh) {
        var _this = this;
        return this.groupsProvider.getActivityGroupMode(this.cmId).then(function (mode) {
            var promises = [];
            if (mode === __WEBPACK_IMPORTED_MODULE_5__providers_groups__["a" /* CoreGroupsProvider */].SEPARATEGROUPS || mode === __WEBPACK_IMPORTED_MODULE_5__providers_groups__["a" /* CoreGroupsProvider */].VISIBLEGROUPS) {
                promises.push(_this.groupsProvider.getActivityAllowedGroups(_this.cmId).then(function (forumGroups) {
                    var promise;
                    if (mode === __WEBPACK_IMPORTED_MODULE_5__providers_groups__["a" /* CoreGroupsProvider */].VISIBLEGROUPS) {
                        // We need to check which of the returned groups the user can post to.
                        promise = _this.validateVisibleGroups(forumGroups);
                    }
                    else {
                        // WS already filters groups, no need to do it ourselves. Add "All participants" if needed.
                        promise = _this.addAllParticipantsOption(forumGroups, true);
                    }
                    return promise.then(function (forumGroups) {
                        if (forumGroups.length > 0) {
                            _this.groups = forumGroups;
                            // Do not override group id.
                            _this.newDiscussion.groupId = _this.newDiscussion.groupId || forumGroups[0].id;
                            _this.showGroups = true;
                        }
                        else {
                            var message = mode === __WEBPACK_IMPORTED_MODULE_5__providers_groups__["a" /* CoreGroupsProvider */].SEPARATEGROUPS ?
                                'addon.mod_forum.cannotadddiscussionall' : 'addon.mod_forum.cannotadddiscussion';
                            return Promise.reject(_this.translate.instant(message));
                        }
                    });
                }));
            }
            else {
                _this.showGroups = false;
                // Use the canAddDiscussion WS to check if the user can add attachments and pin discussions.
                promises.push(_this.forumProvider.canAddDiscussionToAll(_this.forumId).then(function (response) {
                    _this.canPin = !!response.canpindiscussions;
                    _this.canCreateAttachments = !!response.cancreateattachment;
                }).catch(function () {
                    // Ignore errors, use default values.
                }));
            }
            // Get forum.
            promises.push(_this.forumProvider.getForum(_this.courseId, _this.cmId).then(function (forum) {
                _this.forum = forum;
            }));
            // If editing a discussion, get offline data.
            if (_this.timeCreated && !refresh) {
                _this.syncId = _this.forumSync.getForumSyncId(_this.forumId);
                promises.push(_this.forumSync.waitForSync(_this.syncId).then(function () {
                    // Do not block if the scope is already destroyed.
                    if (!_this.isDestroyed) {
                        _this.syncProvider.blockOperation(__WEBPACK_IMPORTED_MODULE_14__providers_forum__["a" /* AddonModForumProvider */].COMPONENT, _this.syncId);
                    }
                    return _this.forumOffline.getNewDiscussion(_this.forumId, _this.timeCreated).then(function (discussion) {
                        _this.hasOffline = true;
                        discussion.options = discussion.options || {};
                        _this.newDiscussion.groupId = discussion.groupid ? discussion.groupid : _this.newDiscussion.groupId;
                        _this.newDiscussion.subject = discussion.subject;
                        _this.newDiscussion.message = discussion.message;
                        _this.newDiscussion.subscribe = discussion.options.discussionsubscribe;
                        _this.newDiscussion.pin = discussion.options.discussionpinned;
                        _this.messageControl.setValue(discussion.message);
                        // Treat offline attachments if any.
                        if (discussion.options.attachmentsid && discussion.options.attachmentsid.offline) {
                            return _this.forumHelper.getNewDiscussionStoredFiles(_this.forumId, _this.timeCreated).then(function (files) {
                                _this.newDiscussion.files = files;
                            });
                        }
                    });
                }));
            }
            return Promise.all(promises);
        }).then(function () {
            if (!_this.originalData) {
                // Initialize original data.
                _this.originalData = {
                    subject: _this.newDiscussion.subject,
                    message: _this.newDiscussion.message,
                    files: _this.newDiscussion.files.slice(),
                };
            }
            _this.showForm = true;
        }).catch(function (message) {
            _this.domUtils.showErrorModalDefault(message, 'addon.mod_forum.errorgetgroups', true);
            _this.showForm = false;
        });
    };
    /**
     * Validate which of the groups returned by getActivityAllowedGroups in visible groups should be shown to post to.
     *
     * @param  {any[]} forumGroups Forum groups.
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonModForumNewDiscussionPage.prototype.validateVisibleGroups = function (forumGroups) {
        var _this = this;
        // We first check if the user can post to all the groups.
        return this.forumProvider.canAddDiscussionToAll(this.forumId).catch(function () {
            // The call failed, let's assume he can't.
            return {
                status: false,
                canpindiscussions: false,
                cancreateattachment: true
            };
        }).then(function (response) {
            _this.canPin = !!response.canpindiscussions;
            _this.canCreateAttachments = !!response.cancreateattachment;
            if (response.status) {
                // The user can post to all groups, add the "All participants" option and return them all.
                return _this.addAllParticipantsOption(forumGroups, false);
            }
            else {
                // The user can't post to all groups, let's check which groups he can post to.
                var promises_1 = [];
                var filtered_1 = [];
                forumGroups.forEach(function (group) {
                    promises_1.push(_this.forumProvider.canAddDiscussion(_this.forumId, group.id).catch(function () {
                        /* The call failed, let's return true so the group is shown. If the user can't post to
                           it an error will be shown when he tries to add the discussion. */
                        return {
                            status: true
                        };
                    }).then(function (response) {
                        if (response.status) {
                            filtered_1.push(group);
                        }
                    }));
                });
                return Promise.all(promises_1).then(function () {
                    return filtered_1;
                });
            }
        });
    };
    /**
     * Filter forum groups, returning only those that are inside user groups.
     *
     * @param  {any[]} forumGroups Forum groups.
     * @param  {any[]} userGroups User groups.
     * @return {any[]} Filtered groups.
     */
    AddonModForumNewDiscussionPage.prototype.filterGroups = function (forumGroups, userGroups) {
        var filtered = [];
        var userGroupsIds = userGroups.map(function (g) { return g.id; });
        forumGroups.forEach(function (fg) {
            if (userGroupsIds.indexOf(fg.id) > -1) {
                filtered.push(fg);
            }
        });
        return filtered;
    };
    /**
     * Add the "All participants" option to a list of groups if the user can add a discussion to all participants.
     *
     * @param  {any[]}   groups Groups.
     * @param  {boolean} check  True to check if the user can add a discussion to all participants.
     * @return {Promise<any[]>} Promise resolved with the list of groups.
     */
    AddonModForumNewDiscussionPage.prototype.addAllParticipantsOption = function (groups, check) {
        var _this = this;
        if (!this.forumProvider.isAllParticipantsFixed()) {
            // All participants has a bug, don't add it.
            return Promise.resolve(groups);
        }
        var promise;
        if (check) {
            // We need to check if the user can add a discussion to all participants.
            promise = this.forumProvider.canAddDiscussionToAll(this.forumId).then(function (response) {
                _this.canPin = !!response.canpindiscussions;
                _this.canCreateAttachments = !!response.cancreateattachment;
                return response.status;
            }).catch(function () {
                // The call failed, let's assume he can't.
                return false;
            });
        }
        else {
            // No need to check, assume the user can.
            promise = Promise.resolve(true);
        }
        return promise.then(function (canAdd) {
            if (canAdd) {
                groups.unshift({
                    courseid: _this.courseId,
                    id: -1,
                    name: _this.translate.instant('core.allparticipants')
                });
            }
            return groups;
        });
    };
    /**
     * Pull to refresh.
     *
     * @param {any} refresher Refresher.
     */
    AddonModForumNewDiscussionPage.prototype.refreshGroups = function (refresher) {
        var _this = this;
        var promises = [
            this.groupsProvider.invalidateActivityGroupMode(this.cmId),
            this.groupsProvider.invalidateActivityAllowedGroups(this.cmId),
            this.forumProvider.invalidateCanAddDiscussion(this.forumId),
        ];
        Promise.all(promises).finally(function () {
            _this.fetchDiscussionData(true).finally(function () {
                refresher.complete();
            });
        });
    };
    /**
     * Convenience function to update or return to discussions depending on device.
     *
     * @param {number} [discussionId] Id of the new discussion.
     * @param {number} [discTimecreated] The time created of the discussion (if offline).
     */
    AddonModForumNewDiscussionPage.prototype.returnToDiscussions = function (discussionId, discTimecreated) {
        var data = {
            forumId: this.forumId,
            cmId: this.cmId,
            discussionId: discussionId,
            discTimecreated: discTimecreated
        };
        this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_14__providers_forum__["a" /* AddonModForumProvider */].NEW_DISCUSSION_EVENT, data, this.sitesProvider.getCurrentSiteId());
        // Delete the local files from the tmp folder.
        this.uploaderProvider.clearTmpFiles(this.newDiscussion.files);
        if (this.svComponent && this.svComponent.isOn()) {
            // Empty form.
            this.hasOffline = false;
            this.newDiscussion.subject = '';
            this.newDiscussion.message = null;
            this.newDiscussion.files = [];
            this.messageEditor.clearText();
            this.originalData = this.utils.clone(this.newDiscussion);
            // Trigger view event, to highlight the current opened discussion in the split view.
            this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_14__providers_forum__["a" /* AddonModForumProvider */].VIEW_DISCUSSION_EVENT, {
                forumId: this.forumId,
                discussion: 0
            }, this.sitesProvider.getCurrentSiteId());
        }
        else {
            this.originalData = null; // Avoid asking for confirmation.
            this.navCtrl.pop();
        }
    };
    /**
     * Message changed.
     *
     * @param {string} text The new text.
     */
    AddonModForumNewDiscussionPage.prototype.onMessageChange = function (text) {
        this.newDiscussion.message = text;
    };
    /**
     * Add a new discussion.
     */
    AddonModForumNewDiscussionPage.prototype.add = function () {
        var _this = this;
        var forumName = this.forum.name;
        var subject = this.newDiscussion.subject;
        var message = this.newDiscussion.message;
        var pin = this.newDiscussion.pin;
        var groupId = this.newDiscussion.groupId;
        var attachments = this.newDiscussion.files;
        var discTimecreated = this.timeCreated || Date.now();
        var options = {
            discussionsubscribe: !!this.newDiscussion.subscribe
        };
        var saveOffline = false;
        if (!subject) {
            this.domUtils.showErrorModal('addon.mod_forum.erroremptysubject', true);
            return;
        }
        if (!message) {
            this.domUtils.showErrorModal('addon.mod_forum.erroremptymessage', true);
            return;
        }
        var modal = this.domUtils.showModalLoading('core.sending', true);
        var promise;
        // Add some HTML to the message if needed.
        message = this.textUtils.formatHtmlLines(message);
        // Upload attachments first if any.
        if (attachments.length) {
            promise = this.forumHelper.uploadOrStoreNewDiscussionFiles(this.forumId, discTimecreated, attachments, false)
                .catch(function () {
                // Cannot upload them in online, save them in offline.
                saveOffline = true;
                return _this.forumHelper.uploadOrStoreNewDiscussionFiles(_this.forumId, discTimecreated, attachments, true);
            });
        }
        else {
            promise = Promise.resolve();
        }
        promise.then(function (attach) {
            if (attach) {
                options.attachmentsid = attach;
            }
            if (pin) {
                options.discussionpinned = true;
            }
            if (saveOffline) {
                // Save discussion in offline.
                return _this.forumOffline.addNewDiscussion(_this.forumId, forumName, _this.courseId, subject, message, options, groupId, discTimecreated).then(function () {
                    // Don't return anything.
                });
            }
            else {
                // Try to send it to server.
                // Don't allow offline if there are attachments since they were uploaded fine.
                return _this.forumProvider.addNewDiscussion(_this.forumId, forumName, _this.courseId, subject, message, options, groupId, undefined, discTimecreated, !attachments.length);
            }
        }).then(function (discussionId) {
            if (discussionId) {
                // Data sent to server, delete stored files (if any).
                _this.forumHelper.deleteNewDiscussionStoredFiles(_this.forumId, discTimecreated);
            }
            _this.returnToDiscussions(discussionId, discTimecreated);
        }).catch(function (message) {
            _this.domUtils.showErrorModalDefault(message, 'addon.mod_forum.cannotcreatediscussion', true);
        }).finally(function () {
            modal.dismiss();
        });
    };
    /**
     * Discard an offline saved discussion.
     */
    AddonModForumNewDiscussionPage.prototype.discard = function () {
        var _this = this;
        this.domUtils.showConfirm(this.translate.instant('core.areyousure')).then(function () {
            var promises = [];
            promises.push(_this.forumOffline.deleteNewDiscussion(_this.forumId, _this.timeCreated));
            promises.push(_this.forumHelper.deleteNewDiscussionStoredFiles(_this.forumId, _this.timeCreated).catch(function () {
                // Ignore errors, maybe there are no files.
            }));
            return Promise.all(promises).then(function () {
                _this.returnToDiscussions();
            });
        }).catch(function () {
            // Cancelled.
        });
    };
    /**
     * Check if we can leave the page or not.
     *
     * @return {boolean|Promise<void>} Resolved if we can leave it, rejected if not.
     */
    AddonModForumNewDiscussionPage.prototype.ionViewCanLeave = function () {
        var _this = this;
        var promise;
        if (this.forumHelper.hasPostDataChanged(this.newDiscussion, this.originalData)) {
            // Show confirmation if some data has been modified.
            promise = this.domUtils.showConfirm(this.translate.instant('core.confirmcanceledit'));
        }
        else {
            promise = Promise.resolve();
        }
        return promise.then(function () {
            // Delete the local files from the tmp folder.
            _this.uploaderProvider.clearTmpFiles(_this.newDiscussion.files);
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
        });
    };
    /**
     * Runs when the page is about to leave and no longer be the active page.
     */
<<<<<<< HEAD
    AddonModForumDiscussionPage.prototype.ionViewWillLeave = function () {
        this.syncObserver && this.syncObserver.off();
        this.syncManualObserver && this.syncManualObserver.off();
=======
    AddonModForumNewDiscussionPage.prototype.ionViewWillLeave = function () {
        this.syncObserver && this.syncObserver.off();
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
    };
    /**
     * Page destroyed.
     */
<<<<<<< HEAD
    AddonModForumDiscussionPage.prototype.ngOnDestroy = function () {
        this.onlineObserver && this.onlineObserver.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], AddonModForumDiscussionPage.prototype, "content", void 0);
    AddonModForumDiscussionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-mod-forum-discussion',template:/*ion-inline-start:"C:\wamp\www\BCC_mobapp\bcc_custom_mma\src\addon\mod\forum\pages\discussion\discussion.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title *ngIf="discussion"><core-format-text [text]="discussion.subject"></core-format-text></ion-title>\n\n        <ion-buttons end>\n\n            <!-- The context menu will be added in here. -->\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<core-navbar-buttons end>\n\n    <core-context-menu>\n\n        <core-context-menu-item [priority]="650" *ngIf="discussionLoaded && !postHasOffline && isOnline" [content]="\'addon.mod_forum.refreshposts\' | translate" (action)="doRefresh(null, $event)" [iconAction]="refreshIcon" [closeOnClick]="false"></core-context-menu-item>\n\n        <core-context-menu-item [priority]="550" *ngIf="discussionLoaded && !isSplitViewOn && postHasOffline && isOnline" [content]="\'core.settings.synchronizenow\' | translate" (action)="doRefresh(null, $event, true)" [iconAction]="syncIcon" [closeOnClick]="false"></core-context-menu-item>\n\n        <core-context-menu-item [hidden]="sort == \'flat-oldest\'" [priority]="500" [content]="\'addon.mod_forum.modeflatoldestfirst\' | translate" (action)="changeSort(\'flat-oldest\')" iconAction="arrow-round-down"></core-context-menu-item>\n\n        <core-context-menu-item [hidden]="sort == \'flat-newest\'" [priority]="450" [content]="\'addon.mod_forum.modeflatnewestfirst\' | translate" (action)="changeSort(\'flat-newest\')" iconAction="arrow-round-up"></core-context-menu-item>\n\n        <core-context-menu-item [hidden]="sort == \'nested\'" [priority]="400" [content]="\'addon.mod_forum.modenested\' | translate" (action)="changeSort(\'nested\')" iconAction="swap"></core-context-menu-item>\n\n    </core-context-menu>\n\n</core-navbar-buttons>\n\n<ion-content>\n\n    <ion-refresher [enabled]="discussionLoaded" (ionRefresh)="doRefresh($event)">\n\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n    </ion-refresher>\n\n\n\n    <core-loading [hideUntil]="discussionLoaded">\n\n        <!-- Discussion replies found to be synchronized -->\n\n        <ion-card class="core-warning-card" *ngIf="postHasOffline">\n\n            <ion-icon name="warning"></ion-icon> {{ \'core.hasdatatosync\' | translate:{$a: discussionStr} }}\n\n        </ion-card>\n\n\n\n        <ion-card class="core-warning-card" *ngIf="locked">\n\n            <ion-icon name="warning"></ion-icon> {{ \'addon.mod_forum.discussionlocked\' | translate }}\n\n        </ion-card>\n\n\n\n        <ion-card *ngIf="discussion" margin-bottom class="highlight">\n\n            <addon-mod-forum-post [post]="discussion" [courseId]="courseId" [discussionId]="discussionId" [component]="component" [componentId]="cmId" [replyData]="replyData" [originalData]="originalData" [defaultSubject]="defaultSubject" [forum]="forum" [trackPosts]="trackPosts" (onPostChange)="postListChanged()"></addon-mod-forum-post>\n\n        </ion-card>\n\n\n\n        <ion-card *ngIf="sort != \'nested\'">\n\n            <ng-container *ngFor="let post of posts; first as first">\n\n                <ion-item-divider color="light" *ngIf="!first"></ion-item-divider>\n\n                <addon-mod-forum-post [post]="post" [courseId]="courseId" [discussionId]="discussionId" [component]="component" [componentId]="cmId" [replyData]="replyData" [originalData]="originalData" [defaultSubject]="defaultSubject" [forum]="forum" [trackPosts]="trackPosts" (onPostChange)="postListChanged()"></addon-mod-forum-post>\n\n            </ng-container>\n\n        </ion-card>\n\n\n\n        <ng-container *ngIf="sort == \'nested\'">\n\n            <ng-container *ngFor="let post of posts">\n\n                <ng-container *ngTemplateOutlet="nestedPosts; context: {post: post}"></ng-container>\n\n            </ng-container>\n\n        </ng-container>\n\n\n\n        <ng-template #nestedPosts let-post="post">\n\n            <ion-card>\n\n                <addon-mod-forum-post [post]="post" [courseId]="courseId" [discussionId]="discussionId" [component]="component" [componentId]="cmId" [replyData]="replyData" [originalData]="originalData" [defaultSubject]="defaultSubject" [forum]="forum" [trackPosts]="trackPosts" (onPostChange)="postListChanged()"></addon-mod-forum-post>\n\n            </ion-card>\n\n            <div padding-left *ngIf="post.children.length && post.children[0].subject">\n\n                <ng-container *ngFor="let child of post.children">\n\n                    <ng-container *ngTemplateOutlet="nestedPosts; context: {post: child}"></ng-container>\n\n                </ng-container>\n\n            </div>\n\n        </ng-template>\n\n    </core-loading>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp\www\BCC_mobapp\bcc_custom_mma\src\addon\mod\forum\pages\discussion\discussion.html"*/,
        }),
        __param(14, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Optional */])()),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_4__providers_app__["a" /* CoreAppProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_events__["a" /* CoreEventsProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_sites__["a" /* CoreSitesProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_utils_dom__["a" /* CoreDomUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_utils_utils__["a" /* CoreUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_9__core_fileuploader_providers_fileuploader__["a" /* CoreFileUploaderProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_forum__["a" /* AddonModForumProvider */],
            __WEBPACK_IMPORTED_MODULE_12__providers_offline__["a" /* AddonModForumOfflineProvider */],
            __WEBPACK_IMPORTED_MODULE_13__providers_helper__["a" /* AddonModForumHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_14__providers_sync__["a" /* AddonModForumSyncProvider */],
            __WEBPACK_IMPORTED_MODULE_10__components_split_view_split_view__["a" /* CoreSplitViewComponent */]])
    ], AddonModForumDiscussionPage);
    return AddonModForumDiscussionPage;
}());

//# sourceMappingURL=discussion.js.map
=======
    AddonModForumNewDiscussionPage.prototype.ngOnDestroy = function () {
        if (this.syncId) {
            this.syncProvider.unblockOperation(__WEBPACK_IMPORTED_MODULE_14__providers_forum__["a" /* AddonModForumProvider */].COMPONENT, this.syncId);
        }
        this.isDestroyed = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_13__components_rich_text_editor_rich_text_editor_ts__["a" /* CoreRichTextEditorComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_13__components_rich_text_editor_rich_text_editor_ts__["a" /* CoreRichTextEditorComponent */])
    ], AddonModForumNewDiscussionPage.prototype, "messageEditor", void 0);
    AddonModForumNewDiscussionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-mod-forum-new-discussion',template:/*ion-inline-start:"C:\wamp\www\AX-LT_2019\mma_lt\src\addon\mod\forum\pages\new-discussion\new-discussion.html"*/'<ion-header>\n    <ion-navbar core-back-button>\n        <ion-title>{{ \'addon.mod_forum.addanewdiscussion\' | translate }}</ion-title>\n        <ion-buttons end>\n            <!-- The context menu will be added in here. -->\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-refresher [enabled]="groupsLoaded" (ionRefresh)="refreshGroups($event)">\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n    </ion-refresher>\n\n    <core-loading [hideUntil]="groupsLoaded">\n        <ion-list *ngIf="showForm">\n            <ion-item>\n                <ion-label stacked>{{ \'addon.mod_forum.subject\' | translate }}</ion-label>\n                <ion-input type="text" [placeholder]="\'addon.mod_forum.subject\' | translate" [(ngModel)]="newDiscussion.subject"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label stacked>{{ \'addon.mod_forum.message\' | translate }}</ion-label>\n                <core-rich-text-editor item-content [control]="messageControl" (contentChanged)="onMessageChange($event)" [placeholder]="\'addon.mod_forum.message\' | translate" name="addon_mod_forum_new_discussion" [component]="component" [componentId]="forum.cmid"></core-rich-text-editor>\n            </ion-item>\n            <ion-item *ngIf="showGroups">\n                <ion-label id="addon-mod-forum-groupslabel">{{ \'addon.mod_forum.group\' | translate }}</ion-label>\n                <ion-select [(ngModel)]="newDiscussion.groupId" aria-labelledby="addon-mod-forum-groupslabel" interface="action-sheet">\n                    <ion-option *ngFor="let group of groups" [value]="group.id">{{ group.name }}</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>{{ \'addon.mod_forum.discussionsubscription\' | translate }}</ion-label>\n                <ion-toggle [(ngModel)]="newDiscussion.subscribe"></ion-toggle>\n            </ion-item>\n            <ion-item *ngIf="canPin">\n                <ion-label>{{ \'addon.mod_forum.discussionpinned\' | translate }}</ion-label>\n                <ion-toggle [(ngModel)]="newDiscussion.pin"></ion-toggle>\n            </ion-item>\n            <core-attachments *ngIf="canCreateAttachments && forum && forum.maxattachments > 0" [files]="newDiscussion.files" [maxSize]="forum.maxbytes" [maxSubmissions]="forum.maxattachments" [component]="component" [componentId]="forum.cmid" [allowOffline]="true"></core-attachments>\n            <ion-item>\n                <ion-row>\n                    <ion-col>\n                        <button ion-button block (click)="add()" [disabled]="newDiscussion.subject == \'\' || newDiscussion.message == null">{{ \'addon.mod_forum.posttoforum\' | translate }}</button>\n                    </ion-col>\n                    <ion-col *ngIf="hasOffline">\n                        <button ion-button block color="light" (click)="discard()">{{ \'core.discard\' | translate }}</button>\n                    </ion-col>\n                </ion-row>\n            </ion-item>\n        </ion-list>\n    </core-loading>\n</ion-content>\n'/*ion-inline-end:"C:\wamp\www\AX-LT_2019\mma_lt\src\addon\mod\forum\pages\new-discussion\new-discussion.html"*/,
        }),
        __param(15, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Optional */])()),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_8__providers_utils_dom__["a" /* CoreDomUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_events__["a" /* CoreEventsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_groups__["a" /* CoreGroupsProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_sites__["a" /* CoreSitesProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_sync__["a" /* CoreSyncProvider */],
            __WEBPACK_IMPORTED_MODULE_11__core_fileuploader_providers_fileuploader__["a" /* CoreFileUploaderProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_utils_text__["a" /* CoreTextUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_utils_utils__["a" /* CoreUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_14__providers_forum__["a" /* AddonModForumProvider */],
            __WEBPACK_IMPORTED_MODULE_15__providers_offline__["a" /* AddonModForumOfflineProvider */],
            __WEBPACK_IMPORTED_MODULE_17__providers_sync__["a" /* AddonModForumSyncProvider */],
            __WEBPACK_IMPORTED_MODULE_16__providers_helper__["a" /* AddonModForumHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_12__components_split_view_split_view__["a" /* CoreSplitViewComponent */]])
    ], AddonModForumNewDiscussionPage);
    return AddonModForumNewDiscussionPage;
}());

//# sourceMappingURL=new-discussion.js.map
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d

/***/ })

});
//# sourceMappingURL=82.js.map