import { CardStatus } from '@card-triage/interfaces';
import { selectCards, selectCardsState } from './cards.selectors';

describe('Cards Selectors', () => {
    describe('selectCardsState', () => {
        test('selects cards state', () => {
            const card = {
                arrhythmias: ['AFib', 'AV Block', 'Pause', 'PSVC', 'PVC'],
                created_date: '2020-03-10T13:14:59+0000',
                id: 0,
                patient_name: 'Bob',
                status: CardStatus.PENDING
            };
            const initialState = { cards: [card] };
            const selectedResult = selectCardsState.projector(initialState);

            expect(selectedResult).toStrictEqual(initialState);
        });
    });

    describe('selectCards', () => {
        test('selects cards', () => {
            const card = {
                arrhythmias: ['AFib', 'AV Block', 'Pause', 'PSVC', 'PVC'],
                created_date: '2020-03-10T13:14:59+0000',
                id: 0,
                patient_name: 'Bob',
                status: CardStatus.PENDING
            };
            const initialState = {
                entities: { [card.id]: card },
                ids: [card.id]
            };
            const selectedResult = selectCards.projector(initialState);

            expect(selectedResult).toStrictEqual([card]);
        });
    });
});
