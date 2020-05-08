import { CardStatus } from '@card-triage/interfaces';

import { CardsActions } from '../actions/cards.actions';
import { cardsInitialState, cardsReducer } from './cards.reducer';

const CARDS_MOCK = [
    {
        arrhythmias: ['AFib', 'AV Block', 'Pause', 'PSVC', 'PVC'],
        created_date: '2020-03-10T13:14:59+0000',
        id: 0,
        patient_name: 'Bob',
        status: CardStatus.PENDING
    },
    {
        arrhythmias: ['AFib', 'Pause'],
        created_date: '2019-12-31T00:11:14+0000',
        id: 2,
        patient_name: 'Elsa',
        status: CardStatus.DONE
    }
];

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
            const card = CARDS_MOCK[0];
            const action = CardsActions.fetchCardsSuccess({ cards: [card] });
            const result = cardsReducer(cardsInitialState, action);

            expect(result).toEqual({
                entities: { [card.id]: card },
                ids: [card.id]
            });
        });
    });

    describe('fetchFilteredCardsSuccess', () => {
        test('replaces cards into state', () => {
            const initialCard = CARDS_MOCK[0];
            const filteredCard = CARDS_MOCK[1];
            const initialState = {
                entities: { [initialCard.id]: initialCard },
                ids: [initialCard.id]
            };
            const action = CardsActions.fetchFilteredCardsSuccess({ cards: [filteredCard] });
            const result = cardsReducer(initialState, action);

            expect(result).toEqual({
                entities: { [filteredCard.id]: filteredCard },
                ids: [filteredCard.id]
            });
        });
    });
});
