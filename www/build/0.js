webpackJsonp([0],{

/***/ 1867:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCoursesDashboardPageModule", function() { return CoreCoursesDashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard__ = __webpack_require__(2004);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_components_module__ = __webpack_require__(923);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_sitehome_components_components_module__ = __webpack_require__(926);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_block_components_components_module__ = __webpack_require__(2008);
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









var CoreCoursesDashboardPageModule = /** @class */ (function () {
    function CoreCoursesDashboardPageModule() {
    }
    CoreCoursesDashboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__dashboard__["a" /* CoreCoursesDashboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
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

/***/ 1909:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreBlockDelegate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_logger__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_events__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes_delegate__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__default_block_handler__ = __webpack_require__(2005);
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
 * Delegate to register block handlers.
 */
var CoreBlockDelegate = /** @class */ (function (_super) {
    __extends(CoreBlockDelegate, _super);
    function CoreBlockDelegate(logger, sitesProvider, eventsProvider, defaultHandler) {
        var _this = _super.call(this, 'CoreBlockDelegate', logger, sitesProvider, eventsProvider) || this;
        _this.defaultHandler = defaultHandler;
        _this.handlerNameProperty = 'blockName';
        _this.featurePrefix = 'CoreBlockDelegate_';
        return _this;
    }
    /**
     * Get the display data for a certain block.
     *
     * @param {Injector} injector Injector.
     * @param {any} block The block to render.
     * @param {string} contextLevel The context where the block will be used.
     * @param {number} instanceId The instance ID associated with the context level.
     * @return {Promise<CoreBlockHandlerData>} Promise resolved with the display data.
     */
    CoreBlockDelegate.prototype.getBlockDisplayData = function (injector, block, contextLevel, instanceId) {
        return Promise.resolve(this.executeFunctionOnEnabled(block.name, 'getDisplayData', [injector, block]));
    };
    /**
     * Check if any of the blocks in a list is supported.
     *
     * @param {any[]} blocks The list of blocks.
     * @return {boolean} Whether any of the blocks is supported.
     */
    CoreBlockDelegate.prototype.hasSupportedBlock = function (blocks) {
        var _this = this;
        blocks = blocks || [];
        return !!blocks.find(function (block) { return _this.isBlockSupported(block.name); });
    };
    /**
     * Check if a block is supported.
     *
     * @param {string} name Block "name". E.g. 'activity_modules'.
     * @return {boolean} Whether it's supported.
     */
    CoreBlockDelegate.prototype.isBlockSupported = function (name) {
        return this.hasHandler(name, true);
    };
    CoreBlockDelegate = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_logger__["a" /* CoreLoggerProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_sites__["a" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_events__["a" /* CoreEventsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__default_block_handler__["a" /* CoreBlockDefaultHandler */]])
    ], CoreBlockDelegate);
    return CoreBlockDelegate;
}(__WEBPACK_IMPORTED_MODULE_4__classes_delegate__["a" /* CoreDelegate */]));

//# sourceMappingURL=delegate.js.map

/***/ }),

/***/ 1910:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreBlockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_delegate__ = __webpack_require__(1909);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_dynamic_component_dynamic_component__ = __webpack_require__(151);
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
 * Component to render a block.
 */
