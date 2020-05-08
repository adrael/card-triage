import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CardsRepository } from './repositories/cards.repository';
import { CardsService } from './services/cards.service';
import { CardsEffects } from './state/effects/cards.effects';
import { cardsFeatureKey, cardsReducer } from './state/reducers/cards.reducer';

@NgModule({
    imports: [
        HttpClientModule,
        StoreModule.forFeature(cardsFeatureKey, cardsReducer),
        EffectsModule.forFeature([CardsEffects])
    ],
    providers: [CardsRepository, CardsService]
})
export class CardsDataModule {
}
