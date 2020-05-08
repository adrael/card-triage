import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

import { environment } from '../environments/environment';

@NgModule({
    imports: [
        StoreModule.forRoot({}, { runtimeChecks: environment.runtimeChecks }),
        EffectsModule.forRoot([]),
        StoreRouterConnectingModule.forRoot({ routerState: RouterState.Minimal }),
        ...environment.storeDevTools
    ]
})
export class RootStoreModule {}
