import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardsDataModule } from '@card-triage/features/card/data';
import { CardUiModule } from '@card-triage/features/card/ui';
import { SearchUiModule } from '@card-triage/features/search/ui';

import { AppComponent } from './app.component';
import { RootStoreModule } from './root-store.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot([]),
        RootStoreModule,
        CardsDataModule,
        CardUiModule,
        SearchUiModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
