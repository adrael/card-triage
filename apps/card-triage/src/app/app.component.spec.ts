import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardsService } from '@card-triage/features/card/data';
import { CardStatus } from '@card-triage/interfaces';
import { of } from 'rxjs';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let cardsServiceMock: Partial<CardsService>;

    beforeEach(() => {
        cardsServiceMock = {
            fetchCards: jest.fn(),
            getCardsDone: jest.fn().mockReturnValue(of([])),
            changeCardStatus: jest.fn(),
            fetchFilteredCards: jest.fn(),
            getCardsPendingOrRejected: jest.fn().mockReturnValue(of([]))
        };

        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            declarations: [AppComponent],
            providers: [
                {
                    provide: CardsService,
                    useValue: cardsServiceMock
                }
            ]
        });

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    test('creates the app', () => {
        expect(component).toBeTruthy();
    });

    describe('ngOnInit', () => {
        test('requests cards', () => {
            expect(cardsServiceMock.fetchCards).toHaveBeenCalled();
        });
    });

    describe('onCardStatusChange', () => {
        test('requests card status change', () => {
            const cardStatusChange = { card: {} as any, status: CardStatus.REJECTED };

            component.onCardStatusChange(cardStatusChange);

            expect(cardsServiceMock.changeCardStatus).toHaveBeenCalledWith(cardStatusChange);
        });
    });

    describe('onQueryChange', () => {
        ['', undefined, null, 0, false].forEach((value: any) => {
            test(`requests unfiltered cards when query is "${value}"`, () => {
                jest.resetAllMocks();
                component.onQueryChange(value);

                expect(cardsServiceMock.fetchCards).toHaveBeenCalled();
            });
        });

        test('requests filtered cards when query is valid string', () => {
            jest.resetAllMocks();
            const query = 'bob';

            component.onQueryChange(query);

            expect(cardsServiceMock.fetchFilteredCards).toHaveBeenCalledWith(query);
        });
    });
});
