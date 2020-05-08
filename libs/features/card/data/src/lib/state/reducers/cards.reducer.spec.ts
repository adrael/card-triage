import { CardStatus } from '@card-triage/interfaces';

import { CardsActions } from '../actions/cards.actions';
import { cardsInitialState, cardsReducer } from './cards.reducer';

describe('Cards Reducers', () => {
    describe('an unknown action', () => {
        test('returns the previous cards state', () => {
            const action = {} as any;

            const result = cardsReducer(cardsInitialState, action);

            expect(result).toBe(cardsInitialState);
        });
    });

    describe('fetchCardsSuccess', () => {
        test('saves cards into state', () => {
            const card = {
                arrhythmias: ['AFib', 'AV Block', 'Pause', 'PSVC', 'PVC'],
                created_date: '2020-03-10T13:14:59+0000',
                id: 0,
                patient_name: 'Bob',
                status: CardStatus.PENDING
            };
            const action = CardsActions.fetchCardsSuccess({ cards: [card] });
            const result = cardsReducer(cardsInitialState, action);

            expect(result).toEqual({ cards: [card] });
        });
    });
});
