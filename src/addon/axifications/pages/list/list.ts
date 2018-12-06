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

import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { Subscription } from 'rxjs';
import { CoreDomUtilsProvider } from '@providers/utils/dom';
import { CoreTextUtilsProvider } from '@providers/utils/text';
import { CoreEventsProvider, CoreEventObserver } from '@providers/events';
import { CoreSitesProvider } from '@providers/sites';
import { CoreUtilsProvider } from '@providers/utils/utils';
import { AddonAxificationsProvider } from '../../providers/axifications';
import { AddonPushNotificationsDelegate } from '@addon/pushnotifications/providers/delegate';

/**
 * Page that displays the list of axifications.
 */
@IonicPage({ segment: 'addon-axifications-list' })
@Component({
    selector: 'page-addon-axifications-list',
    templateUrl: 'list.html',
})
export class AddonAxificationsListPage {

    axifications = [];
    axificationsLoaded = false;
    canLoadMore = false;
    canMarkAllAxificationsAsRead = false;
    loadingMarkAllAxificationsAsRead = false;

    protected readCount = 0;
    protected unreadCount = 0;
    protected cronObserver: CoreEventObserver;
    protected pushObserver: Subscription;

    constructor(navParams: NavParams, private domUtils: CoreDomUtilsProvider, private eventsProvider: CoreEventsProvider,
            private sitesProvider: CoreSitesProvider, private textUtils: CoreTextUtilsProvider,
            private utils: CoreUtilsProvider, private axificationsProvider: AddonAxificationsProvider,
            private pushNotificationsDelegate: AddonPushNotificationsDelegate) 
	{
			
    }

    /**
     * View loaded.
     */
    ionViewDidLoad(siteId?): void {
		
		jQuery( document ).ready(function() {
			console.log( "ax jQuery ready!" );
			//alert("axification READY");
 
		});			

		var site = this.sitesProvider.getCurrentSite()
	
		// Get username and fullname.
		/// BCC SVIL:
		//var AUTH_USER_KEY_wsToken = "23dfa2e513f8416e91bf133af800c3e0"; 
		/// BCC TEST:
		//var AUTH_USER_KEY_wsToken = "eb15b5da943a5546296e027bee29f1b1"; 
		/// BCC PROD:
		var AUTH_USER_KEY_wsToken = "6c7eb64adb7bbcadbedf13dbdd85ae99"; 
		var userId =  site.getUserId();
		var fullName = site.getInfo().fullname;
		var userName = site.getInfo().username;
		var siteUrl = site.getURL();
		var wsToken = site.getToken();
		/*
		console.log( "---userName:: " + userName );
		console.log( "---siteUrl:: " + siteUrl );
		console.log( "---wsToken:: " + wsToken );
		*/
		var wantsURL = siteUrl + "/local/axperformance/index.php";
		var functionOnWS = 'auth_userkey_request_login_url';
		
		this.getMyLoginUrl(userName,wantsURL,AUTH_USER_KEY_wsToken,siteUrl,functionOnWS);
		
    }

	getMyLoginUrl(usernameToLogin,wantsUrl,wsToken,moodleDomain,functionNameOnWS): void {
		var serverUrl = moodleDomain + '/webservice/rest/server.php' + '?wstoken=' + wsToken + '&wsfunction=' + functionNameOnWS + '&moodlewsrestformat=json';
		
		var wantsUrltoAdd = '&wantsurl=' + encodeURI(wantsUrl);
		var loginUrl = '';
		
		var bindToApp = this;
		
		jQuery.post( serverUrl, "user[username]="+usernameToLogin)
		  .done(function( data ) {
			//alert( "Data Loaded: " + data );
			console.log(data.loginurl);
			loginUrl = data.loginurl + wantsUrltoAdd;		
			bindToApp.afterDirectLoginUrlObtained(loginUrl);
		});
		
	}	
	
	
	afterDirectLoginUrlObtained(loginUrl): void {
		console.log("goo:: " + loginUrl);
		jQuery("#embeded_iframe").attr("src",loginUrl);
		
		/// binding to bottom menu
		jQuery("a.tab-button").click(function() {
			console.log("change TAB");
			/*
			if( !(jQuery("ion-header.header").is(':visible') )){
				jQuery("ion-header.header").show('slide', { direction: "up" }, 500, function() {
					$("div.scroll-content").css("margin-top","51px");
				});	
			}
			*/
			
		});
	}	
	
