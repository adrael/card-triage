import { Card, Cards } from '@card-triage/interfaces';
import { createEntityAdapter, EntityAdapter, EntityState, Update } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import { CardsActions } from '../actions/cards.actions';

export const cardsFeatureKey = 'cards';

export interface CardsState extends EntityState<Card> {}

export function selectCardId({ id }: Card): number {
    return id;
}

export const adapter: EntityAdapter<Card> = createEntityAdapter<Card>({
    selectId: selectCardId
});

export const cardsInitialState: CardsState = adapter.getInitialState();

const { selectAll } = adapter.getSelectors();
export const selectAllCards = selectAll;

const cardsReducerFn = createReducer(
    cardsInitialState,
    on(
        CardsActions.fetchCardsSuccess,
        (state: CardsState, { cards }: { cards: Cards }) => {
            return adapter.addMany(cards, state);
        }
    ),
    on(
        CardsActions.changeCardStatusSuccess,
        (state: CardsState, { update }: { update: Update<Card> }) => {
            return adapter.updateOne(update, state);
        }
    )
);

export function cardsReducer(state: CardsState | undefined, action: Action): CardsState {
    return cardsReducerFn(state, action);
}
