import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { CardsService } from '@card-triage/features/card/data';
import { CardStatus } from '@card-triage/interfaces';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { hot } from 'jest-marbles';
import { Observable, throwError } from 'rxjs';

import { ICardService } from '../../services/card.service.interface';
import { CardsServiceMock } from '../../services/cards.service.mock';
import { CardsActions } from '../actions/cards.actions';
import { CardsEffects } from './cards.effects';

describe('CardsEffects', () => {
    let router: Router;
    let effects: CardsEffects;
    let actions$: Observable<Action>;
    let cardsService: ICardService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            providers: [
                provideMockActions(() => actions$),
                CardsEffects,
                {
                    provide: CardsService,
                    useClass: CardsServiceMock
                }
            ]
        });

        router = TestBed.inject(Router);
        effects = TestBed.inject(CardsEffects);
        cardsService = TestBed.inject(CardsService);
    });

    test('creates an instance', () => {
        expect(effects).toBeTruthy();
    });

    describe('fetchCards$', () => {
        test('fetches cards from backend', () => {
            actions$ = hot('a', {
                a: CardsActions.fetchCards()
            });

            const card = {
                arrhythmias: ['AFib', 'AV Block', 'Pause', 'PSVC', 'PVC'],
                created_date: '2020-03-10T13:14:59+0000',
                id: 0,
                patient_name: 'Bob',
                status: CardStatus.PENDING
            };
            const expected = hot('a', {
                a: CardsActions.fetchCardsSuccess({
                    cards: [card]
                })
            });

            expect(effects.fetchCards$).toBeObservable(expected);
        });

        test('safely handles fetch failure', () => {
            actions$ = hot('a', {
                a: CardsActions.fetchCards()
            });

            const error = { message: 'Failure' };
            jest.spyOn(cardsService, 'fetchCards').mockReturnValue(throwError(error));

            const expected = hot('a', {
                a: CardsActions.fetchCardsError({ error: error.message })
            });

            expect(effects.fetchCards$).toBeObservable(expected);
        });
    });
});