var CoreBlockComponent = /** @class */ (function () {
    function CoreBlockComponent(injector, blockDelegate) {
        this.injector = injector;
        this.blockDelegate = blockDelegate;
        this.data = {}; // Data to pass to the component.
        this.loaded = false;
    }
    /**
     * Component being initialized.
     */
    CoreBlockComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.block) {
            this.loaded = true;
            return;
        }
        // Get the data to render the block.
        this.blockDelegate.getBlockDisplayData(this.injector, this.block, this.contextLevel, this.instanceId).then(function (data) {
            if (!data) {
                // Block not supported, don't render it.
                return;
            }
            _this.title = data.title;
            _this.class = data.class;
            _this.componentClass = data.component;
            // Set up the data needed by the block component.
            _this.data = Object.assign({
                block: _this.block,
                contextLevel: _this.contextLevel,
                instanceId: _this.instanceId,
            }, _this.extraData || {}, data.componentData || {});
        }).catch(function () {
            // Ignore errors.
        }).finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Refresh the data.
     *
     * @param {any} [refresher] Refresher. Please pass this only if the refresher should finish when this function finishes.
     * @param {Function} [done] Function to call when done.
     * @param {boolean} [showErrors=false] If show errors to the user of hide them.
     * @return {Promise<any>} Promise resolved when done.
     */
    CoreBlockComponent.prototype.doRefresh = function (refresher, done, showErrors) {
        if (showErrors === void 0) { showErrors = false; }
        if (this.dynamicComponent) {
            return Promise.resolve(this.dynamicComponent.callComponentFunction('doRefresh', [refresher, done, showErrors]));
        }
        return Promise.resolve();
    };
    /**
     * Invalidate some data.
     *
     * @return {Promise<any>} Promise resolved when done.
     */
    CoreBlockComponent.prototype.invalidate = function () {
        if (this.dynamicComponent) {
            return Promise.resolve(this.dynamicComponent.callComponentFunction('invalidateContent'));
        }
        return Promise.resolve();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__components_dynamic_component_dynamic_component__["a" /* CoreDynamicComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__components_dynamic_component_dynamic_component__["a" /* CoreDynamicComponent */])
    ], CoreBlockComponent.prototype, "dynamicComponent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], CoreBlockComponent.prototype, "block", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], CoreBlockComponent.prototype, "contextLevel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], CoreBlockComponent.prototype, "instanceId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], CoreBlockComponent.prototype, "extraData", void 0);
    CoreBlockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'core-block',template:/*ion-inline-start:"C:\wamp\www\AX-LT_2019\mma_lt2\src\core\block\components\block\core-block.html"*/'<!-- Only render the block if it\'s supported. -->\n\n<div *ngIf="loaded && componentClass" class="{{class}}">\n\n    <core-dynamic-component [component]="componentClass" [data]="data"></core-dynamic-component>\n\n</div>\n\n'/*ion-inline-end:"C:\wamp\www\AX-LT_2019\mma_lt2\src\core\block\components\block\core-block.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */], __WEBPACK_IMPORTED_MODULE_1__providers_delegate__["a" /* CoreBlockDelegate */]])
    ], CoreBlockComponent);
    return CoreBlockComponent;
}());

//# sourceMappingURL=block.js.map

/***/ }),

