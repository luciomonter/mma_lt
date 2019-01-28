webpackJsonp([91],{

<<<<<<< HEAD
/***/ 1813:
=======
/***/ 1883:
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModDataEntryPageModule", function() { return AddonModDataEntryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_comments_components_components_module__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_compile_components_compile_html_compile_html_module__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_components_module__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__entry__ = __webpack_require__(1937);
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModDataSearchPageModule", function() { return AddonModDataSearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search__ = __webpack_require__(2011);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_compile_components_compile_html_compile_html_module__ = __webpack_require__(394);
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


var AddonModDataEntryPageModule = /** @class */ (function () {
    function AddonModDataEntryPageModule() {
    }
    AddonModDataEntryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__entry__["a" /* AddonModDataEntryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_components_module__["a" /* AddonModDataComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_6__core_compile_components_compile_html_compile_html_module__["a" /* CoreCompileHtmlComponentModule */],
                __WEBPACK_IMPORTED_MODULE_5__core_comments_components_components_module__["a" /* CoreCommentsComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_8__entry__["a" /* AddonModDataEntryPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonModDataEntryPageModule);
    return AddonModDataEntryPageModule;
}());

//# sourceMappingURL=entry.module.js.map

/***/ }),

/***/ 1937:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonModDataEntryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utils_utils__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utils_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_groups__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_events__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_course_providers_course__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_data__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_helper__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_offline__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_sync__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_fields_delegate__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_components_module__ = __webpack_require__(385);
=======
var AddonModDataSearchPageModule = /** @class */ (function () {
    function AddonModDataSearchPageModule() {
    }
    AddonModDataSearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__search__["a" /* AddonModDataSearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* AddonModDataComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_6__core_compile_components_compile_html_compile_html_module__["a" /* CoreCompileHtmlComponentModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__search__["a" /* AddonModDataSearchPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonModDataSearchPageModule);
    return AddonModDataSearchPageModule;
}());

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 2011:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonModDataSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utils_utils__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utils_text__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_components_module__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_fields_delegate__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_helper__ = __webpack_require__(202);
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
 * Page that displays the view entry page.
 */
var AddonModDataEntryPage = /** @class */ (function () {
    function AddonModDataEntryPage(params, utils, groupsProvider, domUtils, fieldsDelegate, courseProvider, dataProvider, dataOffline, dataHelper, sitesProvider, navCtrl, eventsProvider) {
        this.utils = utils;
        this.groupsProvider = groupsProvider;
        this.domUtils = domUtils;
        this.fieldsDelegate = fieldsDelegate;
        this.courseProvider = courseProvider;
        this.dataProvider = dataProvider;
        this.dataOffline = dataOffline;
        this.dataHelper = dataHelper;
        this.navCtrl = navCtrl;
        this.eventsProvider = eventsProvider;
        this.fields = {};
        this.title = '';
        this.moduleName = 'data';
        this.component = __WEBPACK_IMPORTED_MODULE_8__providers_data__["a" /* AddonModDataProvider */].COMPONENT;
        this.entryLoaded = false;
        this.selectedGroup = 0;
        this.offlineActions = [];
        this.hasOffline = false;
        this.cssTemplate = '';
        this.entryRendered = '';
        this.cssClass = '';
        this.extraImports = [__WEBPACK_IMPORTED_MODULE_13__components_components_module__["a" /* AddonModDataComponentsModule */]];
        this.module = params.get('module') || {};
        this.entryId = params.get('entryId') || null;
        this.courseId = params.get('courseId');
        this.selectedGroup = params.get('group') || 0;
        this.page = params.get('page') || null;
        this.siteId = sitesProvider.getCurrentSiteId();
        this.title = this.module.name;
        this.moduleName = this.courseProvider.translateModuleName('data');
    }
    /**
     * View loaded.
     */
    AddonModDataEntryPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.fetchEntryData();
        // Refresh data if this discussion is synchronized automatically.
        this.syncObserver = this.eventsProvider.on(__WEBPACK_IMPORTED_MODULE_11__providers_sync__["a" /* AddonModDataSyncProvider */].AUTO_SYNCED, function (data) {
            if ((data.entryId == _this.entryId || data.offlineEntryId == _this.entryId) && _this.data.id == data.dataId) {
                if (data.deleted) {
                    // If deleted, go back.
                    _this.navCtrl.pop();
                }
                else {
                    _this.entryId = data.entryid;
                    _this.entryLoaded = false;
                    _this.fetchEntryData(true);
                }
            }
        }, this.siteId);
        // Refresh entry on change.
        this.entryChangedObserver = this.eventsProvider.on(__WEBPACK_IMPORTED_MODULE_8__providers_data__["a" /* AddonModDataProvider */].ENTRY_CHANGED, function (data) {
            if (data.entryId == _this.entryId && _this.data.id == data.dataId) {
                if (data.deleted) {
                    // If deleted, go back.
                    _this.navCtrl.pop();
                }
                else {
                    _this.entryLoaded = false;
                    _this.fetchEntryData(true);
                }
            }
        }, this.siteId);
    };
    /**
     * Fetch the entry data.
     *
     * @param  {boolean}      refresh If refresh the current data or not.
     * @return {Promise<any>}         Resolved when done.
     */
    AddonModDataEntryPage.prototype.fetchEntryData = function (refresh) {
        var _this = this;
        var fieldsArray;
        return this.dataProvider.getDatabase(this.courseId, this.module.id).then(function (data) {
            _this.title = data.name || _this.title;
            _this.data = data;
            _this.cssClass = 'addon-data-entries-' + data.id;
            return _this.setEntryIdFromPage(data.id, _this.page, _this.selectedGroup).then(function () {
                return _this.dataProvider.getDatabaseAccessInformation(data.id);
            });
        }).then(function (accessData) {
            _this.access = accessData;
            return _this.groupsProvider.getActivityGroupInfo(_this.data.coursemodule, accessData.canmanageentries)
                .then(function (groupInfo) {
                _this.groupInfo = groupInfo;
                // Check selected group is accessible.
                if (groupInfo && groupInfo.groups && groupInfo.groups.length > 0) {
                    if (!groupInfo.groups.some(function (group) { return _this.selectedGroup == group.id; })) {
                        _this.selectedGroup = groupInfo.groups[0].id;
                    }
                }
                return _this.dataOffline.getEntryActions(_this.data.id, _this.entryId);
            });
        }).then(function (actions) {
            _this.offlineActions = actions;
            _this.hasOffline = !!actions.length;
            return _this.dataProvider.getFields(_this.data.id).then(function (fieldsData) {
                _this.fields = _this.utils.arrayToObject(fieldsData, 'id');
                return _this.dataHelper.getEntry(_this.data, _this.entryId, _this.offlineActions);
            });
        }).then(function (entry) {
            entry = entry.entry;
            _this.cssTemplate = _this.dataHelper.prefixCSS(_this.data.csstemplate, '.' + _this.cssClass);
            // Index contents by fieldid.
            entry.contents = _this.utils.arrayToObject(entry.contents, 'fieldid');
            fieldsArray = _this.utils.objectToArray(_this.fields);
            return _this.dataHelper.applyOfflineActions(entry, _this.offlineActions, fieldsArray);
        }).then(function (entryData) {
            _this.entry = entryData;
            var actions = _this.dataHelper.getActions(_this.data, _this.access, _this.entry);
            _this.entryRendered = _this.dataHelper.displayShowFields(_this.data.singletemplate, fieldsArray, _this.entry, 'show', actions);
            _this.showComments = actions.comments;
            var entries = {};
            entries[_this.entryId] = _this.entry;
            // Pass the input data to the component.
            _this.jsData = {
                fields: _this.fields,
                entries: entries,
                data: _this.data
            };
            return _this.dataHelper.getPageInfoByEntry(_this.data.id, _this.entryId, _this.selectedGroup).then(function (result) {
                _this.previousId = result.previousId;
                _this.nextId = result.nextId;
            });
        }).catch(function (message) {
            if (!refresh) {
                // Some call failed, retry without using cache since it might be a new activity.
                return _this.refreshAllData();
            }
            _this.domUtils.showErrorModalDefault(message, 'core.course.errorgetmodule', true);
        }).finally(function () {
            _this.domUtils.scrollToTop(_this.content);
            _this.entryLoaded = true;
        });
    };
    /**
     * Go to selected entry without changing state.
     *
     * @param  {number}       entry Entry Id where to go.
     * @return {Promise<any>}       Resolved when done.
     */
    AddonModDataEntryPage.prototype.gotoEntry = function (entry) {
        this.entryId = entry;
        this.page = null;
        this.entryLoaded = false;
        return this.fetchEntryData();
    };
    /**
     * Refresh all the data.
     *
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonModDataEntryPage.prototype.refreshAllData = function () {
        var _this = this;
        var promises = [];
        promises.push(this.dataProvider.invalidateDatabaseData(this.courseId));
        if (this.data) {
            promises.push(this.dataProvider.invalidateEntryData(this.data.id, this.entryId));
            promises.push(this.groupsProvider.invalidateActivityGroupInfo(this.data.coursemodule));
            promises.push(this.dataProvider.invalidateEntriesData(this.data.id));
        }
        return Promise.all(promises).finally(function () {
            return _this.fetchEntryData(true);
        });
    };
    /**
     * Refresh the data.
     *
     * @param {any} [refresher] Refresher.
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonModDataEntryPage.prototype.refreshDatabase = function (refresher) {
        if (this.entryLoaded) {
            return this.refreshAllData().finally(function () {
                refresher && refresher.complete();
            });
        }
    };
    /**
     * Set group to see the database.
     *
     * @param  {number}       groupId Group identifier to set.
     * @return {Promise<any>}         Resolved when done.
     */
    AddonModDataEntryPage.prototype.setGroup = function (groupId) {
        var _this = this;
        this.selectedGroup = groupId;
        this.entryLoaded = false;
        return this.setEntryIdFromPage(this.data.id, 0, this.selectedGroup).then(function () {
            return _this.fetchEntryData();
        });
    };
    /**
     * Convenience function to translate page number to entry identifier.
     *
     * @param  {number}       dataId       Data Id.
     * @param  {number}       [pageNumber] Page number where to go
     * @param  {number}       group        Group Id to get the entry.
     * @return {Promise<any>}              Resolved when done.
     */
    AddonModDataEntryPage.prototype.setEntryIdFromPage = function (dataId, pageNumber, group) {
        var _this = this;
        if (typeof pageNumber == 'number') {
            return this.dataHelper.getPageInfoByPage(dataId, pageNumber, group).then(function (result) {
                _this.entryId = result.entryId;
                _this.page = null;
            });
        }
        return Promise.resolve();
    };
    /**
     * Component being destroyed.
     */
    AddonModDataEntryPage.prototype.ngOnDestroy = function () {
        this.syncObserver && this.syncObserver.off();
        this.entryChangedObserver && this.entryChangedObserver.off();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], AddonModDataEntryPage.prototype, "content", void 0);
    AddonModDataEntryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-mod-data-entry',template:/*ion-inline-start:"C:\wamp\www\BCC_mobapp\bcc_custom_mma\src\addon\mod\data\pages\entry\entry.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title><core-format-text [text]="title"></core-format-text></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-refresher [enabled]="entryLoaded" (ionRefresh)="refreshDatabase($event)">\n\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n    </ion-refresher>\n\n    <core-loading [hideUntil]="entryLoaded">\n\n        <!-- Database entries found to be synchronized -->\n\n        <div class="core-warning-card" icon-start *ngIf="hasOffline">\n\n            <ion-icon name="warning"></ion-icon>\n\n            {{ \'core.hasdatatosync\' | translate: {$a: moduleName} }}\n\n        </div>\n\n\n\n        <ion-item text-wrap *ngIf="groupInfo && (groupInfo.separateGroups || groupInfo.visibleGroups)">\n\n            <ion-label id="addon-data-groupslabel" *ngIf="groupInfo.separateGroups">{{ \'core.groupsseparate\' | translate }}</ion-label>\n\n            <ion-label id="addon-data-groupslabel" *ngIf="groupInfo.visibleGroups">{{ \'core.groupsvisible\' | translate }}</ion-label>\n\n            <ion-select [(ngModel)]="selectedGroup" (ionChange)="setGroup(selectedGroup)" aria-labelledby="addon-data-groupslabel" interface="popover">\n\n                <ion-option *ngFor="let groupOpt of groupInfo.groups" [value]="groupOpt.id">{{groupOpt.name}}</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n\n\n        <div class="addon-data-contents {{cssClass}}">\n\n            <style *ngIf="cssTemplate">\n\n                {{ cssTemplate }}\n\n            </style>\n\n\n\n            <core-compile-html [text]="entryRendered" [jsData]="jsData" [extraImports]="extraImports"></core-compile-html>\n\n        </div>\n\n\n\n        <ion-item *ngIf="data && entry">\n\n            <core-comments contextLevel="module" [instanceId]="data.coursemodule" component="mod_data" [itemId]="entry.id" area="database_entry"></core-comments>\n\n        </ion-item>\n\n\n\n        <ion-grid *ngIf="previousId || nextId">\n\n            <ion-row align-items-center>\n\n                <ion-col *ngIf="previousId">\n\n                    <button ion-button block outline icon-start (click)="gotoEntry(previousId)">\n\n                        <ion-icon name="arrow-back" md="ios-arrow-back"></ion-icon>\n\n                        {{ \'core.previous\' | translate }}\n\n                    </button>\n\n                </ion-col>\n\n                <ion-col *ngIf="nextId">\n\n                    <button ion-button block icon-end (click)="gotoEntry(nextId)">\n\n                        {{ \'core.next\' | translate }}\n\n                        <ion-icon name="arrow-forward" md="ios-arrow-forward"></ion-icon>\n\n                    </button>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </core-loading>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp\www\BCC_mobapp\bcc_custom_mma\src\addon\mod\data\pages\entry\entry.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_utils_utils__["a" /* CoreUtilsProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_groups__["a" /* CoreGroupsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_utils_dom__["a" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_12__providers_fields_delegate__["a" /* AddonModDataFieldsDelegate */],
            __WEBPACK_IMPORTED_MODULE_7__core_course_providers_course__["a" /* CoreCourseProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_data__["a" /* AddonModDataProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_offline__["a" /* AddonModDataOfflineProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_helper__["a" /* AddonModDataHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_sites__["a" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_events__["a" /* CoreEventsProvider */]])
    ], AddonModDataEntryPage);
    return AddonModDataEntryPage;
}());

