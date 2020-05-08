import { createFeatureSelector, createSelector } from '@ngrx/store';

import { cardsFeatureKey, CardsState, selectAllCards } from '../reducers/cards.reducer';

export const selectCardsState = createFeatureSelector<CardsState>(cardsFeatureKey);

export const selectCards = createSelector(
    selectCardsState,
    selectAllCards
);