/***/ 2004:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreCoursesDashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_events__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_tabs_tabs__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_block_providers_delegate__ = __webpack_require__(1909);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_block_components_block_block__ = __webpack_require__(1910);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_sitehome_providers_sitehome__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_sitehome_components_index_index__ = __webpack_require__(927);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_courses__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_dashboard__ = __webpack_require__(2007);
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
    }
    /**
     * View loaded.
     */
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
            selector: 'page-core-courses-dashboard',template:/*ion-inline-start:"C:\wamp\www\AX-LT_2019\mma_lt2\src\core\courses\pages\dashboard\dashboard.html"*/'    <ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title><core-format-text [text]="siteName"></core-format-text></ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button *ngIf="searchEnabled" ion-button icon-only (click)="openSearch()" [attr.aria-label]="\'core.courses.searchcourses\' | translate">\n\n                <ion-icon name="search"></ion-icon>\n\n            </button>\n\n            <core-context-menu>\n\n                <core-context-menu-item *ngIf="downloadCourseEnabled || downloadCoursesEnabled" [priority]="1000" [content]="\'core.settings.showdownloadoptions\' | translate" (action)="toggleDownload()" [iconAction]="downloadEnabledIcon"></core-context-menu-item>\n\n            </core-context-menu>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <core-tabs [selectedIndex]="firstSelectedTab" [hideUntil]="tabsReady">\n\n        <!-- Site home tab. -->\n\n        <core-tab [show]="siteHomeEnabled" [title]="\'core.sitehome.sitehome\' | translate">\n\n            <ng-template>\n\n                <ion-content>\n\n                    <ion-refresher [enabled]="!!siteHomeComponent && siteHomeComponent.dataLoaded" (ionRefresh)="siteHomeComponent.doRefresh($event)">\n\n                        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n                    </ion-refresher>\n\n                    <core-sitehome-index></core-sitehome-index>\n\n                </ion-content>\n\n            </ng-template>\n\n        </core-tab>\n\n\n\n        <!-- Dashboard tab. -->\n\n        <core-tab [show]="dashboardEnabled" [title]="\'core.courses.mymoodle\' | translate">\n\n            <ng-template>\n\n                <ion-content>\n\n                    <ion-refresher [enabled]="dashboardLoaded" (ionRefresh)="refreshDashboard($event)">\n\n                        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n                    </ion-refresher>\n\n                    <core-loading [hideUntil]="dashboardLoaded" class="core-loading-center">\n\n                        <ion-list>\n\n                            <!-- Dashboard blocks. -->\n\n                            <ng-container *ngFor="let block of blocks">\n\n                                <core-block [block]="block" contextLevel="user" [instanceId]="userId" [extraData]="{\'downloadEnabled\': downloadEnabled}"></core-block>\n\n                            </ng-container>\n\n                        </ion-list>\n\n\n\n                        <core-empty-box *ngIf="blocks.length == 0" icon="qr-scanner" [message]="\'core.course.nocontentavailable\' | translate"></core-empty-box>\n\n                    </core-loading>\n\n                </ion-content>\n\n            </ng-template>\n\n        </core-tab>\n\n    </core-tabs>\n\n</ion-content>'/*ion-inline-end:"C:\wamp\www\AX-LT_2019\mma_lt2\src\core\courses\pages\dashboard\dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_10__providers_courses__["a" /* CoreCoursesProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_sites__["a" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_8__core_sitehome_providers_sitehome__["a" /* CoreSiteHomeProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_events__["a" /* CoreEventsProvider */], __WEBPACK_IMPORTED_MODULE_11__providers_dashboard__["a" /* CoreCoursesDashboardProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__["a" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_6__core_block_providers_delegate__["a" /* CoreBlockDelegate */]])
    ], CoreCoursesDashboardPage);
    return CoreCoursesDashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 2005:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreBlockDefaultHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_base_block_handler__ = __webpack_require__(2006);
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
 * Default handler used when a block type doesn't have a specific implementation.
 */
var CoreBlockDefaultHandler = /** @class */ (function (_super) {
    __extends(CoreBlockDefaultHandler, _super);
    function CoreBlockDefaultHandler() {
        var _this = _super.call(this) || this;
        _this.name = 'CoreBlockDefault';
        _this.blockName = 'default';
        return _this;
    }
    CoreBlockDefaultHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CoreBlockDefaultHandler);
    return CoreBlockDefaultHandler;
}(__WEBPACK_IMPORTED_MODULE_1__classes_base_block_handler__["a" /* CoreBlockBaseHandler */]));

//# sourceMappingURL=default-block-handler.js.map

/***/ }),

/***/ 2006:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreBlockBaseHandler; });
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
/**
 * Base handler for blocks.
 *
 * This class is needed because parent classes cannot have @Injectable in Angular v6, so the default handler cannot be a
 * parent class.
 */
var CoreBlockBaseHandler = /** @class */ (function () {
    function CoreBlockBaseHandler() {
        this.name = 'CoreBlockBase';
        this.blockName = 'base';
        // Nothing to do.
    }
    /**
     * Whether or not the handler is enabled on a site level.
     *
     * @return {boolean|Promise<boolean>} True or promise resolved with true if enabled.
     */
    CoreBlockBaseHandler.prototype.isEnabled = function () {
        return true;
    };
    /**
     * Returns the data needed to render the block.
     *
     * @param {Injector} injector Injector.
     * @param {any} block The block to render.
     * @param {string} contextLevel The context where the block will be used.
     * @param {number} instanceId The instance ID associated with the context level.
     * @return {CoreBlockHandlerData|Promise<CoreBlockHandlerData>} Data or promise resolved with the data.
     */
    CoreBlockBaseHandler.prototype.getDisplayData = function (injector, block, contextLevel, instanceId) {
        // To be overridden.
        return;
    };
    return CoreBlockBaseHandler;
}());

