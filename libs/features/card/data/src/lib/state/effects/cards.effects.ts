import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Card, Cards, CardStatusChange } from '@card-triage/interfaces';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { CardsRepository } from '../../repositories/cards.repository';
import { CardsActions } from '../actions/cards.actions';

@Injectable()
export class CardsEffects {
    // tslint:disable-next-line:typedef
    public readonly fetchCards$ = createEffect(() =>
        this._actions$.pipe(
            ofType(CardsActions.fetchCards),
            mergeMap(() =>
                this._cardsRepository.fetchCards().pipe(
                    map((cards: Cards) => CardsActions.fetchCardsSuccess({ cards })),
                    catchError(({ message }: HttpErrorResponse) => of(CardsActions.fetchCardsError({ error: message })))
                )
            )
        )
    );

    // tslint:disable-next-line:typedef
    public readonly fetchFilteredCards$ = createEffect(() =>
        this._actions$.pipe(
            ofType(CardsActions.fetchFilteredCards),
            mergeMap(({ query }: { query: string }) =>
                this._cardsRepository.fetchFilteredCards(query).pipe(
                    map((cards: Cards) => CardsActions.fetchFilteredCardsSuccess({ cards })),
                    catchError(({ message }: HttpErrorResponse) => of(CardsActions.fetchFilteredCardsError({ error: message })))
                )
            )
        )
    );

    // tslint:disable-next-line:typedef
    public readonly changeCardStatus$ = createEffect(() =>
        this._actions$.pipe(
            ofType(CardsActions.changeCardStatus),
            mergeMap((cardStatusChange: CardStatusChange) =>
                this._cardsRepository.changeCardStatus(cardStatusChange).pipe(
                    map((card: Card) => CardsActions.changeCardStatusSuccess({
                        update: { id: card.id, changes: card }
                    })),
                    catchError(({ message }: HttpErrorResponse) => of(CardsActions.changeCardStatusError({ error: message })))
                )
            )
        )
    );

    constructor(
        private readonly _router: Router,
        private readonly _actions$: Actions,
        private readonly _cardsRepository: CardsRepository
    ) {
    }
}
