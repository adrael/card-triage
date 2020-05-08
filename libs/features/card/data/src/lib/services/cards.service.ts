import { Injectable } from '@angular/core';
import { isCardDone, isCardPendingOrRejected } from '@card-triage/features/card/utils';
import { Cards, CardStatusChange } from '@card-triage/interfaces';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CardsActions } from '../state/actions/cards.actions';
import { CardsState } from '../state/reducers/cards.reducer';

import { selectCards } from '../state/selectors/cards.selectors';

@Injectable()
export class CardsService {
    private readonly _cards: Observable<Cards> = this._cardsStore.pipe(select(selectCards));

    constructor(private readonly _cardsStore: Store<CardsState>) {}

    public fetchCards(): void {
        this._cardsStore.dispatch(CardsActions.fetchCards());
    }

    public fetchFilteredCards(query: string): void {
        this._cardsStore.dispatch(CardsActions.fetchFilteredCards({ query }));
    }

    public getCardsDone(): Observable<Cards> {
        return this._cards.pipe(map((cards: Cards) => cards.filter(isCardDone)));
    }

    public getCardsPendingOrRejected(): Observable<Cards> {
        return this._cards.pipe(map((cards: Cards) => cards.filter(isCardPendingOrRejected)));
    }

    public changeCardStatus(cardStatusChange: CardStatusChange): void {
        this._cardsStore.dispatch(CardsActions.changeCardStatus(cardStatusChange));
    }
}
