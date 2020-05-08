import { Card, Cards, CardStatusChange } from '@card-triage/interfaces';
import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';

const fetchCards = createAction('[Cards] Fetch Cards');
const fetchCardsError = createAction('[Cards API] Fetch Cards Error', props<{ error: any }>());
const fetchCardsSuccess = createAction('[Cards API] Fetch Cards Success', props<{ cards: Cards }>());

const fetchFilteredCards = createAction('[Cards] Fetch Filtered Cards', props<{ query: string }>());
const fetchFilteredCardsError = createAction('[Cards API] Fetch Filtered Cards Error', props<{ error: any }>());
const fetchFilteredCardsSuccess = createAction('[Cards API] Fetch Filtered Cards Success', props<{ cards: Cards }>());

const changeCardStatus = createAction('[Cards] Change Card Status', props<CardStatusChange>());
const changeCardStatusError = createAction('[Cards API] Change Card Status Error', props<{ error: any }>());
const changeCardStatusSuccess = createAction('[Cards API] Change Card Status Success', props<{ update: Update<Card> }>());

// tslint:disable-next-line:naming-convention variable-name
export const CardsActions = {
    fetchCards,
    fetchCardsError,
    fetchCardsSuccess,
    fetchFilteredCards,
    fetchFilteredCardsError,
    fetchFilteredCardsSuccess,
    changeCardStatus,
    changeCardStatusError,
    changeCardStatusSuccess
};
