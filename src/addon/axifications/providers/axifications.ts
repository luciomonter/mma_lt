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

import { Injectable } from '@angular/core';
import { CoreAppProvider } from '@providers/app';
import { CoreLoggerProvider } from '@providers/logger';
import { CoreSitesProvider } from '@providers/sites';
import { CoreTimeUtilsProvider } from '@providers/utils/time';
import { CoreUserProvider } from '@core/user/providers/user';
import { CoreEmulatorHelperProvider } from '@core/emulator/providers/helper';

/**
 * Service to handle axifications.
 */
@Injectable()
export class AddonAxificationsProvider {

    static READ_CHANGED_EVENT = 'addon_axifications_read_changed_event';
    static READ_CRON_EVENT = 'addon_axifications_read_cron_event';
    static PUSH_SIMULATION_COMPONENT = 'AddonAxificationsPushSimulation';
    static LIST_LIMIT = 20;

    protected ROOT_CACHE_KEY = 'mmaAxifications:';
    protected logger;

    constructor(
			logger: CoreLoggerProvider, 
			private appProvider: CoreAppProvider, 
			private sitesProvider: CoreSitesProvider,
            private timeUtils: CoreTimeUtilsProvider, 
			private userProvider: CoreUserProvider,
            private emulatorHelper: CoreEmulatorHelperProvider) 
	{
        this.logger = logger.getInstance('AddonAxificationsProvider');
    }

    
}
