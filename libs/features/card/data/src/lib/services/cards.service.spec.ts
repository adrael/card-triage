import { TestBed } from '@angular/core/testing';
import { CardsRepository } from '@card-triage/features/card/data';
import { provideMockStore } from '@ngrx/store/testing';
import { cold } from 'jest-marbles';
import { of } from 'rxjs';

import { CardsService } from './cards.service';

describe('CardsService', () => {
    let cardsService: CardsService;
    let cardsRepositoryMock: Partial<CardsRepository>;

    beforeEach(() => {
        cardsRepositoryMock = {
            fetchCards: jest.fn().mockReturnValue(of([]))
        };

        TestBed.configureTestingModule({
            providers: [
                provideMockStore(),
                CardsService,
                {
                    provide: CardsRepository,
                    useValue: cardsRepositoryMock
                }
            ]
        });

        cardsService = TestBed.inject(CardsService);
    });

    test('creates an instance', () => {
        expect(cardsService).toBeTruthy();
    });

    describe('fetchCards', () => {
        test('calls repository to fetch cards', () => {
            const expected = cold('(a|)', { a: [] });

            expect(cardsService.fetchCards()).toBeObservable(expected);
            expect(cardsRepositoryMock.fetchCards).toHaveBeenCalled();
        });
    });
});