//# sourceMappingURL=base-block-handler.js.map

/***/ }),

/***/ 2007:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreCoursesDashboardProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_sites__ = __webpack_require__(2);
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
 * Service that provides some features regarding course overview.
 */
var CoreCoursesDashboardProvider = /** @class */ (function () {
    function CoreCoursesDashboardProvider(sitesProvider) {
        this.sitesProvider = sitesProvider;
        this.ROOT_CACHE_KEY = 'CoreCoursesDashboard:';
    }
    /**
     * Get cache key for dashboard blocks WS calls.
     *
     * @param {number} [userId] User ID. Default, 0 means current user.
     * @return {string} Cache key.
     */
    CoreCoursesDashboardProvider.prototype.getDashboardBlocksCacheKey = function (userId) {
        if (userId === void 0) { userId = 0; }
        return this.ROOT_CACHE_KEY + 'blocks:' + userId;
    };
    /**
     * Get dashboard blocks.
     *
     * @param {number} [userId] User ID. Default, current user.
     * @param {string} [siteId] Site ID. If not defined, current site.
     * @return {Promise<any[]>} Promise resolved with the list of blocks.
     * @since 3.6
     */
    CoreCoursesDashboardProvider.prototype.getDashboardBlocks = function (userId, siteId) {
        var _this = this;
        return this.sitesProvider.getSite(siteId).then(function (site) {
            var params = {}, preSets = {
                cacheKey: _this.getDashboardBlocksCacheKey(userId)
            };
            if (userId) {
                params['userid'] = userId;
            }
            return site.read('core_block_get_dashboard_blocks', params, preSets).then(function (result) {
                return result.blocks || [];
            });
        });
    };
    /**
     * Invalidates dashboard blocks WS call.
     *
     * @param {number} [userId] User ID. Default, current user.
     * @param {string} [siteId] Site ID. If not defined, current site.
     * @return {Promise<any>} Promise resolved when the data is invalidated.
     */
    CoreCoursesDashboardProvider.prototype.invalidateDashboardBlocks = function (userId, siteId) {
        var _this = this;
        return this.sitesProvider.getSite(siteId).then(function (site) {
            return site.invalidateWsCacheForKey(_this.getDashboardBlocksCacheKey(userId));
        });
    };
    /**
     * Returns whether or not block based Dashboard is available for a certain site.
     *
     * @param {string} [siteId] Site ID. If not defined, current site.
     * @return {Promise<boolean>} Promise resolved with true if available, resolved with false or rejected otherwise.
     * @since 3.6
     */
    CoreCoursesDashboardProvider.prototype.isAvailable = function (siteId) {
        return this.sitesProvider.getSite(siteId).then(function (site) {
            return site.wsAvailable('core_block_get_dashboard_blocks');
        });
    };
    CoreCoursesDashboardProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_sites__["a" /* CoreSitesProvider */]])
    ], CoreCoursesDashboardProvider);
    return CoreCoursesDashboardProvider;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 2008:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreBlockComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__block_block__ = __webpack_require__(1910);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module__ = __webpack_require__(16);
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






var CoreBlockComponentsModule = /** @class */ (function () {
    function CoreBlockComponentsModule() {
    }
    CoreBlockComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__block_block__["a" /* CoreBlockComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_5__components_components_module__["a" /* CoreComponentsModule */]
            ],
            providers: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__block_block__["a" /* CoreBlockComponent */]
            ]
        })
    ], CoreBlockComponentsModule);
    return CoreBlockComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ })

});
//# sourceMappingURL=0.js.map