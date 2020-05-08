import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardsDataModule } from '@card-triage/features/card/data';
import { CardUiModule } from '@card-triage/features/card/ui';

import { AppComponent } from './app.component';
import { RootStoreModule } from './root-store.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot([]),
        RootStoreModule,
        CardsDataModule,
        CardUiModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
