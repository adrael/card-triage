import { TestBed } from '@angular/core/testing';
import { CardsActions, CardsState } from '@card-triage/features/card/data';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { cold } from 'jest-marbles';

import { CardsService } from './cards.service';

describe('CardsService', () => {
    let cardsService: CardsService;
    let cardsStore: Store<CardsState>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [provideMockStore(), CardsService]
        });

        cardsStore = TestBed.inject(Store);
        cardsService = TestBed.inject(CardsService);
    });

    test('creates an instance', () => {
        expect(cardsService).toBeTruthy();
    });

    describe('fetchCards', () => {
        test('requests cards', () => {
            const dispatchSpy = jest.spyOn(cardsStore, 'dispatch');
            cardsService.fetchCards();
            expect(dispatchSpy).toHaveBeenCalledWith(CardsActions.fetchCards());
        });
    });
});