//# sourceMappingURL=entry.js.map
=======
/**
 * Page that displays the search modal.
 */
var AddonModDataSearchPage = /** @class */ (function () {
    function AddonModDataSearchPage(params, viewCtrl, fb, utils, domUtils, fieldsDelegate, textUtils, dataHelper) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this.utils = utils;
        this.domUtils = domUtils;
        this.fieldsDelegate = fieldsDelegate;
        this.textUtils = textUtils;
        this.dataHelper = dataHelper;
        this.extraImports = [__WEBPACK_IMPORTED_MODULE_6__components_components_module__["a" /* AddonModDataComponentsModule */]];
        this.search = params.get('search');
        this.fields = params.get('fields');
        this.data = params.get('data');
        var advanced = {};
        if (typeof this.search.advanced == 'object') {
            Object.keys(this.search.advanced).forEach(function (index) {
                if (typeof _this.search.advanced[index] != 'undefined' && typeof _this.search.advanced[index].name != 'undefined') {
                    advanced[_this.search.advanced[index].name] = _this.search.advanced[index].value ?
                        _this.textUtils.parseJSON(_this.search.advanced[index].value) : '';
                }
                else {
                    advanced[index] = _this.search.advanced[index] ?
                        _this.textUtils.parseJSON(_this.search.advanced[index]) : '';
                }
            });
        }
        else {
            this.search.advanced.forEach(function (field) {
                advanced[field.name] = field.value ? _this.textUtils.parseJSON(field.value) : '';
            });
        }
        this.search.advanced = advanced;
        this.searchForm = fb.group({
            text: [this.search.text],
            sortBy: [this.search.sortBy || '0'],
            sortDirection: [this.search.sortDirection || 'DESC'],
            firstname: [this.search.advanced['firstname'] || ''],
            lastname: [this.search.advanced['lastname'] || '']
        });
        this.fieldsArray = this.utils.objectToArray(this.fields);
        this.advancedSearch = this.renderAdvancedSearchFields();
    }
    /**
     * Displays Advanced Search Fields.
     *
     * @return {string}         Generated HTML.
     */
    AddonModDataSearchPage.prototype.renderAdvancedSearchFields = function () {
        this.jsData = {
            fields: this.fields,
            form: this.searchForm,
            search: this.search.advanced
        };
        var template = this.data.asearchtemplate || this.dataHelper.getDefaultTemplate('asearch', this.fieldsArray), replace, render;
        // Replace the fields found on template.
        this.fieldsArray.forEach(function (field) {
            replace = '[[' + field.name + ']]';
            replace = replace.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
            replace = new RegExp(replace, 'gi');
            // Replace field by a generic directive.
            render = '<addon-mod-data-field-plugin mode="search" [field]="fields[' + field.id +
                ']" [form]="form" [search]="search"></addon-mod-data-field-plugin>';
            template = template.replace(replace, render);
        });
        // Not pluginable other search elements.
        // Replace firstname field by the text input.
        replace = new RegExp('##firstname##', 'gi');
        render = '<span [formGroup]="form"><ion-input type="text" name="firstname" \
        [placeholder]="\'addon.mod_data.authorfirstname\' | translate" formControlName="firstname"></ion-input></span>';
        template = template.replace(replace, render);
        // Replace lastname field by the text input.
        replace = new RegExp('##lastname##', 'gi');
        render = '<span [formGroup]="form"><ion-input type="text" name="lastname" \
        [placeholder]="\'addon.mod_data.authorlastname\' | translate" formControlName="lastname"></ion-input></span>';
        template = template.replace(replace, render);
        return template;
    };
    /**
     * Retrieve the entered data in search in a form.
     *
     * @param {any} searchedData Array with the entered form values.
     * @return {any[]}          Array with the answers.
     */
    AddonModDataSearchPage.prototype.getSearchDataFromForm = function (searchedData) {
        var _this = this;
        var advancedSearch = [];
        // Filter and translate fields to each field plugin.
        this.fieldsArray.forEach(function (field) {
            var fieldData = _this.fieldsDelegate.getFieldSearchData(field, searchedData);
            if (fieldData) {
                fieldData.forEach(function (data) {
                    data.value = JSON.stringify(data.value);
                    // WS wants values in Json format.
                    advancedSearch.push(data);
                });
            }
        });
        // Not pluginable other search elements.
        if (searchedData['firstname']) {
            // WS wants values in Json format.
            advancedSearch.push({
                name: 'firstname',
                value: JSON.stringify(searchedData['firstname'])
            });
        }
        if (searchedData['lastname']) {
            // WS wants values in Json format.
            advancedSearch.push({
                name: 'lastname',
                value: JSON.stringify(searchedData['lastname'])
            });
        }
        return advancedSearch;
    };
    /**
     * Close modal.
     *
     * @param {any} [data] Data to return to the page.
     */
    AddonModDataSearchPage.prototype.closeModal = function (data) {
        this.viewCtrl.dismiss(data);
    };
    /**
     * Toggles between advanced to normal search.
     *
     * @param {boolean} advanced True for advanced, false for basic.
     */
    AddonModDataSearchPage.prototype.changeAdvanced = function (advanced) {
        this.search.searchingAdvanced = advanced;
    };
    /**
     * Done editing.
     *
     * @param {Event} e Event.
     */
    AddonModDataSearchPage.prototype.searchEntries = function (e) {
        e.preventDefault();
        e.stopPropagation();
        var searchedData = this.searchForm.value;
        if (this.search.searchingAdvanced) {
            this.search.advanced = this.getSearchDataFromForm(searchedData);
            this.search.searching = this.search.advanced.length > 0;
        }
        else {
            this.search.text = searchedData.text;
            this.search.searching = this.search.text.length > 0;
        }
        this.search.sortBy = searchedData.sortBy;
        this.search.sortDirection = searchedData.sortDirection;
        this.closeModal(this.search);
    };
    AddonModDataSearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-mod-data-search',template:/*ion-inline-start:"C:\wamp\www\AX-LT_2019\mma_lt\src\addon\mod\data\pages\search\search.html"*/'<ion-header>\n    <ion-navbar core-back-button>\n        <ion-title>{{ \'addon.mod_data.search\' | translate }}</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="closeModal()" [attr.aria-label]="\'core.close\' | translate">\n                <ion-icon name="close"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <div class="fixed-content core-tabs-bar">\n        <a class="tab-slide" [attr.aria-selected]="!search.searchingAdvanced" (click)="changeAdvanced(false)">{{ \'addon.mod_data.search\' | translate}}</a>\n        <a class="tab-slide" [attr.aria-selected]="search.searchingAdvanced" (click)="changeAdvanced(true)">{{ \'addon.mod_data.advancedsearch\' | translate }}</a>\n    </div>\n    <form (ngSubmit)="searchEntries($event)" [formGroup]="searchForm">\n        <ion-list no-margin>\n            <ion-item [hidden]="search.searchingAdvanced">\n                <ion-input type="text" placeholder="{{ \'addon.mod_data.search\' | translate}}" [(ngModel)]="search.text" name="text" formControlName="text"></ion-input>\n            </ion-item>\n            <ion-item text-wrap>\n                <ion-label stacked>{{ \'core.sortby\' | translate }}</ion-label>\n                <ion-select interface="action-sheet" name="sortBy" formControlName="sortBy" [placeholder]="\'core.sortby\' | translate">\n                    <optgroup *ngIf="fieldsArray.length" label="{{ \'addon.mod_data.fields\' | translate }}">\n                        <ion-option *ngFor="let field of fieldsArray" [value]="field.id">{{field.name}}</ion-option>\n                    </optgroup>\n                    <optgroup label="{{ \'addon.mod_data.other\' | translate }}">\n                        <ion-option value="0">{{ \'addon.mod_data.timeadded\' | translate }}</ion-option>\n                        <ion-option value="-4">{{ \'addon.mod_data.timemodified\' | translate }}</ion-option>\n                        <ion-option value="-1">{{ \'addon.mod_data.authorfirstname\' | translate }}</ion-option>\n                        <ion-option value="-2">{{ \'addon.mod_data.authorlastname\' | translate }}</ion-option>\n                        <ion-option value="-3" *ngIf="data.approval">{{ \'addon.mod_data.approved\' | translate }}</ion-option>\n                    </optgroup>\n                </ion-select>\n            </ion-item>\n            <ion-list radio-group [(ngModel)]="search.sortDirection" name="sortDirection" formControlName="sortDirection">\n                <ion-item>\n                    <ion-label>{{ \'addon.mod_data.ascending\' | translate }}</ion-label>\n                    <ion-radio value="ASC"></ion-radio>\n                </ion-item>\n                <ion-item>\n                    <ion-label>{{ \'addon.mod_data.descending\' | translate }}</ion-label>\n                    <ion-radio value="DESC"></ion-radio>\n                </ion-item>\n            </ion-list>\n            <div padding [hidden]="!advancedSearch || !search.searchingAdvanced" class="addon-data-advanced-search">\n                <core-compile-html [text]="advancedSearch" [jsData]="jsData" [extraImports]="extraImports"></core-compile-html>\n            </div>\n        </ion-list>\n        <div padding>\n            <button ion-button block type="submit" icon-start>\n                <ion-icon name="search"></ion-icon>\n                {{ \'addon.mod_data.search\' | translate }}\n            </button>\n        </div>\n    </form>\n</ion-content>\n'/*ion-inline-end:"C:\wamp\www\AX-LT_2019\mma_lt\src\addon\mod\data\pages\search\search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["E" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_utils_utils__["a" /* CoreUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__["a" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_fields_delegate__["a" /* AddonModDataFieldsDelegate */],
            __WEBPACK_IMPORTED_MODULE_5__providers_utils_text__["a" /* CoreTextUtilsProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_helper__["a" /* AddonModDataHelperProvider */]])
    ], AddonModDataSearchPage);
    return AddonModDataSearchPage;
}());

//# sourceMappingURL=search.js.map
>>>>>>> 5632a65c1fdc0002876490b68e6dc6621a0dd43d

/***/ })

});
//# sourceMappingURL=91.js.map