import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { CardsRepository } from '@card-triage/features/card/data';
import { CardStatus } from '@card-triage/interfaces';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { hot } from 'jest-marbles';
import { Observable, of, throwError } from 'rxjs';

import { CardsActions } from '../actions/cards.actions';
import { CardsEffects } from './cards.effects';

const CARD_MOCK = {
    arrhythmias: ['AFib', 'AV Block', 'Pause', 'PSVC', 'PVC'],
    created_date: '2020-03-10T13:14:59+0000',
    id: 0,
    patient_name: 'Bob',
    status: CardStatus.PENDING
};

describe('CardsEffects', () => {
    let router: Router;
    let effects: CardsEffects;
    let actions$: Observable<Action>;
    let cardsRepositoryMock: Partial<CardsRepository>;

    beforeEach(() => {
        cardsRepositoryMock = {
            fetchCards: jest.fn().mockReturnValue(of([CARD_MOCK]))
        };

        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            providers: [
                provideMockActions(() => actions$),
                CardsEffects,
                {
                    provide: CardsRepository,
                    useValue: cardsRepositoryMock
                }
            ]
        });

        router = TestBed.inject(Router);
        effects = TestBed.inject(CardsEffects);
    });

    test('creates an instance', () => {
        expect(effects).toBeTruthy();
    });

    describe('fetchCards$', () => {
        test('fetches cards from backend', () => {
            actions$ = hot('a', {
                a: CardsActions.fetchCards()
            });

            const expected = hot('a', {
                a: CardsActions.fetchCardsSuccess({
                    cards: [CARD_MOCK]
                })
            });

            expect(effects.fetchCards$).toBeObservable(expected);
        });

        test('safely handles fetch failure', () => {
            actions$ = hot('a', {
                a: CardsActions.fetchCards()
            });

            const error = { message: 'Failure' };
            (cardsRepositoryMock.fetchCards as jest.Mock).mockReturnValue(throwError(error));

            const expected = hot('a', {
                a: CardsActions.fetchCardsError({ error: error.message })
            });

            expect(effects.fetchCards$).toBeObservable(expected);
        });
    });
});