    /**
     * Convenience function to get axifications. Gets unread axifications first.
     *
     * @param {boolean} refreh Whether we're refreshing data.
     * @return {Promise<any>} Resolved when done.
     */
    protected fetchAxifications(refresh?: boolean): Promise<any> {
        if (refresh) {
            this.readCount = 0;
            this.unreadCount = 0;
        }

        const limit = AddonAxificationsProvider.LIST_LIMIT;

        return this.axificationsProvider.getUnreadAxifications(this.unreadCount, limit).then((unread) => {
            const promises = [];

            unread.forEach(this.formatText.bind(this));

            /* Don't add the unread axifications to this.axifications yet. If there are no unread axifications
               that causes that the "There are no axifications" message is shown in pull to refresh. */
            this.unreadCount += unread.length;

            if (unread.length < limit) {
                // Limit not reached. Get read axifications until reach the limit.
                const readLimit = limit - unread.length;
                promises.push(this.axificationsProvider.getReadAxifications(this.readCount, readLimit).then((read) => {
                    read.forEach(this.formatText.bind(this));
                    this.readCount += read.length;
                    if (refresh) {
                        this.axifications = unread.concat(read);
                    } else {
                        this.axifications = this.axifications.concat(unread, read);
                    }
                    this.canLoadMore = read.length >= readLimit;
                }).catch((error) => {
                    if (unread.length == 0) {
						//alert("ax error");
                        this.domUtils.showErrorModalDefault(error, 'addon.axifications.errorgetaxifications', true);
                        this.canLoadMore = false; // Set to false to prevent infinite calls with infinite-loading.
                    }
                }));
            } else {
                if (refresh) {
                    this.axifications = unread;
                } else {
                    this.axifications = this.axifications.concat(unread);
                }
                this.canLoadMore = true;
            }

            return Promise.all(promises).then(() => {
                // Mark retrieved axifications as read if they are not.
                this.markAxificationsAsRead(unread);
            });
        }).catch((error) => {
            this.domUtils.showErrorModalDefault(error, 'addon.axifications.errorgetaxifications', true);
            this.canLoadMore = false; // Set to false to prevent infinite calls with infinite-loading.
        });
    }

    /**
     * Mark all axifications as read.
     */
    markAllAxificationsAsRead(): void {
        this.loadingMarkAllAxificationsAsRead = true;
        this.axificationsProvider.markAllAxificationsAsRead().catch(() => {
            // Omit failure.
        }).finally(() => {
            const siteId = this.sitesProvider.getCurrentSiteId();
            this.eventsProvider.trigger(AddonAxificationsProvider.READ_CHANGED_EVENT, null, siteId);

            this.axificationsProvider.getUnreadAxificationsCount().then((unread) => {
                this.canMarkAllAxificationsAsRead = unread > 0;
                this.loadingMarkAllAxificationsAsRead = false;
            });
        });
    }

    /**
     * Mark axifications as read.
     *
     * @param {any[]} axifications Array of notification objects.
     */
    protected markAxificationsAsRead(axifications: any[]): void {
        let promise;

        if (axifications.length > 0) {
            const promises = axifications.map((notification) => {
                return this.axificationsProvider.markNotificationRead(notification.id);
            });

            promise = Promise.all(promises).catch(() => {
                // Ignore errors.
            }).finally(() => {
                this.axificationsProvider.invalidateAxificationsList().finally(() => {
                    const siteId = this.sitesProvider.getCurrentSiteId();
                    this.eventsProvider.trigger(AddonAxificationsProvider.READ_CHANGED_EVENT, null, siteId);
                });
            });
        } else {
            promise = Promise.resolve();
        }

        promise.finally(() => {
            // Check if mark all axifications as read is enabled and there are some to read.
            if (this.axificationsProvider.isMarkAllAxificationsAsReadEnabled()) {
                this.loadingMarkAllAxificationsAsRead = true;

                return this.axificationsProvider.getUnreadAxificationsCount().then((unread) => {
                    this.canMarkAllAxificationsAsRead = unread > 0;
                    this.loadingMarkAllAxificationsAsRead = false;
                });
            }
            this.canMarkAllAxificationsAsRead = false;
        });
    }

    /**
     * Refresh axifications.
     *
     * @param {any} [refresher] Refresher.
     */
    refreshAxifications(refresher?: any): void {
	
		alert("hey babe!");
		
        this.axificationsProvider.invalidateAxificationsList().finally(() => {
            return this.fetchAxifications(true).finally(() => {
                if (refresher) {
                    refresher.complete();
                }
            });
        });
		
    }

    /**
     * Load more results.
     *
     * @param {any} infiniteScroll The infinit scroll instance.
     */
    loadMoreAxifications(infiniteScroll: any): void {
        this.fetchAxifications().finally(() => {
            infiniteScroll.complete();
        });
    }

    /**
     * Formats the text of a notification.
     *
     * @param {any} notification The notification object.
     */
    protected formatText(notification: any): void {
        const text = notification.mobiletext.replace(/-{4,}/ig, '');
        notification.mobiletext = this.textUtils.replaceNewLines(text, '<br>');
    }

    /**
     * Page destroyed.
     */
    ngOnDestroy(): void {
        this.cronObserver && this.cronObserver.off();
        this.pushObserver && this.pushObserver.unsubscribe();
    }
}
